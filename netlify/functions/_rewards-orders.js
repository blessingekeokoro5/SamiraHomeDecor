const { mutate } = require("./_rewards-ledger");
const { notifyCredit } = require("./_rewards-notify");
const { heldBalance, settle } = require("./_rewards-redemption");
const { award } = require("./_rewards-policy");

function memberOrder(session) {
  const metadata = session.metadata || {};
  const email = session.customer_details?.email?.trim().toLowerCase();
  const subtotal = Number(metadata.rewards_subtotal);
  if (
    metadata.rewards_version !== "1" || !email ||
    email !== session.customer_email?.trim().toLowerCase() ||
    session.payment_status !== "paid" || session.currency !== "aud" ||
    !Number.isSafeInteger(subtotal) || subtotal <= 10000
  ) return null;
  return { email, subtotal, id: session.id };
}

function recordDelivery(state, order, now) {
  if (state.events.includes("refund:" + order.id)) return 0;
  return award(state, { kind: "order", key: order.id, subtotal: order.subtotal, now, held: heldBalance(state, now), verified: true });
}

function recordRefund(state, order) {
  const event = "refund:" + order.id;
  if (state.events.includes(event)) return;
  state.events.push(event);
  const lot = state.lots.find(lot => lot.id === "order:" + order.id);
  if (lot) {
    lot.remaining = 0;
    lot.revoked = true;
  }
}

async function creditDeliveredOrder(stripe, sessionId) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["payment_intent.latest_charge"] });
  const order = memberOrder(session);
  if (!order) return 0;
  const charge = session.payment_intent?.latest_charge;
  if (!charge || typeof charge === "string") throw new Error("rewards_payment_unavailable");
  if (charge.amount_refunded > 0) return 0;
  const lot = await mutate(order.email, state => {
    recordDelivery(state, order, Date.now());
    return state.lots.find(lot => lot.id === "order:" + order.id);
  });
  await notifyCredit(order.email, lot);
}

async function reverseRefundedOrder(stripe, charge) {
  if (!charge.payment_intent || !(charge.amount_refunded > 0)) return;
  const sessions = await stripe.checkout.sessions.list({ payment_intent: charge.payment_intent, limit: 1 });
  if (!sessions.data.length) return;
  const order = memberOrder(sessions.data[0]);
  if (order) await mutate(order.email, state => {
    if (charge.amount_refunded >= charge.amount && sessions.data[0].metadata.rewards_redemption) {
      settle(state, sessions.data[0].metadata.rewards_redemption, "refund", Date.now());
    }
    recordRefund(state, order);
  });
}

module.exports = { memberOrder, recordDelivery, recordRefund, creditDeliveredOrder, reverseRefundedOrder };
