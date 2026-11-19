# Samira Home Decor — analytics and commerce implementation audit
Branch: `feature/owner-analytics-commerce` (not production).

## Confirmed existing systems
- GA4 `G-JX43NY5BPC` is loaded from `js/components.js`; this is aggregate analytics, not a Tidio-style live visitor list.
- `js/cart.js` already emits GA4 ecommerce events and stores carts locally under `decomuse_cart`. Local carts are not accessible to the owner without a consented server-side event collector.
- `netlify/functions/stripe-webhook.js` verifies Stripe signatures and only processes `checkout.session.completed` where `payment_status === 'paid'`. It sends order emails, but does not currently maintain a complete refunds/revenue ledger.
- `netlify/functions/admin-payments.mjs` exposes up to 100 checkout sessions and may report `hasMore`; it is not a full annual revenue report.
- Privacy policy mentions analytics and marketing opt-in, but a dedicated visitor activity consent control, retention policy, and clear opt-out mechanism are not yet implemented.
- Stylera knowledge module already supports website product matching and styling guidance.

## Implemented on this branch
- `netlify/functions/revenue-summary.mjs`: authenticated read-only paid Stripe checkout revenue aggregation, paginated with an explicit completeness flag; current month, rolling six calendar months, year-to-date, rolling twelve months. AUD cents are aggregated on the server; no Stripe credentials are exposed to the browser.
- `admin.html`: owner dashboard revenue section with explicit gross-sales and incomplete-report disclaimers. The endpoint uses the existing server-side admin authorisation contract.

## Remaining before production
1. Verify admin authentication and payment totals against Stripe, including pagination, timezone, and refunds. Current figures are **gross paid checkout totals, not net revenue/profit**. Stripe checkout sessions from the last 12 months are counted; historical data outside that window is not.
2. Add explicit analytics consent UI and respect declined consent, retention limits and privacy disclosures before enabling detailed per-session tracking.
3. Add rate-limited, server-validated session/page/product/cart event ingestion and a protected realtime visitor view; exclude sensitive checkout/payment/customer fields.
4. Add owner-only push subscription and securely deliver notifications without leaking visitor data or broadcasting notifications to shoppers.
5. Cart recovery emails must require explicit marketing permission, confirmed subscriber status, unsubscribe controls, and anti-spam limits.
6. Discount offers must use existing checkout-authoritative pricing rules; never implement a client-only discount or stack with existing welcome offers.
7. Test Stylera recommendations against actual product IDs and available inventory before enabling conversion prompts.
8. Validate Netlify preview and run a checkout regression test before merging into `main`.

Do not infer real visitor counts, product interests, abandoned carts, or net revenue from demo figures.
