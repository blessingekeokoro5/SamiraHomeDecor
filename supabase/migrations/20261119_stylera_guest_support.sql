-- Stylera guest support, development preview. Run in Supabase SQL Editor.
-- Separate from existing authenticated conversations; no existing data is modified.
create extension if not exists pgcrypto with schema extensions;
create table if not exists public.stylera_guest_threads (
 id uuid primary key default gen_random_uuid(),
 visitor_name text not null check (char_length(visitor_name) between 2 and 100),
 visitor_email text not null check (char_length(visitor_email) between 5 and 254),
 token_hash text not null,
 status text not null default 'open' check (status in ('open','closed')),
 created_at timestamptz not null default now(),
 last_message_at timestamptz
);
create table if not exists public.stylera_guest_messages (
 id uuid primary key default gen_random_uuid(),
 thread_id uuid not null references public.stylera_guest_threads(id) on delete cascade,
 sender text not null check (sender in ('customer','support')),
 content text not null check (char_length(btrim(content)) between 1 and 2000),
 created_at timestamptz not null default now()
);
create index if not exists stylera_guest_messages_thread_time on public.stylera_guest_messages(thread_id,created_at);
create index if not exists stylera_guest_threads_recent on public.stylera_guest_threads(created_at desc);
alter table public.stylera_guest_threads enable row level security;
alter table public.stylera_guest_messages enable row level security;
revoke all on public.stylera_guest_threads, public.stylera_guest_messages from public, anon, authenticated;
-- No direct table policies. All access is through narrow security-definer RPCs.
create or replace function public.stylera_guest_start(p_name text,p_email text,p_token text)
returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid;
begin
 if length(btrim(coalesce(p_name,''))) not between 2 and 100 or
    length(btrim(coalesce(p_email,''))) not between 5 and 254 or
    btrim(p_email) !~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' or
    p_token !~ '^[a-f0-9]{64}$' then
   raise exception 'Please provide a valid name and email';
 end if;
 insert into public.stylera_guest_threads(visitor_name,visitor_email,token_hash)
 values(btrim(p_name),lower(btrim(p_email)),encode(extensions.digest(p_token,'sha256'),'hex'))
 returning id into v_id;
 return v_id;
end $$;
create or replace function public.stylera_guest_send(p_thread uuid,p_token text,p_message text)
returns void language plpgsql security definer set search_path = '' as $$
declare v_last timestamptz;
begin
 if char_length(btrim(coalesce(p_message,''))) not between 1 and 2000 then raise exception 'Message must be 1–2000 characters'; end if;
 if p_token !~ '^[a-f0-9]{64}$' then raise exception 'Invalid session'; end if;
 perform 1 from public.stylera_guest_threads
 where id=p_thread and token_hash=encode(extensions.digest(p_token,'sha256'),'hex') and status='open'
 for update;
 if not found then raise exception 'Conversation unavailable'; end if;
 select max(created_at) into v_last from public.stylera_guest_messages where thread_id=p_thread and sender='customer';
 if v_last > now()-interval '8 seconds' then raise exception 'Please wait before sending again'; end if;
 insert into public.stylera_guest_messages(thread_id,sender,content) values(p_thread,'customer',btrim(p_message));
 update public.stylera_guest_threads set last_message_at=now() where id=p_thread;
end $$;
create or replace function public.stylera_guest_read(p_thread uuid,p_token text)
returns table(sender text,content text,created_at timestamptz)
language plpgsql security definer set search_path = '' as $$
begin
 if p_token !~ '^[a-f0-9]{64}$' or not exists (
  select 1 from public.stylera_guest_threads
  where id=p_thread and token_hash=encode(extensions.digest(p_token,'sha256'),'hex')
 ) then raise exception 'Conversation unavailable'; end if;
 return query select m.sender,m.content,m.created_at from public.stylera_guest_messages m
 where m.thread_id=p_thread order by m.created_at asc limit 200;
end $$;
create or replace function public.stylera_staff_guest_threads()
returns table(id uuid,visitor_name text,visitor_email text,status text,created_at timestamptz,last_message_at timestamptz)
language plpgsql security definer set search_path = '' as $$
begin
 if auth.uid() is null or not public.stylera_is_support_staff() then raise exception 'Unauthorized'; end if;
 return query select t.id,t.visitor_name,t.visitor_email,t.status,t.created_at,t.last_message_at
 from public.stylera_guest_threads t order by coalesce(t.last_message_at,t.created_at) desc limit 100;
end $$;
create or replace function public.stylera_staff_guest_messages(p_thread uuid)
returns table(sender text,content text,created_at timestamptz)
language plpgsql security definer set search_path = '' as $$
begin
 if auth.uid() is null or not public.stylera_is_support_staff() then raise exception 'Unauthorized'; end if;
 return query select m.sender,m.content,m.created_at from public.stylera_guest_messages m where m.thread_id=p_thread order by m.created_at asc limit 200;
end $$;
create or replace function public.stylera_staff_guest_reply(p_thread uuid,p_message text)
returns void language plpgsql security definer set search_path = '' as $$
begin
 if auth.uid() is null or not public.stylera_is_support_staff() then raise exception 'Unauthorized'; end if;
 if char_length(btrim(coalesce(p_message,''))) not between 1 and 2000 then raise exception 'Invalid message'; end if;
 if not exists(select 1 from public.stylera_guest_threads where id=p_thread and status='open') then raise exception 'Conversation closed or missing'; end if;
 insert into public.stylera_guest_messages(thread_id,sender,content) values(p_thread,'support',btrim(p_message));
 update public.stylera_guest_threads set last_message_at=now() where id=p_thread;
end $$;
revoke all on function public.stylera_guest_start(text,text,text),public.stylera_guest_send(uuid,text,text),public.stylera_guest_read(uuid,text),public.stylera_staff_guest_threads(),public.stylera_staff_guest_messages(uuid),public.stylera_staff_guest_reply(uuid,text) from public,anon,authenticated;
grant execute on function public.stylera_guest_start(text,text,text),public.stylera_guest_send(uuid,text,text),public.stylera_guest_read(uuid,text) to anon,authenticated;
grant execute on function public.stylera_staff_guest_threads(),public.stylera_staff_guest_messages(uuid),public.stylera_staff_guest_reply(uuid,text) to authenticated;
-- Before production: add CAPTCHA and server-side per-IP rate limiting to guest_start and guest_send.
