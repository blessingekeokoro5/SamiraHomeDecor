const { getStore, connectLambda } = require("@netlify/blobs");

function connectAppBlobs(event) {
  if (event.blobs && typeof connectLambda === "function") connectLambda(event);
}

function appStore(name) {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  return getStore({ name, consistency: "strong", ...(siteID && token ? { siteID, token } : {}) });
}

module.exports = { appStore, connectAppBlobs };
