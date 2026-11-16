create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 150),
  description text,
  subject text,
  priority text not null default 'medium' check (priority in ('low','medium','high')),
  status text not null default 'todo' check (status in ('todo','in_progress','done')),
  due_date timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index tasks_user_due_idx on public.tasks (user_id, due_date);

alter table public.tasks enable row level security;

create policy "select own tasks" on public.tasks
  for select using (auth.uid() = user_id);
create policy "insert own tasks" on public.tasks
  for insert with check (auth.uid() = user_id);
create policy "update own tasks" on public.tasks
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own tasks" on public.tasks
  for delete using (auth.uid() = user_id);
