#!/usr/bin/env node
/* ============================================================
   SAMIRA HOME DECOR — Sitemap generator
   Reads js/data.js (PRODUCTS) and js/blog.js (POSTS) and writes
   sitemap.xml at the site root, using the canonical host and
   only real, indexable pages (+ every product & blog article).

   Run after scripts/gen-catalogue.js. Netlify runs both on each deploy.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://samirahomedecor.com.au";
const root = path.resolve(__dirname, "..");

function load(file, exportName) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const sandbox = { localStorage: { getItem: () => null }, console };
  vm.createContext(sandbox);
  vm.runInContext(code + `\n;globalThis.__X = (typeof ${exportName} !== "undefined") ? ${exportName} : null;`, sandbox, { filename: file });
  return sandbox.__X;
}

const readJSON = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const catalogue = readJSON("netlify/functions/_catalogue.json").products;
const products = Object.entries(readJSON("share-index.json"));
const collections = {
  "living-room.html": ["Living Room", "Furniture"],
  "dining.html": ["Dining"],
  "bedroom.html": ["Bedroom"],
  "bathroom.html": ["Bathroom"],
  "home-decor.html": ["Home Décor"],
  "kitchenware.html": ["Kitchenware"],
  "outdoor.html": ["Outdoor"],
  "office.html": ["Office"],
  "lifestyle.html": ["Lifestyle"],
};
const POSTS = load("js/blog.js", "POSTS") || [];

// Real, indexable static pages (NOT cart/checkout/account/admin/order-confirmed).
const STATIC = [
  ["", 1.0], ["shop.html", 0.9], ["furniture.html", 0.9],
  ...Object.keys(collections).map((page) => [page, 0.85]), ["ready-to-ship-dining-kitchen.html", 0.9], ["gift-cards.html", 0.7], ["hamper-maker.html", 0.6],
  ["hampers.html", 0.7], ["corporate-gifting.html", 0.7], ["staging.html", 0.8], ["portfolio.html", 0.7], ["trade.html", 0.6],
  ["styled-spaces.html", 0.8], ["property-styling-staging.html", 0.7], ["interior-design.html", 0.7], ["vacation-rentals.html", 0.7],
  ["personal-shopping.html", 0.7], ["cleaning-services.html", 0.7], ["store-locator.html", 0.5], ["become-a-supplier.html", 0.6],
  ["rewards.html", 0.6], ["refer-a-friend.html", 0.6], ["christmas-vouchers.html", 0.5], ["careers.html", 0.5],
  ["stylist.html", 0.6], ["blog.html", 0.8], ["luxury-home-styling-guide.html", 0.7], ["bathroom-accessories-buying-guide.html", 0.7], ["about.html", 0.6], ["contact.html", 0.6],
  ["support.html", 0.5], ["returns.html", 0.6], ["track.html", 0.4], ["wishlist.html", 0.3],
  ["policy.html?doc=faq", 0.4], ["policy.html?doc=delivery", 0.4], ["policy.html?doc=returns", 0.4],
  ["policy.html?doc=privacy", 0.3], ["policy.html?doc=terms", 0.3],
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const productUrl = (id) => "product.html?id=" + encodeURIComponent(id);
const url = (loc, priority) =>
  `  <url><loc>${esc(SITE + "/" + loc)}</loc><priority>${priority.toFixed(1)}</priority></url>`;

const rows = [];
STATIC.forEach(([loc, p]) => rows.push(url(loc, p)));
products.forEach(([id]) => rows.push(url(productUrl(id), 0.8)));
POSTS.filter((p) => p && p.slug).forEach((p) => rows.push(url("article.html?post=" + p.slug, 0.6)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml written — ${rows.length} URLs (${products.length} products, ${POSTS.length} posts).`);

// Keep product links in the initial HTML independently of the shopping grid.
const grouped = new Map(Object.keys(collections).map((page) => [page, []]));
grouped.set("shop.html", []);
grouped.set("furniture.html", []);
for (const [id, product] of products) {
  const entry = catalogue[id];
  if (!entry) throw new Error(`Missing catalogue entry for ${id}`);
  const category = Object.keys(collections).find((page) => collections[page].includes(entry.cat));
  const link = `          <li><a href="${SITE}/${productUrl(id)}">${esc(product.n)}</a></li>`;
  grouped.get(category || "shop.html").push(link);
  if (entry.furniture) grouped.get("furniture.html").push(link);
}

const startMarker = "<!-- BEGIN generated catalogue links -->";
const endMarker = "<!-- END generated catalogue links -->";
const footer = '  <div id="site-footer">';
for (const [page, links] of grouped) {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, "utf8");
  const start = html.indexOf(startMarker);
  if (start !== -1) {
    const end = html.indexOf(endMarker, start);
    if (end === -1) throw new Error(`Missing catalogue end marker in ${page}`);
    html = html.slice(0, start) + html.slice(end + endMarker.length + 1);
  }
  const section = links.length ? [
    startMarker,
    '  <section class="section" style="padding-top:0">',
    '    <div class="container">',
    '      <details>',
    `        <summary>${page === "shop.html" ? "Browse more products by name" : "Browse all products in this collection by name"}</summary>`,
    '        <ul class="grid grid-3" style="padding-left:1.5rem">',
    ...links,
    '        </ul>',
    '      </details>',
    '    </div>',
    '  </section>',
    endMarker,
  ].join("\n") + "\n" : "";
  if (!html.includes(footer)) throw new Error(`Missing site footer in ${page}`);
  fs.writeFileSync(file, html.replace(footer, () => section + footer));
}
