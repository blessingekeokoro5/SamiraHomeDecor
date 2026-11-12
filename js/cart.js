/* ============================================================
   SAMIRA HOME DECOR, Cart (localStorage) + toast + product helpers
   ============================================================ */

const CART_KEY = "decomuse_cart";

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function cartCount() { return getCart().reduce((n, i) => n + i.qty, 0); }
/* ---- Member pricing ----
   Logged-in members pay each product's member price. The cart stores the
   regular price; linePrice() gives what this shopper actually pays, and the
   payment server re-checks the login before charging the member price. */
function isMember() {
  try { const a = JSON.parse(localStorage.getItem("decomuse_account") || "null"); return !!(a && a.email && localStorage.getItem("shd_auth_token")); } catch (e) { return false; }
}
function memberRatio(p, size) {
  if (!p || !p.memberPrice || p.cat === "Packaging") return 1;
  const promo = p.was ? p.price / p.was : 1;          // sale already applied to p.price
  const base = p.was || p.price;
  const s = size && Array.isArray(p.sizes) ? p.sizes.find(z => z && z.label === size) : null;
  if (s && s.memberPrice && s.price) return Math.min(1, s.memberPrice / (s.price / promo));
  return Math.min(1, p.memberPrice / base);
}
function linePrice(i) {
  const current = i && typeof findProduct === "function" ? findProduct(i.id) : null;
  if (current && current.readyDining) return isMember() ? current.memberPrice : current.price;
  if (!i || i.giftCard || i.hamper || /^(hamper|giftcard)-/.test(String(i.id)) || !isMember()) return i.price;
  const p = (typeof findProduct === "function") ? findProduct(i.id) : null;
  return Math.round(i.price * memberRatio(p, i.size) * 100) / 100;
}
function cartTotal() { return getCart().reduce((n, i) => n + linePrice(i) * i.qty, 0); }

function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

/* ---- GA4 ecommerce helpers ---- */
function gaEvent(name, params) { try { if (typeof window.gtag === "function") window.gtag("event", name, params || {}); } catch (e) {} }
function gaItem(p, qty, price) {
  return { item_id: (p && (p.sku || p.id)) || "", item_name: (p && p.name) || "",
    item_category: (p && p.cat) || "", price: Number(price != null ? price : (p && p.price) || 0), quantity: qty || 1 };
}

// Cart lines are keyed by product + colour + size so variants are separate lines.
function addToCart(id, qty = 1, colour = null, size = null, price = null) {
  const p = findProduct(id);
  if (!p) return;
  const unitPrice = (price != null) ? price : p.price;
  const key = [id, colour || "", size || ""].join("|");
  const cart = getCart();
  const line = cart.find(i => (i.key || i.id) === key);
  if (line) line.qty += qty;
  else cart.push({ id: p.id, key, name: p.name, price: unitPrice, cat: p.cat, ph: p.ph, img: p.img || (p.imgs && p.imgs[0]) || undefined, qty, colour: colour || undefined, size: size || undefined });
  saveCart(cart);
  gaEvent("add_to_cart", { currency: "AUD", value: unitPrice * qty, items: [gaItem(p, qty, unitPrice)] });
  showToast(`Added “${p.name}${colour ? " · " + colour : ""}${size ? " · " + size : ""}” to your cart`);
  if (typeof renderCartPage === "function") renderCartPage();
}
function removeFromCart(key) {
  saveCart(getCart().filter(i => (i.key || i.id) !== key));
  if (typeof renderCartPage === "function") renderCartPage();
}
function setQty(key, qty) {
  const cart = getCart();
  const line = cart.find(i => (i.key || i.id) === key);
  if (!line) return;
  line.qty = Math.max(1, qty);
  saveCart(cart);
  if (typeof renderCartPage === "function") renderCartPage();
}

/* Live sale campaign (Winter Décor Refresh, etc.), set in SAMIRA.campaign */
function getCampaign() {
  const c = (typeof SAMIRA !== "undefined" && SAMIRA.campaign) || null;
  if (!c || !c.percent || !c.endsAt) return { active: false, percent: 0 };
  const ends = new Date(c.endsAt).getTime();
  return { active: Date.now() < ends, percent: c.percent, label: c.label || "Sale", headline: c.headline, endsAt: ends };
}

/* Best discount = larger of live flash-sale % or sale campaign % */
function isBlackFriday2026() { const now=Date.now(); return now>=Date.parse("2026-11-12T13:30:00Z") && now<Date.parse("2026-11-14T13:30:00Z"); }
function orderDiscount(sub) {
  let flashPct = 0;
  try { const f = getFlashSale(); if (f.active) flashPct = f.percent; } catch (e) {}
  let campaignPct = 0, campaignLabel = "";
  try { const c = getCampaign(); if (c.active) { campaignPct = c.percent; campaignLabel = c.label; } } catch (e) {}
  const salePct = isBlackFriday2026() ? 5 : Math.max(flashPct, campaignPct);
  const eligible = getCart().filter(i => !(findProduct(i.id) || {}).readyDining);
  const eligibleSub = eligible.reduce((n,i) => n + linePrice(i) * i.qty, 0);
  const saleAmt = Math.round(eligibleSub * salePct / 100);
  // First-order 10% off (welcome offer) covers ONE piece: one unit of the dearest item
  // (one set, for a "Set of 2"), not every unit in the cart. Gift cards don't count.
  // The best single discount applies, they don't stack.
  let welcomePct = 0, welcomeAmt = 0;
  try { const v = getVoucher(); if (v && v.pct && isMember()) welcomePct = v.pct; } catch (e) {}  // members only (checked again at payment)
  if (welcomePct && !isBlackFriday2026()) {
    const unit = eligible.filter(i => !i.giftCard && !/^giftcard-/.test(String(i.id))).reduce((m, i) => Math.max(m, linePrice(i)), 0);
    welcomeAmt = Math.round(unit * welcomePct) / 100;
  }
  if (welcomeAmt > saleAmt) return { pct: welcomePct, amount: welcomeAmt, label: `First order ${welcomePct}% off (one piece)` };
  let label = "";
  if (isBlackFriday2026()) label = "Black Friday (5% off)";
  else if (salePct > 0) label = campaignPct === salePct ? `${campaignLabel} (${salePct}% off)` : `Flash sale (${salePct}% off)`;
  return { pct: salePct, amount: saleAmt, label };
}

/* Rewards / gift dollar-voucher applied to the next order (separate from % coupons) */
function getVoucher() { try { return JSON.parse(localStorage.getItem("dm_voucher") || "null"); } catch (e) { return null; } }
function setVoucher(v) {
  // Welcome vouchers are now 10% off the first order
  // Always sent to the payment server as WELCOME10 (an account's SHD-V… welcome code is the same offer)
  if (v && (v.code === "WELCOME10" || /welcome/i.test(v.label || ""))) v = { code: "WELCOME10", pct: 10, label: "First order 10% off (one piece)" };
  try { v ? localStorage.setItem("dm_voucher", JSON.stringify(v)) : localStorage.removeItem("dm_voucher"); } catch (e) {} }
const WELCOME_VOUCHER = { code: "WELCOME10", pct: 10, label: "First order 10% off (one piece)" };
/* Welcome offer: 10% off the first order. Older $10 welcome vouchers already in a cart become the 10% offer. */
(function () {
  try {
    if (localStorage.getItem("dm_coupon") && !getVoucher()) setVoucher(WELCOME_VOUCHER);
    localStorage.removeItem("dm_coupon");
  } catch (e) {}
})();

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "grid" : "none";
  }
}

/* ============================================================
   Wishlist (localStorage)
   ============================================================ */
const WISH_KEY = "decomuse_wishlist";
function getWishlist() { try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; } }
function saveWishlist(w) { localStorage.setItem(WISH_KEY, JSON.stringify(w)); updateWishCount(); }
function isWishlisted(id) { return getWishlist().includes(id); }
function wishlistCount() { return getWishlist().length; }
function toggleWishlist(id, el) {
  const w = getWishlist(); const i = w.indexOf(id); let added;
  if (i >= 0) { w.splice(i, 1); added = false; } else { w.push(id); added = true; }
  saveWishlist(w);
  if (el) el.classList.toggle("on", added);
  // A product can show more than one heart (the photo overlay and the Save
  // button under the card), so keep every one of them in step.
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
    b.classList.toggle("on", added);
    const lab = b.querySelector("span");
    if (lab) lab.textContent = added ? "Saved" : "Save";
    b.setAttribute("aria-pressed", added ? "true" : "false");
  });
  const p = findProduct(id);
  showToast(added ? `Saved “${p ? p.name : "item"}” to your wishlist ♡` : "Removed from your wishlist");
  if (typeof renderWishlistPage === "function") renderWishlistPage();
}
function updateWishCount() {
  const el = document.getElementById("wishCount");
  if (el) { const n = wishlistCount(); el.textContent = n; el.style.display = n > 0 ? "grid" : "none"; }
}

/* ============================================================
   Account (localStorage demo)
   ============================================================ */
const ACCOUNT_KEY = "decomuse_account";
function getAccount() {
  try {
    const a = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
    // Voucher codes made before the rebrand start "DM-"; show them as Samira Home Decor "SHD-" codes
    if (a && Array.isArray(a.vouchers)) a.vouchers.forEach(v => { if (v && /^DM-/.test(v.code || "")) v.code = v.code.replace(/^DM-/, "SHD-"); });
    return a;
  } catch { return null; }
}
function saveAccount(a) { localStorage.setItem(ACCOUNT_KEY, JSON.stringify(a)); }
function logoutAccount() { localStorage.removeItem(ACCOUNT_KEY); }
function todayAU() { return new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }); }

/* ---- Toast ---- */
let toastTimer;
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast"; t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `${IC.spark} ${msg}`;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============================================================
   Multi-currency (DISPLAY only). Internal amounts & Stripe
   charges always stay in AUD, this just converts what the
   shopper SEES, using live exchange rates.
   ============================================================ */
const DM_CUR_INFO = {
  AUD: { symbol: "$", locale: "en-AU" }, NZD: { symbol: "$", locale: "en-NZ" },
  USD: { symbol: "$", locale: "en-US" }, GBP: { symbol: "£", locale: "en-GB" },
  EUR: { symbol: "€", locale: "en-IE" }, CAD: { symbol: "$", locale: "en-CA" },
  CHF: { symbol: "CHF ", locale: "de-CH" }
};
let DM_CUR = "AUD";
let DM_FX = {};   // rates relative to AUD, e.g. { NZD: 1.09, USD: 0.66 }
let DM_CUR_AUTO = false;   // true when we picked the currency from where the visitor is
try {
  DM_CUR = localStorage.getItem("dm_currency") || "";
  // No choice saved yet: show prices in the visitor's own currency straight away
  if (!DM_CUR && typeof detectRegion === "function" && typeof REGIONS !== "undefined") {
    const r = REGIONS[detectRegion()];
    DM_CUR = (r && r.cur) || "AUD";
    DM_CUR_AUTO = DM_CUR !== "AUD";
  }
  const c = JSON.parse(localStorage.getItem("dm_fx") || "null");
  if (c && c.rates) DM_FX = c.rates;
} catch (e) {}
if (!DM_CUR_INFO[DM_CUR]) DM_CUR = "AUD";

function dmRate(code) { return code === "AUD" ? 1 : (DM_FX[code] || null); }
function fmtCur(amount, code) {
  const info = DM_CUR_INFO[code] || DM_CUR_INFO.AUD;
  const val = Math.round(amount * 100) / 100;
  return info.symbol + val.toLocaleString(info.locale, { minimumFractionDigits: (val % 1 ? 2 : 0), maximumFractionDigits: 2 });
}
// Displayed price in the selected currency (falls back to AUD if no rate yet).
const money = (n) => {
  const r = dmRate(DM_CUR);
  if (DM_CUR === "AUD" || !r) return fmtCur(Number(n) || 0, "AUD");
  return fmtCur((Number(n) || 0) * r, DM_CUR);
};
// Always-AUD formatter (for the "charged in AUD" clarifier at cart/checkout).
const moneyAud = (n) => fmtCur(Number(n) || 0, "AUD").replace(/^\$/, "A$");
// Short label for the header, e.g. "AUD $", "GBP £".
function curLabel() { const c = (typeof DM_CUR !== "undefined") ? DM_CUR : "AUD"; return c + " " + (DM_CUR_INFO[c] || DM_CUR_INFO.AUD).symbol.trim(); }

// Fetch live rates (free, no key), cache for a day.
async function refreshFx() {
  try {
    const c = JSON.parse(localStorage.getItem("dm_fx") || "null");
    if (c && c.ts && (Date.now() - c.ts) < 86400000 && c.rates) { DM_FX = c.rates; return; }
    const res = await fetch("https://open.er-api.com/v6/latest/AUD");
    const data = await res.json();
    if (data && data.rates) { DM_FX = data.rates; localStorage.setItem("dm_fx", JSON.stringify({ ts: Date.now(), rates: DM_FX })); }
  } catch (e) {}
}
// Switch currency: ensure rates, save, reload so every price re-renders.
async function applyCurrency(code) {
  if (!DM_CUR_INFO[code]) code = "AUD";
  try { localStorage.setItem("dm_currency", code); } catch (e) {}
  if (code !== "AUD") await refreshFx();
  location.reload();
}
// Keep rates fresh in the background. On a visitor's first page in another
// currency we may not have rates yet: fetch them, then redraw once.
if (typeof window !== "undefined") {
  const hadRate = !!dmRate(DM_CUR);
  refreshFx().then(function () {
    if (DM_CUR !== "AUD" && !hadRate && dmRate(DM_CUR)) {
      try { if (sessionStorage.getItem("dm_fx_reloaded")) return; sessionStorage.setItem("dm_fx_reloaded", "1"); } catch (e) { return; }
      location.reload();
    }
  });
}

/* ---- Product image: uses assets/products/<id>.jpg (or .png/.webp), else placeholder ---- */
function prodImgTag(p) {
  const first = p.img || ("assets/products/" + p.id + ".jpg");
  return `<img class="ph-img" src="${first}" alt="${p.name}" data-pid="${p.id}" data-i="${p.img ? 99 : 0}" onload="this.closest('.card-media')&&this.closest('.card-media').classList.add('has-img')" onerror="nextProdImg(this)">`;
}
function nextProdImg(img) {
  const exts = ["jpg", "png", "jpeg", "webp"];
  const i = (+img.dataset.i || 0) + 1;
  if (i < exts.length && img.dataset.pid) { img.dataset.i = i; img.src = "assets/products/" + img.dataset.pid + "." + exts[i]; }
  else img.remove();
}

/* Stable per-product "Selling fast" flag (same subset every load).
   Set p.hot = true/false on a product to force it on/off. */
function sellingFast(p) {
  if (typeof p.hot === "boolean") return p.hot;
  let h = 0;
  for (let i = 0; i < p.id.length; i++) h = (h * 31 + p.id.charCodeAt(i)) >>> 0;
  return (h % 10) < 4; // ~a third to a half of products
}

/* ---- "Pay in 4" badge (Afterpay + Zip + Klarna) ---- */
function bnplBadge(price) {
  const p = Number(price);
  if (!isFinite(p) || p < 1) return "";
  const q = (p / 4).toFixed(2);
  return `<div class="bnpl">4 interest-free payments of <strong>$${q}</strong> with `
    + `<span class="bnpl-tag bnpl-ap">afterpay</span><span class="bnpl-tag bnpl-zip">zip</span><span class="bnpl-tag bnpl-klarna">Klarna</span></div>`;
}

/* Estimated delivery date for ready-to-ship items — counts BUSINESS days,
   computed live so it stays current. */
function estArrival(bizDays) {
  let n = bizDays || 6;
  const d = new Date();
  while (n > 0) { d.setDate(d.getDate() + 1); const g = d.getDay(); if (g !== 0 && g !== 6) n--; }
  try { return d.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" }); }
  catch (e) { return d.toDateString(); }
}
/* ---- Arrival date ranges, shown only at checkout ----
   Counted in calendar days from the day the order is placed.
   - Home décor, lifestyle & small items: 8 to 13 days
     (supplier: an order placed Nov 5 arrives Nov 13–18)
   - Furniture: about 4 weeks (28 to 33 days)
   A product can set its own window with arriveDays: [min, max]. */
const ARRIVE_DECOR = [8, 13];
const ARRIVE_FURNITURE = [28, 33];
const FURNITURE_RE = /\b(sofas?|couch|lounge suite|modular|daybed|armchairs?|chairs?|stools?|barstools?|bench|ottoman|tables?|desks?|bed frame|bed base|bedhead|headboard|beds?|dressers?|wardrobes?|robes? island|cabinets?|sideboards?|buffets?|console|bookcases?|bookshel(f|ves)|shelving unit|tallboy|chest of drawers|tv unit|entertainment unit|dining set|outdoor set|lounge set|hall ?stand)\b/i;
const NOT_FURNITURE_RE = /\b(cushion|pillow|cover|throw|blanket|lamp|pendant|chandelier|sconce|blender|kettle|toaster|mixer|runner|sheet|quilt|duvet|mat|rug|vase|candle|diffuser|tray|placemat|napkin|cloth)\b/i;
function isFurniture(p) {
  if (!p) return false;
  if (p.lead) return true;                                  // made-to-order pieces
  const n = p.name || "";
  return FURNITURE_RE.test(n) && !NOT_FURNITURE_RE.test(n.replace(/\b(bedside|side|coffee|dining|console) tables?\b/ig, "table"));
}
const ARRIVE_EXPRESS = [4, 15];   // optional Express on furniture with expressOpt
function arriveWindow(p) {
  if (p && p.expressOpt && typeof window !== "undefined" && window._fulfil === "express") return ARRIVE_EXPRESS;
  if (p && p.arriveBy) {
    const days = Math.max(1, Math.floor((new Date(p.arriveBy + "T23:59:59+10:30") - Date.now()) / 86400000));
    return [Math.max(1, days - 7), days];
  }
  if (p && Array.isArray(p.arriveDays) && p.arriveDays.length === 2) return p.arriveDays;
  return isFurniture(p) ? ARRIVE_FURNITURE : ARRIVE_DECOR;
}
function fmtArriveRange(win, from) {
  const a = new Date(from || Date.now()), b = new Date(a);
  a.setDate(a.getDate() + win[0]); b.setDate(b.getDate() + win[1]);
  const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return a.getMonth() === b.getMonth()
    ? `${M[a.getMonth()]} ${a.getDate()}–${b.getDate()}`
    : `${M[a.getMonth()]} ${a.getDate()} – ${M[b.getMonth()]} ${b.getDate()}`;
}
function arriveRange(p) { return fmtArriveRange(arriveWindow(p)); }
/* Gift hampers: Standard 5 to 10 business days, Express 3 to 5 business days
   (signature-packed hampers add their 14 working days of making time). */
const GIFT_STANDARD_BD = [5, 10];
const GIFT_EXPRESS_BD = [3, 5];
const EXPRESS_EXTRA = 150;   // extra charge for Express on gift orders (AUD)
function addBizDays(d, n) { const x = new Date(d); while (n > 0) { x.setDate(x.getDate() + 1); const g = x.getDay(); if (g !== 0 && g !== 6) n--; } return x; }
function giftWindow(item, express) {
  const w = express ? GIFT_EXPRESS_BD : GIFT_STANDARD_BD;
  const extra = /14 working days/i.test((item && (item.dispatch || item.contents)) || "") ? 14 : 0;
  return [w[0] + extra, w[1] + extra];
}
function fmtBizRange(win) {
  const a = addBizDays(Date.now(), win[0]), b = addBizDays(Date.now(), win[1]);
  const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return a.getMonth() === b.getMonth() ? `${M[a.getMonth()]} ${a.getDate()}–${b.getDate()}` : `${M[a.getMonth()]} ${a.getDate()} – ${M[b.getMonth()]} ${b.getDate()}`;
}
/* Whole-cart window: the slowest item decides when everything has arrived */
function cartArriveWindow() {
  let w = null;
  getCart().forEach(function (i) {
    if (i.giftCard || i.hamper) return;
    const p = (typeof findProduct === "function") ? findProduct(i.id) : null;
    const x = arriveWindow(p || i);
    if (!w || x[1] > w[1]) w = x;
  });
  return w;
}
/* "Saturday 10 January" (long) or "10 Jan" (short) for an arrive-by date */
function fmtArriveBy(ymd, short) {
  const d = new Date(ymd + "T12:00:00+10:30");
  try { return d.toLocaleDateString("en-AU", short ? { day: "numeric", month: "short" } : { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }
  catch (e) { return ymd; }
}

/* ---- Pre-order ----
   Furniture that takes 3 weeks or more to arrive is sold as a PRE-ORDER:
   the button says "Pre-order", the expected arrival date is shown, and a
   "Pre-Order Terms & Conditions" link opens the note below.
   Override one product with preorder: true / preorder: false in js/data.js. */
const PREORDER_MIN_DAYS = 21;
function standardArriveWindow(p) {          // ignores the optional Express upgrade
  if (p && p.arriveBy) {
    const days = Math.max(1, Math.floor((new Date(p.arriveBy + "T23:59:59+10:30") - Date.now()) / 86400000));
    return [Math.max(1, days - 7), days];
  }
  if (p && Array.isArray(p.arriveDays) && p.arriveDays.length === 2) return p.arriveDays;
  return isFurniture(p) ? ARRIVE_FURNITURE : ARRIVE_DECOR;
}
function isPreorder(p) {
  if (!p || p.price == null || p.cat === "Packaging" || p.comingSoon || p.giftCard || p.hamper || /^(hamper|giftcard)-/.test(String(p.id || ""))) return false;
  if (p.preorder === true) return true;
  if (p.preorder === false) return false;
  if (!(p.arriveBy || p.lead || isFurniture(p))) return false;
  return standardArriveWindow(p)[1] >= PREORDER_MIN_DAYS;
}
/* "Monday 11 January 2027" or "Dec 5–10" */
function preorderExpected(p, short) {
  return p.arriveBy ? fmtArriveBy(p.arriveBy, short) : fmtArriveRange(standardArriveWindow(p));
}
function preorderTermsLink(label) {
  return `<a href="#" class="preorder-terms-link" onclick="openPreorderTerms();return false;" style="color:inherit;text-decoration:underline;text-underline-offset:3px">${label || "Pre-Order Terms &amp; Conditions"}</a>`;
}
function openPreorderTerms() {
  let m = document.getElementById("preorderTerms");
  if (!m) {
    m = document.createElement("div");
    m.id = "preorderTerms";
    m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-labelledby", "preorderTermsTitle");
    m.style.cssText = "position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(11,31,58,.55)";
    m.innerHTML = `
      <div style="position:relative;background:#fff;max-width:560px;width:100%;max-height:88vh;overflow:auto;border-radius:14px;padding:30px 26px 26px;box-shadow:0 20px 60px rgba(0,0,0,.25);color:#4B4540;line-height:1.6;font-size:.95rem">
        <button type="button" aria-label="Close" onclick="closePreorderTerms()" style="position:absolute;top:10px;right:12px;background:none;border:0;font-size:1.6rem;line-height:1;cursor:pointer;color:#0B1F3A">&times;</button>
        <h2 id="preorderTermsTitle" style="font-family:Georgia,serif;color:#0B1F3A;margin:0 0 12px;font-size:1.55rem;line-height:1.25">Pre-Order Information &amp; Delivery Timeframes</h2>
        <p style="margin:0">The arrival dates shown on our website are estimates, based on our suppliers' production schedules and expected shipping times. We do our best to keep them accurate, but international freight and logistics can sometimes run into delays we don't see coming.</p>
        <h3 style="color:#0B1F3A;font-size:1rem;margin:16px 0 4px">Why might a pre-order date change?</h3>
        <p style="margin:0">Because our pieces are sourced from overseas, things like changes in production, shipping hold-ups, busy ports, customs clearance and bad weather can occasionally affect when an order arrives.</p>
        <h3 style="color:#0B1F3A;font-size:1rem;margin:16px 0 4px">How we keep delays to a minimum</h3>
        <p style="margin:0">We stay in regular contact with our suppliers and freight partners to track each order through production and shipping, spot possible delays early, and keep incoming orders on schedule wherever we can.</p>
        <h3 style="color:#0B1F3A;font-size:1rem;margin:16px 0 4px">We'll keep you in the loop</h3>
        <p style="margin:0">We know how exciting it is to wait for new furniture. If your expected arrival time changes significantly, our team will do our best to let you know as soon as possible.</p>
      </div>`;
    m.addEventListener("click", function (e) { if (e.target === m) closePreorderTerms(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePreorderTerms(); });
    document.body.appendChild(m);
  }
  m.style.display = "flex";
  document.documentElement.style.overflow = "hidden";
  const c = m.querySelector("button"); if (c) c.focus();
}
function closePreorderTerms() {
  const m = document.getElementById("preorderTerms");
  if (m) m.style.display = "none";
  document.documentElement.style.overflow = "";
}

/* Show a "Get it by" line for ready-to-ship furniture */
function arrivalLine(p) {
  if (p.lead || !p.fastShip) return "";
  return `<div style="font-size:.72rem;color:#5a5049;margin-top:5px">🚚 Get it by <strong style="color:#0B1F3A">${estArrival(6)}</strong></div>`;
}

/* ---- Product card markup ---- */
function productCard(p) {
  if (p.comingSoon) {
    return `
    <article class="card product coming-soon" data-cat="${p.cat}">
      <div class="card-media">
        <div class="card-badges"><span class="tag soon">Back Soon</span></div>
        <div class="ph cs-ph" data-label="${p.name}">
          <img class="cs-logo" src="assets/logo.jpg" alt="Samira Home Decor" loading="lazy" onerror="this.style.display='none'">
          <span class="cs-msg">Image Coming Soon</span>
        </div>
      </div>
      <div class="card-body">
        <span class="cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <div class="cs-status">Coming back soon</div>
      </div>
    </article>`;
  }
  const tag = p.tag ? `<span class="tag ${/sale|black friday/i.test(p.tag) ? 'sale' : ''}">${p.tag}</span>` : "";
  const hot = sellingFast(p) ? `<span class="badge-hot">⚡ Selling fast</span>` : "";
  const was = p.was ? `<small>${money(p.was)}</small>` : "";
  return `
    <article class="card product" data-cat="${p.cat}">
      <div class="card-media">
        <div class="card-badges">${hot}${tag}</div>
        <button class="wish ${isWishlisted(p.id) ? "on" : ""}" data-wish="${p.id}" aria-pressed="${isWishlisted(p.id)}" aria-label="Save to wishlist" onclick="toggleWishlist('${p.id}', this)">${IC.heart}</button>
        <button class="find-sim" type="button" aria-label="Find similar products on Samira Home Decor" title="Find similar on Samira Home Decor" onclick="findSimilar('${p.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="11" cy="11" r="3"/><path d="m15 15 2.2 2.2"/></svg></button>
        <a href="product.html?id=${p.id}" aria-label="${p.name}"><div class="ph ${p.ph}" data-label="${p.name}">${prodImgTag(p)}</div></a>
        <span class="dm-verified" title="Samira Home Decor Verified, quality checked by our team"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.6l2.5 1.9 3.1-.3 1 3 2.7 1.6-1.2 2.9 1.2 2.9-2.7 1.6-1 3-3.1-.3L12 22.4l-2.5-1.9-3.1.3-1-3-2.7-1.6 1.2-2.9-1.2-2.9 2.7-1.6 1-3 3.1.3z" fill="currentColor"/><path d="M8 12l2.6 2.6L16 9.2" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg><span>SYS Verified</span></span>
        <button class="zoom-btn" type="button" aria-label="Zoom image" onclick="openZoom(event, this)">${IC.search}</button>
      </div>
      <div class="card-body">
        <span class="cat">${p.cat}</span>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        ${p.cat === "Packaging" ? `<div class="pkg-enquire-tag">Retail &amp; wholesale · enquire</div>` : `
        <div class="price">${p.sizes && p.sizes.length ? "from " : ""}${money(p.price)}${was}</div>
        ${p.dontPay ? `<div class="dont-pay"><span class="dp-tag">Don't Pay</span> <s>${money(p.dontPay)}</s><button class="dp-info" type="button" aria-label="Why?" onclick="showDontPayInfo(event)">ⓘ</button></div>` : ""}
        ${p.memberPrice ? `<div class="member-price">✦ Members ${money(p.memberPrice)}</div>` : ""}
        ${p.freeship ? `<div class="freeship-tag">🚚 Free shipping</div>` : ""}
        ${isPreorder(p)
          ? `<div style="display:inline-block;font-size:.7rem;font-weight:700;color:#0B1F3A;background:#F4EFE6;padding:3px 9px;border-radius:20px;margin-top:6px" title="Pre-order: expected arrival">⏳ Pre-order · ${p.arriveBy ? "arrives by " : "arrives "}${preorderExpected(p, true)}</div>`
          : p.arriveBy
          ? `<div style="display:inline-block;font-size:.7rem;font-weight:700;color:#0B1F3A;background:#F4EFE6;padding:3px 9px;border-radius:20px;margin-top:6px" title="Delivered by our supplier">🚚 Arrives by ${fmtArriveBy(p.arriveBy, true)}</div>`
          : p.lead
          ? `<div style="display:inline-block;font-size:.7rem;font-weight:600;color:#8a7f77;background:#F4EFE6;padding:3px 9px;border-radius:20px;margin-top:6px" title="Made to order">⏳ Made to order · ${p.lead}</div>`
          : `<div style="display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.2px;color:#0B1F3A;background:#E0C992;padding:3px 9px;border-radius:20px;margin-top:6px" title="In stock, ready to ship">✓ Ready to ship · a few days</div>`}
        ${arrivalLine(p)}`}
        <div class="card-actions">
          <button class="card-act ${isWishlisted(p.id) ? "on" : ""}" type="button" data-wish="${p.id}" aria-pressed="${isWishlisted(p.id)}" aria-label="Save ${p.name} to your wishlist"
                  title="Save to wishlist" onclick="toggleWishlist('${p.id}', this)">${IC.heart}<span>${isWishlisted(p.id) ? "Saved" : "Save"}</span></button>
          <button class="card-act" type="button" aria-label="Download a photo of ${p.name}"
                  title="Download the photo" onclick="downloadProductImage('${p.id}', this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg><span>Download</span></button>
        </div>
        <div class="product-foot">
          ${(typeof realReviews === "function" && realReviews(p.id).length) ? `<span class="stars">${"★".repeat(Math.round(realReviews(p.id).reduce((t, r) => t + r.rating, 0) / realReviews(p.id).length))}</span>` : "<span></span>"}
          ${p.cat === "Packaging"
            ? `<a class="btn btn--primary btn--sm" href="product.html?id=${p.id}">View details</a>`
            : `<button class="btn btn--primary btn--sm" onclick="addToCart('${p.id}')">${isPreorder(p) ? "Pre-order" : "Add to cart"}</button>`}
        </div>
      </div>
    </article>`;
}


/* Download a product photo, for mood boards, client presentations and
   the styling clients who ask for "that one, but send it to me". */
async function downloadProductImage(id, btn) {
  const p = findProduct(id);
  if (!p) return;
  const src = (p.imgs && p.imgs[0]) || p.img;
  if (!src) { showToast("No photo to download for this one"); return; }
  const label = btn && btn.querySelector("span");
  const was = label ? label.textContent : "";
  if (label) label.textContent = "Saving…";
  try {
    const res = await fetch(src.split("?")[0]);
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const ext = (src.split("?")[0].match(/\.(\w+)$/) || [, "jpg"])[1];
    const name = (p.name || "product").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${name}-${p.sku || p.id}.${ext}`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    showToast(`Saved the photo of “${p.name}”`);
  } catch (e) {
    // Some browsers block a programmatic download; opening it lets the shopper save it themselves.
    window.open(src, "_blank", "noopener");
  }
  if (label) label.textContent = was || "Download";
}

function renderProducts(targetId, list) {
  const el = document.getElementById(targetId);
  if (el) el.innerHTML = list.map(productCard).join("");
}

document.addEventListener("DOMContentLoaded", () => { updateCartCount(); updateWishCount(); });

/* ---- Email my shopping list ----
   If the Brevo email service is configured (server env var BREVO_API_KEY),
   the list is sent FROM hello@samirahomedecor.com.au TO the shopper, with
   a copy to the business inbox. If not configured, it gracefully falls back
   to opening the shopper's own email app pre-filled. */
function bagMailtoFallback(cart) {
  const origin = (location.origin && location.origin.indexOf("http") === 0) ? location.origin : "https://samirahomedecor.com.au";
  const lines = cart.map(i => {
    const variant = [i.colour, i.size].filter(Boolean).join(", ");
    return `• ${i.qty} x ${i.name}${variant ? " (" + variant + ")" : ""}, ${money(i.price * i.qty)}\n  ${origin}/product.html?id=${i.id}`;
  }).join("\n\n");
  const body = `Here's my Samira Home Decor shopping list 🛍️\n\n${lines}\n\nSubtotal: ${money(cartTotal())}\n\nShop the collection anytime: ${origin}/shop.html`;
  window.location.href = "mailto:?subject=" + encodeURIComponent("My Samira Home Decor shopping list") + "&body=" + encodeURIComponent(body);
}

async function emailMyBag() {
  const cart = getCart();
  if (!cart.length) { showToast("Your shopping list is empty"); return; }

  const cfg = (typeof SAMIRA !== "undefined" && SAMIRA) || {};
  const endpoint = cfg.emailListEndpoint || "/.netlify/functions/send-shopping-list";

  // Pre-fill with the logged-in member's email if we have one.
  const acct = (typeof getAccount === "function" && getAccount()) || null;
  const to = window.prompt("Enter the email address to send your shopping list to:", (acct && acct.email) || "");
  if (to === null) return;                 // cancelled
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to.trim())) { showToast("Please enter a valid email address"); return; }

  const items = cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price, colour: i.colour, size: i.size }));
  showToast("Sending your shopping list…");
  try {
    const res = await fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ to: to.trim(), items, subtotal: cartTotal() })
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) { showToast("Your shopping list is on its way ✉️"); return; }
    // Service not configured yet → fall back to the shopper's email app.
    bagMailtoFallback(cart);
  } catch (e) {
    bagMailtoFallback(cart);
  }
}

(function () {
  try { const v = JSON.parse(localStorage.getItem("dm_voucher") || "null"); if (v && !v.pct && (v.code === "WELCOME10" || /welcome/i.test(v.label || ""))) setVoucher(v); } catch (e) {}
})();
