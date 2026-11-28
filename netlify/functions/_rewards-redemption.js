const { read, mutate } = require("./_rewards-ledger");
const { balance, quote, policy } = require("./_rewards-policy");

function reserve(state, id, eligibility) {
  const amount = quote(state, eligibility);
  if (!amount) return 0;
  state.redemptions ||= {};
  if (state.redemptions[id]) throw new Error("duplicate_redemption");
  const allocations = [];
  let remaining = amount;
  const lots = state.lots.filter(lot => lot.expires > eligibility.now && lot.remaining > 0)
    .sort((a, b) => a.expires - b.expires);
  for (const lot of lots) {
    const used = Math.min(remaining, lot.remaining);
    lot.remaining -= used;
    allocations.push({ id: lot.id, amount: used });
    remaining -= used;
    if (!remaining) break;
  }
  state.redemptions[id] = { status: "held", allocations, createdAt: eligibility.now };
  return amount;
}

function heldBalance(state, now) {
  let total = 0;
  for (const { status, allocations } of Object.values(state.redemptions || {})) {
    if (status !== "held") continue;
    for (const allocation of allocations) {
      const lot = state.lots.find(lot => lot.id === allocation.id);
      if (lot?.expires > now && !lot.revoked) total += allocation.amount;
    }
  }
  return total;
}

function settle(state, id, action, now) {
  const redemption = state.redemptions?.[id];
  if (!redemption) return;
  if (action === "paid") {
    if (redemption.status === "held") {
      redemption.status = "paid";
      state.events.push("redeem:" + id);
    }
    return;
  }
  if (action === "expired" && redemption.status !== "held") return;
  if (action === "refund" && !["held", "paid"].includes(redemption.status)) return;
  delete state.redemptions[id];
  let room = Math.max(0, policy.cap - heldBalance(state, now) - balance(state, now));
  for (const allocation of redemption.allocations) {
    const lot = state.lots.find(lot => lot.id === allocation.id);
    if (lot?.expires > now && !lot.revoked) {
      const restored = Math.min(room, allocation.amount);
      lot.remaining += restored;
      room -= restored;
    }
  }
  if (action === "refund") state.events.push("restore:" + id);
}

async function createRedemption(stripe, email, id, eligibility) {
  const amount = await mutate(email, state => reserve(state, id, eligibility));
  if (!amount) return null;
  try {
    return await stripe.coupons.create({
      amount_off: amount, currency: "aud", duration: "once", max_redemptions: 1,
      redeem_by: Math.floor(eligibility.now / 1000) + 3600,
      name: "Samira Rewards store credit",
    }, { idempotencyKey: "samira-rewards-coupon-" + id });
  } catch (error) {
    await settleRedemption(email, id, "expired");
    throw error;
  }
}

function settleRedemption(email, id, action) {
  return mutate(email, state => settle(state, id, action, Date.now()));
}

async function reconcileRedemptions(stripe, email, now = Date.now()) {
  const state = await read(email);
  const pending = Object.entries(state.redemptions || {}).filter(([, item]) =>
    item.status === "held" && Number.isSafeInteger(item.createdAt) && item.createdAt + 3660000 <= now);
  for (const [id, item] of pending.slice(0, 5)) {
    const createdAt = Math.floor(item.createdAt / 1000);
    const sessions = stripe.checkout.sessions.list({
      created: { gte: createdAt - 120, lte: createdAt + 3600 }, limit: 100,
    });
    let match;
    for await (const session of sessions) {
      if (session.metadata?.rewards_redemption === id) {
        match = session;
        break;
      }
    }
    // A successful Stripe listing confirms there is no session for an ambiguous
    // creation failure. Open sessions and processing payments keep their holds.
    if (match?.payment_status === "paid") await settleRedemption(email, id, "paid");
    else if (!match || match.status === "expired") await settleRedemption(email, id, "expired");
  }
  return read(email);
}

module.exports = { reserve, settle, heldBalance, createRedemption, settleRedemption, reconcileRedemptions };
