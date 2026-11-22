-- Task 5: owner-managed customer-care records.
-- Review in Supabase SQL Editor before running. Not executed by a website deploy.
create table if not exists public.stylera_care_records (
 id uuid primary key default gen_random_uuid(),
 kind text not null check(kind in ('ticket','callback')),
 source_thread_id uuid,
 customer_name text not null,
 customer_email text,
 customer_phone text,
 subject text not null default '',
 status text not null default 'new' check(status in ('new','in_progress','awaiting_customer','resolved','pending','completed','unsuccessful')),
 priority text not null default 'normal' check(priority in ('normal','medium','high')),
 notes text not null default '',
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 check ((kind='ticket' and status in ('new','in_progress','awaiting_customer','resolved')) or (kind='callback' and status in ('pending','completed','unsuccessful')))
);
create unique index if not exists stylera_care_unique_thread on public.stylera_care_records(source_thread_id) where source_thread_id is not null;
alter table public.stylera_care_records enable row level security;
revoke all on public.stylera_care_records from anon,authenticated;
create or replace function public.stylera_care_list()
returns setof public.stylera_care_records
language plpgsql security definer set search_path=public,pg_temp as $$
begin
 if auth.uid() is null or public.stylera_is_support_staff() is distinct from true then raise exception 'Not authorised'; end if;
 return query select * from public.stylera_care_records order by updated_at desc limit 300;
end $$;
create or replace function public.stylera_care_save(p_id uuid,p_kind text,p_name text,p_email text,p_phone text,p_subject text,p_status text,p_priority text,p_notes text)
returns uuid language plpgsql security definer set search_path=public,pg_temp as $$
declare v_id uuid;
begin
 if auth.uid() is null or public.stylera_is_support_staff() is distinct from true then raise exception 'Not authorised'; end if;
 if p_kind not in ('ticket','callback') or length(trim(coalesce(p_name,'')))<2 or length(trim(coalesce(p_subject,'')))<2 or
 p_priority not in ('normal','medium','high') or
 not ((p_kind='ticket' and p_status in ('new','in_progress','awaiting_customer','resolved')) or (p_kind='callback' and p_status in ('pending','completed','unsuccessful'))) then raise exception 'Invalid care record'; end if;
 if p_id is null then
  insert into public.stylera_care_records(kind,customer_name,customer_email,customer_phone,subject,status,priority,notes)
  values(p_kind,left(trim(p_name),100),left(trim(coalesce(p_email,'')),254),left(trim(coalesce(p_phone,'')),30),left(trim(p_subject),500),p_status,p_priority,left(coalesce(p_notes,''),3000)) returning id into v_id;
 else
  update public.stylera_care_records set customer_name=left(trim(p_name),100),customer_email=left(trim(coalesce(p_email,'')),254),customer_phone=left(trim(coalesce(p_phone,'')),30),subject=left(trim(p_subject),500),status=p_status,priority=p_priority,notes=left(coalesce(p_notes,''),3000),updated_at=now()
  where id=p_id and kind=p_kind returning id into v_id;
  if v_id is null then raise exception 'Record not found'; end if;
 end if;
 return v_id;
end $$;
revoke all on function public.stylera_care_list() from public,anon;
revoke all on function public.stylera_care_save(uuid,text,text,text,text,text,text,text,text) from public,anon;
grant execute on function public.stylera_care_list() to authenticated;
grant execute on function public.stylera_care_save(uuid,text,text,text,text,text,text,text,text) to authenticated;
