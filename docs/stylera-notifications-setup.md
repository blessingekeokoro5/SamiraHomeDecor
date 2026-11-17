# Stylera notifications — migration-safe implementation plan

Status: **configuration scaffold only; no alerts are being delivered**. Production Tidio/Lyro remains active.

## Confirmed settings
- Owner alert destination: `hello@samirahomedecor.com.au`
- Firebase project: `samira-home-decor`
- Firestore: `stylera_notification_settings/{ownerUid}` stores `emailEnabled` and `pushEnabled`.
- Preview UI: `stylera-support-inbox.html`; owner-only settings endpoint: `stylera-notification-preferences`.
- The endpoint must never expose Firebase Admin private keys or provider API keys.

## Next: email notifications
1. Select a transactional email provider (e.g., Resend) and verify the sending domain in the provider dashboard. DNS records are managed at VentraIP; preserve existing MX/SPF/DKIM records and avoid overwriting email settings.
2. Create a provider API key with minimum needed permissions; store as a server-side secret only, never in GitHub or browser JavaScript.
3. Implement a Firebase Cloud Functions v2 Firestore trigger on new customer support messages. Send only when the message sender is the customer and owner email alerts are enabled. The trigger should ignore owner replies.
4. Send an alert with ticket ID, minimal non-sensitive summary and a link to the protected dashboard. Do not include private customer messages in push payloads.
5. Implement event-id-based deduplication and bounded retries, log delivery outcomes without customer message contents, and test with a synthetic ticket before activating.

## Next: phone/browser push
1. Set up Firebase Cloud Messaging Web Push and generate a VAPID public key in Firebase Console. The VAPID public key may be exposed to the browser; Firebase service-account private keys must never be exposed.
2. Add a service worker and a user-initiated 'Enable notifications' action to the dashboard, after explicit browser permission.
3. Register push tokens only after server-side owner verification. Store tokens in an owner-only Firestore subcollection, and remove stale/invalid tokens on delivery failure or logout where possible.
4. Use the same Firebase Cloud Function trigger to send a push notification with generic title/body and a link to the protected inbox.
5. Test separately on desktop browsers, Android and iPhone. iPhone web push typically requires adding the website to the Home Screen and granting permission; browser support and OS requirements vary.

## Security and migration
- Never expose a public Firestore write rule for customer messages; use authenticated, rate-limited backend ingestion with abuse prevention and consent/privacy notices.
- Firestore deny-all client rules remain until a reviewed least-privilege policy is designed.
- Separate staging and production notification flags so tests never alert real customers.
- The notification trigger should run on Firebase, not Netlify, so hosting migration does not interrupt delivery.
- No customer messaging, outbound email, or push notification has been enabled by this plan.
