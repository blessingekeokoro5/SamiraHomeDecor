const { createHmac, timingSafeEqual } = require("node:crypto");
const { getStore } = require("@netlify/blobs");
const { products } = require("./_catalogue.json");

const SECRET = process.env.AUTH_SECRET || process.env.BREVO_API_KEY || "";
const SESSION_AGE_MS = 400 * 864e5; // Same lifetime as store member checkout.
const LIMIT = 100;
const ID = /^[a-z0-9_-]{1,64}$/i;

function json(statusCode, value) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(value),
  };
}

function scopeFor(member) {
  const email = typeof member?.email === "string" ? member.email.trim().toLowerCase() : "";
  const token = typeof member?.token === "string" ? member.token.match(/^(\d{13})\.([a-f0-9]{64})$/) : null;
  if (!SECRET || email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !token) return null;
  const age = Date.now() - Number(token[1]);
  if (age < 0 || age > SESSION_AGE_MS) return null;
  const signature = createHmac("sha256", SECRET).update(email + "|" + token[1]).digest();
  if (!timingSafeEqual(signature, Buffer.from(token[2], "hex"))) return null;
  return createHmac("sha256", SECRET).update("app-wishlist|" + email).digest("hex") + "/";
}

async function listItems(store, prefix) {
  const { blobs } = await store.list({ prefix });
  return blobs.map(blob => blob.key.slice(prefix.length)).filter(id => ID.test(id));
}

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") return json(200, {});
  if (event.httpMethod !== "POST") return json(405, { error: "method_not_allowed" });
  if (!SECRET) return json(503, { error: "wishlist_unavailable" });
  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch { return json(400, { error: "bad_request" }); }
  const prefix = scopeFor(body?.member);
  if (!prefix) return json(401, { error: "sign_in_required" });
  const { action, id } = body;
  if (!["read", "add", "remove"].includes(action) ||
      (action !== "read" && (typeof id !== "string" || !ID.test(id))) ||
      (action === "add" && !Object.hasOwn(products, id))) return json(400, { error: "bad_request" });

  try {
    const store = getStore({ name: "app-wishlists", consistency: "strong" });
    if (action === "add") {
      const saved = await listItems(store, prefix);
      if (!saved.includes(id)) {
        if (saved.length >= LIMIT) return json(409, { error: "wishlist_full" });
        await store.setJSON(prefix + id, true);
      }
    }
    if (action === "remove") await store.delete(prefix + id);
    return json(200, { ok: true, ids: await listItems(store, prefix) });
  } catch {
    return json(503, { error: "wishlist_unavailable" });
  }
};
