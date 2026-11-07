/* ============================================================
   Samira Home Decor — customer answers a substitute / delay email
   ------------------------------------------------------------
   GET  ?o=SHD-123456&t=<token>&a=yes|no
        Shows the offer and a confirm button. Nothing is recorded on
        GET, so email link-scanners that open links can't answer for
        the customer.
   POST o, t, a (form)  → records the choice once, emails the shop,
        and shows a thank-you page.
   ============================================================ */

const { openStore, findOrder, loadStatus, validOrderNo } = require("./_orders");
const { choiceText, fmtDate, esc, sendShopAnswer } = require("./_offers");

function page(title, inner) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    body: `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Samira Home Decor</title><meta name="robots" content="noindex">
<style>
  body{margin:0;background:#F7F3EC;font-family:Arial,Helvetica,sans-serif;color:#0B1F3A}
  .wrap{max-width:560px;margin:0 auto;padding:28px 16px}
  .brand{text-align:center;margin-bottom:16px}.brand b{font-family:Georgia,serif;font-size:24px;letter-spacing:3px;color:#14365F;display:block}
  .brand span{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8a7f77}
  .card{background:#fff;border-radius:16px;padding:24px 20px;border:1px solid #E8DCC8}
  h1{font-family:Georgia,serif;font-size:22px;margin:0 0 10px}p{line-height:1.6;margin:8px 0}
  .item{display:flex;gap:12px;align-items:center;background:#F7F3EC;border-radius:12px;padding:12px;margin:14px 0}
  .item img{width:90px;height:90px;object-fit:cover;border-radius:8px}
  .btn{display:block;width:100%;box-sizing:border-box;border:0;border-radius:30px;padding:15px 18px;font-size:16px;font-weight:bold;cursor:pointer;margin-top:10px;text-align:center;text-decoration:none}
  .yes{background:#2E7D4F;color:#fff}.no{background:#fff;color:#14365F;border:2px solid #14365F}.home{background:#14365F;color:#fff}
  .muted{color:#8a7f77;font-size:13px;text-align:center}
</style></head><body><div class="wrap"><div class="brand"><b>Samira Home Decor</b><span>Beautiful Spaces, Brighter Lives</span></div>
<div class="card">${inner}</div><p class="muted">Questions? Email hello@samirahomedecor.com.au</p></div></body></html>`,
  };
}

const notFound = () => page("Link not found", `<h1>We couldn't find this request</h1><p>The link may be incomplete. Please reply to our email and we'll help straight away.</p><a class="btn home" href="/">Visit Samira Home Decor</a>`);

function summary(offer) {
  const it = offer.item || {};
  const sub = offer.sub || {};
  return offer.type === "substitute"
    ? `<div class="item">${sub.img ? `<img src="${esc(sub.img)}" alt="">` : ""}<div><b>${esc(sub.name)}${sub.qty > 1 ? " × " + sub.qty : ""}</b><br><span style="color:#8a7f77;font-size:13px">Instead of: ${esc(it.name)}${it.qty > 1 ? " × " + it.qty : ""}</span>${offer.newDate ? `<br><span style="font-size:13px">Arrives by ${esc(fmtDate(offer.newDate))}</span>` : ""}</div></div>`
    : `<div class="item">${it.img ? `<img src="${esc(it.img)}" alt="">` : ""}<div><b>${esc(it.name)}${it.qty > 1 ? " × " + it.qty : ""}</b><br><span style="font-size:13px">New delivery date: by ${esc(fmtDate(offer.newDate, true))}</span></div></div>`;
}

function today() {
  try { return new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Adelaide" }); } catch (e) { return new Date().toISOString().slice(0, 10); }
}

exports.handler = async (event) => {
  const isPost = event.httpMethod === "POST";
  let params = event.queryStringParameters || {};
  if (isPost) {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || "", "base64").toString("utf8") : (event.body || "");
    params = Object.fromEntries(new URLSearchParams(raw));
  }
  const orderNo = String(params.o || "").toUpperCase();
  const token = String(params.t || "");
  const ans = params.a === "yes" ? "yes" : params.a === "no" ? "no" : "";
  if (!validOrderNo(orderNo) || !/^[a-f0-9]{36}$/.test(token)) return notFound();

  let store, rec;
  try { store = openStore(); rec = await loadStatus(store, orderNo); } catch (e) { return page("Please try again", `<h1>Something went wrong</h1><p>Please try the link again in a minute, or reply to our email.</p>`); }
  const offers = (rec && Array.isArray(rec.offers)) ? rec.offers : [];
  const offer = offers.find((x) => x.id === token);
  if (!offer) return notFound();
  const c = choiceText(offer.type);

  // Already answered: show the recorded choice.
  if (offer.status === "accepted" || offer.status === "declined") {
    const what = offer.status === "accepted" ? c.yesDone : c.noDone;
    return page("Thank you", `<h1>Thanks, we have your answer</h1><p>You chose to <b>${esc(what)}</b> for order <b>${esc(orderNo)}</b>.</p>${summary(offer)}<p>If you'd like to change this, just reply to our email.</p><a class="btn home" href="/track.html?order=${encodeURIComponent(orderNo)}">Track my order</a>`);
  }
  // Past the reply-by date.
  if (offer.replyBy && today() > offer.replyBy) {
    return page("Reply date passed", `<h1>The reply date has passed</h1><p>We didn't hear back by ${esc(fmtDate(offer.replyBy))}, so as promised this item is being refunded in full. If you'd still like it, please reply to our email and we'll do our best to help.</p>`);
  }

  if (!isPost || !ans) {
    // Step 1: confirm the choice (nothing recorded yet).
    const form = (a, cls, label) => `<form method="post"><input type="hidden" name="o" value="${esc(orderNo)}"><input type="hidden" name="t" value="${esc(token)}"><input type="hidden" name="a" value="${a}"><button class="btn ${cls}" type="submit">${esc(label)}</button></form>`;
    const first = ans === "no" ? form("no", "no", "Confirm: " + c.no) + form("yes", "yes", c.yes) : form("yes", "yes", "Confirm: " + c.yes) + form("no", "no", c.no);
    return page("Confirm your choice", `<h1>Order ${esc(orderNo)}</h1><p>Please confirm how you'd like to go ahead.</p>${summary(offer)}${first}<p class="muted" style="margin-top:14px">Please choose by ${esc(fmtDate(offer.replyBy))}.</p>`);
  }

  // Step 2: record the answer once.
  offer.status = ans === "yes" ? "accepted" : "declined";
  offer.respondedAt = Date.now();
  rec.updatedAt = Date.now();
  try { await store.setJSON(orderNo, rec); } catch (e) { return page("Please try again", `<h1>Something went wrong</h1><p>Your answer wasn't saved. Please try again, or reply to our email.</p>`); }

  try { const order = await findOrder(orderNo); if (order) await sendShopAnswer(order, offer); } catch (e) { console.error("shop answer email:", e.message); }

  const msg = offer.status === "accepted"
    ? (offer.type === "substitute" ? "We'll send your substitute and keep you updated by email." : "Thanks for your patience. We'll keep you updated by email as your order progresses.")
    : "We'll refund this item in full. Refunds usually appear on your card within 5 to 10 business days.";
  return page("Thank you", `<h1>Thank you!</h1><p>You chose to <b>${esc(offer.status === "accepted" ? c.yesDone : c.noDone)}</b>.</p>${summary(offer)}<p>${msg}</p><a class="btn home" href="/track.html?order=${encodeURIComponent(orderNo)}">Track my order</a>`);
};
