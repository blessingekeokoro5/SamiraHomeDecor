const { createHmac } = require("node:crypto");
const { getStore } = require("@netlify/blobs");
const { verifiedEmail } = require("./_app-order-index");

const MAX_BODY = 2_650_000;
const HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const json = (statusCode, data) => ({ statusCode, headers: HEADERS, body: JSON.stringify(data) });
const dailyLimit = Math.min(30, Number(process.env.STYLERA_IMAGE_DAILY_LIMIT) || 0);
const enabled = () => dailyLimit >= 1 && Number.isInteger(dailyLimit) &&
  Boolean(process.env.STYLERA_IMAGE_API_KEY && process.env.STYLERA_IMAGE_MODEL);

function decodePhoto(value) {
  if (typeof value !== "string" || value.length > MAX_BODY || !/^[A-Za-z0-9+/]+={0,2}$/.test(value)) return null;
  const bytes = Buffer.from(value, "base64");
  if (bytes.length < 16) return null;
  if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return new Blob([bytes], { type: "image/jpeg" });
  if (bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return new Blob([bytes], { type: "image/png" });
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return new Blob([bytes], { type: "image/webp" });
  return null;
}

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") return json(200, {});
  if (event.httpMethod === "GET") return json(200, { available: enabled() });
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed." });
  if (!enabled()) return json(503, { error: "AI room previews are not available yet." });
  if (event.isBase64Encoded || String(event.body || "").length > MAX_BODY + 8000) return json(413, { error: "Choose a smaller room photo." });
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return json(400, { error: "Invalid request." }); }
  const email = verifiedEmail(body?.member);
  if (!email) return json(401, { error: "Sign in to generate a preview." });
  const photo = decodePhoto(body.photo);
  if (!photo || body.consent !== true) return json(400, { error: "Choose a JPEG, PNG or WebP room photo and confirm permission to process it." });
  const brief = [body.room, body.style, body.mode].filter(value => typeof value === "string").map(value => value.slice(0, 60)).join(", ");
  const day = new Date().toISOString().slice(0, 10);
  const identity = createHmac("sha256", process.env.AUTH_SECRET || process.env.BREVO_API_KEY).update(email).digest("hex");
  try {
    const limits = getStore({ name: "stylera-image-limits", consistency: "strong" });
    const account = day + "/account/" + identity;
    if (!(await limits.setJSON(account, true, { onlyIfNew: true })).modified) {
      return json(429, { error: "You’ve used today’s room preview." });
    }
    let claimed = false;
    for (let slot = 0; slot < dailyLimit; slot++) {
      if ((await limits.setJSON(day + "/slot/" + slot, true, { onlyIfNew: true })).modified) {
        claimed = true;
        break;
      }
    }
    if (!claimed) {
      await limits.delete(account);
      return json(429, { error: "Today’s room previews are fully booked. Try again tomorrow." });
    }
    const form = new FormData();
    form.append("model", process.env.STYLERA_IMAGE_MODEL);
    form.append("image[]", photo, "room." + photo.type.split("/")[1].replace("jpeg", "jpg"));
    form.append("prompt", "Create a realistic interior styling concept from this room photo. Retain the camera angle, walls, doors and windows. Remove any visible people or identifying details. Desired direction: " + brief + ". Do not insert writing or logos.");
    form.append("size", "1024x1024");
    form.append("quality", "low");
    form.append("output_format", "jpeg");
    form.append("output_compression", "80");
    const response = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: "Bearer " + process.env.STYLERA_IMAGE_API_KEY },
      body: form,
      signal: AbortSignal.timeout(26000),
    });
    const result = response.ok ? await response.json() : null;
    const image = result?.data?.[0]?.b64_json;
    if (typeof image === "string" && image.length < 2_500_000) return json(200, { image });
    return json(502, { error: "A room preview could not be generated." });
  } catch {
    return json(503, { error: "The room preview service is temporarily unavailable." });
  }
};
