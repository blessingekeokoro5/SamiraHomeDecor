-- Run in the existing Stylera Supabase project SQL editor before enabling ticket APIs.
create table if not exists public.stylera_support_tickets (
 id uuid primary key default gen_random_uuid(),
 ticket_number bigint generated always as identity unique,
 guest_thread uuid not null,
 customer_name text not null,
 customer_email text not null,
 category text not null check (category in ('Order or delivery','Damaged or incorrect item','Refund or payment','Product quality','Service complaint','Other complaint')),
 order_reference text,
 subject text not null,
 description text not null,
 status text not null default 'open' check (status in ('open','in_progress','waiting_customer','resolved','closed')),
 priority text not null default 'normal' check (priority in ('low','normal','high','urgent')),
 assigned_to text,
 resolution text,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 resolved_at timestamptz
);
create index if not exists stylera_support_tickets_created_idx on public.stylera_support_tickets(created_at desc);
create index if not exists stylera_support_tickets_guest_idx on public.stylera_support_tickets(guest_thread);
create table if not exists public.stylera_ticket_events (
 id bigint generated always as identity primary key,
 ticket_id uuid not null references public.stylera_support_tickets(id) on delete cascade,
 event_type text not null check (event_type in ('created','status','priority','assignment','note','resolution')),
 details text not null,
 actor text not null,
 created_at timestamptz not null default now()
);
create index if not exists stylera_ticket_events_ticket_idx on public.stylera_ticket_events(ticket_id,created_at);
alter table public.stylera_support_tickets enable row level security;
alter table public.stylera_ticket_events enable row level security;
-- No anon/authenticated RLS policies. Ticket operations are performed by a server function
-- after Supabase owner validation or proof of possession of the existing guest thread token.
