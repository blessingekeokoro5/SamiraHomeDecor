-- Run ONLY after STYLERA_SUPABASE_SERVICE_ROLE_KEY is configured on the Netlify
-- preview and the new Turnstile guest registration has passed an end-to-end test.
-- This blocks browsers from bypassing CAPTCHA by calling the old public RPC.
revoke execute on function public.stylera_guest_start(text,text,text) from public, anon, authenticated;
grant execute on function public.stylera_guest_start(text,text,text) to service_role;
-- Guest send/read continue to require the random per-conversation token.
