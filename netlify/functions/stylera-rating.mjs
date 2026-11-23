import { getStore } from "@netlify/blobs";

export function createRatingHandler(openStore) {
  return async request => {
    if (request.method !== "POST") return new Response(null, { status: 405, headers: { Allow: "POST" } });
    let rating;
    try {
      const body = await request.text();
      if (body.length > 512) return new Response(null, { status: 413 });
      rating = JSON.parse(body);
    } catch {
      return new Response(null, { status: 400 });
    }
    const { id, score, channel } = rating || {};
    const validId = typeof id === "string" && /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(id);
    if (!validId || !Number.isInteger(score) || score < 1 || score > 5 || !["floating", "stylist"].includes(channel)) {
      return new Response(null, { status: 400 });
    }
    try {
      await openStore().setJSON(id, { score, channel, submittedAt: new Date().toISOString() }, { onlyIfNew: true });
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error("Stylera rating storage failed", error?.message);
      return new Response(null, { status: 503 });
    }
  };
}

export default (request, context) => createRatingHandler(() => {
  const env = key => Netlify.env.get(key);
  const siteID = context?.site?.id || env("SITE_ID") || env("NETLIFY_SITE_ID");
  const token = env("NETLIFY_BLOBS_TOKEN") || env("NETLIFY_API_TOKEN");
  const scope = (context?.deploy?.context || env("CONTEXT")) === "production"
    ? "live" : (context?.deploy?.id || env("DEPLOY_ID") || "local");
  const options = { name: `stylera-ratings-${scope}`, consistency: "strong" };
  return getStore(siteID && token ? { ...options, siteID, token } : options);
})(request);

export const config = {
  path: "/api/stylera-rating",
  rateLimit: { action: "rate_limit", aggregateBy: "ip", windowSize: 60, windowLimit: 10 }
};
