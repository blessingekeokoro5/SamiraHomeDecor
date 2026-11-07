/* ============================================================
   Samira Home Decor — shared order-tracking helpers
   ------------------------------------------------------------
   Order details (items, address, email) come from Stripe, so a
   paid order can always be looked up by its SHD- number. The
   delivery stage is set by the business in the admin page and
   kept in the Netlify Blobs store "order-status". A paid order
   with no stage saved yet shows as "picking".
   ============================================================ */

const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

// Product names and photos (built from js/data.js on every deploy).
let PRODUCT_INDEX = {};
try { PRODUCT_INDEX = require("../../share-index.json"); } catch (e) { /* not bundled */ }
const SITE_URL = process.env.SITE_URL || "https://samirahomedecor.com.au";
function productInfo(id) {
  const p = PRODUCT_INDEX[id];
  if (!p) return null;
  // Emails get a JPG through Netlify's image CDN, since some mail apps can't show WebP.
  const img = p.i ? (/^https?:/.test(p.i) ? p.i : SITE_URL + "/.netlify/images?url=/" + encodeURIComponent(String(p.i).replace(/^\//, "").split("?")[0]).replace(/%2F/g, "/") + "&fm=jpg&w=600") : "";
  return { id, name: p.n || id, img, price: p.p != null ? Number(p.p) : null };
}
const newToken = () => crypto.randomBytes(18).toString("hex");

// Delivery stages, in order. Customer wording lives in js/order-status.js.
const STAGES = ["placed", "confirmed", "picking", "packed", "shipped", "transit", "arrived", "out", "delivered"];
const AU_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

function openStore() {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  return (siteID && token) ? getStore({ name: "order-status", siteID, token }) : getStore("order-status");
}

let _stripe = null;
function stripe() {
  if (!_stripe) _stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  return _stripe;
}

const validOrderNo = (s) => /^SHD-\d{6}$/.test(String(s || ""));

// State from an Australian postcode (for the shipping address).
function stateFromPostcode(pc) {
  const n = parseInt(String(pc || "").replace(/\D/g, ""), 10);
  if (isNaN(n)) return "";
  if ((n >= 200 && n <= 299) || (n >= 2600 && n <= 2618) || (n >= 2900 && n <= 2920)) return "ACT";
  if (n >= 800 && n <= 999) return "NT";
  if (n >= 1000 && n <= 2999) return "NSW";
  if ((n >= 3000 && n <= 3999) || (n >= 8000 && n <= 8999)) return "VIC";
  if ((n >= 4000 && n <= 4999) || (n >= 9000 && n <= 9999)) return "QLD";
  if (n >= 5000 && n <= 5999) return "SA";
  if (n >= 6000 && n <= 6999) return "WA";
  if (n >= 7000 && n <= 7999) return "TAS";
  return "";
}

// Shape a paid Checkout Session into the order fields we use.
function fromSession(s) {
  const ship = (s.collected_information && s.collected_information.shipping_details) || s.shipping_details || {};
  const addr = ship.address || {};
  const cd = s.customer_details || {};
  const country = addr.country || (cd.address && cd.address.country) || "AU";
  const state = country === "AU" ? (addr.state || stateFromPostcode(addr.postal_code)) : "";
  return {
    orderNo: (s.metadata && s.metadata.order_no) || s.client_reference_id || "",
    sessionId: s.id,
    placedAt: (s.created || 0) * 1000,
    name: ship.name || cd.name || "",
    email: (cd.email || s.customer_email || "").toLowerCase(),
    phone: cd.phone || "",
    suburb: addr.city || "",
    postcode: addr.postal_code || "",
    state,
    country,
    total: (s.amount_total || 0) / 100,
  };
}

// Find a paid order by its SHD- number. Returns null when there is none.
async function findOrder(orderNo) {
  if (!validOrderNo(orderNo)) return null;
  const st = stripe();
  let pi = null;
  try {
    const r = await st.paymentIntents.search({ query: `metadata['order_no']:'${orderNo}' AND status:'succeeded'`, limit: 1 });
    pi = r.data && r.data[0];
  } catch (e) { /* search can lag a minute behind new payments; fall back below */ }
  let session = null;
  if (pi) {
    const list = await st.checkout.sessions.list({ payment_intent: pi.id, limit: 1 });
    session = list.data && list.data[0];
  }
  if (!session) {
    // Fallback: scan the most recent sessions (covers a just-placed order).
    const list = await st.checkout.sessions.list({ limit: 100 });
    session = (list.data || []).find((s) => s.payment_status === "paid" &&
      ((s.metadata && s.metadata.order_no) === orderNo || s.client_reference_id === orderNo)) || null;
  }
  if (!session || session.payment_status !== "paid") return null;
  return fromSession(session);
}

async function itemsFor(sessionId) {
  try {
    const li = await stripe().checkout.sessions.listLineItems(sessionId, { limit: 50, expand: ["data.price.product"] });
    return (li.data || []).map((x) => {
      const prod = x.price && x.price.product && typeof x.price.product === "object" ? x.price.product : null;
      const sku = (prod && prod.metadata && prod.metadata.sku) || "";
      const info = sku ? productInfo(sku) : null;
      return { name: (prod && prod.name) || x.description || "Item", qty: x.quantity || 1, sku, img: info ? info.img : "" };
    });
  } catch (e) { return []; }
}

async function loadStatus(store, orderNo) {
  let rec = null;
  try { rec = await store.get(orderNo, { type: "json" }); } catch (e) {}
  return rec || null;
}

// The status a customer sees: saved stage, or "picking" for a new paid order.
function publicStatus(order, rec) {
  const stage = rec && STAGES.includes(rec.stage) ? rec.stage : "picking";
  return {
    stage,
    location: (rec && rec.location) || order.state || "",
    courier: (rec && rec.courier) || "",
    trackingNo: (rec && rec.trackingNo) || "",
    note: (rec && rec.note) || "",
    history: (rec && Array.isArray(rec.history)) ? rec.history : [],
    updatedAt: (rec && rec.updatedAt) || order.placedAt,
  };
}

module.exports = { productInfo, newToken, SITE_URL, STAGES, AU_STATES, openStore, stripe, validOrderNo, stateFromPostcode, fromSession, findOrder, itemsFor, loadStatus, publicStatus };
