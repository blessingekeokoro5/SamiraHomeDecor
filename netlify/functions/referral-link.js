/* ============================================================
   Samira Home Decor — get a shopper's personal referral code
   ------------------------------------------------------------
   POST { email, name } → { code }
   The same email always gets the same code, on any device.
   ============================================================ */

const { openStore, codeFor } = require("./_referrals");

const json = (code, obj) => ({ statusCode: code, headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) });
const isEmail = (s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(s || "").trim());
const clean = (s, max) => String(s == null ? "" : s).trim().slice(0, max);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "Method Not Allowed" });
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "bad_request" }); }

  const email = clean(body.email, 200).toLowerCase();
  if (!isEmail(email)) return json(400, { error: "invalid_email" });
  const name = clean(body.name, 100);
  const code = codeFor(email);

  try {
    const store = openStore();
    const existing = await store.get(code, { type: "json" });
    if (!existing) await store.setJSON(code, { email, name, created: new Date().toISOString() });
    else if (name && !existing.name) await store.setJSON(code, Object.assign(existing, { name }));
  } catch (err) {
    console.error("Referral save failed:", err.message);
    return json(503, { error: "unavailable" });
  }
  return json(200, { code });
};
