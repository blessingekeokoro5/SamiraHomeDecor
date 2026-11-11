const { randomUUID, timingSafeEqual } = require('node:crypto');
const json = (status, data) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
const equal = (a, b) => !!a && !!b && Buffer.byteLength(a) === Buffer.byteLength(b) && timingSafeEqual(Buffer.from(a), Buffer.from(b));
const clean = (v, max) => typeof v === 'string' ? v.trim().slice(0, max) : '';
function authorised(req, env) {
  const password = env('ADMIN_PASSWORD') || env('BOOKING_ADMIN_TOKEN');
  let given = '';
  try { const auth = req.headers.get('authorization') || ''; if (auth.startsWith('Basic ')) { const s = Buffer.from(auth.slice(6), 'base64').toString('utf8'); given = s.slice(s.indexOf(':') + 1); } } catch (_) {}
  return equal(given, password) || equal(req.headers.get('x-admin-token'), env('BOOKING_ADMIN_TOKEN'));
}
function createHandler({ store, catalogue, env }) {
  return async req => {
    const url = new URL(req.url), admin = url.pathname.endsWith('/admin');
    if (admin && !authorised(req, env)) return json(401, { error: 'Sign in to your admin dashboard or unlock with your booking access key.' });
    if (!['GET', 'POST'].includes(req.method)) return json(405, { error: 'Method not allowed' });
    if (req.method === 'POST') {
      const origin = req.headers.get('origin');
      if (!origin || origin !== url.origin) return json(403, { error: 'Please submit from this website.' });
      if (!(req.headers.get('content-type') || '').includes('application/json')) return json(415, { error: 'JSON required' });
    }
    try {
      const submissions = store('submissions'), decisions = store('decisions');
      if (req.method === 'GET') {
        const { blobs } = await submissions.list();
        const rows = [];
        for (let i = 0; i < blobs.length; i += 20) {
          const batch = await Promise.all(blobs.slice(i, i + 20).map(async ({ key }) => {
            const r = await submissions.get(key, { type: 'json' });
            if (!r) return null;
            const d = await decisions.get(key, { type: 'json' });
            const status = d?.status || 'pending';
            if (!admin && (status !== 'approved' || r.consent !== true)) return null;
            if (!admin && url.searchParams.get('productId') && r.productId !== url.searchParams.get('productId')) return null;
            // Explicit allowlist: never expose email, consent or moderation data publicly.
            const pub = { id: r.id, productId: r.productId, productName: r.productName, rating: r.rating, body: r.body, who: r.who, suburb: r.suburb, date: r.date };
            return admin ? { ...pub, email: r.email, status, moderatedAt: d?.date || null } : pub;
          }));
          rows.push(...batch.filter(Boolean));
        }
        rows.sort((a, b) => b.date.localeCompare(a.date));
        return json(200, { ok: true, reviews: rows });
      }
      // Enforce a byte limit while streaming rather than buffering an unbounded body.
      const reader = req.body?.getReader(); let size = 0, parts = [];
      if (reader) { while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 12000) { await reader.cancel(); return json(413, { error: 'Review is too long.' }); } parts.push(Buffer.from(value)); } }
      let b; try { b = JSON.parse(Buffer.concat(parts).toString('utf8')); } catch (_) { return json(400, { error: 'Invalid submission' }); }
      if (!b || typeof b !== 'object' || Array.isArray(b)) return json(400, { error: 'Invalid submission' });
      if (admin && b.action !== 'create') {
        if (!/^[a-f0-9-]{36}$/.test(b.id || '') || !['approved', 'rejected', 'pending', 'archived'].includes(b.status)) return json(400, { error: 'Invalid moderation action' });
        const original = await submissions.get(b.id, { type: 'json' });
        if (!original) return json(404, { error: 'Review not found' });
        if (b.status === 'approved' && original.consent !== true) return json(400, { error: 'Publication consent is required' });
        // Original submission is immutable. A separate document is the entire moderation decision.
        await decisions.setJSON(b.id, { status: b.status, date: new Date().toISOString() });
        return json(200, { ok: true });
      }
      if (b.website) return json(400, { error: 'Unable to submit review.' });
      const productId = clean(b.productId, 80), name = clean(b.name, 100), email = clean(b.email, 254), body = clean(b.body, 3000), suburb = clean(b.suburb, 100);
      if (!Object.hasOwn(catalogue, productId)) return json(400, { error: 'Please select a product from the store.' });
      if (!name || (!admin && !/^\S+@\S+\.\S+$/.test(email)) || body.length < 10 || typeof b.body !== 'string' || b.body.length > 3000 || !Number.isInteger(b.rating) || b.rating < 1 || b.rating > 5 || b.consent !== true) return json(400, { error: 'Please add your name, email, a 1–5 star rating, a review of 10–3000 characters, and publication consent.' });
      const names = name.split(/\s+/); const who = names[0] + (names.length > 1 ? ' ' + Array.from(names[names.length - 1])[0] + '.' : '');
      let date = new Date().toISOString();
      if (admin && b.date) { if (!/^\d{4}-\d{2}-\d{2}$/.test(b.date) || isNaN(Date.parse(b.date))) return json(400, { error: 'Choose a valid review date' }); date = new Date(b.date).toISOString(); }
      const id = randomUUID();
      // Ignore client-supplied status, ID, date and product name. Every new review is pending.
      await submissions.setJSON(id, { id, productId, productName: catalogue[productId].n, rating: b.rating, body, who, email, suburb, consent: true, date }, { onlyIfNew: true });
      if (admin) await decisions.setJSON(id, { status: b.publish === true ? 'approved' : 'pending', date: new Date().toISOString() });
      return json(201, { ok: true, status: admin && b.publish === true ? 'approved' : 'pending' });
    } catch (e) {
      console.error('Review storage failed:', e.message);
      return json(503, { error: 'Reviews are temporarily unavailable. Please try again shortly.' });
    }
  };
}
module.exports = { createHandler, authorised };
