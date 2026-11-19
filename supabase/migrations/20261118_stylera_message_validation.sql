-- Stylera: optional database-side customer message protection.
-- Run in the Sydney Supabase SQL Editor after reviewing.
-- Applies to future INSERTs; does not delete or modify existing messages.
-- Human support messages are exempt from the customer frequency limit.
create or replace function public.stylera_validate_new_message()
returns trigger language plpgsql security invoker
set search_path = '' as $$
begin
  if length(btrim(new.content)) = 0 then
    raise exception 'Message cannot be empty';
  end if;
  if length(new.content) > 2000 then
    raise exception 'Message exceeds the 2000 character limit';
  end if;
  if new.sender = 'customer' then
    if exists (
      select 1 from public.stylera_messages m
      where m.conversation_id = new.conversation_id
        and m.sender = 'customer'
        and m.created_at > now() - interval '5 seconds'
    ) then
      raise exception 'Please wait 5 seconds before sending another message';
    end if;
  end if;
  return new;
end;
$$;
drop trigger if exists stylera_validate_message_insert on public.stylera_messages;
create trigger stylera_validate_message_insert
before insert on public.stylera_messages
for each row execute function public.stylera_validate_new_message();
-- This is basic input validation, NOT comprehensive abuse prevention.
-- Production requires server-side quotas, monitoring, and anti-spam measures.
