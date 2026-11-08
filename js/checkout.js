/* ============================================================
   SAMIRA HOME DECOR, Checkout
   Renders the order summary + collects shipping details, then
   pays via Stripe Checkout when configured, else demo mode.
   ============================================================ */

/* Weight-based shipping calculator.
   Each zone = a base handling fee + a per-kilogram rate (AUD). The rate is
   worked out automatically from the total weight of the cart and the region
   the shopper selects at checkout. Adjust these numbers to match your courier. */
/* International rates = Australia Post International Standard (2026), fitted to
   base + perKg (AUD). e.g. USA 1 kg = 16.10 + 27.50 = $43.60, 2 kg = $71.10.
   Australia stays domestic. Note: Aus Post International Standard has a 20 kg
   per-parcel limit — items over 20 kg need a custom freight quote. */
const SHIP_ZONES = {
  "Australia":       { base: 9.95,  perKg: 2.5,  freeOver: 3500, days: "3 to 8 business days" },
  "New Zealand":     { base: 14.20, perKg: 14.80, days: "6 to 12 business days" },
  "United Kingdom":  { base: 21.30, perKg: 28.60, days: "10 to 24 business days" },
  "United States":   { base: 16.10, perKg: 27.50, days: "10 to 24 business days" },
  "Canada":          { base: 16.10, perKg: 27.50, days: "10 to 24 business days" },
  "Switzerland":     { base: 21.30, perKg: 28.60, days: "10 to 24 business days" },
  "Germany":         { base: 21.30, perKg: 28.60, days: "10 to 24 business days" }
};
const DEFAULT_ITEM_KG = 0.75; // used when a product has no weight set
const INTL_MAX_KG = 20;       // Australia Post International Standard parcel limit

/* Browser copy of scripts/estimate-weight.js — keep in sync. Estimates a
   product's shipping weight (kg) from a real weight, else type/material/size. */
function parseKg(s) { const m = String(s == null ? "" : s).match(/([\d.]+)\s*kg/i); return m ? parseFloat(m[1]) : null; }
function estimateWeight(p) {
  if (!p) return 1.5;
  const real = parseKg(p.weight); if (real) return real;
  const n = (p.name || "").toLowerCase();
  const TYPE = [
    [/\bsofa|lounge suite|modular lounge\b/, 45],
    [/console|sideboard|buffet|cabinet|tv unit|tv cabinet|bookcase|bookshelf|shelv|wardrobe|dresser|tallboy|chest of/, 30],
    [/coffee table|dining table|\bdesk\b|table set|dining set/, 25],
    [/bed frame|bed base|headboard|\bbed\b/, 40],
    [/armchair|accent chair|occasional chair|swivel chair|tub chair|lounge chair|recliner/, 18],
    [/dining chair|\bchair\b|stool|bench|ottoman|pouf/, 8],
    [/side table|end table|bedside|nightstand/, 9],
    [/mirror/, 6],
    [/\brug\b|runner|floor mat/, 8],
    [/floor lamp|standing lamp/, 6],
    [/chandelier|pendant|ceiling light|wall light|\blight\b|\blamp\b/, 3],
    [/cushion|throw|pillow|\bcover\b|quilt|blanket|duvet|linen|sheet|towel/, 0.6],
    [/vase|planter|\bpot\b|bowl|\bjug\b|urn|canister/, 1.5],
    [/candle|diffuser|fragrance|perfume|incense/, 0.5],
    [/tray|clock|photo frame|\bframe\b|ornament|sculpture|figurine|bookend|\bhook\b/, 1.2],
    [/basket|storage box|hamper/, 1.5],
  ];
  let base = null;
  for (let k = 0; k < TYPE.length; k++) { if (TYPE[k][0].test(n)) { base = TYPE[k][1]; break; } }
  if (base == null) {
    const CAT = { "Furniture": 18, "Home Décor": 1.5, "Lifestyle": 0.8, "Kitchen & Dining": 1.5, "Kitchenware": 1.8, "Bedroom & Bath": 0.9, "Fragrance": 0.5, "Health & Wellness": 0.4, "Gifts": 1.0, "Travel Essentials": 0.8, "Outdoor": 12, "Office": 10, "Bathroom": 5 };
    base = CAT[p.cat] != null ? CAT[p.cat] : 1.5;
  }
  let f = 1;
  if (/marble|stone|slate|granite|concrete|terrazzo|travertine|cast iron|ceramic|stoneware/.test(n)) f = 1.6;
  else if (/bamboo|rattan|wicker|cane|paper|seagrass|jute|linen|cotton|foam/.test(n)) f = 0.65;
  else if (/glass/.test(n)) f = 1.15;
  else if (/metal|steel|\biron\b|aluminium|aluminum|brass/.test(n)) f = 1.25;
  else if (/timber|\boak\b|walnut|\bwood\b|solid wood|mango|acacia/.test(n)) f = 1.1;
  let w = base * f;
  const d = p.dims || {};
  const maxd = Math.max(Number(d.w) || 0, Number(d.h) || 0, Number(d.d) || 0);
  if (maxd) { const typ = base >= 15 ? 120 : base >= 5 ? 60 : 30; w *= Math.min(1.8, Math.max(0.6, maxd / typ)); }
  w = Math.max(0.2, Math.min(80, w));
  return Math.round(w * 10) / 10;
}
// The first cart item too heavy to ship internationally (>20kg), or null.
function bulkyIntlItem() {
  const found = getCart().find(function (i) {
    if (i.giftCard || i.hamper) return false;
    const p = (typeof findProduct === "function") ? findProduct(i.id) : null;
    return (p && p.auOnly) || estimateWeight(p || i) > INTL_MAX_KG;
  });
  return found || null;
}

function shipCountry() {
  const el = document.getElementById("coCountry");
  return (el && SHIP_ZONES[el.value]) ? el.value : "Australia";
}
// Australian delivery estimate: worked out from each item's arrival window
// worked out from today's date; the slowest item in the cart wins.
function cartShipDays(days) {
  if (shipCountry() !== "Australia") return days;
  const cart = getCart();
  if (typeof isGiftOrder === "function" && isGiftOrder(cart)) {
    const express = window._fulfil === "express";
    let w = null;
    cart.forEach(function (i) { if (i.giftCard) return; const x = giftWindow(i, express); if (!w || x[1] > w[1]) w = x; });
    return w ? (express ? "3 to 5 business days" : "5 to 10 business days") + " · arrives " + fmtBizRange(w) : days;
  }
  const w = (typeof cartArriveWindow === "function") ? cartArriveWindow() : null;
  return w ? "arrives " + fmtArriveRange(w) : days;
}

// Total billable weight (kg) of everything in the cart
function cartWeight() {
  let kg = 0;
  getCart().forEach(function (i) {
    // Must match shippingFor() in netlify/functions/create-checkout-session.js,
    // or the quote shown here won't be the shipping Stripe charges.
    if (i.giftCard) return;                                   // emailed, nothing to post
    if (i.hamper) {                                           // weight scales with contents
      kg += DEFAULT_ITEM_KG * i.hamper.reduce(function (n, l) { return n + (l.qty || 1); }, 0) * (i.qty || 1);
      return;
    }
    const p = (typeof findProduct === "function") ? findProduct(i.id) : null;
    if (p && (p.expressShip || p.shipFee)) return;            // own per-item delivery fee
    const raw = (p && p.weight) != null ? p.weight : i.weight;
    let w = null;
    // First number only"88 kg / 100 kg" must read as 88, not 88100.
    if (raw != null) { const m = String(raw).match(/[0-9]+(\.[0-9]+)?/); const n = m ? parseFloat(m[0]) : NaN; if (!isNaN(n) && n > 0) w = n; }
    if (w == null) w = estimateWeight(p || i);   // estimate when no real weight is set
    kg += w * (i.qty || 1);
  });
  return Math.round(Math.max(kg, 0.1) * 100) / 100;
}
// Weight-based quote for the selected region
/* Express-only items (sofas): their own delivery fee per item, kept out of
   the weight-based quote. Must match shippingFor() on the payment server. */
function expressShipFee() {
  let fee = 0;
  getCart().forEach(function (i) {
    const p = (!i.giftCard && !i.hamper && typeof findProduct === "function") ? findProduct(i.id) : null;
    if (p && p.expressShip) fee += p.expressShip * (i.qty || 1);
  });
  return fee;
}
/* Optional Express on furniture (expressOpt): per-item fee when Express is chosen. */
function expressOptFee() {
  let fee = 0;
  getCart().forEach(function (i) {
    const p = (!i.giftCard && !i.hamper && typeof findProduct === "function") ? findProduct(i.id) : null;
    if (p && p.expressOpt) fee += p.expressOpt * (i.qty || 1);
  });
  return fee;
}
/* Fixed per-item delivery, never free. Must match shippingFor() on the server. */
function fixedShipFee() {
  let fee = 0;
  getCart().forEach(function (i) {
    const p = (!i.giftCard && !i.hamper && typeof findProduct === "function") ? findProduct(i.id) : null;
    if (p && p.shipFee && !p.expressShip) fee += p.shipFee * (i.qty || 1);
  });
  return fee;
}
function shipQuote(afterDisc) {
  const z = SHIP_ZONES[shipCountry()] || SHIP_ZONES["Australia"];
  const weight = cartWeight();
  const xfee = expressShipFee();
  const hasRest = getCart().some(function (i) { const p = (!i.giftCard && !i.hamper && typeof findProduct === "function") ? findProduct(i.id) : null; return !i.giftCard && !(p && (p.expressShip || p.shipFee)); });
  let fee = hasRest ? Math.round((z.base + z.perKg * weight) * 100) / 100 : 0;
  if (hasRest && z.freeOver && afterDisc >= z.freeOver) fee = 0;
  fee += xfee;
  fee += fixedShipFee();
  const ofee = (window._fulfil === "express" && !isGiftOrder(getCart())) ? expressOptFee() : 0;
  fee += ofee;
  return { fee: fee, weight: weight, days: z.days, freeOver: z.freeOver, express: xfee > 0 };
}

function checkoutTotals() {
  const sub = cartTotal();
  const disc = orderDiscount(sub);
  const discount = disc.amount;
  const afterDisc = sub - discount;
  // Rewards / gift dollar-voucher applied to this order
  const vou = (typeof getVoucher === "function") ? getVoucher() : null;
  const voucher = (vou && vou.amount) ? Math.min(vou.amount, afterDisc) : 0;
  const afterVoucher = afterDisc - voucher;
  const q = shipQuote(afterDisc);
  let shipping = sub <= 0 ? 0 : q.fee;
  if (window._fulfil === "express" && sub > 0 && isGiftOrder(getCart())) shipping += EXPRESS_EXTRA;   // gift orders only
  const preGift = afterVoucher + shipping;
  const gc = window._giftCard || null;
  // A gift card can be used online only when it covers the whole order.
  const giftCard = (gc && gc.amount >= preGift && preGift > 0) ? preGift : 0;
  const total = preGift - giftCard;
  const gst = Math.round((total / 11)); // GST component of a GST-inclusive total
  return { sub, discount, discLabel: disc.label, voucher, voucherCode: vou ? vou.code : null, shipping, preGift, giftCard, giftCode: gc ? gc.code : null, total, gst, coupon: window._coupon, country: shipCountry(), weight: q.weight, shipDays: cartShipDays(q.days), freeOver: q.freeOver };
}

function updateTotalsUI() {
  const ih = document.getElementById("intlHelp");
  if (ih) ih.innerHTML = shipCountry() !== "Australia"
    ? `<div style="margin-top:12px;padding:10px 14px;border-radius:10px;background:#F7F3EC;border-left:3px solid #E0C992;font-size:.9rem;color:#0B1F3A;line-height:1.45">🌏 <strong>International orders may incur import duties or taxes, payable by the recipient.</strong> These aren't included in our prices or shipping.</div><a href="https://wa.me/61451609398" onclick="openCheckoutWA();return false;" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;margin-top:12px;padding:12px 14px;border-radius:10px;background:#E9F7EF;color:#0B1F3A;text-decoration:none;font-size:.92rem;line-height:1.4"><span style="font-size:1.4rem">💬</span><span><strong>Priority help for overseas customers.</strong> Chat with us directly on WhatsApp for quick assistance with your order.</span></a>`
    : "";
  const t = checkoutTotals();
  const shipTxt = t.shipping === 0 ? "Free" : money(t.shipping);
  const line = document.getElementById("coShipLine");
  // Block international checkout when the cart has an item too bulky to ship abroad.
  const bulky = (t.country !== "Australia") ? bulkyIntlItem() : null;
  window._intlBlocked = !!bulky;
  if (line && bulky) {
    line.innerHTML = `<span style="color:var(--rose-deep)">⚠️ <strong>${bulky.name}</strong> ${(function(){ const bp = (typeof findProduct === "function") ? findProduct(bulky.id) : null; return (bp && bp.auOnly) ? `ships within Australia only, so it can't be sent to ${t.country}.` : `is too large to ship to ${t.country} (over ${INTL_MAX_KG}kg).`; })()} It can only be delivered within Australia — please remove it for an international order, or <a href="contact.html">contact us</a> for a freight quote.</span>`;
  } else if (line) line.innerHTML = `<strong>${(window._fulfil === "express" || expressShipFee() > 0) ? "Express" : "Standard"}</strong> · ${shipTxt} · to ${t.country} · calculated for ~${t.weight}kg · ${t.shipDays || "3 to 8 business days"}${(t.shipping === 0 && t.freeOver) ? ` · <span style="color:var(--forest)">free over ${money(t.freeOver)}</span>` : ""}`;
  const s = document.getElementById("sumShip"); if (s) s.textContent = shipTxt;
  const gr = document.getElementById("sumGiftRow"); if (gr) gr.style.display = t.giftCard ? "flex" : "none";
  const gv = document.getElementById("sumGift"); if (gv) gv.textContent = "−" + money(t.giftCard);
  const tot = document.getElementById("sumTotal"); if (tot) tot.textContent = money(t.total);
  const g = document.getElementById("sumGst"); if (g) g.textContent = money(t.gst);
  const btn = document.getElementById("payBtn");
  if (btn) {
    btn.textContent = window._intlBlocked
      ? "Remove oversized item for international →"
      : (window._fulfil === "layby"
        ? "Submit lay-by request →"
        : (t.total <= 0 ? "Complete order (gift card) →" : `Pay ${(typeof DM_CUR!=="undefined"&&DM_CUR!=="AUD")?moneyAud(t.total)+" (AUD)":money(t.total)} securely →`));
    btn.disabled = !!window._intlBlocked;
    btn.style.opacity = window._intlBlocked ? "0.6" : "";
  }
}

function applyGiftCardCheckout(code) {
  const msg = document.getElementById("coGiftMsg");
  code = String(code || "").trim().toUpperCase();
  const acc = getAccount();
  if (!acc || !acc.email) { msg.style.color = "var(--rose-deep)"; msg.textContent = "Please log in to use your gift card / refund credit."; return; }
  const gc = (acc.giftCards || []).find(g => (g.code || "").toUpperCase() === code && g.balance > 0);
  if (!gc) { window._giftCard = null; msg.style.color = "var(--rose-deep)"; msg.textContent = "Gift card not found on your account, or it has no balance."; updateTotalsUI(); return; }
  window._giftCard = { code: gc.code, amount: gc.balance };
  const t = checkoutTotals();
  if (t.giftCard <= 0) {
    window._giftCard = null;
    msg.style.color = "var(--rose-deep)";
    msg.textContent = `Your gift card (${money(gc.balance)}) doesn't cover this order (${money(t.preGift)}). Reduce your cart to at or under your balance, or contact us for part-payment.`;
    updateTotalsUI(); return;
  }
  msg.style.color = "var(--forest)";
  msg.textContent = `✓ Gift card applied, ${money(gc.balance)} available.`;
  updateTotalsUI();
}

function renderCheckout() {
  const wrap = document.getElementById("checkoutWrap");
  const cart = getCart();
  // Keep what the shopper has typed when the page redraws (quantity change, code applied)
  const kept = {};
  wrap.querySelectorAll("input[id], select[id]").forEach((el) => { kept[el.id] = el.type === "checkbox" ? el.checked : el.value; });
  if (!cart.length) {
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="em">🛍️</div>
        <h2>Your cart is empty</h2>
        <p>Add a few beautiful things before checking out.</p>
        <a class="btn btn--primary" href="shop.html" style="margin-top:16px">Go to the shop</a>
      </div>`;
    return;
  }
  const t = checkoutTotals();
  const acc = getAccount() || {};
  const member = typeof isMember === "function" && isMember();
  const giftOrder = isGiftOrder(cart);
  if (!giftOrder) window._fulfil = "delivery";
  if (!window._coBeganCheckout) { window._coBeganCheckout = true; gaEvent("begin_checkout", { currency: "AUD", value: t.total, items: cart.map(i => gaItem(i, i.qty, i.price)) }); }
  const units = cart.reduce((n, i) => n + i.qty, 0);
  const lines = cart.map((i, idx) => {
    const prod = (typeof findProduct === "function") ? findProduct(i.id) : null;
    const src = i.img || (prod && (prod.img || (prod.imgs && prod.imgs[0]))) || ("assets/products/" + i.id + ".jpg");
    const key = String(i.key || i.id).replace(/'/g, "\\'");
    const fixed = i.giftCard || i.hamper || String(i.id).startsWith("hamper-");
    return `
    <div class="cx-item">
      <a class="cx-img" href="${prod ? "product.html?id=" + i.id : "#"}"><img src="${src}" alt="${i.name}" onerror="this.remove()"></a>
      <div class="cx-info">
        <div class="cx-top">
          <span class="cx-name">${i.name}${(i.colour || i.size) ? `<small>${[i.colour, i.size].filter(Boolean).join(" · ")}</small>` : ""}${i.contents ? `<small>${i.contents}</small>` : ""}</span>
          <span class="cx-acts">${prod ? `<button type="button" class="cx-heart${(typeof isWishlisted === "function" && isWishlisted(i.id)) ? " on" : ""}" aria-label="Save to wishlist" onclick="toggleWishlist('${i.id}', this);this.classList.toggle('on')">♡</button>` : ""}<button type="button" class="cx-del" aria-label="Remove ${i.name}" onclick="coRemove('${key}')">🗑</button></span>
        </div>
        ${(prod && typeof isPreorder === "function" && isPreorder(prod)) ? `<small class="co-preorder">⏳ Pre-order · ${preorderTermsLink("Pre-Order Terms")}</small>` : ""}
        ${i.giftCard ? "" : `<small class="co-eta" data-gift="${(i.hamper || String(i.id).startsWith("hamper-")) ? 1 : 0}" data-idx="${idx}">🚚 Arrives ${(i.hamper || String(i.id).startsWith("hamper-")) ? fmtBizRange(giftWindow(i, window._fulfil === "express")) : arriveRange(prod || i)}</small>`}
        <div class="cx-bottom">
          <span class="cx-price">${linePrice(i) < i.price ? `<s>${money(i.price * i.qty)}</s> ` : ""}<strong>${money(linePrice(i) * i.qty)}</strong>${linePrice(i) < i.price ? `<em>Member price</em>` : ""}</span>
          ${fixed ? `<span class="cx-qtyfix">Qty ${i.qty}</span>` : `<span class="cx-qty"><button type="button" aria-label="One less" onclick="coQty('${key}', ${i.qty - 1})">−</button><span>${i.qty}</span><button type="button" aria-label="One more" onclick="coQty('${key}', ${i.qty + 1})">+</button></span>`}
        </div>
      </div>
    </div>`;
  }).join("");
  const STATES = ["SA", "NSW", "VIC", "QLD", "WA", "TAS", "ACT", "NT"];
  const vou = (typeof getVoucher === "function") ? getVoucher() : null;

  wrap.innerHTML = `
    <div class="cx-steps">
      <a href="#cxCart" class="cx-step"><span class="cx-ic">🛍️</span>Cart (${units} ${units === 1 ? "item" : "items"})</a>
      <a href="#cxDelivery" class="cx-step"><span class="cx-ic">🚚</span>Delivery</a>
      <a href="#cxPay" class="cx-step"><span class="cx-ic">💳</span>Payment</a>
    </div>
    <form id="checkoutForm" class="cx-grid" novalidate>
      <section class="cx-col" id="cxCart">
        <h3 class="cx-h">Your cart</h3>
        <div class="cx-items">${lines}</div>
        <a href="cart.html" class="cx-link">← Edit cart</a>
        ${member ? "" : `<div class="cx-member">
          <h4>Save more as a member</h4>
          <p>Members pay member prices on every piece and get <strong>10% off one item in their first order</strong>. Joining is free.</p>
          <a class="btn btn--outline btn--block btn--sm" href="account.html">Log in or join free</a>
        </div>`}
      </section>

      <section class="cx-col" id="cxDelivery">
        <h3 class="cx-h">${giftOrder ? "Delivery speed" : "Delivery to"}</h3>
        <div class="fulfil" ${!giftOrder && !(expressOptFee() > 0) ? 'style="display:none"' : ""}>
          <div class="fulfil-grid" id="fulfilGrid">
            ${giftOrder ? `
            <button type="button" class="fulfil-opt active" data-mode="delivery" onclick="setFulfil('delivery')"><span class="fic">🚚</span><span>Standard<br><small>5 to 10 business days</small></span></button>
            <button type="button" class="fulfil-opt" data-mode="express" onclick="setFulfil('express')"><span class="fic">⚡</span><span>Express<br><small>3 to 5 business days · +$150</small></span></button>` : `
            ${expressOptFee() > 0 ? `
            <button type="button" class="fulfil-opt active" data-mode="delivery" onclick="setFulfil('delivery')"><span class="fic">🚚</span><span>Standard<br><small>About 4 weeks</small></span></button>
            <button type="button" class="fulfil-opt" data-mode="express" onclick="setFulfil('express')"><span class="fic">⚡</span><span>Express<br><small>+$${expressOptFee().toLocaleString("en-AU")}</small></span></button>` : `
            <button type="button" class="fulfil-opt active" data-mode="delivery" onclick="setFulfil('delivery')"><span class="fic">🚚</span><span>Delivery</span></button>`}`}
          </div>
        </div>
        <div class="fulfil-note" id="fulfilNote"></div>
        ${!(acc && acc.email) ? `<p class="form-note" style="margin:0 0 12px">Checking out as a guest. <a href="account.html">Log in</a> to save this order to your account (optional).</p>` : ""}
        <div class="field-row">
          <div class="field"><label>First name *</label><input id="coFirst" autocomplete="given-name" required></div>
          <div class="field"><label>Last name *</label><input id="coLast" autocomplete="family-name" required></div>
        </div>
        <div class="field"><label>Business name (optional)</label><input id="coBiz" autocomplete="organization"></div>
        <div class="field"><label>Email *</label><input id="coEmail" type="email" autocomplete="email" value="${acc.email || ""}" required></div>
        <div class="field"><label>Mobile number *</label><input id="coPhone" type="tel" autocomplete="tel" required></div>
        <div class="field"><label>Street address *</label><input id="coAddr" autocomplete="street-address" required></div>
        <div class="field-row">
          <div class="field"><label>Suburb *</label><input id="coSuburb" autocomplete="address-level2" required></div>
          <div class="field"><label>Postcode *</label><input id="coPost" autocomplete="postal-code" inputmode="numeric" required></div>
        </div>
        <div class="field-row">
          <div class="field" id="coStateField"><label>State *</label><select id="coState"><option value="">Select state</option>${STATES.map(s => `<option>${s}</option>`).join("")}</select></div>
          <div class="field"><label>Country</label>
            <select id="coCountry"><option>Australia</option><option>New Zealand</option><option>United Kingdom</option><option>United States</option><option>Canada</option><option>Switzerland</option><option>Germany</option></select></div>
        </div>
        <div id="intlHelp"></div>
        <h3 class="cx-h" style="margin-top:22px">Delivery method</h3>
        <div class="cx-box">
          <strong>${cart.some(i => { const p = findProduct(i.id); return p && typeof isPreorder === "function" && isPreorder(p); }) ? "Your order" : "In-stock items"}</strong>
          <p>Each item's estimated arrival is shown in your cart. We'll email you the tracking details once your order is on its way.</p>
        </div>
        <h3 class="cx-h" style="margin-top:22px">Delivery service</h3>
        <div class="cx-box cx-service" id="shipRadio"><span class="cx-tick">✓</span><span id="coShipLine"><strong>Standard</strong> · ${t.shipping === 0 ? "Free" : money(t.shipping)} · 3 to 8 business days</span></div>
        <h3 class="cx-h" style="margin-top:22px">The best of Samira Home Decor, delivered</h3>
        <div class="cx-box cx-opt">
          <label><input type="checkbox" id="coOptEmail"> Send me offers, inspiration and updates by email.</label>
          <label><input type="checkbox" id="coOptSms"> Send me offers, inspiration and updates by SMS.</label>
        </div>
      </section>

      <section class="cx-col" id="cxPay">
        <h3 class="cx-h">Voucher or discount code</h3>
        <div class="cx-code">
          <input id="coCode" placeholder="Enter code" autocomplete="off" onkeydown="if(event.key==='Enter'){event.preventDefault();coApplyCode()}">
          <button type="button" onclick="coApplyCode()">Apply</button>
        </div>
        <div id="coGiftMsg" class="cx-msg"></div>
        ${vou ? `<div class="cx-applied">✓ ${vou.label || vou.code} applied <button type="button" onclick="coRemoveVoucher()">Remove</button></div>` : ""}

        <div class="cx-summary">
          <h4>Your order summary</h4>
          <div class="summary-row"><span>${units} ${units === 1 ? "item" : "items"}</span><span>${money(t.sub)}</span></div>
          ${t.discount ? `<div class="summary-row cx-save"><span>${t.discLabel}</span><span>−${money(t.discount)}</span></div>` : ""}
          ${t.voucher ? `<div class="summary-row cx-save"><span>Rewards voucher (${t.voucherCode})</span><span>−${money(t.voucher)}</span></div>` : ""}
          <div class="summary-row"><span>Delivery</span><span id="sumShip">${t.shipping === 0 ? "Free" : money(t.shipping)}</span></div>
          <div class="summary-row cx-save" id="sumGiftRow" style="${t.giftCard ? "display:flex" : "display:none"}"><span>Gift card</span><span id="sumGift">−${money(t.giftCard)}</span></div>
          <div class="summary-row total"><span>Order total</span><span id="sumTotal">${money(t.total)}</span></div>
          ${(typeof DM_CUR !== "undefined" && DM_CUR !== "AUD") ? `<div style="font-size:0.8rem;color:var(--muted);margin-top:2px">≈ shown in ${DM_CUR} · you'll be charged <strong>${moneyAud(t.total)}</strong> (AUD)</div>` : ""}
        </div>

        <h3 class="cx-h" style="margin-top:22px">Pay by</h3>
        <div class="cx-paybox">
          <p class="cx-need" id="coNeed">Fill in all fields marked * to continue.</p>
          <button type="submit" class="btn btn--primary btn--block" id="payBtn">Pay ${(typeof DM_CUR!=="undefined"&&DM_CUR!=="AUD")?moneyAud(t.total)+" (AUD)":money(t.total)} securely →</button>
          <div class="co-pay-brands" style="margin-top:12px;text-align:center">💳 Card · Apple Pay · Google Pay, secured by <strong>Stripe</strong></div>
          <p class="form-note" style="text-align:center;margin:6px 0 0">You'll enter your card details on Stripe's secure page. We never see or store your card number.</p>
        </div>
        <p class="cx-terms">By placing your order you agree to our <a href="policy.html?doc=terms">Terms and Conditions</a>, <a href="policy.html?doc=privacy">Privacy Policy</a>, <a href="policy.html?doc=delivery">Delivery Policy</a> and <a href="policy.html?doc=returns">Returns Policy</a>.</p>
      </section>
    </form>`;

  Object.keys(kept).forEach((id) => { const el = document.getElementById(id); if (el && id !== "coCode") { if (el.type === "checkbox") el.checked = kept[id]; else el.value = kept[id]; }  });
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", startPayment);
  form.addEventListener("input", coCheckReady);
  form.addEventListener("change", coCheckReady);
  document.getElementById("coCountry").addEventListener("change", updateTotalsUI);
  if (typeof window._fulfil === "undefined" || (!giftOrder && !(expressOptFee() > 0))) window._fulfil = "delivery";
  setFulfil(window._fulfil);
  coCheckReady();
}

/* Cart edits on the checkout page */
function coQty(key, qty) {
  if (qty < 1) return coRemove(key);
  setQty(key, qty); renderCheckout();
}
function coRemove(key) { removeFromCart(key); renderCheckout(); }
function coRemoveVoucher() { setVoucher(null); window._giftCard = null; renderCheckout(); }

/* One box for every code: WELCOME10, a member's voucher code (SHD-V…), or a gift card (SYSGC-…) */
function coApplyCode() {
  const code = (document.getElementById("coCode").value || "").trim().toUpperCase();
  const msg = document.getElementById("coGiftMsg");
  if (!code) return;
  if (/^SYSGC-/.test(code)) { applyGiftCardCheckout(code); return; }
  const member = typeof isMember === "function" && isMember();
  const acc = getAccount() || {};
  const mine = (acc.vouchers || []).find((v) => (v.code || "").toUpperCase() === code && !v.used);
  if (code === "WELCOME10" || (mine && /welcome/i.test(mine.label || ""))) {
    if (!member) { msg.style.color = "var(--rose-deep)"; msg.innerHTML = `This code is for members. <a href="account.html">Log in or join free</a>, then come back to use it on your first order.`; return; }
    setVoucher(WELCOME_VOUCHER); renderCheckout(); showToast("10% off one item in your first order applied 🎉"); return;
  }
  if (mine && mine.amount) { setVoucher({ code: mine.code, amount: mine.amount, label: mine.label }); renderCheckout(); showToast("Voucher applied ✦"); return; }
  msg.style.color = "var(--rose-deep)"; msg.textContent = "Sorry, that code isn't valid.";
}

/* Pay button stays usable, but tells the shopper what's still missing */
function coCheckReady() {
  const need = document.getElementById("coNeed");
  if (!need) return;
  const st = document.getElementById("coStateField");
  const au = shipCountry() === "Australia";
  if (st) st.style.display = au ? "" : "none";
  const ids = ["coFirst", "coLast", "coEmail", "coPhone", "coAddr", "coSuburb", "coPost"].concat(au ? ["coState"] : []);
  const missing = ids.filter((id) => { const el = document.getElementById(id); return el && !String(el.value || "").trim(); });
  need.style.display = missing.length ? "" : "none";
  // Green tick on every field that's filled in
  document.querySelectorAll("#cxDelivery .field").forEach((f) => {
    const el = f.querySelector("input, select");
    const ok = el && String(el.value || "").trim() && (el.type !== "email" || /^[^@s]+@[^@s]+.[^@s]+$/.test(el.value));
    f.classList.toggle("ok", !!ok);
  });
}

/* State + postcode as one line ("SA 5000"), the way orders and emails show it */
function coPostLine() {
  const g = (id) => { const el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
  return [shipCountry() === "Australia" ? g("coState") : "", g("coPost")].filter(Boolean).join(" ");
}

/* Express shipping is offered on gift orders only: a cart of custom
   gift hampers (gift cards may ride along). Everything else is Delivery.
   create-checkout-session.js applies the same rule. */
function isGiftOrder(cart) {
  const id = (i) => String((i && i.id) || "");
  return cart.length > 0 &&
    cart.some((i) => id(i).startsWith("hamper-")) &&
    cart.every((i) => id(i).startsWith("hamper-") || id(i).startsWith("giftcard-"));
}

/* Fulfilment method: Delivery, or for gift orders Standard / Express */
function setFulfil(mode) {
  if (mode !== "express") mode = "delivery";
  window._fulfil = mode;
  document.querySelectorAll("#fulfilGrid .fulfil-opt").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  const note = document.getElementById("fulfilNote");
  const gift = isGiftOrder(getCart());
  const opt = !gift && expressOptFee() > 0;
  if (note && opt) note.innerHTML = mode === "express"
    ? "⚡ <strong>Express</strong>arrives " + fmtArriveRange(ARRIVE_EXPRESS) + ". Adds $" + expressOptFee().toLocaleString("en-AU") + " to shipping ($7,000 per furniture item)."
    : "🚚 <strong>Standard</strong>about 4 weeks. Your arrival dates are shown below.";
  else if (note) note.innerHTML = !gift ? "🚚 Delivered to your door. Your arrival dates are shown below."
    : (mode === "express" ? "⚡ <strong>Express</strong>arrives in 3 to 5 business days. Adds $150 to shipping." : "🚚 <strong>Standard</strong>arrives in 5 to 10 business days.");
  document.querySelectorAll(".co-eta[data-gift='0']").forEach((el) => {
    const it = getCart()[+el.dataset.idx]; const pr = it && (typeof findProduct === "function") ? findProduct(it.id) : null;
    if (it) el.textContent = "🚚 Arrives " + arriveRange(pr || it);
  });
  document.querySelectorAll(".co-eta[data-gift='1']").forEach((el) => {
    const it = getCart()[+el.dataset.idx]; if (it) el.textContent = "🚚 Arrives " + fmtBizRange(giftWindow(it, mode === "express"));
  });
  if (typeof updateTotalsUI === "function") updateTotalsUI();
}

async function startPayment(e) {
  e.preventDefault();
  // Every field marked * must be filled in (State only for Australian addresses)
  const au = shipCountry() === "Australia";
  const missing = ["coFirst", "coLast", "coEmail", "coPhone", "coAddr", "coSuburb", "coPost"].concat(au ? ["coState"] : [])
    .map((id) => document.getElementById(id)).find((el) => el && !String(el.value || "").trim());
  const em = document.getElementById("coEmail");
  if (missing || (em && !/^[^@s]+@[^@s]+.[^@s]+$/.test(em.value.trim()))) {
    const el = missing || em;
    showToast(missing ? "Please fill in all fields marked *" : "Please check your email address");
    el.focus(); el.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  // Block checkout if an oversized item can't ship to the chosen country.
  if (window._intlBlocked) {
    const b = bulkyIntlItem();
    showToast(`${b ? b.name : "An item"} can't ship outside Australia — remove it or choose Australia.`);
    const el = document.getElementById("coShipLine"); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  // Guests can check out too; members get the order saved to their account.
  // The order is tracked by order number and email either way.
  const btn = document.getElementById("payBtn");
  const cfg = (typeof SAMIRA !== "undefined" && SAMIRA.stripe) || {};
  const cart = getCart();
  const t = checkoutTotals();

  // Stash purchase details so order-confirmed.html can fire the GA4 purchase event
  try {
    localStorage.setItem("dm_pending_purchase", JSON.stringify({
      value: t.total, shipping: t.shipping || 0,
      items: cart.map(i => ({ item_id: i.id, item_name: i.name, item_category: i.cat, price: i.price, quantity: i.qty }))
    }));
  } catch (e) {}

  // Lay-by → reserve the items with a request to our team (no charge now)
  if (window._fulfil === "layby") {
    const email = document.getElementById("coEmail").value;
    const first = document.getElementById("coFirst").value;
    const name = (first + " " + document.getElementById("coLast").value).trim();
    const deposit = Math.round(t.total * 0.2 * 100) / 100;
    const data = [
      ["Request", "Lay-by"],
      ["Name", name], ["Email", email], ["Phone", document.getElementById("coPhone").value],
      ["Delivery address", [document.getElementById("coAddr").value, document.getElementById("coSuburb").value, coPostLine(), document.getElementById("coCountry").value].filter(Boolean).join(", ")],
      ["Order total", money(t.total)], ["Deposit (20%)", money(deposit)],
      ["Items", cart.map((i) => `${i.qty}× ${i.name}`).join("; ")]
    ];
    btn.disabled = true; btn.textContent = "Sending request…";
    try { if (typeof deliverForm === "function") await deliverForm(data, "Samira Home Decor, Lay-by request"); } catch (err) {}
    showToast("Lay-by request sent ✦");
    document.getElementById("checkoutWrap").innerHTML =
      `<div class="empty-state" style="max-width:560px;margin:0 auto"><div class="em">🗓️</div><h2>Lay-by request received</h2>
       <p>Thanks ${first || "there"}! We've noted your lay-by and our team will email you to set it up. A <strong>20% deposit (${money(deposit)})</strong> secures your items, with the balance payable over 8 weeks. Your bag stays saved until then.</p>
       <a class="btn btn--primary" href="shop.html" style="margin-top:16px">Continue shopping</a></div>`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // NOTE: an order paid entirely by gift card is NOT completed here any more.
  // The card is checked against the shop's ledger by the same server call that
  // handles payment, so credit that Samira Home Decor never issued can't buy anything.

  const customer = {
    email: document.getElementById("coEmail").value,
    name: document.getElementById("coFirst").value + " " + document.getElementById("coLast").value,
    address: document.getElementById("coAddr").value,
    suburb: document.getElementById("coSuburb").value,
    postcode: coPostLine(),
    country: document.getElementById("coCountry").value,
    phone: document.getElementById("coPhone").value,
    business: (document.getElementById("coBiz") || {}).value || undefined,
    marketing: [(document.getElementById("coOptEmail") || {}).checked ? "email" : "", (document.getElementById("coOptSms") || {}).checked ? "SMS" : ""].filter(Boolean).join(" + ") || undefined
  };

  const payingByGiftCard = t.giftCard > 0 && t.total <= 0;
  btn.disabled = true; btn.textContent = payingByGiftCard ? "Checking your gift card…" : "Connecting to Stripe…";

  // --- Real Stripe Checkout (active as soon as an endpoint is set) ---
  if (cfg.checkoutEndpoint) {
    try {
      // We send only WHAT is being bought, ids, quantities, variants. Every dollar
      // figure (unit price, discount, shipping) is recomputed server-side from the
      // trusted catalogue, so an edited cart can't change what Stripe charges.
      const od = orderDiscount(t.sub);
      const res = await fetch(cfg.checkoutEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(i => ({
            id: i.id, qty: i.qty, colour: i.colour || undefined, size: i.size || undefined,
            giftCard: i.giftCard || undefined,   // gift cards carry their own amount
            hamper: i.hamper || undefined,       // custom hampers carry their components
            kit: i.kit || undefined              // signature packaging kit (priced on the server)
          })),
          member: (typeof isMember === "function" && isMember()) ? (function () { try { return { email: JSON.parse(localStorage.getItem("decomuse_account")).email, token: localStorage.getItem("shd_auth_token") }; } catch (e) { return undefined; } })() : undefined,
          discountPct: od.pct || 0,
          voucher: t.voucher || 0, voucherCode: t.voucherCode || "",
          fulfil: window._fulfil || "ship",
          ref: (typeof getReferralCode === "function" ? getReferralCode() : "") || undefined,
          giftCode: payingByGiftCard ? t.giftCode : undefined,
          customer
        })
      });
      const data = await res.json();

      // Paid in full with a verified gift card, the shop has recorded the order.
      if (data.paidByGiftCard) {
        const acc = getAccount();
        if (acc) {
          const gc = (acc.giftCards || []).find(g => g.code === t.giftCode);
          if (gc && data.giftCard) gc.balance = data.giftCard.remaining;
          saveAccount(acc);
        }
        localStorage.setItem("dm_last_order", JSON.stringify({ orderNo: data.orderNo, total: data.total || 0, email: customer.email || (acc && acc.email) || "" }));
        localStorage.removeItem(CART_KEY); localStorage.removeItem("dm_coupon"); window._giftCard = null;
        location.href = "order-confirmed.html";
        return;
      }

      if (data.orderNo) localStorage.setItem("dm_last_order", JSON.stringify({ orderNo: data.orderNo, total: t.total, email: customer.email || "" }));
      if (data.url) { window.location.href = data.url; return; }          // Stripe-hosted redirect
      if (data.id && window.Stripe && cfg.publishableKey) {                 // or redirectToCheckout by session id
        await window.Stripe(cfg.publishableKey).redirectToCheckout({ sessionId: data.id });
        return;
      }
      if (data.code === "welcome_not_eligible" && typeof setVoucher === "function") { setVoucher(null); renderCheckout(); }
      throw new Error(data.error || "No session returned");
    } catch (err) {
      btn.disabled = false; btn.textContent = `Pay ${(typeof DM_CUR!=="undefined"&&DM_CUR!=="AUD")?moneyAud(t.total)+" (AUD)":money(t.total)} securely →`;
      showToast(err && err.message && err.message !== "No session returned"
        ? err.message
        : "Couldn't reach payment server. Please try again or contact us.");
      return;
    }
  }

  // --- Demo mode (no Stripe keys yet) ---
  setTimeout(() => {
    const orderNo = "SHD-" + (100000 + Math.floor(Math.random() * 900000));
    localStorage.setItem("dm_last_order", JSON.stringify({ orderNo, total: t.total, email: customer.email }));
    localStorage.removeItem(CART_KEY);
    localStorage.removeItem("dm_coupon");
    location.href = "order-confirmed.html";
    // dm_voucher is consumed on order-confirmed (marks it used)
  }, 800);
}

document.addEventListener("DOMContentLoaded", renderCheckout);


/* Overseas priority WhatsApp: prefill what the shopper has typed so far
   and links to the items in their bag. */
function openCheckoutWA() {
  const g = (id) => { const el = document.getElementById(id); return el ? el.value : ""; };
  const links = getCart().filter((i) => !i.giftCard && !i.hamper && !String(i.id).startsWith("hamper-"))
    .map((i) => "https://www.samirahomedecor.com.au/product.html?id=" + encodeURIComponent(i.id));
  const names = getCart().map((i) => i.name).filter(Boolean).join(", ");
  openOverseasWA({
    name: (g("coFirst") + " " + g("coLast")).trim(),
    phone: g("coPhone"),
    email: g("coEmail"),
    location: [g("coSuburb"), coPostLine(), shipCountry()].filter((x) => x && x.trim()).join(", "),
    enquiry: "My order" + (names ? " (" + names + ")" : ""),
    links: links
  });
}
