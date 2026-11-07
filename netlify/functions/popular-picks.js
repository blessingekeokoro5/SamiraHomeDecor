/* ============================================================
   Samira Home Decor — most-picked products (real order data)
   ------------------------------------------------------------
   GET /.netlify/functions/popular-picks
   → { ok:true, picks:[ { id, orders } ], basedOn: <paid orders counted>, week: "2026-W45" }

   Counts which products appear most often in PAID website orders
   from the last 90 days (from Stripe). Worked out once a week and
   cached in the Netlify Blobs store "popular-picks", so the
   Inspiration page's "Most picked by shoppers" list renews weekly
   and only ever shows what customers really bought.
   ============================================================ */

const { getStore } = require("@netlify/blobs");

const CORS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600",
};
const json = (code, obj) => ({ statusCode: code, headers: CORS, body: JSON.stringify(obj) });

function openStore() {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  return (siteID && token) ? getStore({ name: "popular-picks", siteID, token }) : getStore("popular-picks");
}

// ISO week label in Adelaide time, e.g. "2026-W45".
function weekLabel(now) {
  const d = new Date(new Date(now).toLocaleString("en-US", { timeZone: "Australia/Adelaide" }));
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const w1 = new Date(d.getFullYear(), 0, 4);
  const wk = 1 + Math.round(((d - w1) / 86400000 - 3 + ((w1.getDay() + 6) % 7)) / 7);
  return d.getFullYear() + "-W" + String(wk).padStart(2, "0");
}

async function compute() {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const since = Math.floor(Date.now() / 1000) - 90 * 86400;
  const counts = {};
  let basedOn = 0;
  const list = await stripe.checkout.sessions.list({ limit: 100, created: { gte: since } });
  for (const s of list.data || []) {
    if (s.payment_status !== "paid" || !(s.metadata && s.metadata.order_no)) continue;
    basedOn++;
    const li = await stripe.checkout.sessions.listLineItems(s.id, { limit: 50, expand: ["data.price.product"] });
    const seen = new Set();
    for (const x of li.data || []) {
      const prod = x.price && x.price.product;
      const sku = prod && typeof prod === "object" && prod.metadata && prod.metadata.sku;
      if (!sku || seen.has(sku)) continue;   // count each product once per order
      seen.add(sku);
      counts[sku] = (counts[sku] || 0) + 1;
    }
  }
  const picks = Object.keys(counts)
    .map((id) => ({ id, orders: counts[id] }))
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 12);
  return { picks, basedOn };
}

exports.handler = async () => {
  if (!process.env.STRIPE_SECRET_KEY) return json(200, { ok: true, picks: [], basedOn: 0 });
  const week = weekLabel(Date.now());
  let store = null;
  try { store = openStore(); const cached = await store.get(week, { type: "json" }); if (cached) return json(200, { ok: true, week, ...cached }); }
  catch (e) { /* no cache available; compute live */ }
  try {
    const out = await compute();
    if (store) { try { await store.setJSON(week, out); } catch (e) {} }
    return json(200, { ok: true, week, ...out });
  } catch (e) {
    console.error("popular-picks:", e.message);
    return json(200, { ok: true, week, picks: [], basedOn: 0 });
  }
};
