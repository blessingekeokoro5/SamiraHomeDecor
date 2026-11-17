# Stylera Support — development foundation

Status: **development only**, not connected to the live site. This branch deliberately does not alter checkout, existing chat, customer accounts or the current Stylera room-styling page.

## Existing website audit
- Static HTML/JS website deployed with Netlify; serverless functions under `netlify/functions`.
- `stylist.html` and `js/stylist.js` currently provide a browser-side styling experience, not a production AI support backend.
- `support.html` already advertises tickets and live chat. Reuse these entry points after the replacement has passed testing.
- The current `js/policies.js` states uploaded room images are processed in the browser and not stored. Do not change this behaviour or policy accidentally.

## Proposed architecture
1. Browser: consent-aware anonymous visitor sessions, page events and a separate accessible Stylera support chat. Never track form contents, addresses, payment details or room photos.
2. Netlify Functions: authenticated and rate-limited API endpoints for chat, ticket submission and analytics; server-side AI calls with usage ceilings.
3. Firebase: Firestore for conversations, tickets and limited-retention analytics; Firebase Authentication with owner-only admin access; restrictive security rules. No public direct access to private collections.
4. Admin: owner-only visitors/chat/tickets dashboard, online presence, ticket status and notification preferences.
5. AI: server-side OpenAI API, approved knowledge base, safe refusal for unverified stock/shipping/refunds, human escalation. Do not expose API keys in browser assets.
6. Privacy: Australian Privacy Principles review, consent controls, retention policy, deletion/export process, and clear AI disclosures before launch.

## Release gates
- Confirm Firebase project ID and owner account using secure setup (never commit secrets).
- Add and review Firestore security rules, test unauthorised reads/writes.
- Implement consent gating, event throttling, data minimisation and retention.
- Test AI responses and cost caps under A$20–A$50/month target; note this is a budget target, not guaranteed spend.
- Test customer ticket lifecycle, duplicate submission prevention, spam controls and email notifications.
- Confirm existing chat vendor removal only after replacement works.
- Test mobile, accessibility, checkout regression and staging deploy.
- Merge only after explicit approval; do not auto-publish this branch.

## Environment variables (configure in Netlify, never commit values)
- `OPENAI_API_KEY`
- `FIREBASE_PROJECT_ID`
- Firebase server credentials via secure Netlify environment settings (format to be selected during implementation)
- Notification email provider credentials
- Optional usage/rate-limit configuration

## Initial prototype
`js/stylera-support/visitor-events.js` is an opt-in, dependency-free browser event collector. It is **not loaded by any page yet** and **does not send data anywhere**. Its event sink is intentionally an injected callback, to be wired only after consent, privacy review and secure API deployment.
