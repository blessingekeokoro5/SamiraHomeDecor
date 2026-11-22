-- Apply once in Supabase SQL Editor before enabling cross-device unread tracking.
-- Shared per staff account across all devices; message-level customer unread counts.
create table if not exists public.stylera_staff_read_positions (
 staff_id uuid not null references auth.users(id) on delete cascade,
 thread_kind text not null check (thread_kind in ('guest','customer')),
 thread_id uuid not null,
 last_read_at timestamptz not null default '1970-01-01T00:00:00Z',
 primary key(staff_id,thread_kind,thread_id)
);
alter table public.stylera_staff_read_positions enable row level security;
revoke all on public.stylera_staff_read_positions from anon, authenticated;
create or replace function public.stylera_staff_unread_counts()
returns table(thread_kind text, thread_id uuid, unread_count bigint)
language plpgsql security definer set search_path=public,pg_temp as $$
begin
 if auth.uid() is null or public.stylera_is_support_staff() is distinct from true then
   raise exception 'Not authorised';
 end if;
 return query
 select 'customer'::text,c.id,
 (select count(*) from public.stylera_messages m
  where m.conversation_id=c.id and m.sender='customer'
  and m.created_at>coalesce(r.last_read_at,'1970-01-01T00:00:00Z'::timestamptz))
 from public.stylera_conversations c
 left join public.stylera_staff_read_positions r
   on r.staff_id=auth.uid() and r.thread_kind='customer' and r.thread_id=c.id
 union all
 select 'guest'::text,g.id,
 (select count(*) from public.stylera_guest_messages m
  where m.thread_id=g.id and m.sender='customer'
  and m.created_at>coalesce(r.last_read_at,'1970-01-01T00:00:00Z'::timestamptz))
 from public.stylera_guest_threads g
 left join public.stylera_staff_read_positions r
   on r.staff_id=auth.uid() and r.thread_kind='guest' and r.thread_id=g.id;
end $$;
create or replace function public.stylera_staff_mark_read(p_kind text,p_thread uuid,p_read_through timestamptz)
returns void language plpgsql security definer set search_path=public,pg_temp as $$
begin
 if auth.uid() is null or public.stylera_is_support_staff() is distinct from true then
  raise exception 'Not authorised';
 end if;
 if p_kind not in ('guest','customer') or p_read_through is null or p_read_through>now()+interval '1 minute' then
  raise exception 'Invalid read position';
 end if;
 if (p_kind='guest' and not exists(select 1 from public.stylera_guest_threads where id=p_thread))
 or (p_kind='customer' and not exists(select 1 from public.stylera_conversations where id=p_thread)) then
  raise exception 'Conversation not found';
 end if;
 insert into public.stylera_staff_read_positions(staff_id,thread_kind,thread_id,last_read_at)
 values(auth.uid(),p_kind,p_thread,p_read_through)
 on conflict(staff_id,thread_kind,thread_id) do update
 set last_read_at=greatest(stylera_staff_read_positions.last_read_at,excluded.last_read_at);
end $$;
revoke all on function public.stylera_staff_unread_counts() from public,anon;
revoke all on function public.stylera_staff_mark_read(text,uuid,timestamptz) from public,anon;
grant execute on function public.stylera_staff_unread_counts() to authenticated;
grant execute on function public.stylera_staff_mark_read(text,uuid,timestamptz) to authenticated;
