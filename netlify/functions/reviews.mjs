import { getStore } from '@netlify/blobs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { createHandler } = require('../lib/reviews-core.cjs');
const catalogue = require('../../share-index.json');
const env = key => Netlify.env.get(key);
export default (req, context) => createHandler({ catalogue, env, store(kind) {
  const siteID = context?.site?.id || env('SITE_ID') || env('NETLIFY_SITE_ID');
  const token = env('NETLIFY_BLOBS_TOKEN') || env('NETLIFY_API_TOKEN');
  // Match this site's existing storage connection, with isolated preview documents.
  const deployContext = context?.deploy?.context || env('CONTEXT');
  const scope = deployContext === 'production' ? 'live' : (context?.deploy?.id || env('DEPLOY_ID') || 'local');
  const options = { name: `product-reviews-${scope}-${kind}`, consistency: 'strong' };
  return getStore(siteID && token ? { ...options, siteID, token } : options);
} })(req);
export const config = {
  path: ['/api/reviews', '/api/reviews/admin'],
  rateLimit: { action: 'rate_limit', aggregateBy: 'ip', windowSize: 60, windowLimit: 60 }
};
