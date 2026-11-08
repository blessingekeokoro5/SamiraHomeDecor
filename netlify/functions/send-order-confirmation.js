/* ============================================================
   Samira Home Decor — Order Confirmation email  (Netlify Function, Brevo)
   ------------------------------------------------------------
   After checkout, emails the customer a branded order summary
   (order number, items, totals, delivery info), with a copy to
   the business inbox. Runs server-side only.

   Endpoint: /.netlify/functions/send-order-confirmation
   Required env var: BREVO_API_KEY = xkeysib-...
   Optional: SENDER_EMAIL, SENDER_NAME, BUSINESS_EMAIL, SITE_URL

   Frontend POSTs:
     { orderNo, email, name, total, shipping, date, sessionId,
       items:[{ name, qty, price }] }

   When sessionId (the Stripe Checkout session) is sent, the totals,
   discounts and shipping are read from Stripe itself, so the email
   always matches exactly what the customer was charged.
   ============================================================ */

const BREVO_API_KEY  = process.env.BREVO_API_KEY || "";
const IG_URL = process.env.INSTAGRAM_URL || "https://www.instagram.com/sys_samira1";
const TT_URL = process.env.TIKTOK_URL || "https://www.tiktok.com/@sys_samira";
const YT_URL = process.env.YOUTUBE_URL || "https://www.youtube.com/@sys_samira";
const SENDER_EMAIL   = process.env.SENDER_EMAIL || "hello@samirahomedecor.com.au";
const SENDER_NAME    = process.env.SENDER_NAME || "Samira Home Decor";
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "hello@samirahomedecor.com.au";
const SITE_URL       = process.env.SITE_URL || "https://samirahomedecor.com.au";

function jsonResponse(statusCode, obj) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(obj),
  };
}
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const money = (n) => "$" + Number(n || 0).toFixed(2);

// Read the real charged amounts back from Stripe (never trust browser totals).
async function stripeTotals(sessionId) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId || "")) return null;
  try {
    const stripe = require("stripe")(key);
    const s = await stripe.checkout.sessions.retrieve(sessionId);
    if (!s || s.payment_status !== "paid") return null;
    const m = s.metadata || {};
    return {
      orderNo: m.order_no || s.client_reference_id || "",
      email: (s.customer_details && s.customer_details.email) || s.customer_email || "",
      name: (s.customer_details && s.customer_details.name) || "",
      subtotal: m.subtotal != null && m.subtotal !== "" ? Number(m.subtotal) : null,
      discount: Number(m.discount || 0),
      discountPct: Number(m.discount_pct || 0),
      discountCode: m.voucher_code || "",
      voucher: Number(m.voucher || 0),
      shipping: (s.shipping_cost ? s.shipping_cost.amount_total : 0) / 100,
      total: (s.amount_total || 0) / 100,
      preorder: m.preorder ? String(m.preorder).split(" | ").filter(Boolean) : [],
    };
  } catch (e) {
    console.error("Stripe lookup failed:", e.message);
    return null;
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return jsonResponse(200, {});
  if (event.httpMethod !== "POST") return jsonResponse(405, { error: "Method Not Allowed" });
  if (!BREVO_API_KEY) return jsonResponse(200, { ok: false, fallback: true, reason: "Email service not configured yet." });

  try {
    const o = JSON.parse(event.body || "{}");
    if (!o.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(o.email)) {
      return jsonResponse(400, { error: "A valid email is required." });
    }
    const items = Array.isArray(o.items) ? o.items : [];
    const itemsSub = items.reduce((s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 1), 0);
    const st = await stripeTotals(o.sessionId);
    if (st && st.orderNo && o.orderNo && st.orderNo !== o.orderNo) {
      return jsonResponse(400, { error: "Order does not match payment." });
    }
    if (st && !o.name && st.name) o.name = st.name.split(" ")[0];

    const shipping = st ? st.shipping : Number(o.shipping || 0);
    const total = st ? st.total : Number(o.total || 0);
    const sub = (st && st.subtotal != null) ? st.subtotal : itemsSub;

    // Discount lines: from Stripe when we have it, otherwise whatever makes
    // subtotal + shipping add up to the total the customer was shown.
    const discounts = [];
    if (st) {
      if (st.discount > 0) {
        const label = st.discountPct ? `${st.discountPct}% off` : "Discount";
        const code = st.discountCode && !st.voucher ? ` (${esc(st.discountCode)})` : "";
        discounts.push([label + code, st.discount]);
      }
      if (st.voucher > 0) discounts.push([`Voucher${st.discountCode ? ` (${esc(st.discountCode)})` : ""}`, st.voucher]);
      const rest = Math.round((sub + shipping - st.discount - st.voucher - total) * 100) / 100;
      if (rest >= 0.05) discounts.push(["Gift card / credit", rest]);
    } else {
      const diff = Math.round((sub + shipping - total) * 100) / 100;
      if (diff >= 0.05) discounts.push(["Discounts & savings", diff]);
    }
    const discountRows = discounts.map(([label, amt]) => `
        <tr><td style="padding:4px 0;color:#2E7D4F">${label}</td><td style="padding:4px 0;text-align:right;color:#2E7D4F">−${money(amt)}</td></tr>`).join("");

    const rows = items.map((it) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8DCC8;color:#0B1F3A">${esc(it.name || "Item")}${(it.qty > 1) ? ` <span style="color:#8a7f77">× ${it.qty}</span>` : ""}</td>
        <td style="padding:10px 0;border-bottom:1px solid #E8DCC8;text-align:right;color:#0B1F3A">${money((Number(it.price) || 0) * (Number(it.qty) || 1))}</td>
      </tr>`).join("");

    const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:580px;margin:0 auto;color:#0B1F3A;padding:8px">
      <div style="text-align:center;padding:22px 0 6px">
        <div style="font-family:Georgia,serif;font-size:28px;font-weight:bold;letter-spacing:3px;color:#14365F">Samira Home Decor</div>
        <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8a7f77">Beautiful Spaces, Brighter Lives</div>
      </div>
      <div style="background:#14365F;color:#fff;border-radius:14px;padding:26px 28px;text-align:center;border-bottom:4px solid #C6A15B">
        <div style="font-size:22px;font-family:Georgia,serif">Thank you for your order! ✨</div>
        <p style="color:#E0C992;margin:8px 0 0">Hi ${esc(o.name || "there")}, we've received your order and we're getting it ready.</p>
        <div style="margin-top:16px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#C6A15B">Order</div>
        <div style="font-size:20px;font-weight:bold">${esc(o.orderNo || "")}</div>
        ${o.date ? `<div style="font-size:12px;color:#C6A15B;margin-top:4px">${esc(o.date)}</div>` : ""}
      </div>

      ${items.length ? `
      <table role="presentation" width="100%" style="margin-top:22px;border-collapse:collapse">
        <tr><td style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7f77;padding-bottom:6px">Your items</td><td></td></tr>
        ${rows}
        <tr><td style="padding:12px 0 0;color:#5a5049">Subtotal</td><td style="padding:12px 0 0;text-align:right;color:#5a5049">${money(sub)}</td></tr>
        ${discountRows}
        <tr><td style="padding:4px 0;color:#5a5049">Shipping</td><td style="padding:4px 0;text-align:right;color:#5a5049">${shipping === 0 ? "Free" : money(shipping)}</td></tr>
        <tr><td style="padding:8px 0;font-family:Georgia,serif;font-size:18px;font-weight:bold">Total</td><td style="padding:8px 0;text-align:right;font-family:Georgia,serif;font-size:18px;font-weight:bold">${money(total)}</td></tr>
      </table>` : ""}

      ${(st && st.preorder.length) ? `
      <div style="background:#FFF6E0;border-left:4px solid #C6A15B;border-radius:12px;padding:16px 18px;margin-top:20px;font-size:13px;color:#5a5049;line-height:1.6">
        <div style="font-size:15px;font-weight:bold;color:#0B1F3A;margin-bottom:6px">⏳ Your pre-order</div>
        ${st.preorder.length === 1 && items.length <= 1 ? "Your order is a pre-order." : "Your order includes pre-order items:"}
        <ul style="margin:8px 0 10px;padding-left:18px;color:#0B1F3A">${st.preorder.map((x) => `<li style="margin:3px 0">${esc(x)}</li>`).join("")}</ul>
        These dates are estimates based on our suppliers' production schedules and expected shipping times. Because our pieces are sourced from overseas, production changes, shipping hold-ups, busy ports, customs clearance or bad weather can occasionally affect when an order arrives. If your expected arrival time changes significantly, our team will do our best to let you know as soon as possible.
      </div>` : ""}

      <div style="background:#F6EEE8;border-radius:12px;padding:16px 18px;margin-top:20px;font-size:13px;color:#5a5049;line-height:1.6">
        📦 <strong>What's next?</strong> We'll pick, pack and dispatch your order — you can watch it live in <a href="${SITE_URL}/account.html" style="color:#A9843C">your account → Orders → Track order</a>, with an estimated arrival time.
      </div>

      <div style="text-align:center;margin:22px 0">
        <a href="${SITE_URL}/account.html" style="background:#C6A15B;color:#fff;text-decoration:none;padding:13px 28px;border-radius:30px;font-weight:bold">Track my order</a>
      </div>
      <div style="text-align:center;margin:20px 0 6px;padding:16px;background:#F6F1E9;border-radius:12px">
        <div style="font-size:14px;font-weight:bold;color:#0B1F3A;margin-bottom:4px">Follow us for new décor, styling ideas &amp; member offers</div>
        <div style="font-size:12px;color:#8a7f77;margin-bottom:12px">Tag us when your order arrives, we love seeing your space ✨</div>
        <a href="${IG_URL}" style="display:inline-block;margin:4px;background:#0B1F3A;color:#fff;text-decoration:none;padding:10px 18px;border-radius:30px;font-size:13px;font-weight:bold">📷 Instagram</a>
        <a href="${TT_URL}" style="display:inline-block;margin:4px;background:#0B1F3A;color:#fff;text-decoration:none;padding:10px 18px;border-radius:30px;font-size:13px;font-weight:bold">🎵 TikTok</a>
        <a href="${YT_URL}" style="display:inline-block;margin:4px;background:#0B1F3A;color:#fff;text-decoration:none;padding:10px 18px;border-radius:30px;font-size:13px;font-weight:bold">▶️ YouTube</a>
      </div>
      <p style="color:#8a7f77;font-size:12px;text-align:center;line-height:1.6">
        Need a hand? Just reply to this email or contact us at ${esc(BUSINESS_EMAIL)}.<br>
        Thank you for shopping with Samira Home Decor 💛
      </p>
    </div>`;

    const payload = {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: o.email, name: o.name || undefined }],
      bcc: [{ email: BUSINESS_EMAIL }],
      subject: `Your Samira Home Decor ${(st && st.preorder.length) ? "pre-order" : "order"} ${o.orderNo || ""} is confirmed 🌿`,
      htmlContent: html,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text();
      return jsonResponse(502, { error: "Email service error.", detail });
    }
    return jsonResponse(200, { ok: true });
  } catch (err) {
    return jsonResponse(500, { error: err.message || "Unexpected error." });
  }
};
