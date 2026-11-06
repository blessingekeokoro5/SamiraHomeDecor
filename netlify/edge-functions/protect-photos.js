/* ============================================================
   Protect product photos from bulk copying
   ------------------------------------------------------------
   robots.txt only stops polite bots. This turns away, at the door,
   the tools people use to download a whole catalogue of photos at
   once (curl, wget, Python scripts, site rippers and so on), and
   stops other websites from embedding our photos directly.

   Always let through:
   • normal shoppers' browsers
   • Google, Bing, Facebook/Instagram, Pinterest and chat-app link
     previews, which our Shopping feed, catalogue and shared links
     depend on
   • anything that fails here: if this code errors, the photo is
     served as normal. A missing photo costs a sale.
   ============================================================ */

const GOOD_BOTS = /googlebot|google-|adsbot-google|storebot-google|bingbot|bingpreview|msnbot|facebookexternalhit|facebookcatalog|meta-external|instagram|pinterest|twitterbot|whatsapp|telegrambot|slackbot|discordbot|linkedinbot|skypeuripreview|applebot|duckduckbot|yandex|netlify/i;

const SCRAPERS = /curl|wget|python|scrapy|httrack|webcopier|webzip|teleport|offline explorer|sitesucker|webripper|grab|go-http-client|java\/|okhttp|node-fetch|axios|undici|libwww|lwp|aiohttp|httpx|guzzle|php\/|ruby|perl|mechanize|phantomjs|headlesschrome|puppeteer|playwright|selenium|scraper|crawler|spider|imagesift|gptbot|ccbot|bytespider|claudebot|anthropic|perplexity|diffbot|ahrefs|semrush|mj12|dotbot|dataforseo/i;

const OUR_SITES = /(^|\.)samirahomedecor\.com(\.au)?$|(^|\.)netlify\.app$|^localhost$/i;
const ALLOWED_REFERRERS = /(^|\.)(google|bing|facebook|fb|instagram|pinterest|duckduckgo|yahoo|ebay|temu)\.[a-z.]+$/i;

function blocked() {
  return new Response("Photos on this site are protected.", {
    status: 403,
    headers: { "content-type": "text/plain", "cache-control": "no-store" },
  });
}

export default async function handler(request, context) {
  try {
    const ua = request.headers.get("user-agent") || "";

    if (!GOOD_BOTS.test(ua)) {
      if (SCRAPERS.test(ua)) return blocked();

      // Another website embedding our photos directly (hotlinking)
      const ref = request.headers.get("referer");
      if (ref) {
        const host = new URL(ref).hostname;
        if (!OUR_SITES.test(host) && !ALLOWED_REFERRERS.test(host)) return blocked();
      }
    }
  } catch (err) {
    console.error("protect-photos:", err && err.message);
  }
  return context.next();
}

export const config = { path: ["/assets/products/*", "/assets/hamper/*"] };
