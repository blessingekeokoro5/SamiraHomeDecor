# Samira Home Decor — Additional Store Credit Rewards
Status: DEVELOPMENT ONLY. Do not publish or activate earning/redemption until the secure ledger, verification and checkout integration pass testing.

## Approved rewards
- Purchases: 3% of eligible paid merchandise subtotal, expressed as AUD store credit ($3 per $100).
- New verified customer account: $10 AUD, once per real customer.
- Verified Instagram follow: $10 AUD, once per customer; credit expires 145 days after earning.
- Verified newsletter subscription: $10 AUD, once per customer; credit expires 100 days after earning.
- Birthday: $50 AUD, once per customer per calendar year after identity and birthdate checks.
- Existing member pricing, 10% first-order benefit, referral discounts, Christmas vouchers and other offers are retained.

## Required backend controls
1. Authenticate a real customer using the current account session; never use browser localStorage as proof of eligibility.
2. Store an append-only credit ledger with event idempotency keys, earning timestamps, expiry, redemption and refund reversals. Use server-side atomic transactions and enforce one-time action uniqueness.
3. Credit purchase rewards only after Stripe-confirmed successful payment; calculate on eligible merchandise value excluding shipping, taxes and discounts according to approved terms. Reverse on refund or chargeback.
4. Do not automatically issue Instagram credit based on a button click: require an approved verification method or manual review.
5. Issue newsletter credit only after verified opt-in and prevent duplicate claims.
6. Birthday credit requires an approved verification and anti-abuse process; do not publicly display date of birth.
7. Checkout redemption must be validated server-side, capped by available balance and order eligibility, and applied atomically with order creation; no negative balances.
8. Confirm stacking, caps, expiry, exclusions and treatment of shipping/taxes with owner before activation.
9. Add owner tools to review ledger, approve/reject manual claims, adjust credits with audit history, and inspect disputes.
10. Provide customer balance, pending/earned/expired credits, history and terms.
11. Ensure Australian consumer law obligations, privacy and marketing consent requirements are reviewed.

## Frontend preview
- css/samira-rewards.css
- js/samira-rewards.js
- rewards.html
- js/components.js

The frontend is illustrative. It does not currently mint, track, or redeem credits.
