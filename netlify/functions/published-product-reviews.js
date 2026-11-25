const origin = "https://samirahomedecor.com.au";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=120",
};
const reply = (statusCode, data) => ({ statusCode, headers, body: JSON.stringify(data) });

exports.handler = async event => {
  if (event.httpMethod !== "GET") return reply(405, { error: "Method not allowed." });
  const id = event.queryStringParameters?.product;
  if (typeof id !== "string" || !/^[a-z0-9_-]{1,64}$/i.test(id)) return reply(400, { error: "Choose a product." });
  try {
    const response = await fetch(origin + "/api/reviews?productId=" + encodeURIComponent(id), {
      signal: AbortSignal.timeout(4500),
      headers: { "Accept": "application/json" },
    });
    if (!response.ok) throw new Error("Reviews unavailable");
    const data = await response.json();
    if (!Array.isArray(data.reviews)) throw new Error("Invalid review feed");
    const reviews = data.reviews.slice(0, 25).flatMap(review => {
      if (review?.productId && review.productId !== id) return [];
      const rating = Number(review?.rating);
      if (typeof review?.body !== "string" || !Number.isFinite(rating) || rating < 1 || rating > 5) return [];
      const displayName = typeof review.who === "string" ? review.who.slice(0, 40) : "Customer";
      return [{ displayName, rating, message: review.body.slice(0, 3000) }];
    });
    return reply(200, { reviews });
  } catch {
    return reply(503, { error: "Published reviews could not be loaded." });
  }
};
