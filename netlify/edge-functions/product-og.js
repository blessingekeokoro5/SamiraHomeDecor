/* ============================================================
   Per-product link previews
   ------------------------------------------------------------
   WhatsApp, Facebook, iMessage and the rest read a page's head and
   never run its JavaScript. product.html builds itself in the
   browser, so without this every shared product link previews the
   same photo.

   This rewrites the title, description and image tags per product
   before the page is served. Photos go through Netlify's image CDN
   as JPEG, because some chat apps still won't render WebP.

   Everything is wrapped so that if anything here fails, the page is
   served untouched. A broken preview is a nuisance; a broken product
   page is lost business.
   ============================================================ */

const SITE = "https://samirahomedecor.com.au";
const FALLBACK_IMG = "/assets/og/sofa.jpg";

let indexCache = null;
let fetchedAt = 0;

async function shareIndex(request) {
  if (indexCache && Date.now() - fetchedAt < 600000) return indexCache;
  const res = await fetch(new URL("/share-index.json", request.url));
  if (res.ok) { indexCache = await res.json(); fetchedAt = Date.now(); }
  return indexCache || {};
}

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function money(n) {
  if (n == null) return "";
  return "$" + Number(n).toLocaleString("en-AU", { maximumFractionDigits: 2 });
}

export default async function handler(request, context) {
  const response = await context.next();
  let html = null;
  try {
    const type = response.headers.get("content-type") || "";
    if (!type.includes("text/html")) return response;

    const id = new URL(request.url).searchParams.get("id");
    if (!id) return response;

    const index = await shareIndex(request);
    const product = Object.hasOwn(index, id) ? index[id] : null;
    if (!product) return response;

    const raw = product.i || FALLBACK_IMG;
    const productImage = new URL(raw, SITE + "/").href;
    const image = `${SITE}/.netlify/images?url=${encodeURIComponent(/^https?:/i.test(raw) ? raw : new URL(raw, SITE + "/").pathname)}&w=1200&h=630&fit=cover&fm=jpg&q=82`;
    const title = `${product.n} | Samira Home Decor`;
    const description = product.d || "Discover " + product.n + " at Samira Home Decor. Check delivery options on the product page.";
    const pageUrl = `${SITE}/product.html?id=${encodeURIComponent(id)}`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.n,
      image: product.i ? [productImage] : undefined,
      description,
      sku: product.sku || id,
      ...(product.p > 0 ? {
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "AUD",
          price: Number(product.p).toFixed(2),
          availability: product.preorder ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition"
        }
      } : {})
    };
    const productJson = JSON.stringify(schema).replace(/</g, "\\u003c");
    const snippet = product.meta || description;
    const metaDescription = snippet.length > 170 ? snippet.slice(0, 167).replace(/\s+\S*$/, "") + "…" : snippet;

    // Straight string work on the head: no rewriter dependency, nothing to break.
    html = await response.text();
    const set = (pattern, replacement) => { html = html.replace(pattern, () => replacement); };

    set(/<\/head>/i, `<link rel="canonical" href="${esc(pageUrl)}">\n<script id="product-schema" type="application/ld+json">${productJson}</script>\n</head>`);
    set('<div id="pdpWrap"></div>', `<div id="pdpWrap"><h1>${esc(product.n)}</h1><p>${esc(description)}</p>${product.p > 0 ? `<p>${esc(money(product.p))} AUD${product.preorder ? " · Pre-order" : ""}</p>` : ""}</div>`);
    set(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
    set(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${esc(metaDescription)}">`);
    set(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${esc(title)}">`);
    set(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${esc(metaDescription)}">`);
    set(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${esc(pageUrl)}">`);
    set(/<meta property="og:image" content="[^"]*">/i, `<meta property="og:image" content="${esc(image)}">`);
    set(/<meta name="twitter:image" content="[^"]*">/i, `<meta name="twitter:image" content="${esc(image)}">`);

    const headers = new Headers(response.headers);
    headers.delete("content-length");
    return new Response(html, { status: response.status, headers });
  } catch (err) {
    console.error("product-og:", err && err.message);
    // If the body was already read, hand back what we have rather than nothing.
    if (html !== null) {
      const headers = new Headers(response.headers);
      headers.delete("content-length");
      return new Response(html, { status: response.status, headers });
    }
    return response;   // serve the page as it was
  }
}

export const config = { path: "/product.html" };
