#!/usr/bin/env node
/* ============================================================
   Samira Home Decor — generate the trusted server-side price catalogue
   ------------------------------------------------------------
   js/data.js is the single source of truth for products, but it
   ships to the browser, where a shopper can edit it. The Stripe
   checkout function must never trust a price that came from the
   client, so we bake the same data into a JSON file the server
   reads instead:

     node scripts/gen-catalogue.js  ->  netlify/functions/_catalogue.json

   Netlify runs this on every deploy (see netlify.toml) so the
   catalogue can never drift from js/data.js. Re-run it locally
   after editing products, and commit the result.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { estimateWeight } = require("./estimate-weight");
const { loadClass } = require("../js/furniture-freight");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "js", "data.js");
const OUT = path.join(ROOT, "netlify", "functions", "_catalogue.json");

// data.js expects a browser: give it just enough to run headlessly.
// (It reads localStorage for admin-added products, which are per-browser
// and therefore never part of the trusted server catalogue.)
const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  console,
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const source =
  fs.readFileSync(SRC, "utf8") + fs.readFileSync(path.join(ROOT,"js","adairs-bathroom.js"),"utf8") +
  "\n;globalThis.__out = { PRODUCTS, HAMPER_ITEMS, HAMPER_MIN, SAMIRA, PACKAGING_KITS };\n";

vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: "js/data.js" });

const { PRODUCTS, HAMPER_ITEMS, HAMPER_MIN, SAMIRA, PACKAGING_KITS } = sandbox.__out;
const packagingKits = {};
(PACKAGING_KITS || []).forEach((k) => { if (k && k.id && !k.hidden && num(k.price) != null) packagingKits[k.id] = { name: String(k.name || ""), price: num(k.price) }; });

function num(v) {
  // Take the FIRST number in the string. Stripping every non-digit instead
  // would turn "88 kg / 100 kg" into 88100 — and a weight like that makes
  // the shipping calculator quote six figures.
  if (typeof v === "number") return isFinite(v) && v >= 0 ? v : null;
  const m = String(v == null ? "" : v).match(/[0-9]+(\.[0-9]+)?/);
  const n = m ? parseFloat(m[0]) : NaN;
  return isFinite(n) && n >= 0 ? n : null;
}

// Every price a line may legitimately be sold at: the base price, the member
// price, and any per-size price. The server accepts the lowest of these that
// the client asks for and nothing else.
// Pre-order: furniture taking 3+ weeks to arrive. Same rule as isPreorder()
// in js/cart.js — keep the word lists and numbers in step.
const PREORDER_MIN_DAYS = 21;
const FURNITURE_RE = /\b(sofas?|couch|lounge suite|modular|daybed|armchairs?|chairs?|stools?|barstools?|bench|ottoman|tables?|desks?|bed frame|bed base|bedhead|headboard|beds?|dressers?|wardrobes?|robes? island|cabinets?|sideboards?|buffets?|console|bookcases?|bookshel(f|ves)|shelving unit|tallboy|chest of drawers|tv unit|entertainment unit|dining set|outdoor set|lounge set|hall ?stand)\b/i;
const NOT_FURNITURE_RE = /\b(cushion|pillow|cover|throw|blanket|lamp|pendant|chandelier|sconce|blender|kettle|toaster|mixer|runner|sheet|quilt|duvet|mat|rug|vase|candle|diffuser|tray|placemat|napkin|cloth)\b/i;
function isFurniture(p) {
  if (p.lead) return true;
  const n = p.name || "";
  return FURNITURE_RE.test(n) && !NOT_FURNITURE_RE.test(n.replace(/\b(bedside|side|coffee|dining|console) tables?\b/ig, "table"));
}
function arriveDays(p) {
  if (Array.isArray(p.arriveDays) && p.arriveDays.length === 2) return p.arriveDays.map(Number);
  return isFurniture(p) ? [28, 33] : [8, 13];
}
function isPreorder(p) {
  if (p.price == null || p.cat === "Packaging" || p.comingSoon) return false;
  if (p.preorder === true) return true;
  if (p.preorder === false) return false;
  if (p.arriveBy) return true;   // the arrive-by range is weeks away while it's set
  if (!(p.lead || isFurniture(p))) return false;
  return arriveDays(p)[1] >= PREORDER_MIN_DAYS;
}

const products = {};
PRODUCTS.forEach((p) => {
  if (!p || !p.id) return;
  const base = num(p.price);
  const sizes = {};
  const sizesMember = {};
  (Array.isArray(p.sizes) ? p.sizes : []).forEach((s) => {
    if (s && typeof s === "object" && s.label != null && num(s.price) != null) sizes[String(s.label)] = num(s.price);
    if (s && typeof s === "object" && s.label != null && num(s.memberPrice) != null) sizesMember[String(s.label)] = num(s.memberPrice);
  });
  products[p.id] = {
    name: String(p.name || ""),
    cat: String(p.cat || ""),
    price: base,                                  // null = enquiry-only (e.g. packaging)
    memberPrice: num(p.memberPrice),
    weight: num(p.weight) != null ? num(p.weight) : estimateWeight(p),
    sizes,
    sizesMember,
    expressShip: num(p.expressShip),             // express-only delivery fee per item (sofas)
    expressOpt: num(p.expressOpt),
    readyDining: !!p.readyDining,
    supplier: p.supplier || null,
    supplierProductUuid: p.supplierProductUuid || null,
    supplierSku: p.supplierSku || null,
    supplierHandle: p.supplierHandle || null,
    profitMarkup: num(p.profitMarkup),
    supplierProductId: p.supplierProductId || null,
    supplierOptions: p.supplierOptions || null,
    supplierCost: num(p.supplierCost),
    freightClass: p.freightClass || null,
    chairSets: p.chairSets || 1,
    furniture: isFurniture(p),
    shippingSize: loadClass(p),
    shipFee: num(p.shipFee),                     // fixed delivery fee per item
    arriveBy: p.arriveBy || null,                // all-items arrive-by date (YYYY-MM-DD)
    auOnly: !!p.auOnly,                          // delivers within Australia only
    preorder: isPreorder(p),                     // sold as a pre-order (shown in order emails)
    arriveDays: p.arriveBy ? null : arriveDays(p), // standard arrival window in days
  };
});

const hamperItems = {};
(HAMPER_ITEMS || []).forEach((h) => {
  if (h && h.id) hamperItems[h.id] = { name: String(h.name || ""), price: num(h.price) };
});

const campaign = (SAMIRA && SAMIRA.campaign) || null;

const out = {
  generatedAt: new Date().toISOString(),
  note: "GENERATED by scripts/gen-catalogue.js from js/data.js — do not edit by hand.",
  products,
  hamperItems,
  packagingKits,
  hamperMin: Number(HAMPER_MIN) || 0,
  campaign: campaign ? { percent: Number(campaign.percent) || 0, endsAt: campaign.endsAt || null } : null,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");

const priced = Object.values(products).filter((p) => p.price != null).length;
console.log(
  `✓ catalogue written: ${Object.keys(products).length} products (${priced} priced), ` +
  `${Object.keys(hamperItems).length} hamper items -> netlify/functions/_catalogue.json`
);

/* ---- Share index ----------------------------------------------------
   Social apps don't run JavaScript, so a shared product link can only
   show whatever is in the page's head. The edge function at
   netlify/edge-functions/product-og.js reads this file and rewrites
   those tags per product, so a link shows that product's own photo. */
const shareIndex = {};
(PRODUCTS || []).forEach((p) => {
  if (!p || !p.id || p.demo || p.comingSoon) return;
  const img = (p.imgs && p.imgs[0]) || p.img || "";
  shareIndex[p.id] = {
    n: String(p.name || ""),
    i: String(img).split("?")[0],
    p: p.price != null ? Number(p.price) : null,
    d: String(p.desc || "").replace(/\s+/g, " ").slice(0, 180)
  };
});
fs.writeFileSync(
  path.join(__dirname, "..", "share-index.json"),
  JSON.stringify(shareIndex) + "\n"
);
console.log(`✓ share index written: ${Object.keys(shareIndex).length} products -> share-index.json`);
