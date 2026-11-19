-- Read-only Stylera security audit. Run in the Sydney Supabase SQL Editor.
-- This does not modify tables, users, or policies.
select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('stylera_conversations','stylera_messages','stylera_support_staff')
order by tablename, policyname;

select relname as table_name, relrowsecurity as rls_enabled,
       relforcerowsecurity as rls_forced
from pg_class
where oid in (
 'public.stylera_conversations'::regclass,
 'public.stylera_messages'::regclass,
 'public.stylera_support_staff'::regclass
)
order by relname;

-- Staff roster: ensure only the intended, verified owner appears.
select u.email, u.email_confirmed_at is not null as confirmed,
       s.created_at as granted_at
from public.stylera_support_staff s
join auth.users u on u.id=s.user_id;
