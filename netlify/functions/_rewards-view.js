const { heldBalance } = require("./_rewards-redemption");
const { balance } = require("./_rewards-policy");

function rewardsView(state, now = Date.now()) {
  return {
    balanceCents: balance(state, now),
    pendingCents: heldBalance(state, now),
    currency: "AUD",
    credits: state.lots.filter(lot => lot.remaining > 0 && lot.expires > now)
      .sort((a, b) => a.expires - b.expires)
      .map(lot => ({ remainingCents: lot.remaining, expires: lot.expires })),
    history: state.events.slice(-50).reverse().map(event => event.split(":")[0]),
  };
}

module.exports = { rewardsView };
