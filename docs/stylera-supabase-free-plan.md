# Stylera — Supabase Free development foundation

Status: **development only**. This branch does not replace Tidio or change the live website.

## Brand and interface
- Name: **Stylera**, Samira Home Decor's AI Stylist and Support Assistant.
- Palette: navy `#10233F`, gold `#C6A15B`, white `#FFFFFF` (confirm exact tokens against existing site CSS before implementation).
- Mobile-first floating chat, clear AI disclosure, accessible keyboard controls and human-support option.
- No supplier application intake in Stylera while applications are closed.

## Architecture (no upfront billing required for initial testing)
1. Supabase Free: Postgres, Auth, Realtime, Storage and Edge Functions within free allowances.
2. FAQ/rules layer **before** paid AI: store policies, delivery, product discovery, order enquiries and styling.
3. Optional AI provider via server-side Edge Function, with secrets never exposed in browser. No model is enabled until explicitly configured.
4. Spam throttling, per-session limits, safe fallback, and human escalation for refunds, complaints, accessibility and requested support.
5. Owner-only inbox protected with Supabase Auth and row-level security. Do not rely on hidden links for authorization.
6. Resend: verified sending domain and server-side API key for email alerts; deduplicate notifications per ticket.
7. Web Push: separate opt-in implementation, service worker and subscription management.
8. AR: model-viewer on eligible products with validated GLB/USDZ files. Room photo generation is a separate optional paid service.

## Implementation gates
- Confirm existing website's CSS palette and chat mount point.
- Create Supabase project on Free tier; obtain project URL and **public anon/publishable key only**. Never request service-role keys or secrets in chat.
- Apply reviewed SQL migrations with RLS policies, least-privilege grants and retention settings.
- Build isolated preview and test with synthetic conversations; verify cross-user isolation, rate limiting and escalation.
- Configure and test Resend domain verification and email delivery; no assumptions about previous DNS verification.
- Test desktop/mobile and confirm no regression in storefront, checkout or Tidio.
- Review Free tier pause risk and usage caps before any production launch.

## Cost policy
- No paid Firebase Blaze upgrade required.
- No auto-enablement of paid AI/image-generation services.
- No promises of permanently free production hosting; free-tier quotas and inactivity pauses apply.
- Tidio remains live until the owner approves a tested cutover.
