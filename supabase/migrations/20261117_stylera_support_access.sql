-- Stylera Supabase follow-up migration. Review before running in Sydney SQL Editor.
-- Requires initial stylera_conversations and stylera_messages tables already created.
-- Owner membership must be added manually using the verified auth.users UUID.
create table if not exists public.stylera_support_staff (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.stylera_support_staff enable row level security;
-- No browser-facing policies on the staff table: clients cannot read or edit membership.
create or replace function public.stylera_is_support_staff()
returns boolean language sql stable security definer
set search_path = '' as $$
  select exists (
    select 1 from public.stylera_support_staff s
    where s.user_id = (select auth.uid())
  );
$$;
revoke all on function public.stylera_is_support_staff() from public;
grant execute on function public.stylera_is_support_staff() to authenticated;
create policy "Support staff read conversations"
on public.stylera_conversations for select to authenticated
using ((select public.stylera_is_support_staff()));
create policy "Support staff update conversations"
on public.stylera_conversations for update to authenticated
using ((select public.stylera_is_support_staff()))
with check ((select public.stylera_is_support_staff()));
create policy "Support staff read messages"
on public.stylera_messages for select to authenticated
using ((select public.stylera_is_support_staff()));
create policy "Customers send their own messages"
on public.stylera_messages for insert to authenticated
with check (
  sender = 'customer'
  and exists (
    select 1 from public.stylera_conversations c
    where c.id = conversation_id
      and c.customer_id = (select auth.uid())
      and c.status <> 'closed'
  )
);
create policy "Support staff send support messages"
on public.stylera_messages for insert to authenticated
with check (
  sender = 'support'
  and (select public.stylera_is_support_staff())
);
-- Do not create a browser policy for assistant messages.
-- AI responses must come from a trusted, authenticated server endpoint with rate limits.
-- Staff membership setup example (DO NOT run with a guessed email or UUID):
-- insert into public.stylera_support_staff(user_id)
-- values ('REPLACE_WITH_VERIFIED_AUTH_USER_UUID');
