# Stylera Supabase preview — setup and security checklist

These files are on the **development branch only**. They are not deployed to the live storefront and do not replace Tidio.

## Implemented in the branch
- `js/stylera-supabase-config.js`: Sydney project URL and browser-safe publishable key.
- `stylera-preview.html`: local FAQ-style demonstration, no database writes.
- `stylera-supabase-customer.html`: email OTP authentication, one customer conversation, message insertion and retrieval, text-only rendering.
- `stylera-supabase-inbox.html`: password sign-in, staff authorization check, read customer conversations and send support replies.
- `supabase/migrations/20261117_stylera_support_access.sql`: staff and customer message RLS policies. Owner reports running an equivalent idempotent migration and seeing the owner email in the staff table.

## Required before preview can work
1. In Supabase Authentication → URL Configuration, add the **actual deployed preview URL** for `stylera-supabase-customer.html` to allowed Redirect URLs. Never add a guessed URL. Configure Site URL to a controlled domain. OTP email delivery may require an SMTP provider and is subject to Supabase limits.
2. Deploy a preview from this branch only, then test customer sign-in and conversation creation with a separate test customer account.
3. Test that customer A cannot read or write customer B's messages; customers cannot write `sender='support'` or `sender='assistant'`.
4. Test owner login and owner inbox access, and verify a non-staff user cannot access staff conversations.
5. Review the existing RLS policy definitions: the idempotent SQL did **not** replace any pre-existing policies. Confirm there are no permissive policies exposing messages or conversations.
6. Add production server-side spam prevention, rate limiting, abuse handling and data retention rules. The 10-second client-side limit is only a UX guard, not a security control.
7. Do not connect public chat to the live site until authentication, support workflows, email delivery, accessibility and privacy notice have been verified.

## Not implemented
- Paid AI response generation, AI image previews, product AR
- Resend email notifications, browser push notifications
- Customer order lookup, live product catalog integration
- Background polling, realtime updates, support escalation automations
- Automated integration tests or verified preview deployment

Never put a service-role key, Resend API key, database password, or model API key in public JavaScript.
