alter table public.experiments enable row level security;

create policy "experiments_select_all"
on public.experiments
for select
using (true);

create policy "experiments_insert_all"
on public.experiments
for insert
with check (true);

create policy "experiments_update_all"
on public.experiments
for update
using (true)
with check (true);

create policy "experiments_delete_all"
on public.experiments
for delete
using (true);
