const { mutate } = require("./_rewards-ledger");
const { quote, policy } = require("./_rewards-policy");

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
  state.redemptions[id] = { status: "held", allocations };
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
  let room = Math.max(0, policy.cap - heldBalance(state, now) -
    state.lots.reduce((sum, lot) => lot.expires > now ? sum + lot.remaining : sum, 0));
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

module.exports = { reserve, settle, heldBalance, createRedemption, settleRedemption };
