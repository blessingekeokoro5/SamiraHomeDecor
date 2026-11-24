const fs = require("node:fs");
const path = require("node:path");

const STORE = "https://samirahomedecor.com.au";
const SUPPLIER = /\b(?:Koala(?: Living)?|SHEIN|Adairs|Luxo Living|James Lane|Buy\s*Direct\s*Online|BDO|Freedom Furniture)\b/i;
const UNSOLD = /\b(?:rugs?|(?:table|floor|wall|pendant|desk|bedside) lamps?|chandeliers?|(?:kids|children'?s|toddler)\s+(?:bunk\s+)?beds?|(?:artificial|faux|decorative|potted) plants?)\b/i;
const DINING = /\b(?:dining chair|dining table|dining bench|dining stool|dining set|sideboard|buffet)\b/i;
const cleanOptions = (values, key) => [...new Set(
  (Array.isArray(values) ? values : []).map(value => typeof value === "string" ? value : value?.[key])
    .filter(value => typeof value === "string" && value.trim() && !SUPPLIER.test(value))
)];

function photoPath(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value, STORE);
    return url.origin === STORE && /^\/assets\/products\/.+\.(?:webp|png|jpe?g)$/i.test(url.pathname)
      ? url.pathname : null;
  } catch {
    return null;
  }
}

module.exports = function writeMobileCatalogue(root, source, trusted, shareIndex) {
  const mobile = new Map();
  for (const p of source) {
    if (!p || !/^[a-z0-9_-]{1,64}$/i.test(p.id || "") || !Object.hasOwn(shareIndex, p.id) ||
        p.hidden || p.disabled || p.archived || p.active === false) continue;
    const sale = trusted[p.id];
    const name = sale?.name?.trim();
    if (!name || !(sale.price > 0) || SUPPLIER.test(name) || UNSOLD.test(name) ||
        /^(?:Packaging|Lighting|Rugs?|Kids)$/i.test(sale.cat)) continue;
    const koala = /^(?:kl|koala)/i.test(p.id) || /koala/i.test(String(p.supplier || p.source || ""));
    if (koala && /\bbeds?\b/i.test(name)) continue;
    const photos = koala ? [] : [...new Set([
      p.img, ...(Array.isArray(p.imgs) ? p.imgs : [])
    ].map(photoPath).filter(Boolean))].slice(0, 5);
    const colours = cleanOptions(p.colours, "name");
    const sizes = cleanOptions(p.sizes, "label");
    // Skip options with unapproved labels rather than silently changing a variant's meaning.
    const hasBrandedOptions = [p.colours, p.sizes].some(list => Array.isArray(list) &&
      list.some(option => SUPPLIER.test(String(typeof option === "string" ? option : option?.name || option?.label || ""))));
    if (hasBrandedOptions) continue;
    const description = shareIndex[p.id].d;
    mobile.set(p.id, {
      id: p.id, name, category: DINING.test(name) ? "Dining" : sale.cat || "Other", price: sale.price,
      ...(description && !SUPPLIER.test(description) ? {description: description.slice(0, 750)} : {}),
      ...(photos.length ? {image: photos[0], ...(photos.length > 1 ? {photos} : {})} : {}),
      ...(colours.length ? {colours} : {}),
      ...(sizes.length ? {sizes} : {}),
      ...(typeof p.optionLabel === "string" && !SUPPLIER.test(p.optionLabel) ? {optionLabel: p.optionLabel} : {}),
      ...(sale.preorder ? {preorder: true} : {}),
      ...(sale.auOnly ? {auOnly: true} : {})
    });
  }
  if (!mobile.size) throw new Error("Mobile catalogue generation returned no products.");
  fs.writeFileSync(path.join(root, "mobile-catalogue.json"), JSON.stringify({version: 1, products: [...mobile.values()]}) + "\n");
  console.log(`✓ mobile catalogue written: ${mobile.size} products`);
};
