/* ============================================================
   Samira Home Decor — customer order tracking
   ------------------------------------------------------------
   POST /.netlify/functions/order-track
   Body: { orderNo: "SHD-123456", contact: "email or phone used at checkout" }
   → { ok:true, order:{ orderNo, placedAt, state, suburb, items }, status:{ stage, location, courier, trackingNo, note, history } }

   The order and its contact details come from Stripe; the delivery
   stage is whatever the business last set in the admin page.
   Both the order number AND the matching email/phone are required,
   so nobody can look up someone else's order.
   ============================================================ */

const { openStore, findOrder, itemsFor, loadStatus, publicStatus, validOrderNo } = require("./_orders");

const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Cache-Control": "no-store",
};
const json = (code, obj) => ({ statusCode: code, headers: CORS, body: JSON.stringify(obj) });

const digits = (s) => String(s || "").replace(/\D/g, "");
// Compare phones on their last 9 digits so 0431… and +61431… match.
const samePhone = (a, b) => { const x = digits(a).slice(-9), y = digits(b).slice(-9); return x.length === 9 && x === y; };

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Method Not Allowed" });
  if (!process.env.STRIPE_SECRET_KEY) return json(503, { error: "Tracking isn't available right now. Please contact us." });

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) {}
  const orderNo = String(body.orderNo || "").trim().toUpperCase();
  const contact = String(body.contact || "").trim();
  if (!validOrderNo(orderNo)) return json(400, { error: "Please enter your order number, e.g. SHD-123456." });
  if (!contact) return json(400, { error: "Please enter the email or phone you used at checkout." });

  try {
    const order = await findOrder(orderNo);
    const matches = order && ((contact.includes("@") && contact.toLowerCase() === order.email) || samePhone(contact, order.phone));
    if (!matches) return json(404, { error: "We couldn't find an order with those details. Check your order number and the email or phone you used at checkout." });

    let rec = null;
    try { rec = await loadStatus(openStore(), orderNo); } catch (e) { /* no saved stage yet */ }
    const items = await itemsFor(order.sessionId);
    return json(200, {
      ok: true,
      order: { orderNo, placedAt: order.placedAt, state: order.state, suburb: order.suburb, country: order.country, items },
      status: publicStatus(order, rec),
    });
  } catch (e) {
    console.error("order-track:", e.message);
    return json(500, { error: "Tracking isn't available right now. Please try again shortly." });
  }
};
