-- Optional additional per-email signup throttle for Stylera guest chat.
-- Run in the Supabase Database SQL Editor (not Logs).
create or replace function public.stylera_guest_start(p_name text,p_email text,p_token text)
returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid; v_email text;
begin
 v_email:=lower(btrim(coalesce(p_email,'')));
 if length(btrim(coalesce(p_name,''))) not between 2 and 100 or
    length(v_email) not between 5 and 254 or
    v_email !~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' or
    p_token !~ '^[a-f0-9]{64}$' then
   raise exception 'Please provide a valid name and email';
 end if;
 -- Serialise starts for the same address to prevent simultaneous bypass.
 perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(v_email, 20261119));
 if (select count(*) from public.stylera_guest_threads
     where visitor_email=v_email and created_at > now()-interval '1 hour') >= 3 then
   raise exception 'Too many chats started. Please try again later';
 end if;
 insert into public.stylera_guest_threads(visitor_name,visitor_email,token_hash)
 values(btrim(p_name),v_email,encode(extensions.digest(p_token,'sha256'),'hex'))
 returning id into v_id;
 return v_id;
end $$;
-- IMPORTANT: This limits starts per email, NOT per IP.
-- CAPTCHA and IP-based throttling are still required before production.
