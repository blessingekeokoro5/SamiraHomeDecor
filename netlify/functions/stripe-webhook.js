/* ============================================================
   Samira Home Decor — Stripe Webhook  (Netlify Function)
   ------------------------------------------------------------
   Stripe calls this URL after every payment. This is the RELIABLE
   record of a paid order — it fires even if the customer closes
   the tab before the success page loads. Never fulfil an order
   from the browser success page alone; trust this instead.

   Endpoint (after deploy):
     /.netlify/functions/stripe-webhook
     (also aliased to /api/stripe-webhook)

   Required environment variables (Netlify dashboard):
     STRIPE_SECRET_KEY      = sk_test_... / sk_live_...
     STRIPE_WEBHOOK_SECRET  = whsec_...   (from the webhook you create in Stripe)
   Optional (to email yourself each paid order):
     WEB3FORMS_KEY          = <your Web3Forms access key>
     ORDER_EMAIL            = hello@samirahomedecor.com.au
   ============================================================ */

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { issueGiftCard } = require("./_giftcards");
const { recordReferral } = require("./_referrals");
const { emailShop } = require("./_notify");
const { orderPdf } = require("./_orderpdf");
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

function money(cents, cur) {
  return `${(cents / 100).toFixed(2)} ${(cur || "aud").toUpperCase()}`;
}

/* ---- "You have a new order" email to the shop -----------------------
   A branded summary with every customer and order detail, so each order
   is on record in your inbox. Sent with Brevo (BREVO_API_KEY); falls back
   to a plain-text Web3Forms email if Brevo isn't set up. */
const escH = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const aud = (n) => "$" + Number(n || 0).toFixed(2);

function orderFacts(session, lineItems) {
  const ship = (session.collected_information && session.collected_information.shipping_details) || session.shipping_details || {};
  const addr = ship.address || {};
  const cd = session.customer_details || {};
  const m = session.metadata || {};
  const noteField = (session.custom_fields || []).find((f) => f.key === "delivery_note");
  const placed = new Date((session.created || Date.now() / 1000) * 1000);
  let when;
  try { when = placed.toLocaleString("en-AU", { timeZone: "Australia/Adelaide", weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" }) + " (Adelaide time)"; }
  catch (e) { when = placed.toISOString(); }
  return {
    orderNo: m.order_no || session.client_reference_id || "(no number)",
    when,
    name: ship.name || cd.name || "",
    email: cd.email || session.customer_email || "",
    phone: cd.phone || "",
    address: [addr.line1, addr.line2].filter(Boolean).join(", "),
    cityLine: [addr.city, addr.state, addr.postal_code].filter(Boolean).join(" "),
    country: addr.country || "",
    note: (noteField && noteField.text && noteField.text.value) || "",
    items: (lineItems || []).map((li) => ({ name: li.description || "Item", qty: li.quantity || 1, total: (li.amount_total || 0) / 100 })),
    subtotal: m.subtotal ? Number(m.subtotal) : null,
    discount: Number(m.discount || 0), discountPct: Number(m.discount_pct || 0),
    voucher: Number(m.voucher || 0), code: m.voucher_code || "",
    shipping: (session.shipping_cost ? session.shipping_cost.amount_total : (session.total_details ? session.total_details.amount_shipping : 0)) / 100,
    total: (session.amount_total || 0) / 100,
    preorder: m.preorder ? String(m.preorder).split(" | ").filter(Boolean) : [],
    paymentIntent: typeof session.payment_intent === "string" ? session.payment_intent : (session.payment_intent && session.payment_intent.id) || "",
  };
}

// Line prices from Stripe already have the discount built in; show them at
// their pre-discount value so they add up to the subtotal line.
function listPrices(f) {
  const sum = f.items.reduce((n, it) => n + it.total, 0);
  if (f.subtotal == null || !sum || Math.abs(sum - f.subtotal) < 0.01) return f.items;
  const k = f.subtotal / sum;
  return f.items.map((it) => Object.assign({}, it, { total: Math.round(it.total * k * 100) / 100 }));
}

function orderHtml(f) {
  f = Object.assign({}, f, { items: listPrices(f) });
  const row = (k, v) => v ? `<tr><td style="padding:6px 0;color:#8a7f77;width:120px;vertical-align:top">${k}</td><td style="padding:6px 0;color:#0B1F3A;font-weight:600">${v}</td></tr>` : "";
  const items = f.items.map((it) => `<tr><td style="padding:9px 0;border-bottom:1px solid #E8DCC8">${escH(it.name)}${it.qty > 1 ? ` <span style="color:#8a7f77">× ${it.qty}</span>` : ""}</td><td style="padding:9px 0;border-bottom:1px solid #E8DCC8;text-align:right;white-space:nowrap">${aud(it.total)}</td></tr>`).join("");
  const money = (k, v, green) => `<tr><td style="padding:4px 0;color:${green ? "#2E7D4F" : "#5a5049"}">${k}</td><td style="padding:4px 0;text-align:right;color:${green ? "#2E7D4F" : "#5a5049"}">${v}</td></tr>`;
  const dash = f.paymentIntent ? `https://dashboard.stripe.com/payments/${f.paymentIntent}` : "https://dashboard.stripe.com/payments";
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#0B1F3A;padding:8px">
    <div style="background:#14365F;border-radius:14px;padding:24px 26px;text-align:center;border-bottom:4px solid #C6A15B">
      <div style="font-size:13px;letter-spacing:3px;text-transform:uppercase;color:#C6A15B">Samira Home Decor</div>
      <div style="font-size:26px;font-family:Georgia,serif;color:#fff;margin-top:6px">🎉 You have a new order!</div>
      <div style="font-size:22px;font-weight:bold;color:#fff;margin-top:12px">${escH(f.orderNo)}</div>
      <div style="font-size:13px;color:#E0C992;margin-top:4px">${escH(f.when)}</div>
      <div style="display:inline-block;margin-top:14px;background:#C6A15B;color:#fff;border-radius:30px;padding:8px 20px;font-size:18px;font-weight:bold">${aud(f.total)} paid</div>
    </div>

    <h3 style="margin:24px 0 8px;font-family:Georgia,serif;font-size:18px">Customer details</h3>
    <table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px;background:#F7F3EC;border-radius:12px">
      <tr><td style="padding:14px 16px"><table role="presentation" width="100%" style="border-collapse:collapse">
        ${row("Full name", escH(f.name))}
        ${row("Email", f.email ? `<a href="mailto:${escH(f.email)}" style="color:#14365F">${escH(f.email)}</a>` : "")}
        ${row("Phone", f.phone ? `<a href="tel:${escH(f.phone)}" style="color:#14365F">${escH(f.phone)}</a>` : "")}
        ${row("Deliver to", [escH(f.address), escH(f.cityLine), escH(f.country)].filter(Boolean).join("<br>"))}
      </table></td></tr>
    </table>
    ${f.note ? `<div style="margin-top:12px;background:#FFF6E0;border-left:4px solid #C6A15B;border-radius:8px;padding:12px 14px;font-size:14px"><strong>📝 Customer note:</strong><br>${escH(f.note)}</div>` : `<div style="margin-top:10px;font-size:13px;color:#8a7f77">No note left by the customer.</div>`}

    ${f.preorder && f.preorder.length ? `<div style="margin-top:18px;background:#FFF6E0;border-left:4px solid #C6A15B;border-radius:8px;padding:12px 14px;font-size:14px"><strong>⏳ PRE-ORDER — tell the customer if these dates change:</strong><ul style="margin:6px 0 0;padding-left:18px">${f.preorder.map((x) => `<li>${escH(x)}</li>`).join("")}</ul></div>` : ""}

    <h3 style="margin:24px 0 8px;font-family:Georgia,serif;font-size:18px">Order details</h3>
    <table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">
      ${items}
      ${f.subtotal != null ? money("Subtotal", aud(f.subtotal)) : ""}
      ${f.discount > 0 ? money(`${f.discountPct ? f.discountPct + "% off" : "Discount"}${f.code && !f.voucher ? " (" + escH(f.code) + ")" : ""}`, "−" + aud(f.discount), true) : ""}
      ${f.voucher > 0 ? money(`Voucher${f.code ? " (" + escH(f.code) + ")" : ""}`, "−" + aud(f.voucher), true) : ""}
      ${money("Shipping", f.shipping ? aud(f.shipping) : "Free")}
      <tr><td style="padding:10px 0 0;font-family:Georgia,serif;font-size:18px;font-weight:bold">Total paid</td><td style="padding:10px 0 0;text-align:right;font-family:Georgia,serif;font-size:18px;font-weight:bold">${aud(f.total)}</td></tr>
    </table>

    <div style="margin:24px 0 8px;text-align:center">
      <a href="${dash}" style="display:inline-block;background:#14365F;color:#fff;text-decoration:none;padding:12px 22px;border-radius:30px;font-weight:bold;margin:4px">View payment in Stripe</a>
      <a href="${process.env.SITE_URL || "https://samirahomedecor.com.au"}/admin.html" style="display:inline-block;background:#C6A15B;color:#fff;text-decoration:none;padding:12px 22px;border-radius:30px;font-weight:bold;margin:4px">Update delivery stage</a>
    </div>
    <p style="font-size:12px;color:#8a7f77;text-align:center">Reply to this email to write to the customer directly.</p>
  </div>`;
}

function orderText(f) {
  f = Object.assign({}, f, { items: listPrices(f) });
  return `🎉 You have a new order!\n\nOrder: ${f.orderNo}\nDate: ${f.when}\nTotal paid: ${aud(f.total)}\n\n` +
    `CUSTOMER\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nDeliver to: ${[f.address, f.cityLine, f.country].filter(Boolean).join(", ")}\nNote: ${f.note || "(none)"}\n\n` +
    `ITEMS\n${f.items.map((it) => `  • ${it.qty} × ${it.name} — ${aud(it.total)}`).join("\n")}\n\n` +
    (f.preorder && f.preorder.length ? `PRE-ORDER (tell the customer if these dates change)\n${f.preorder.map((x) => `  • ${x}`).join("\n")}\n\n` : "") +
    (f.subtotal != null ? `Subtotal: ${aud(f.subtotal)}\n` : "") +
    (f.discount > 0 ? `Discount: -${aud(f.discount)}${f.code ? " (" + f.code + ")" : ""}\n` : "") +
    (f.voucher > 0 ? `Voucher: -${aud(f.voucher)}\n` : "") +
    `Shipping: ${aud(f.shipping)}\nTotal: ${aud(f.total)}\n`;
}

/* Checkout marketing opt-in → Brevo contact. Australian mobiles become +614… for SMS. */
async function addMarketingContact(cd, email, sms) {
  const key = process.env.BREVO_API_KEY;
  if (!key || !cd.email) return;
  const listId = parseInt(process.env.BREVO_LIST_ID || "0", 10);
  const parts = String(cd.name || "").trim().split(/\s+/);
  const attributes = { FIRSTNAME: parts[0] || "", LASTNAME: parts.slice(1).join(" ") };
  if (sms && cd.phone) {
    let ph = String(cd.phone).replace(/[^\d+]/g, "");
    if (/^04\d{8}$/.test(ph)) ph = "+61" + ph.slice(1);
    if (/^\+\d{8,15}$/.test(ph)) attributes.SMS = ph;
  }
  const body = { email: cd.email, attributes, updateEnabled: true };
  if (email && listId) body.listIds = [listId];
  const post = () => fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": key, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(body),
  });
  let r = await post();
  // A mobile already on another contact is rejected; keep the email sign-up anyway
  if (!r.ok && attributes.SMS) { delete attributes.SMS; r = await post(); }
  if (!r.ok) console.error("Brevo contact", r.status, (await r.text()).slice(0, 200));
}

async function emailOrder(session, lineItems) {
  const f = orderFacts(session, lineItems);
  const to = process.env.ORDER_EMAIL || process.env.BUSINESS_EMAIL || "hello@samirahomedecor.com.au";
  const subject = `🛍️ New ${f.preorder && f.preorder.length ? "PRE-ORDER" : "order"} ${f.orderNo} — ${aud(f.total)} — ${f.name || "customer"}`;
  const brevo = process.env.BREVO_API_KEY;
  // PDF copy of the customer and order details, for your records.
  let pdfB64 = "";
  try { pdfB64 = orderPdf(Object.assign({}, f, { items: listPrices(f) })).toString("base64"); }
  catch (e) { console.error("Order PDF failed:", e.message); }
  if (brevo) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": brevo, "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          sender: { email: process.env.SENDER_EMAIL || "hello@samirahomedecor.com.au", name: "Samira Home Decor Orders" },
          to: [{ email: to }],
          ...(f.email ? { replyTo: { email: f.email, name: f.name || undefined } } : {}),
          subject,
          htmlContent: orderHtml(f),
          textContent: orderText(f),
          ...(pdfB64 ? { attachment: [{ name: `${f.orderNo}-order-details.pdf`, content: pdfB64 }] } : {}),
        }),
      });
      if (res.ok) return;
      console.error("Brevo order email failed:", res.status, await res.text());
    } catch (err) { console.error("Brevo order email failed:", err.message); }
  }
  const key = process.env.WEB3FORMS_KEY;
  if (!key) return;
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: key, subject, from_name: "Samira Home Decor", email: to, message: orderText(f) }),
    });
  } catch (err) { console.error("Order email failed:", err.message); }
}

exports.handler = async (event) => {
  const sig = event.headers["stripe-signature"];
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(raw, sig, WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  try {
    if (stripeEvent.type === "checkout.session.completed") {
      const session = stripeEvent.data.object;
      // Only act on genuinely paid sessions
      if (session.payment_status === "paid") {
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
          limit: 100,
        });
        await emailOrder(session, lineItems.data);
        console.log("Paid order captured:", session.id, money(session.amount_total, session.currency));

        // A friend's referral link was used: tell the shop who to reward
        if (session.metadata && session.metadata.ref) {
          const buyer = (session.customer_details && session.customer_details.email) || "";
          const note = await recordReferral(session.metadata.ref, {
            id: (session.metadata && session.metadata.order_no) || session.id, type: "order", friendEmail: buyer,
            friendName: session.customer_details ? session.customer_details.name : "",
            amount: (session.amount_total || 0) / 100,
          });
          await emailShop(
            "Samira Home Decor — referred order, 30% reward to send",
            `Order: ${(session.metadata && session.metadata.order_no) || ""}\nStripe session: ${session.id}\nCustomer: ${buyer}\nOrder total: ${money(session.amount_total, session.currency)}\n\nReferred by: ${note}\n\nSend the referrer their 30% reward, then mark it done in Admin > Referrals.`
          );
        }

        // Ticked "send me offers" at checkout: add them to Brevo (email → the newsletter
        // list; SMS → their mobile on the contact). Only ever on an opt-in.
        const optIn = String((session.metadata && session.metadata.marketing_opt_in) || "");
        if (optIn) {
          try { await addMarketingContact(session.customer_details || {}, /email/i.test(optIn), /sms/i.test(optIn)); }
          catch (e) { console.error("Brevo opt-in failed:", e.message); }
        }

        // Gift cards become spendable only now, having actually been paid for.
        // issueGiftCard is idempotent, so a replayed webhook can't double them.
        let cards = [];
        try { cards = JSON.parse((session.metadata && session.metadata.gift_cards) || "[]"); } catch (e) {}
        for (const c of cards) {
          try {
            const card = await issueGiftCard({
              code: c.c,
              amount: c.a,
              source: "purchase",
              note: `Bought in Stripe session ${session.id}`,
            });
            console.log("Gift card issued:", card.code, card.amount);
          } catch (err) {
            console.error("Gift card issue failed for", c && c.c, "—", err.message);
          }
        }
      }
    }
  } catch (err) {
    console.error("Webhook handler error:", err.message);
    // Return 200 anyway so Stripe doesn't retry forever on our own bug;
    // the event is still visible in the Stripe Dashboard.
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
