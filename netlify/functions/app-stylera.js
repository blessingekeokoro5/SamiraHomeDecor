const { answerForApp } = require("../../js/stylera-knowledge");
const { products } = require("../../mobile-catalogue.json");
const catalogue = products.map(product => ({ id: product.id, name: product.name, cat: product.category, price: product.price, description: product.description }));
const headers = {
  "Content-Type": "application/json", "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) });
exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") return reply(200, {});
  if (event.httpMethod !== "POST") return reply(405, { error: "Method not allowed." });
  if (event.isBase64Encoded || (event.body || "").length > 4000) return reply(400, { error: "Your question is too long." });
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return reply(400, { error: "Invalid request." }); }
  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question || question.length > 600) return reply(400, { error: "Enter a question of up to 600 characters." });
  return reply(200, answerForApp(question, catalogue, body.previousTopic));
};
