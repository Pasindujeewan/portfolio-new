alter table public.projects
  add column if not exists category text not null default 'Other';
