const { createHash, timingSafeEqual } = require("node:crypto");
const { checkConnection } = require("./_rewards-firestore");
const { read, mutate, awardVerified } = require("./_rewards-ledger");
const { rewardsView } = require("./_rewards-view");
const { reconcileRedemptions } = require("./_rewards-redemption");
const { notifyCredit } = require("./_rewards-notify");

function json(statusCode, body) {
  return { statusCode, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(body) };
}

exports.handler = async event => {
  if (event.httpMethod !== "POST") return json(405, { error: "method_not_allowed" });
  const token = process.env.BOOKING_ADMIN_TOKEN;
  if (!token) return json(503, { error: "not_configured" });
  const digest = value => createHash("sha256").update(value).digest();
  if (!timingSafeEqual(digest(token), digest(event.headers?.["x-admin-token"] || ""))) return json(401, { error: "unauthorized" });
  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch { return json(400, { error: "invalid_json" }); }
  try {
    if (body?.action === "health") {
      await checkConnection();
      const stripeKey = process.env.STRIPE_SECRET_KEY || "";
      const stripeMode = /^(?:sk|rk)_test_/.test(stripeKey) ? "test"
        : /^(?:sk|rk)_live_/.test(stripeKey) ? "live" : "unconfigured";
      return json(200, { connected: true, stripeMode });
    }
    if (process.env.REWARDS_ENABLED !== "true") return json(404, { error: "rewards_disabled" });
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { error: "invalid_email" });
    if (body.action === "reconcile") {
      if (!process.env.STRIPE_SECRET_KEY) return json(503, { error: "stripe_not_configured" });
      const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
      return json(200, rewardsView(await reconcileRedemptions(stripe, email)));
    }
    if (body.action === "birthday") {
      const now = Date.now();
      const today = new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Australia/Adelaide", year: "numeric", month: "2-digit", day: "2-digit",
      }).format(now);
      const birthday = body.birthday;
      if (body.verified !== true || !/^\d{2}-\d{2}$/.test(birthday) || birthday !== today.slice(5)) {
        return json(400, { error: "Confirm the verified birthday matches today's Adelaide date." });
      }
      await mutate(email, state => {
        if (state.birthday && state.birthday !== birthday) throw new Error("birthday_mismatch");
        state.birthday = birthday;
      });
      const year = today.slice(0, 4);
      await awardVerified(email, { kind: "birthday", key: year, now, verified: true });
      const state = await read(email);
      await notifyCredit(email, state.lots.find(lot => lot.id === "birthday:" + year));
    }
    return json(200, rewardsView(await read(email)));
  } catch (error) {
    if (error.message === "birthday_mismatch") return json(409, { error: "The verified birthday differs from the birthday on record." });
    console.error("Rewards admin:", error.message);
    return json(503, { error: "rewards_unavailable" });
  }
};
