const { createHmac } = require("node:crypto");
const { getStore } = require("@netlify/blobs");
const { normaliseEmail, verifiedEmail } = require("./_app-order-index");

const SECRET = process.env.AUTH_SECRET || process.env.BREVO_API_KEY || "";
const HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const reply = (statusCode, value) => ({ statusCode, headers: HEADERS, body: JSON.stringify(value) });
const store = () => getStore({ name: "app-customer-settings", consistency: "strong" });
const accountKey = email => createHmac("sha256", SECRET).update("app-settings|" + email).digest("hex");

function cleanPlan(plan) {
  if (!plan || typeof plan !== "object" || typeof plan.id !== "string" || !/^[a-z\d-]{1,48}$/i.test(plan.id) ||
      typeof plan.name !== "string" || !plan.name.trim() || plan.name.length > 60 ||
      !Array.isArray(plan.productIds) || plan.productIds.length > 12 ||
      !plan.productIds.every(id => typeof id === "string" && /^[a-z\d_-]{1,64}$/i.test(id))) return null;
  for (const field of ["mode", "room", "style", "notes"]) {
    if (typeof plan[field] !== "string" || plan[field].length > (field === "notes" ? 2000 : 64)) return null;
  }
  const quantities = Object.fromEntries(plan.productIds.map(id => {
    const quantity = plan.quantities?.[id];
    return [id, Number.isInteger(quantity) && quantity >= 1 && quantity <= 99 ? quantity : 1];
  }));
  const budgetCents = Number.isSafeInteger(plan.budgetCents) && plan.budgetCents >= 0 && plan.budgetCents <= 999999999
    ? plan.budgetCents : undefined;
  const { id, name, mode, room, style, notes } = plan;
  return { id, name, mode, room, style, notes, quantities, budgetCents, productIds: [...new Set(plan.productIds)] };
}

async function alertsEnabled(email) {
  if (!SECRET || !email) return false;
  const saved = await store().get(accountKey(normaliseEmail(email)) + "/alerts", { type: "json" });
  return saved?.enabled === true;
}

exports.alertsEnabled = alertsEnabled;
exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") return reply(200, {});
  if (event.httpMethod !== "POST") return reply(405, { error: "Method not allowed." });
  if (event.isBase64Encoded || String(event.body || "").length > 16000) return reply(400, { error: "Request is too large." });
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return reply(400, { error: "Invalid request." }); }
  const email = verifiedEmail(body?.member);
  if (!email) return reply(401, { error: "Sign in again to access your account settings." });
  const prefix = accountKey(email);
  const planPrefix = prefix + "/plan/";
  try {
    const blobs = store();
    switch (body.action) {
      case "get-alerts":
        return reply(200, { enabled: await alertsEnabled(email) });
      case "set-alerts":
        if (typeof body.enabled !== "boolean") return reply(400, { error: "Choose an alert preference." });
        await blobs.setJSON(prefix + "/alerts", { enabled: body.enabled });
        return reply(200, { enabled: body.enabled });
      case "list-plans": {
        const page = await blobs.list({ prefix: planPrefix });
        const plans = await Promise.all(page.blobs.slice(0, 20).map(blob => blobs.get(blob.key, { type: "json" })));
        return reply(200, { plans: plans.map(cleanPlan).filter(Boolean) });
      }
      case "save-plan": {
        const plan = cleanPlan(body.plan);
        if (!plan) return reply(400, { error: "This plan could not be saved. Check its name and notes." });
        const key = planPrefix + plan.id;
        if (!(await blobs.getMetadata(key))) {
          const page = await blobs.list({ prefix: planPrefix });
          if (page.blobs.length >= 20) return reply(409, { error: "Your account can hold 20 room plans. Remove one before saving another." });
        }
        await blobs.setJSON(key, plan);
        return reply(200, { ok: true });
      }
      case "delete-plan": {
        if (typeof body.id !== "string" || !/^[a-z\d-]{1,48}$/i.test(body.id)) return reply(400, { error: "Invalid room plan." });
        await blobs.delete(planPrefix + body.id);
        return reply(200, { ok: true });
      }
      default:
        return reply(400, { error: "Unknown account action." });
    }
  } catch {
    return reply(503, { error: "Account settings are temporarily unavailable. Try again." });
  }
};
