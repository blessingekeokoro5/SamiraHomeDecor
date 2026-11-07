/* ============================================================
   Samira Home Decor — manage order delivery stages (admin only)
   ------------------------------------------------------------
   Uses the same secret as bookings: BOOKING_ADMIN_TOKEN, sent as
   the header x-admin-token.

   GET  /.netlify/functions/order-admin
        → { ok:true, orders:[ { orderNo, name, email, state, suburb, postcode, total, placedAt, status:{...} } ] }

   POST /.netlify/functions/order-admin
        Body: { orderNo, stage, location, courier, trackingNo, note }
        Saves the stage the customer sees on the tracking page.
        Moving an order to "out" (Out for delivery) emails the
        customer once.

   GET  ?items=SHD-123456   → { ok, items:[{name, qty, sku, img}], offers:[...] }
   POST { action:"offer", orderNo, type:"substitute"|"delay", itemIndex,
          subId?, subQty?, newDate?, oldDate?, replyBy, message?, noExtraCost? }
        Emails the customer a one-click choice and records it on the order.
   ============================================================ */

const { STAGES, AU_STATES, openStore, stripe, fromSession, findOrder, itemsFor, loadStatus, publicStatus, validOrderNo, productInfo, newToken } = require("./_orders");
const { sendCustomerOffer } = require("./_offers");

const TOKEN = process.env.BOOKING_ADMIN_TOKEN || "";
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "hello@samirahomedecor.com.au";
const SENDER_NAME = process.env.SENDER_NAME || "Samira Home Decor";
const SITE_URL = process.env.SITE_URL || "https://samirahomedecor.com.au";

const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, x-admin-token",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Cache-Control": "no-store",
};
const json = (code, obj) => ({ statusCode: code, headers: CORS, body: JSON.stringify(obj) });
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clean = (s, n) => String(s == null ? "" : s).trim().slice(0, n);

async function emailOutForDelivery(order, status) {
  if (!BREVO_API_KEY || !order.email) return false;
  const first = (order.name || "").split(" ")[0] || "there";
  const link = `${SITE_URL}/track.html?order=${encodeURIComponent(order.orderNo)}`;
  const courier = status.courier ? `<p style="margin:6px 0 0">Courier: <strong>${esc(status.courier)}</strong>${status.trackingNo ? ` · Tracking number: <strong>${esc(status.trackingNo)}</strong>` : ""}</p>` : "";
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0B1F3A;padding:8px">
    <div style="text-align:center;padding:18px 0 6px">
      <div style="font-family:Georgia,serif;font-size:26px;font-weight:bold;letter-spacing:3px;color:#14365F">Samira Home Decor</div>
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8a7f77">Beautiful Spaces, Brighter Lives</div>
    </div>
    <div style="background:#14365F;color:#fff;border-radius:14px;padding:24px 26px;text-align:center;border-bottom:4px solid #C6A15B">
      <div style="font-size:22px;font-family:Georgia,serif">Your order is out for delivery 🚚</div>
      <p style="color:#E0C992;margin:8px 0 0">Hi ${esc(first)}, your order <strong>${esc(order.orderNo)}</strong> is with your local driver and should arrive soon.</p>
    </div>
    <div style="padding:18px 4px;font-size:14px;line-height:1.6;color:#5a5049">${courier}
      <p style="margin:10px 0 0">Please make sure someone can receive it, or that there's a safe place to leave it.</p>
    </div>
    <div style="text-align:center;margin:14px 0 22px">
      <a href="${link}" style="background:#C6A15B;color:#fff;text-decoration:none;padding:13px 28px;border-radius:30px;font-weight:bold">Track my order</a>
    </div>
    <p style="font-size:12px;color:#8a7f77;text-align:center">Questions? Reply to this email or contact hello@samirahomedecor.com.au</p>
  </div>`;
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      sender: { email: SENDER_EMAIL, name: SENDER_NAME },
      to: [{ email: order.email, name: order.name || undefined }],
      replyTo: { email: SENDER_EMAIL, name: SENDER_NAME },
      subject: `Your order ${order.orderNo} is out for delivery`,
      htmlContent: html,
    }),
  });
  return res.ok;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, {});
  if (!TOKEN) return json(503, { error: "not_configured" });
  const sent = (event.headers && (event.headers["x-admin-token"] || event.headers["X-Admin-Token"])) || "";
  if (sent !== TOKEN) return json(401, { error: "unauthorized" });
  if (!process.env.STRIPE_SECRET_KEY) return json(503, { error: "stripe_not_configured" });

  let store;
  try { store = openStore(); } catch (e) { return json(500, { error: "storage_unavailable" }); }

  // ---- One order's items + customer-choice emails ----
  const q = event.queryStringParameters || {};
  if (event.httpMethod === "GET" && q.items) {
    const orderNo = String(q.items).toUpperCase();
    const order = await findOrder(orderNo);
    if (!order) return json(404, { error: "order_not_found" });
    const rec = (await loadStatus(store, orderNo)) || {};
    return json(200, { ok: true, items: await itemsFor(order.sessionId), offers: rec.offers || [] });
  }

  // ---- List recent paid website orders with their stage ----
  if (event.httpMethod === "GET") {
    try {
      const list = await stripe().checkout.sessions.list({ limit: 100 });
      const paid = (list.data || []).filter((s) => s.payment_status === "paid" && ((s.metadata && s.metadata.order_no) || s.client_reference_id));
      const orders = [];
      for (const s of paid) {
        const o = fromSession(s);
        if (!validOrderNo(o.orderNo)) continue;
        const rec = await loadStatus(store, o.orderNo);
        o.status = publicStatus(o, rec);
        o.offers = (rec && Array.isArray(rec.offers)) ? rec.offers : [];
        orders.push(o);
      }
      return json(200, { ok: true, orders, stages: STAGES, states: AU_STATES });
    } catch (e) {
      console.error("order-admin list:", e.message);
      return json(500, { error: "list_failed" });
    }
  }

  if (event.httpMethod !== "POST") return json(405, { error: "Method Not Allowed" });

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) {}
  if (body.action === "offer") return sendOffer(store, body);
  const orderNo = String(body.orderNo || "").trim().toUpperCase();
  const stage = String(body.stage || "");
  if (!validOrderNo(orderNo)) return json(400, { error: "bad_order" });
  if (!STAGES.includes(stage)) return json(400, { error: "bad_stage" });

  const order = await findOrder(orderNo);
  if (!order) return json(404, { error: "order_not_found" });

  const prev = (await loadStatus(store, orderNo)) || {};
  const now = Date.now();
  const rec = {
    stage,
    location: AU_STATES.includes(body.location) ? body.location : (prev.location || order.state || ""),
    courier: clean(body.courier != null ? body.courier : prev.courier, 60),
    trackingNo: clean(body.trackingNo != null ? body.trackingNo : prev.trackingNo, 60),
    note: clean(body.note != null ? body.note : prev.note, 300),
    history: Array.isArray(prev.history) ? prev.history.slice(-40) : [],
    notifiedOut: !!prev.notifiedOut,
    offers: Array.isArray(prev.offers) ? prev.offers : [],
    updatedAt: now,
  };
  if (prev.stage !== stage) rec.history.push({ stage, at: now, location: rec.location });

  let emailed = false;
  if (stage === "out" && !rec.notifiedOut) {
    try { emailed = await emailOutForDelivery(order, rec); } catch (e) { console.error("out email:", e.message); }
    if (emailed) rec.notifiedOut = true;
  }

  await store.setJSON(orderNo, rec);
  return json(200, { ok: true, status: publicStatus(order, rec), emailed });
};

// ---- Send a substitute / delay choice email and record it ----
const isDate = (v) => /^\d{4}-\d{2}-\d{2}$/.test(String(v || ""));
async function sendOffer(store, body) {
  const orderNo = String(body.orderNo || "").trim().toUpperCase();
  const type = body.type === "substitute" ? "substitute" : body.type === "delay" ? "delay" : "";
  if (!validOrderNo(orderNo) || !type) return json(400, { error: "bad_request" });
  if (!isDate(body.replyBy)) return json(400, { error: "Choose a reply-by date." });
  if (type === "delay" && !isDate(body.newDate)) return json(400, { error: "Choose the new delivery date." });
  const order = await findOrder(orderNo);
  if (!order) return json(404, { error: "order_not_found" });
  if (!order.email) return json(400, { error: "This order has no customer email." });
  const items = await itemsFor(order.sessionId);
  const item = items[Number(body.itemIndex) || 0];
  if (!item) return json(400, { error: "Choose the item." });

  const offer = {
    id: newToken(), type, status: "pending", createdAt: Date.now(),
    item: { name: item.name, qty: item.qty, sku: item.sku, img: item.img },
    replyBy: body.replyBy,
    newDate: isDate(body.newDate) ? body.newDate : "",
    oldDate: isDate(body.oldDate) ? body.oldDate : "",
    message: clean(body.message, 400),
    noExtraCost: body.noExtraCost !== false,
  };
  if (type === "substitute") {
    const sub = productInfo(String(body.subId || ""));
    if (!sub) return json(400, { error: "Choose the substitute product from the list." });
    offer.sub = { id: sub.id, name: sub.name, img: sub.img, qty: Math.max(1, Math.min(99, parseInt(body.subQty, 10) || item.qty)) };
  }

  let sent = false;
  try { sent = await sendCustomerOffer(order, offer); } catch (e) { console.error("offer email:", e.message); }
  if (!sent) return json(502, { error: "The email couldn't be sent. Check the email service (Brevo) and try again." });
  offer.sentAt = Date.now();

  const rec = (await loadStatus(store, orderNo)) || { stage: "picking", history: [] };
  rec.offers = (Array.isArray(rec.offers) ? rec.offers : []).concat(offer).slice(-20);
  rec.updatedAt = Date.now();
  await store.setJSON(orderNo, rec);
  return json(200, { ok: true, offer });
}
