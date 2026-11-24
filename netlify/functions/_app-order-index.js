const { createHmac, timingSafeEqual } = require("node:crypto");
const { getStore } = require("@netlify/blobs");

const SECRET = process.env.AUTH_SECRET || process.env.BREVO_API_KEY || "";
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ORDER = /^SHD-\d{6}$/;
const AGE_LIMIT = 400 * 864e5;
const normaliseEmail = (value) => typeof value === "string" ? value.trim().toLowerCase() : "";

function validEmail(email) {
  return email.length <= 254 && EMAIL.test(email);
}

function verifiedEmail(member) {
  const email = normaliseEmail(member?.email);
  const token = typeof member?.token === "string" && member.token.match(/^(\d{13})\.([a-f0-9]{64})$/);
  if (!SECRET || !validEmail(email) || !token) return null;
  const age = Date.now() - Number(token[1]);
  if (age < 0 || age > AGE_LIMIT) return null;
  const expected = createHmac("sha256", SECRET).update(email + "|" + token[1]).digest();
  return timingSafeEqual(expected, Buffer.from(token[2], "hex")) ? email : null;
}

function prefix(email) {
  return createHmac("sha256", SECRET).update("app-orders|" + email).digest("hex") + "/";
}

function historyStore() {
  return getStore({ name: "app-order-history", consistency: "strong" });
}

function validRecord(order) {
  return ORDER.test(order?.orderNo) && Number.isSafeInteger(order?.placedAt) && order.placedAt > 0 &&
    typeof order?.total === "number" && Number.isFinite(order.total) && order.total >= 0;
}

async function indexPaidOrder(email, order) {
  email = normaliseEmail(email);
  if (!SECRET || !validEmail(email) || !validRecord(order)) return false;
  const key = prefix(email) + String(order.placedAt).padStart(13, "0") + "-" + order.orderNo;
  await historyStore().setJSON(key, {
    orderNo: order.orderNo,
    placedAt: order.placedAt,
    total: order.total,
    currency: /^[a-z]{3}$/i.test(order.currency || "") ? order.currency.toUpperCase() : "AUD",
  });
  return true;
}

async function indexPaidSession(session) {
  if (session?.payment_status !== "paid") return false;
  return indexPaidOrder(session.customer_details?.email || session.customer_email, {
    orderNo: session.metadata?.order_no || session.client_reference_id,
    placedAt: Number(session.created) * 1000,
    total: typeof session.amount_total === "number" ? session.amount_total / 100 : NaN,
    currency: session.currency,
  });
}

async function listOrders(email) {
  const store = historyStore();
  const { blobs } = await store.list({ prefix: prefix(email) });
  const recent = blobs.map(blob => blob.key).sort().reverse().slice(0, 30);
  const records = await Promise.all(recent.map(key => store.get(key, { type: "json" })));
  return records.filter(validRecord);
}

module.exports = { indexPaidOrder, indexPaidSession, listOrders, normaliseEmail, verifiedEmail };
