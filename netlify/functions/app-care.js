const { createHmac, createHash, timingSafeEqual } = require("node:crypto");
const { appStore, connectAppBlobs } = require("./_app-blobs");
const { verifiedEmail } = require("./_app-order-index");
const { products } = require("./_catalogue.json");
const { handler: emailTicket } = require("./support-ticket-email");

const INBOX = "hello@samirahomedecor.com.au";
const SECRET = process.env.AUTH_SECRET || process.env.BREVO_API_KEY || "";
const HEADERS = {
  "Content-Type": "application/json", "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const reply = (statusCode, data) => ({ statusCode, headers: HEADERS, body: JSON.stringify(data) });
const careStore = () => appStore("app-customer-care");
const reviewsStore = () => appStore("app-product-reviews");
const bounded = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";
const productId = id => typeof id === "string" && /^[a-z\d_-]{1,64}$/i.test(id) && Object.hasOwn(products, id);
const refMatch = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
const safeId = /^[a-f\d]{64}$/;
const account = email => createHmac("sha256", SECRET).update("app-care|" + email).digest("hex");
function photoType(value) {
  if (typeof value !== "string" || value.length > 780000 || !/^[A-Za-z\d+/]+={0,2}$/.test(value)) return null;
  const signature = Buffer.from(value.slice(0, 16), "base64");
  if (signature[0] === 255 && signature[1] === 216 && signature[2] === 255) return "image/jpeg";
  if (signature.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return "image/png";
  return null;
}
const ticketView = ({ ref, topic, orderNo, message, createdAt, status, reply: ownerReply, notified }) =>
  ({ ref, topic, orderNo, message, createdAt, status, reply: ownerReply, notified });
const reviewView = ({ product, id, displayName, rating, message, createdAt, photo }) =>
  ({ product, id, displayName, rating, message, createdAt, hasPhoto: Boolean(photo) });
const compareNewest = (a, b) => b.createdAt - a.createdAt;
async function recent(store, prefix, count, reverse = false) {
  const page = await store.list({ prefix });
  const keys = page.blobs.map(blob => blob.key).sort();
  if (reverse) keys.reverse();
  return (await Promise.all(keys.slice(0, count).map(key => store.get(key, { type: "json" })))).filter(Boolean);
}

async function support(body, email) {
  const pending = careStore();
  const prefix = "tickets/" + account(email) + "/";
  if (body.action === "list-tickets") {
    return reply(200, { tickets: (await recent(pending, prefix, 30, true)).sort(compareNewest).map(ticketView) });
  }
  const ref = typeof body.ref === "string" && refMatch.test(body.ref) ? body.ref.toLowerCase() : "";
  const message = bounded(body.message, 1800);
  const name = bounded(body.name, 100);
  const orderNo = bounded(body.orderNo, 10).toUpperCase();
  const topic = ["General support", "Delivery", "Return request"].find(value => value === body.topic);
  if (!ref || !topic || name.length < 2 || message.length < 10 || (orderNo && !/^SHD-\d{6}$/.test(orderNo)) ||
      (topic === "Return request" && !orderNo)) return reply(400, { error: "Enter your name, message and order number when required." });

  const existing = await recent(pending, prefix, 30, true);
  const old = existing.find(ticket => ticket.ref === ref);
  if (old) return reply(200, { ticket: ticketView(old) });
  const today = new Date().toISOString().slice(0, 10);
  const unique = prefix + today + "/" + ref;
  const recentCount = existing.filter(ticket => new Date(ticket.createdAt).toISOString().startsWith(today)).length;
  if (recentCount >= 4) return reply(429, { error: "Please follow your existing tickets or email " + INBOX + "." });
  const ticket = { ref, topic, orderNo, name, email, message, status: "Received", createdAt: Date.now(), notified: false };
  const claim = await pending.setJSON(unique, ticket, { onlyIfNew: true });
  if (!claim.modified) {
    const stored = await pending.get(unique, { type: "json" });
    return stored ? reply(200, { ticket: ticketView(stored) }) : reply(409, { error: "Try loading your support requests." });
  }
  try {
    const notice = await emailTicket({ httpMethod: "POST", body: JSON.stringify({
      reference: ref, name, email, message: topic + (orderNo ? " · " + orderNo : "") + "\n\n" + message,
    }) });
    if (notice.statusCode === 200 && JSON.parse(notice.body).ok === true) ticket.notified = true;
  } catch { /* The ticket is already recorded. */ }
  if (ticket.notified) {
    const meta = await pending.getMetadata(unique);
    const latest = await pending.get(unique, { type: "json" });
    if (meta && latest?.status === "Received") await pending.setJSON(unique, { ...latest, notified: true }, { onlyIfMatch: meta.etag });
  }
  return reply(200, { ticket: ticketView(ticket) });
}

async function submitReview(body, email) {
  const product = body.product;
  const message = bounded(body.message, 3000);
  const displayName = bounded(body.displayName, 40);
  const rating = body.rating;
  const mime = body.photo ? photoType(body.photo) : null;
  if (!productId(product) || !Number.isInteger(rating) || rating < 1 || rating > 5 || displayName.length < 2 ||
      message.length < 10 || body.consent !== true || (body.photo && !mime)) {
    return reply(400, { error: "Enter a rating, display name and review, and confirm publication consent. Photos must be small JPEGs or PNGs." });
  }
  const id = createHmac("sha256", SECRET).update("review|" + email + "|" + product).digest("hex");
  const review = { product, id, displayName, rating, message, createdAt: Date.now(), photo: mime ? body.photo : null };
  const store = reviewsStore();
  if (await store.getMetadata("approved/" + product + "/" + id)) return reply(409, { error: "You already have an approved review for this product." });
  const result = await store.setJSON("pending/" + id, review, { onlyIfNew: true });
  if (!result.modified) return reply(409, { error: "Your review for this product is already awaiting approval." });
  return reply(200, { ok: true });
}

function isAdmin(token) {
  const expected = process.env.BOOKING_ADMIN_TOKEN;
  if (!expected || typeof token !== "string") return false;
  const hash = value => createHash("sha256").update(value).digest();
  return timingSafeEqual(hash(token), hash(expected));
}
async function admin(body) {
  if (!isAdmin(body.token)) return reply(401, { error: "Enter your existing owner admin access code." });
  if (body.action === "admin-tickets") {
    const store = careStore();
    const { blobs } = await store.list({ prefix: "tickets/" });
    const keys = blobs.map(blob => blob.key).sort((a, b) => b.split("/")[2].localeCompare(a.split("/")[2])).slice(0, 50);
    const tickets = await Promise.all(keys.map(async key => ({ key, ticket: await store.get(key, { type: "json" }) })));
    return reply(200, { tickets: tickets.filter(item => item.ticket).map(({ key, ticket }) => ({ key, ...ticket })) });
  }
  if (body.action === "admin-update-ticket") {
    if (typeof body.key !== "string" || !/^tickets\/[a-f\d]{64}\/\d{4}-\d{2}-\d{2}\/[a-f\d-]{36}$/.test(body.key) ||
        !["Received", "In progress", "Resolved"].includes(body.status)) return reply(400, { error: "Invalid ticket update." });
    const store = careStore();
    const current = await store.getWithMetadata(body.key, { type: "json" });
    if (!current?.data) return reply(404, { error: "Ticket not found." });
    const saved = await store.setJSON(body.key, { ...current.data, status: body.status, reply: bounded(body.reply, 2000) },
      { onlyIfMatch: current.etag });
    return saved.modified ? reply(200, { ok: true }) : reply(409, { error: "Ticket changed. Reload it and try again." });
  }
  const store = reviewsStore();
  if (body.action === "admin-reviews") {
    const page = await store.list({ prefix: "pending/" });
    return reply(200, { ids: page.blobs.slice(0, 40).map(blob => blob.key.split("/")[1]) });
  }
  if (typeof body.id !== "string" || !safeId.test(body.id)) return reply(400, { error: "Invalid review." });
  const key = "pending/" + body.id;
  const review = await store.get(key, { type: "json" });
  if (!review) return reply(404, { error: "Review no longer pending." });
  if (body.action === "admin-review") return reply(200, { review });
  if (body.action === "admin-approve-review") {
    await store.setJSON("approved/" + review.product + "/" + review.id, review);
  } else if (body.action !== "admin-reject-review") {
    return reply(400, { error: "Unknown review action." });
  }
  await store.delete(key);
  return reply(200, { ok: true });
}

exports.handler = async event => {
  const method = event.httpMethod;
  if (method === "OPTIONS") return reply(200, {});
  try {
    connectAppBlobs(event);
    if (method === "GET") {
      const { product, photo } = event.queryStringParameters || {};
      if (!productId(product)) return reply(404, { error: "Product not found." });
      const prefix = "approved/" + product + "/";
      const store = reviewsStore();
      if (photo) {
        if (!safeId.test(photo)) return reply(404, { error: "Photo not found." });
        const review = await store.get(prefix + photo, { type: "json" });
        const mime = photoType(review?.photo);
        if (!mime) return reply(404, { error: "Photo not found." });
        return { statusCode: 200, headers: { "Content-Type": mime, "X-Content-Type-Options": "nosniff", "Cache-Control": "public, max-age=300" },
          isBase64Encoded: true, body: review.photo };
      }
      return reply(200, { reviews: (await recent(store, prefix, 20)).sort(compareNewest).map(reviewView) });
    }
    if (method !== "POST") return reply(405, { error: "Method not allowed." });
    if (event.isBase64Encoded || String(event.body || "").length > 800000) return reply(413, { error: "Choose a smaller photo." });
    let body;
    try { body = JSON.parse(event.body || "{}"); } catch { return reply(400, { error: "Invalid request." }); }
    if (typeof body?.action !== "string") return reply(400, { error: "Choose a request." });
    if (body.action.startsWith("admin-")) return await admin(body);
    const email = verifiedEmail(body.member);
    if (!email) return reply(401, { error: "Sign in again to continue." });
    if (body.action === "list-tickets" || body.action === "create-ticket") return await support(body, email);
    if (body.action === "submit-review") return await submitReview(body, email);
    return reply(400, { error: "Unknown request." });
  } catch (error) {
    console.error('App care storage failed:', error?.name, error?.status ?? error?.statusCode);
    return reply(503, { error: "Customer care is temporarily unavailable. Try again." });
  }
};
