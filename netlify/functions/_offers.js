/* ============================================================
   Samira Home Decor — customer choice emails (substitute / delay)
   ------------------------------------------------------------
   When an item is out of stock or delayed, the team sends one of
   two emails from the admin Orders tab:
     • substitute: "Yes, send the substitute" / "No thanks, refund this item"
     • delay:      "Yes, I'm happy to wait" / "Cancel and refund me"
   The customer's answer is recorded on the order (Netlify Blobs
   "order-status", rec.offers[]) and emailed to the shop.
   ============================================================ */

const { SITE_URL } = require("./_orders");

const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "hello@samirahomedecor.com.au";
const SENDER_NAME = process.env.SENDER_NAME || "Samira Home Decor";
const SHOP_EMAIL = process.env.ORDER_EMAIL || process.env.BUSINESS_EMAIL || "hello@samirahomedecor.com.au";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function fmtDate(ymd, withYear) {
  if (!ymd) return "";
  const d = new Date(ymd + "T12:00:00+10:30");
  try { return d.toLocaleDateString("en-AU", { timeZone: "Australia/Adelaide", weekday: "long", day: "numeric", month: "long", ...(withYear ? { year: "numeric" } : {}) }); }
  catch (e) { return ymd; }
}

function respondUrl(orderNo, offer) {
  return `${SITE_URL}/.netlify/functions/order-respond?o=${encodeURIComponent(orderNo)}&t=${encodeURIComponent(offer.id)}`;
}

// Labels for each choice, per offer type.
function choiceText(type) {
  return type === "substitute"
    ? { yes: "Yes, send the substitute", no: "No thanks, refund this item", yesDone: "send the substitute", noDone: "refund this item" }
    : { yes: "Yes, I'm happy to wait", no: "Cancel and refund me", yesDone: "wait for the new delivery date", noDone: "cancel and refund this item" };
}

function itemCard(offer) {
  const it = offer.item || {};
  if (offer.type === "substitute") {
    const sub = offer.sub || {};
    return `
    <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:10px 0"><tr>
      <td width="50%" style="vertical-align:top;background:#F7F3EC;border-radius:12px;padding:12px;text-align:center">
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a33">Sold out</div>
        ${it.img ? `<img src="${esc(it.img)}" width="100%" alt="" style="border-radius:8px;margin:8px 0;opacity:.55;display:block">` : ""}
        <div style="font-size:13px;color:#8a7f77;text-decoration:line-through">${esc(it.name)}${it.qty > 1 ? " × " + it.qty : ""}</div>
      </td>
      <td width="50%" style="vertical-align:top;background:#fff;border:2px solid #C6A15B;border-radius:12px;padding:12px;text-align:center">
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#2E7D4F">Suggested substitute</div>
        ${sub.img ? `<img src="${esc(sub.img)}" width="100%" alt="" style="border-radius:8px;margin:8px 0;display:block">` : ""}
        <div style="font-size:13px;font-weight:bold">${esc(sub.name)}${sub.qty > 1 ? " × " + sub.qty : ""}</div>
        ${offer.newDate ? `<div style="font-size:12px;color:#5a5049;margin-top:4px">Arrives by ${esc(fmtDate(offer.newDate))}</div>` : ""}
      </td>
    </tr></table>`;
  }
  return `
  <table role="presentation" width="100%" style="border-collapse:collapse;background:#F7F3EC;border-radius:12px"><tr>
    ${it.img ? `<td width="40%" style="padding:14px;vertical-align:middle"><img src="${esc(it.img)}" width="100%" alt="" style="border-radius:8px;display:block"></td>` : ""}
    <td style="padding:14px 16px;vertical-align:middle;font-size:14px;line-height:1.5">
      <div style="font-weight:bold;font-size:15px">${esc(it.name)}${it.qty > 1 ? " × " + it.qty : ""}</div>
      ${offer.oldDate ? `<div style="margin-top:8px;color:#8a7f77">Original estimate: <span style="text-decoration:line-through">${esc(fmtDate(offer.oldDate))}</span></div>` : ""}
      <div style="margin-top:2px">New delivery date: <strong style="color:#14365F">by ${esc(fmtDate(offer.newDate, true))}</strong></div>
    </td>
  </tr></table>`;
}

function customerEmailHtml(order, offer) {
  const first = (order.name || "").split(" ")[0] || "there";
  const c = choiceText(offer.type);
  const url = respondUrl(order.orderNo, offer);
  const intro = offer.type === "substitute"
    ? `The item below has sold out. We've found a close substitute we think you'll love${offer.noExtraCost ? ", at <strong>no extra cost</strong>" : ""}. Please choose below and we'll take care of the rest.`
    : `Thank you for your order. We're sorry, but we can't deliver the item below by the date shown at checkout. The new delivery date is below. You can wait for it, or cancel for a full refund.`;
  const noReply = offer.type === "substitute"
    ? "we'll refund the item in full so you're never charged for something you didn't choose."
    : "we'll cancel this item and refund you in full.";
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#0B1F3A;padding:8px">
    <div style="text-align:center;padding:16px 0 6px">
      <div style="font-family:Georgia,serif;font-size:26px;font-weight:bold;letter-spacing:3px;color:#14365F">Samira Home Decor</div>
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8a7f77">Beautiful Spaces, Brighter Lives</div>
    </div>
    <div style="background:#14365F;color:#fff;border-radius:14px;padding:22px 24px;text-align:center;border-bottom:4px solid #C6A15B">
      <div style="font-size:21px;font-family:Georgia,serif">${offer.type === "substitute" ? "An update on your order " : "A delivery update on your order "}${esc(order.orderNo)}</div>
      <p style="color:#E0C992;margin:8px 0 0;font-size:14px">${offer.type === "substitute" ? "One item needs your OK before we send it" : "Please let us know how you'd like to go ahead"}</p>
    </div>
    <p style="font-size:15px;line-height:1.6;margin:20px 4px 6px">Hi ${esc(first)},</p>
    <p style="font-size:15px;line-height:1.6;margin:0 4px 18px">${intro}</p>
    ${itemCard(offer)}
    ${offer.message ? `<p style="font-size:14px;line-height:1.6;margin:16px 4px 0;background:#F7F3EC;border-radius:8px;padding:10px 12px">${esc(offer.message)}</p>` : ""}
    <div style="text-align:center;margin:24px 0 10px">
      <a href="${url}&a=yes" style="display:inline-block;background:#2E7D4F;color:#fff;text-decoration:none;padding:14px 26px;border-radius:30px;font-weight:bold;margin:5px">✓ ${esc(c.yes)}</a>
      <a href="${url}&a=no" style="display:inline-block;background:#fff;color:#14365F;border:2px solid #14365F;text-decoration:none;padding:12px 24px;border-radius:30px;font-weight:bold;margin:5px">${esc(c.no)}</a>
    </div>
    <p style="font-size:13px;color:#5a5049;text-align:center;line-height:1.5;margin:6px 10px">Please choose by <strong>${esc(fmtDate(offer.replyBy))}</strong>. If we don't hear from you by then, ${noReply}</p>
    <p style="font-size:12px;color:#8a7f77;text-align:center;margin:18px 0 6px">Questions? Just reply to this email or chat with us at samirahomedecor.com.au</p>
  </div>`;
}

async function brevoSend(payload) {
  if (!BREVO_API_KEY) return false;
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(Object.assign({ sender: { email: SENDER_EMAIL, name: SENDER_NAME } }, payload)),
  });
  if (!res.ok) console.error("Brevo:", res.status, await res.text());
  return res.ok;
}

function sendCustomerOffer(order, offer) {
  return brevoSend({
    to: [{ email: order.email, name: order.name || undefined }],
    replyTo: { email: SENDER_EMAIL, name: SENDER_NAME },
    subject: offer.type === "substitute"
      ? `Your order ${order.orderNo}: please approve a substitute`
      : `Your order ${order.orderNo}: new delivery date`,
    htmlContent: customerEmailHtml(order, offer),
  });
}

function sendShopAnswer(order, offer) {
  const c = choiceText(offer.type);
  const yes = offer.status === "accepted";
  const what = yes ? c.yesDone : c.noDone;
  const next = yes
    ? (offer.type === "substitute" ? "Order the substitute and update the delivery stage." : "Keep the order going for the new date.")
    : "Refund this item in Stripe (Payments → the order → Refund).";
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0B1F3A;padding:8px">
    <div style="background:${yes ? "#2E7D4F" : "#14365F"};color:#fff;border-radius:14px;padding:20px 22px;text-align:center">
      <div style="font-size:20px;font-family:Georgia,serif">${yes ? "✓" : "↩"} ${esc(order.name || "Your customer")} chose to ${esc(what)}</div>
      <div style="margin-top:6px;color:#E0C992">${esc(order.orderNo)} · ${esc(offer.type === "substitute" ? "Substitute offer" : "Delivery delay")}</div>
    </div>
    <p style="font-size:14px;line-height:1.6;margin:16px 4px 0"><strong>Item:</strong> ${esc(offer.item && offer.item.name)}${offer.item && offer.item.qty > 1 ? " × " + offer.item.qty : ""}</p>
    ${offer.type === "substitute" ? `<p style="font-size:14px;margin:6px 4px 0"><strong>Substitute offered:</strong> ${esc(offer.sub && offer.sub.name)}${offer.sub && offer.sub.qty > 1 ? " × " + offer.sub.qty : ""}</p>` : ""}
    ${offer.newDate ? `<p style="font-size:14px;margin:6px 4px 0"><strong>New date:</strong> ${esc(fmtDate(offer.newDate, true))}</p>` : ""}
    <p style="font-size:14px;margin:6px 4px 0"><strong>Customer:</strong> ${esc(order.name)} · ${esc(order.email)} · ${esc(order.phone)}</p>
    <p style="font-size:14px;margin:14px 4px 0;background:#FFF6E0;border-left:4px solid #C6A15B;border-radius:8px;padding:10px 12px"><strong>Next step:</strong> ${esc(next)}</p>
  </div>`;
  return brevoSend({
    to: [{ email: SHOP_EMAIL }],
    replyTo: order.email ? { email: order.email, name: order.name || undefined } : undefined,
    subject: `${yes ? "✓" : "↩"} ${order.orderNo}: customer chose to ${what}`,
    htmlContent: html,
  });
}

module.exports = { choiceText, fmtDate, esc, customerEmailHtml, sendCustomerOffer, sendShopAnswer };
