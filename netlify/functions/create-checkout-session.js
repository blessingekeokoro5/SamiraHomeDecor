const { quoteSuppliers } = require("./lib/supplier-delivery");
const FurnitureFreight = require("../../js/furniture-freight.js");
/* ============================================================
   Samira Home Decor — Create Stripe Checkout Session  (Netlify Function)
   ------------------------------------------------------------
   Runs on the SERVER only. Uses your Stripe SECRET key, which
   must NEVER be exposed to the browser.

   Endpoint (after deploy):
     /.netlify/functions/create-checkout-session
     (also aliased to /api/create-checkout-session)

   TRUST MODEL
   -----------
   Nothing about money is taken from the browser. The client sends
   only WHAT it wants to buy (product id, quantity, variant); every
   dollar figure — unit price, discount, shipping — is worked out
   here from _catalogue.json, which is generated from js/data.js at
   deploy time by scripts/gen-catalogue.js. A shopper editing their
   cart in localStorage or devtools cannot change what they are
   charged; an unknown product id is refused outright.

   Required environment variables (set in Netlify dashboard):
     STRIPE_SECRET_KEY   = sk_test_...  then later  sk_live_...
     SITE_URL            = https://samirahomedecor.com.au
   Optional:
     MAX_VOUCHER_AUD     = largest rewards voucher redeemable (default 20)
     WEB3FORMS_KEY       = so gift-card-paid orders still reach your inbox
   ============================================================ */

const CATALOGUE = require("./_catalogue.json");
const { loadGiftCard, redeemGiftCard, normaliseCode } = require("./_giftcards");
const { emailShop } = require("./_notify");
const { recordReferral } = require("./_referrals");

// Constructed lazily: the Stripe client throws if the key is missing, and we'd
// rather return a clear error than have the whole function fail to load.
let _stripe = null;
function getStripe() {
  if (!_stripe) _stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  return _stripe;
}

const SITE_URL = process.env.SITE_URL || "https://samirahomedecor.com.au";

// Countries we ship to (ISO codes) — matches the site's shipping calculator regions
const SHIP_COUNTRIES = ["AU", "NZ", "GB", "US", "CA", "CH", "DE"];

/* ---- Shipping: mirrors SHIP_ZONES in js/checkout.js ---------- */
const SHIP_ZONES = {
  "Australia":      { base: 9.95,  perKg: 2.5,  freeOver: 3500, days: [3, 8] },
  "New Zealand":    { base: 14.20, perKg: 14.80, days: [6, 12] },
  "United Kingdom": { base: 21.30, perKg: 28.60, days: [10, 24] },
  "United States":  { base: 16.10, perKg: 27.50, days: [10, 24] },
  "Canada":         { base: 16.10, perKg: 27.50, days: [10, 24] },
  "Switzerland":    { base: 21.30, perKg: 28.60, days: [10, 24] },
  "Germany":        { base: 21.30, perKg: 28.60, days: [10, 24] },
};

// Pure helpers exposed for financial parity tests; Netlify invokes handler only.
exports._test = { resolveLine, shippingFor, chargePerUnit, protectedVoucher };
const DEFAULT_ITEM_KG = 0.75;
const HEAVY_KG = 50, HEAVY_MIN_FEE = 150;  // keep in step with js/checkout.js
const EXPRESS_EXTRA = 150;   // extra charge for Express on gift orders (AUD), keep in step with js/cart.js

/* ---- Discount ceiling ---------------------------------------
   An order gets ONE percentage discount (the best of these):
     - the weekly flash sale (10/15/20%, a 3-hour window)
     - a live sale campaign
     - WELCOME10: 10% off a signed-in member's FIRST order only.
   The flash sale runs on the shopper's local clock, so we allow it if
   the window is open anywhere in the world right now. The welcome 10%
   is only allowed after the member login AND the "no earlier paid
   order for this email" checks below. */
const WELCOME_CODE = "WELCOME10";
const WELCOME_PCT = 10;

// Same deterministic weekly schedule as getFlashSale() in js/components.js.
function isoWeekKey(d) {
  const dt = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dayNum = (dt.getUTCDay() + 6) % 7;
  dt.setUTCDate(dt.getUTCDate() - dayNum + 3);
  const firstThu = new Date(Date.UTC(dt.getUTCFullYear(), 0, 4));
  const week = 1 + Math.round(((dt - firstThu) / 86400000 - 3 + ((firstThu.getUTCDay() + 6) % 7)) / 7);
  return dt.getUTCFullYear() * 100 + week;
}
function hashInt(n) { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n = n ^ (n >>> 4); n = Math.imul(n, 0x27d4eb2d); n = n ^ (n >>> 15); return Math.abs(n); }
function flashForDate(d) {
  const h = hashInt(isoWeekKey(d));
  return { day: h % 7, startHour: 10 + (h % 7), percent: [10, 15, 20][h % 3] };
}
// Largest flash-sale % live in any time zone (UTC-12 to UTC+14) right now.
function flashPctNow(nowMs) {
  let best = 0;
  for (let offMin = -12 * 60; offMin <= 14 * 60; offMin += 15) {
    const local = new Date(nowMs + offMin * 60000); // read with getUTC* = shopper's wall clock
    const f = flashForDate(local);
    const hour = local.getUTCHours() + local.getUTCMinutes() / 60;
    if (local.getUTCDay() === f.day && hour >= f.startHour && hour < f.startHour + 3) best = Math.max(best, f.percent);
  }
  return best;
}
// Best discount available to ANY shopper right now, without the welcome offer.
function saleDiscountPct() {
  let pct = flashPctNow(Date.now());
  const c = CATALOGUE.campaign;
  if (c && c.percent && c.endsAt && Date.now() < new Date(c.endsAt).getTime()) {
    pct = Math.max(pct, Number(c.percent) || 0);
  }
  return Math.min(pct, 90);
}

// Has this email already paid for an order? (Checks Stripe, so it covers
// guest and member orders alike.) Throws if Stripe can't be reached.
async function hasPaidOrder(email) {
  const e = String(email || "").trim().toLowerCase();
  if (!e) return false;
  const list = await getStripe().checkout.sessions.list({ customer_details: { email: e }, limit: 100 });
  return list.data.some((s) => s.payment_status === "paid");
}
/* Rewards vouchers live in the shopper's browser, so we can't verify one
   exists — the cap IS the control. Rewards issue $10 and $20 vouchers, so
   $20 bounds what a tampered cart can claim. Larger prize vouchers should
   be issued as gift cards, which ARE verified against the ledger. */
const MAX_VOUCHER = Number(process.env.MAX_VOUCHER_AUD) || 20;

const GIFT_CARD_MIN = 10;
const GIFT_CARD_MAX = 2000;

/* Samira Home Decor order numbers: SHD- followed by 6 digits, e.g. SHD-482913 */
function newOrderNo() { return "SHD-" + Math.floor(100000 + Math.random() * 900000); }

/* ---- Member pricing ----
   Members log in with an emailed code; auth-verify-code signs a token for
   their email. We re-check that signature here, so only a real logged-in
   member is charged member prices. */
const crypto = require("crypto");
const AUTH_SECRET = process.env.AUTH_SECRET || process.env.BREVO_API_KEY || "";
const MEMBER_TOKEN_DAYS = 400;
function verifyMember(m) {
  try {
    if (!AUTH_SECRET) return false;
    const email = String((m && m.email) || "").trim().toLowerCase();
    const [issued, sig] = String((m && m.token) || "").split(".");
    if (!email || !issued || !sig) return false;
    if (Date.now() - Number(issued) > MEMBER_TOKEN_DAYS * 864e5) return false;
    const good = crypto.createHmac("sha256", AUTH_SECRET).update(email + "|" + issued).digest("hex");
    return good.length === sig.length && crypto.timingSafeEqual(Buffer.from(good), Buffer.from(sig));
  } catch (e) { return false; }
}

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

const round2 = (n) => Math.round(n * 100) / 100;

// Recurring sale: 10% off every sofa (id sfNN) on Tue/Thu/Sat, Australian time.
// Mirrors the browser logic in js/data.js so the charged price always matches.
function sofaSaleToday() {
  try {
    return ["Tue", "Thu", "Sat"].indexOf(
      new Date().toLocaleDateString("en-US", { timeZone: "Australia/Adelaide", weekday: "short" })) !== -1;
  } catch (e) { return false; }
}
const SOFA_SALE_PCT = 10;

// Black Friday → Cyber Monday: 15% off ready-to-ship items (id lxNN), Adelaide time.
// Auto-runs each year (4th Friday of November through the following Monday).
// Mirrors the browser logic in js/data.js so the charged price always matches.
const BLACK_FRIDAY_PCT = 15;
function blackFridayOn() {
  try {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Adelaide" }));
    const y = now.getFullYear();
    let fridays = 0, day = 1;
    for (; day <= 30; day++) { if (new Date(y, 10, day).getDay() === 5 && ++fridays === 4) break; }
    const start = new Date(y, 10, day, 0, 0, 0);
    const end = new Date(y, 10, day + 3, 23, 59, 59); // +3 days = Cyber Monday
    return now >= start && now <= end;
  } catch (e) { return false; }
}

// Halloween: 15% off every priced catalogue product except Packaging,
// 31 Oct – 2 Nov inclusive (Adelaide time), every year. Takes priority over
// the sofa sale and Black Friday (no stacking). Mirrors js/data.js.
const HALLOWEEN_PCT = 15;
function halloweenOn() {
  try {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Adelaide" }));
    const y = now.getFullYear();
    return now >= new Date(y, 9, 31, 0, 0, 0) && now <= new Date(y, 10, 2, 23, 59, 59);
  } catch (e) { return false; }
}

/* Resolve one cart line to a trusted { name, unitPrice, qty, weight }.
   Throws if the line can't be justified from the catalogue. */
function resolveLine(raw, member) {
  const qty = Math.max(1, Math.min(99, parseInt(raw && raw.qty, 10) || 1));
  const id = String((raw && raw.id) || "");

  // --- Gift cards: no catalogue entry; the amount IS the price ---
  if (id.startsWith("giftcard-")) {
    const gc = raw.giftCard || {};
    const amount = round2(Number(gc.amount));
    if (!isFinite(amount) || amount < GIFT_CARD_MIN || amount > GIFT_CARD_MAX) {
      throw new Error(`Gift card amount must be between $${GIFT_CARD_MIN} and $${GIFT_CARD_MAX}.`);
    }
    return { name: `Samira Home Decor Gift Card ($${amount})`, sku: gc.code || "", unitPrice: amount, qty, weight: 0 };
  }

  // --- Custom hampers: rebuilt from the chosen components ---
  if (id.startsWith("hamper-")) {
    const lines = Array.isArray(raw.hamper) ? raw.hamper : null;
    if (!lines || !lines.length) throw new Error("Custom hamper contents are missing — please rebuild your hamper.");
    let total = 0, count = 0;
    lines.forEach((l) => {
      const item = CATALOGUE.hamperItems[String((l && l.id) || "")];
      if (!item || item.price == null) throw new Error("That hamper contains an item we no longer stock.");
      const q = Math.max(1, Math.min(99, parseInt(l.qty, 10) || 1));
      total += item.price * q;
      count += q;
    });
    if (total < CATALOGUE.hamperMin) throw new Error(`Hampers start at $${CATALOGUE.hamperMin}.`);
    // Signature packaging kit, priced from the catalogue (never from the browser)
    let kitName = "";
    if (raw.kit) {
      const kit = (CATALOGUE.packagingKits || {})[String(raw.kit)];
      if (!kit) throw new Error("That packaging kit isn't available, please choose another.");
      total += kit.price; kitName = " + " + kit.name;
    }
    return { name: `Custom Gift Hamper (${count} items)${kitName}`, sku: "hamper", unitPrice: round2(total), qty, weight: DEFAULT_ITEM_KG * count };
  }

  // --- Catalogue products ---
  const p = CATALOGUE.products[id];
  if (!p) throw new Error("Sorry, one of the items in your bag is no longer available.");
  if (p.price == null) throw new Error(`“${p.name}” is enquiry-only — please contact us for a quote.`);

  // A size may carry its own price; anything else falls back to the base price.
  const size = raw.size != null ? String(raw.size) : "";
  let unitPrice = p.price;
  if (size && Object.prototype.hasOwnProperty.call(p.sizes, size)) unitPrice = p.sizes[size];

  // Logged-in members pay the member price (a size may set its own).
  if (member && p.memberPrice != null && p.cat !== "Packaging" && p.price > 0) {
    const sm = p.sizesMember || {};
    if (size && sm[size] != null && unitPrice > 0) unitPrice = Math.min(unitPrice, sm[size]);
    else unitPrice = unitPrice * Math.min(1, p.memberPrice / p.price);
  }

  if (!p.readyDining && p.cat !== "Packaging" && halloweenOn()) {
    // Halloween: 15% off storewide; replaces the other promos rather than stacking.
    // Whole dollars, exactly as js/data.js rounds the price the shopper sees.
    unitPrice = Math.round(unitPrice * (1 - HALLOWEEN_PCT / 100));
  } else {
    // Recurring sofa sale (Tue/Thu/Sat AU time) — apply to the trusted price.
    if (/^sf\d+$/.test(id) && sofaSaleToday()) unitPrice = round2(unitPrice * (1 - SOFA_SALE_PCT / 100));
    // Black Friday → Cyber Monday: 15% off ready-to-ship items (id lxNN).
    if (!p.readyDining && /^lx\d+$/.test(id) && blackFridayOn()) unitPrice = round2(unitPrice * (1 - BLACK_FRIDAY_PCT / 100));
  }

  const variant = [raw.colour, size].filter(Boolean).map(String).join(", ");
  return {
    name: (variant ? `${p.name} (${variant})` : p.name).slice(0, 250),
    sku: id,
    unitPrice: round2(unitPrice),
    qty,
    weight: p.weight != null ? p.weight : DEFAULT_ITEM_KG,
    expressShip: p.expressShip != null ? p.expressShip : null,
    expressOpt: p.expressOpt != null ? p.expressOpt : null,
    readyDining: !!p.readyDining, supplier: p.supplier, supplierProductUuid: p.supplierProductUuid, supplierSku:p.supplierSku, supplierHandle:p.supplierHandle, profitMarkup:p.profitMarkup, supplierProductId:p.supplierProductId, supplierOptions:p.supplierOptions, supplierCost:p.supplierCost, freightClass: p.freightClass,
    chairSets: p.chairSets, furniture: p.furniture, shippingSize: p.shippingSize,
    shipFee: p.shipFee != null ? p.shipFee : null,
    arriveBy: p.arriveBy || null,
    auOnly: !!p.auOnly,
    preorder: !!p.preorder,
    expected: p.preorder ? expectedText(p) : "",
  };
}

// "by Monday 11 January 2027" or "5 Dec – 10 Dec 2026" (Adelaide dates)
function adlDate(d, opts) {
  try { return d.toLocaleDateString("en-AU", Object.assign({ timeZone: "Australia/Adelaide" }, opts)); }
  catch (e) { return d.toISOString().slice(0, 10); }
}
function expectedText(p) {
  if (p.arriveBy) return "by " + adlDate(new Date(p.arriveBy + "T12:00:00+10:30"), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const w = Array.isArray(p.arriveDays) ? p.arriveDays : [28, 33];
  const a = new Date(Date.now() + w[0] * 864e5), b = new Date(Date.now() + w[1] * 864e5);
  return adlDate(a, { day: "numeric", month: "short" }) + " – " + adlDate(b, { day: "numeric", month: "short", year: "numeric" });
}

// Business days from today until a YYYY-MM-DD date (Adelaide), at least 1.
function bizDaysUntil(ymd) {
  const end = new Date(ymd + "T23:59:59+10:30");
  const d = new Date(); let n = 0;
  while (d < end) { d.setDate(d.getDate() + 1); const g = d.getDay(); if (g !== 0 && g !== 6 && d <= end) n++; }
  return Math.max(1, n);
}

// Discounted products keep their per-unit margin even when quantities increase.
function protectedVoucher(asked, eligibleSubtotal, discount) {
  return round2(Math.min(Math.max(Number(asked)||0,0), MAX_VOUCHER, Math.max(0,eligibleSubtotal-discount)));
}
function chargePerUnit(line, eligibleSubtotal, discount, voucher) {
  return Math.round(line.unitPrice * (line.readyDining ? 1 : (eligibleSubtotal > 0 ? 1 - (discount + voucher) / eligibleSubtotal : 1)) * 100);
}
function shippingFor(country, fulfil, lines, afterDiscount, postcode, decorQuote) {
  const res = shippingBase(country, fulfil, lines, afterDiscount);
  const ready = FurnitureFreight.quote(lines, postcode, country, decorQuote);
  if (ready.quoteRequired) return { quoteRequired: true, message: ready.message };
  res.amount = round2(res.amount + ready.fee);
  res.mixedSurcharge = ready.mixedSurcharge || 0;
  if(ready.days)res.days=[Math.max(res.days[0],ready.days[0]),Math.max(res.days[1],ready.days[1])];
  if (ready.fee) res.label = (lines.some(l => l.readyDining && !String(l.freightClass || "").startsWith("decor-")) ? "Furniture delivery" : "Home décor delivery") + (ready.surcharge ? " (includes $" + ready.surcharge.toFixed(2) + " for additional items)" : "");
  if (ready.mixedSurcharge || lines.some(l=>l.supplier==='Adairs')) res.label = "Delivery";
  // Fixed per-item delivery: never free, added on top.
  const fixed = round2(lines.reduce((n, l) => n + (l.shipFee && !l.expressShip ? l.shipFee * l.qty : 0), 0));
  if (fixed > 0) {
    res.amount = round2(res.amount + fixed);
    if (/Free/.test(res.label)) res.label = "Standard delivery";
  }
  // The slowest arrive-by date decides when the whole order arrives.
  const latest = lines.reduce((m, l) => (l.arriveBy ? Math.max(m, bizDaysUntil(l.arriveBy)) : m), 0);
  if (latest && (!res.days || latest > res.days[1])) res.days = [Math.max(1, latest - 5), latest];
  return res;
}

function shippingBase(country, fulfil, lines, afterDiscount) {

  const zone = SHIP_ZONES[country] || SHIP_ZONES["Australia"];
  // Express-only items (sofas) carry their own delivery fee per item and
  // are left out of the weight-based quote. Keep in step with js/checkout.js.
  const expressFee = round2(lines.reduce((n, l) => n + (l.expressShip ? l.expressShip * l.qty : 0), 0));
  const rest = lines.filter((l) => !l.expressShip && !l.shipFee && !l.readyDining);
  let amount = 0;
  if (rest.length) {
    const kg = round2(Math.max(rest.reduce((n, l) => n + l.weight * l.qty, 0), 0.1));
    amount = round2(zone.base + zone.perKg * kg);
    if (kg > HEAVY_KG) amount = Math.max(amount, HEAVY_MIN_FEE);  // over 50kg: at least $150
    // Free over $3,500, except heavy orders (over 50kg), which pay a flat $150
    if (zone.freeOver && afterDiscount >= zone.freeOver) amount = kg > HEAVY_KG ? HEAVY_MIN_FEE : 0;
  }
  // Optional Express on furniture (expressOpt): a per-item fee on top of shipping.
  const optFee = fulfil === "fexpress" ? round2(lines.reduce((n, l) => n + (l.expressOpt ? l.expressOpt * l.qty : 0), 0)) : 0;
  if (expressFee > 0 || optFee > 0) return { amount: round2(amount + expressFee + optFee), label: "Express delivery", days: [4, 15] };
  if (fulfil === "express") return { amount: round2(amount + EXPRESS_EXTRA), label: "Express shipping", days: [3, 5] };
  if (fulfil === "gift") return { amount, label: amount === 0 ? "Free standard shipping" : "Standard shipping", days: [5, 10] };
  return { amount, label: amount === 0 ? "Free standard shipping" : "Standard shipping", days: zone.days };
}


/* ---- Simple per-IP throttle -----------------------------------------
   One warm function instance keeps this map, so it is not a hard
   guarantee across every instance. It is enough to stop one script
   hammering checkout, which is what we are guarding against. Real
   shoppers never come close to the limit. */
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 12;
const recentCalls = new Map();

function overRateLimit(ip) {
  if (!ip) return false;
  const now = Date.now();
  const hits = (recentCalls.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recentCalls.set(ip, hits);
  if (recentCalls.size > 500) {            // keep the map from growing forever
    for (const [k, v] of recentCalls) {
      if (!v.length || now - v[v.length - 1] > RATE_WINDOW_MS) recentCalls.delete(k);
    }
  }
  return hits.length > RATE_MAX;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return jsonResponse(200, {});
  if (event.httpMethod !== "POST") return jsonResponse(405, { error: "Method Not Allowed" });

  const ip = (event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"] || "").split(",")[0].trim();
  if (overRateLimit(ip)) {
    return jsonResponse(429, { error: "That's a lot of attempts in a row. Please wait a moment and try again." });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not set");
    return jsonResponse(500, { error: "Payments aren’t configured yet. Please contact us to complete your order." });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { items = [], customer = {} } = body;
    let fulfil = String(body.fulfil || "ship");

    if (!Array.isArray(items) || items.length === 0) {
      return jsonResponse(400, { error: "Your cart is empty." });
    }
    if (items.length > 100) {
      return jsonResponse(400, { error: "That's more items than we can check out at once." });
    }

    // Gift hamper orders (matches isGiftOrder in js/checkout.js) choose Standard
    // (5 to 10 business days) or Express (3 to 5); everything else is standard delivery.
    const itemId = (i) => String((i && i.id) || "");
    const giftOrder = items.some((i) => itemId(i).startsWith("hamper-")) &&
      items.every((i) => itemId(i).startsWith("hamper-") || itemId(i).startsWith("giftcard-"));
    const wantsExpress = fulfil === "express";
    fulfil = !giftOrder ? "ship" : (wantsExpress ? "express" : "gift");

    // 1. Trusted prices, from the catalogue only.
    const isMemberBuyer = verifyMember(body.member);
    const lines = items.map((i) => resolveLine(i, isMemberBuyer));
    // Furniture with an Express option (expressOpt) can be sent express for a per-item fee.
    if (!giftOrder && wantsExpress && lines.some((l) => l.expressOpt)) fulfil = "fexpress";

    // Australia Post International Standard tops out at 20 kg per parcel, so
    // bulky furniture can only ship within Australia.
    const INTL_MAX_KG = 20;
    const shipCountry = String(customer.country || "Australia");
    if (shipCountry !== "Australia") {
      const auOnly = lines.find((l) => l.auOnly);
      if (auOnly) {
        return jsonResponse(400, { error: `"${auOnly.name}" can only be delivered within Australia. Please remove it for international orders.` });
      }
      const tooHeavy = lines.find((l) => l.weight > INTL_MAX_KG);
      if (tooHeavy) {
        return jsonResponse(400, { error: `"${tooHeavy.name}" is too large to ship outside Australia (over ${INTL_MAX_KG}kg). Please remove it for international orders, or contact us for a freight quote.` });
      }
    }

    // Gift cards being BOUGHT in this order. They're only issued into the
    // ledger once Stripe confirms payment (see stripe-webhook.js), so an
    // abandoned checkout never mints a spendable card.
    const purchasedCards = items
      .filter((i) => String((i && i.id) || "").startsWith("giftcard-") && i.giftCard && i.giftCard.code)
      .map((i) => ({ c: String(i.giftCard.code).toUpperCase(), a: round2(Number(i.giftCard.amount)) }));
    const subtotal = round2(lines.reduce((n, l) => n + l.unitPrice * l.qty, 0));
    if (subtotal <= 0) return jsonResponse(400, { error: "Your cart total is empty." });

    // 2. Discount: take what was asked for, clamped to what's reachable.
    //    The welcome 10% only counts for a signed-in member with no earlier paid order.
    const askedPct = Math.max(Number(body.discountPct) || 0, 0);
    const salePct = saleDiscountPct();
    const memberEmail = isMemberBuyer ? String(body.member.email).trim().toLowerCase() : "";
    const wantsWelcome = String(body.voucherCode || "").toUpperCase() === WELCOME_CODE && askedPct > salePct;
    let welcomeOk = false;
    if (wantsWelcome) {
      if (!isMemberBuyer) {
        return jsonResponse(400, { code: "welcome_not_eligible", error: "The 10% first-order offer is for members. Please sign in or join free (it takes a minute), then check out again. We've taken it off your order for now." });
      }
      let ordered;
      try {
        ordered = await hasPaidOrder(memberEmail) ||
          (customer.email && String(customer.email).trim().toLowerCase() !== memberEmail ? await hasPaidOrder(customer.email) : false);
      } catch (e) {
        console.error("Welcome offer order check failed:", e.message);
        return jsonResponse(503, { error: "We couldn't check your first-order offer just now. Please try again in a moment." });
      }
      if (ordered) {
        return jsonResponse(400, { code: "welcome_not_eligible", error: "The 10% welcome offer is for your first order only, and we can see you've ordered with us before. We've taken it off your order. Thank you for shopping with us again!" });
      }
      welcomeOk = true;
    }
    // The welcome 10% covers ONE piece only: one unit of the dearest line (one set for a
    // "Set of 2"), never every unit. Gift cards being bought don't count. A sale % (whole
    // order) is used instead if it's worth more; they never stack.
    const eligibleSubtotal = lines.filter(l => !l.readyDining).reduce((n,l) => n + l.unitPrice * l.qty, 0);
    const saleDiscount = round2((eligibleSubtotal * Math.min(askedPct, salePct)) / 100);
    const welcomeUnit = lines.reduce((m, l, k) => ((l.readyDining || itemId(items[k]).startsWith("giftcard-")) ? m : Math.max(m, l.unitPrice)), 0);
    const welcomeDiscount = welcomeOk ? round2((welcomeUnit * WELCOME_PCT) / 100) : 0;
    const discount = Math.max(saleDiscount, welcomeDiscount);
    const pct = welcomeDiscount > saleDiscount ? WELCOME_PCT : Math.min(askedPct, salePct);

    // 3. Rewards voucher: clamped, and never more than the order is worth.
    const askedVoucher = Number(body.voucher) || 0;
    const voucher = protectedVoucher(askedVoucher, eligibleSubtotal, discount);

    const afterDiscount = round2(subtotal - discount - voucher);

    // 4. Shipping: recomputed here from weight and region, never taken from the client.
    if (lines.some(l=>l.supplier==='SHEIN') && /\b(?:p\.?\s*o\.?\s*box|post\s*office\s*box|parcel\s*locker)\b/i.test(String(customer.address||''))) return jsonResponse(400, {error:'These bathroom products require a street address; PO boxes and parcel lockers are unavailable.'});
    const decorQuote = await quoteSuppliers(lines, {country:String(customer.country || "Australia"),postcode:customer.postcode,suburb:customer.suburb});
    const ship = shippingFor(String(customer.country || "Australia"), String(fulfil), lines, afterDiscount, customer.postcode, decorQuote);
    if (ship.quoteRequired) return jsonResponse(400, { code: "freight_quote_required", error: ship.message });

    // 5. Gift card — verified against the ledger, never taken on trust.
    //    A card only reduces the bill if Samira Home Decor actually issued it and it
    //    still holds enough balance to cover the whole order. (Part-payment
    //    by gift card isn't offered online, same as before.)
    const orderTotal = round2(afterDiscount + ship.amount);
    const giftCode = normaliseCode(body.giftCode);

    if (body.giftCode && !giftCode) {
      return jsonResponse(400, { error: "That doesn't look like a Samira Home Decor gift card code." });
    }

    if (giftCode) {
      const card = await loadGiftCard(giftCode);
      if (!card || card.voided) {
        return jsonResponse(400, { error: "We can't find that gift card. Please check the code, or contact us if it was issued for a return." });
      }
      if (card.remaining + 0.001 < orderTotal) {
        return jsonResponse(400, {
          error: `That gift card has $${card.remaining.toFixed(2)} left, which doesn't cover this order ($${orderTotal.toFixed(2)}). Gift cards can only be used online when they cover the full amount.`,
        });
      }

      // Spend it, then record the order — no Stripe session, so this is the
      // only place the shop hears about it.
      const remaining = await redeemGiftCard(card, orderTotal);
      const orderNo = newOrderNo();

      const refNote = body.ref ? await recordReferral(body.ref, { id: orderNo, type: "order", friendEmail: customer.email, friendName: customer.name, amount: orderTotal }) : "";
      await emailShop(
        `Samira Home Decor — new order ${orderNo} paid by gift card ($${orderTotal.toFixed(2)})`,
        `Order: ${orderNo}\n` +
        `Paid with gift card: ${giftCode}  (issued ${card.issued || "unknown"}, source: ${card.source || "unknown"})\n` +
        `Order total: $${orderTotal.toFixed(2)}\n` +
        `Remaining on card: $${remaining.toFixed(2)}\n\n` +
        `Items:\n` + lines.map((l) => `  ${l.qty} x ${l.name} — $${round2(l.unitPrice * l.qty).toFixed(2)}`).join("\n") +
        `\n\nSubtotal: $${subtotal.toFixed(2)}\nDiscount: -$${discount.toFixed(2)}\n` +
        `Voucher: -$${voucher.toFixed(2)}\nShipping: $${ship.amount.toFixed(2)} (${ship.label})\n\n` +
        `Customer: ${customer.name || ""}\nEmail: ${customer.email || ""}\nPhone: ${customer.phone || ""}\n` +
        (refNote ? `REFERRED BY: ${refNote}\n` : "") +
        `Deliver to: ${[customer.address, customer.suburb, customer.postcode, customer.country].filter(Boolean).join(", ")}\n`
      );

      console.log("Gift card order:", orderNo, giftCode, orderTotal, "remaining", remaining);
      return jsonResponse(200, {
        paidByGiftCard: true,
        orderNo,
        total: orderTotal,
        giftCard: { code: giftCode, remaining },
      });
    }

    // Fold the discount into unit prices so the amount Stripe charges matches
    // the discounted total the shopper saw on site, line by line.
    const factor = subtotal > 0 ? Math.max(0, 1 - (discount + voucher) / subtotal) : 1;
    const discountLabel = [
      welcomeDiscount > saleDiscount ? `first order ${pct}% off one piece ($${discount.toFixed(2)})` : pct > 0 ? `${pct}% off` : "",
      voucher > 0 ? `rewards voucher $${voucher}` : "",
    ].filter(Boolean).join(" + ");

    const line_items = lines.map((l) => ({
      price_data: {
        currency: "aud",
        product_data: {
          name: l.name,
          ...((discountLabel || l.preorder) ? { description: [l.preorder ? `Pre-order · expected ${l.expected}` : "", discountLabel && !l.readyDining ? `Includes ${discountLabel}` : ""].filter(Boolean).join(" · ") } : {}),
          ...(l.sku ? { metadata: { sku: l.sku } } : {}),
        },
        unit_amount: chargePerUnit(l, eligibleSubtotal, discount, voucher),
      },
      quantity: l.qty,
    }));

    const shipping_options = [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: Math.round(ship.amount * 100), currency: "aud" },
          display_name: ship.label,
          ...(ship.days
            ? {
                // Long waits (e.g. an arrive-by date weeks away) read better in weeks.
                delivery_estimate: ship.days[1] > 20
                  ? {
                      minimum: { unit: "week", value: Math.max(1, Math.floor(ship.days[0] / 5)) },
                      maximum: { unit: "week", value: Math.ceil(ship.days[1] / 5) },
                    }
                  : {
                      minimum: { unit: "business_day", value: Math.max(1, ship.days[0]) },
                      maximum: { unit: "business_day", value: ship.days[1] },
                    },
              }
            : {}),
        },
      },
    ];

    const orderNo = newOrderNo();
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_options,
      phone_number_collection: { enabled: true },
      // Optional note from the customer, shown in the new-order email.
      custom_fields: [{
        key: "delivery_note",
        label: { type: "custom", custom: "Delivery notes (optional)" },
        type: "text",
        optional: true,
        text: { maximum_length: 255 },
      }],
      ...(shipCountry !== "Australia"
        ? { custom_text: { submit: { message: "International orders may incur import duties or taxes, payable by the recipient." } } }
        : {}),
      customer_email: customer.email || undefined,
      shipping_address_collection: { allowed_countries: SHIP_COUNTRIES },
      billing_address_collection: "auto",
      // Prices are GST-inclusive (Australian standard) so no Stripe Tax is added.
      allow_promotion_codes: false,
      client_reference_id: orderNo,
      payment_intent_data: { description: `Samira Home Decor order ${orderNo}`, metadata: { order_no: orderNo } },
      success_url: `${SITE_URL}/order-confirmed.html?order=${orderNo}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/cart.html`,
      metadata: {
        order_no: orderNo,
        source: "samira-web",
        fulfil: String(fulfil),
        suburb: customer.suburb || "",
        postcode: customer.postcode || "",
        subtotal: String(subtotal),
        discount_pct: String(pct),
        discount: String(discount),
        voucher: String(voucher),
        voucher_code: String(body.voucherCode || ""),
        member: isMemberBuyer ? "yes" : "no",
        ...(customer.business ? { business: String(customer.business).slice(0, 200) } : {}),
        ...(customer.marketing ? { marketing_opt_in: String(customer.marketing).slice(0, 40) } : {}),
        // Pre-order items and their expected arrival, read back by the order emails.
        ...(lines.some((l) => l.preorder) ? { preorder: lines.filter((l) => l.preorder).map((l) => `${l.qty} × ${l.name} — expected ${l.expected}`).join(" | ").slice(0, 500) } : {}),
        ...(/^[A-Z0-9]{8}$/.test(body.ref || "") ? { ref: body.ref } : {}),
        shipping: String(ship.amount),
        // Read back by the webhook to issue the cards once payment succeeds.
        ...(purchasedCards.length ? { gift_cards: JSON.stringify(purchasedCards).slice(0, 500) } : {}),
      },
    });

    return jsonResponse(200, { url: session.url, id: session.id, orderNo });
  } catch (err) {
    console.error("create-checkout-session error:", err.message);
    // Catalogue/validation problems are the shopper's to see; anything else is ours.
    const clientSafe = /available|enquiry-only|hamper|Gift card|cart|items/i.test(err.message || "");
    return jsonResponse(clientSafe ? 400 : 500, {
      error: clientSafe ? err.message : "Payment could not be started. Please try again or contact us.",
    });
  }
};
