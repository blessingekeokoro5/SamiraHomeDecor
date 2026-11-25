const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

module.exports = (root, products, legacy) => {
  const source = fs.readFileSync(path.join(root, "js", "reviews.js"), "utf8");
  const literal = source.match(/const emailReviews = (\[[\s\S]*?\n\s*\]);/);
  if (!literal) throw new Error("Could not find the approved email reviews");
  const emailReviews = vm.runInNewContext(literal[1], {}, { timeout: 1000 });
  const known = new Set(products.map(product => product.id));
  const entries = [];
  for (const [id, reviews] of Object.entries(legacy || {})) {
    if (Array.isArray(reviews)) for (const review of reviews) entries.push([id, review]);
  }
  for (const review of emailReviews) entries.push([review.productId, review]);

  const result = Object.create(null);
  for (const [id, review] of entries) {
    if (!known.has(id) || !review || typeof review !== "object") continue;
    const message = String(review.body || review.text || review.review || review.comment || "").trim()
      .replace(/^\s*(?:(?:⭐|🌟|★|☆|✨|⭐️)\s*){2,}(?:[.!:–—-]\s*)?/, "").slice(0, 3000);
    const rating = Number(review.rating ?? review.stars);
    if (!message || !Number.isFinite(rating) || rating < 1 || rating > 5) continue;
    const displayName = String(review.who || review.name || review.author || "Customer").trim().slice(0, 40);
    const list = result[id] ||= [];
    if (list.length >= 25 || list.some(item => item.message === message && item.displayName === displayName)) continue;
    list.push({ displayName, rating, message });
  }
  fs.writeFileSync(path.join(root, "mobile-reviews.json"), JSON.stringify({ version: 1, products: result }) + "\n");
};
