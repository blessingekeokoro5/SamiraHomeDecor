# Stylera email alerts: Resend + Supabase Database Webhook

**Status:** Server-side handler is committed to the development branch. Not configured or verified. Live website/Tidio unchanged.

## 1. Verify Resend
In Resend, confirm the sending domain `notifications.samirahomedecor.com.au` is **Verified**. The proposed From address is `alerts@notifications.samirahomedecor.com.au`. Do not proceed if domain verification is pending.

## 2. Configure Netlify environment variables (Deploy Preview Functions scope only)
In Netlify project settings → Environment variables, create:
- `RESEND_API_KEY`: the private Resend API key; never share it in chat or GitHub.
- `STYLERA_WEBHOOK_SECRET`: a new random secret of at least 32 bytes (different from all other passwords and keys).
- `STYLERA_ALERT_FROM`: `Stylera Support <alerts@notifications.samirahomedecor.com.au>` (only after Resend verification).
- `STYLERA_ALERT_TO`: `hello@samirahomedecor.com.au` (verify the mailbox can receive messages).

Use Netlify's **Functions** scope and **Deploy previews** context, if supported. Do not put any secrets in `netlify.toml`, public frontend JS, or the Supabase SQL editor. Redeploy the preview after changing variables.

## 3. Create the Supabase Database Webhook
In the **Sydney** Supabase project, Database → Webhooks → Create a new webhook:
- Name: `stylera_customer_message_email_preview`
- Table: `public.stylera_messages`
- Event: **INSERT** only
- HTTP request method: POST
- URL: `https://deploy-preview-5--samirahomedecorau.netlify.app/.netlify/functions/stylera-notify`
- Header: `Authorization: Bearer <the exact STYLERA_WEBHOOK_SECRET value>`
- Content-Type: `application/json`

**Warning:** Database webhooks are project-wide and will run on every matching customer message, including other development clients; use only after testing. The function validates the shared bearer token and the event type, then sends a generic notification without customer content.

## 4. Test
Send a new message from a separate customer test account. Confirm the webhook's request status is 200 and the business mailbox receives exactly one alert. Verify 401 for unauthenticated calls and 405 for GET. Do not claim alerts are working before testing.

## Limitations before production
- Webhook deliveries can retry, causing duplicate emails; idempotency and deduplication are not yet implemented.
- No Resend domain verification or actual email send has been checked.
- A shared secret is only as safe as its storage and handling. Rotate if disclosed.
- Generic email alert intentionally omits message text and customer identity.
- Netlify preview endpoints may change with deployment context; review before publishing.
- Add abuse quotas, deduplication, and delivery monitoring before production rollout.
