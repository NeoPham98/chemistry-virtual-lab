create extension if not exists pgcrypto;

create table if not exists public.experiments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  module_id integer not null default 9,
  content text not null,
  thumbnail_url text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_experiments_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_experiments_updated_at on public.experiments;

create trigger trg_experiments_updated_at
before update on public.experiments
for each row
execute function public.set_experiments_updated_at();

create index if not exists idx_experiments_updated_at on public.experiments (updated_at desc);
create index if not exists idx_experiments_name on public.experiments (name);
