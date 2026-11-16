# spec.md — Spesifikasi Produk

## Ringkasan
**TugasKu** adalah website untuk mencatat dan memantau tugas pribadi (mis. tugas kuliah) agar tidak terlewat deadline. Setiap pengguna punya akun dan hanya melihat tugasnya sendiri.

## Pengguna
Mahasiswa/pelajar yang ingin mengelola tugas dan deadline dengan cepat dari HP maupun laptop.

## Fitur MVP

### 1. Autentikasi
- Daftar dan login dengan email + password (Supabase Auth).
- Logout.
- Halaman tugas hanya bisa diakses setelah login (protected route).
- Sesi tetap tersimpan saat halaman di-refresh.

### 2. Manajemen Tugas (CRUD)
Field tugas:

| Field | Keterangan |
|---|---|
| title | wajib, 1–150 karakter |
| description | opsional |
| subject | opsional, mata kuliah/kategori |
| priority | `low` / `medium` / `high` (default `medium`) |
| status | `todo` / `in_progress` / `done` (default `todo`) |
| due_date | opsional, tanggal & jam deadline |

Aksi: tambah, lihat daftar, ubah, hapus (dengan konfirmasi), dan tandai selesai dengan satu klik.

### 3. Daftar & Pencarian
- Filter berdasarkan status, prioritas, dan subject.
- Pencarian berdasarkan judul.
- Urutkan berdasarkan deadline terdekat, prioritas, atau terbaru.
- Tugas lewat deadline dan belum selesai diberi penanda visual "Terlambat".

### 4. Dashboard Ringkasan
- Jumlah tugas: total, belum dikerjakan, sedang dikerjakan, selesai, terlambat.
- Daftar 5 tugas dengan deadline terdekat.

## Halaman

| Rute | Halaman | Akses |
|---|---|---|
| `/login` | Login | publik |
| `/register` | Daftar | publik |
| `/` | Dashboard | login |
| `/tasks` | Daftar tugas + filter | login |
| `/tasks/new` | Form tambah tugas | login |
| `/tasks/:id/edit` | Form ubah tugas | login |

## Model Data (Supabase / PostgreSQL)
```sql
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
```

## Kebutuhan Non-Fungsional
- Responsif untuk layar HP hingga desktop.
- Setiap aksi menampilkan loading state, pesan error yang ramah, dan empty state ("Belum ada tugas").
- Validasi form di sisi klien (judul wajib, panjang maksimal).
- Pesan dan label dalam Bahasa Indonesia.
- Aksesibilitas dasar: label pada input, kontras warna cukup, bisa dipakai dengan keyboard.

## Kriteria Penerimaan
- Pengguna baru bisa daftar, login, dan langsung membuat tugas pertama.
- Pengguna A tidak bisa melihat atau mengubah tugas pengguna B (terbukti lewat RLS).
- Tugas yang melewati deadline dan belum selesai tampil dengan penanda "Terlambat".
- Refresh di rute mana pun tidak menghasilkan 404 di Vercel.
- `npm run build` berhasil tanpa error.

## Di Luar Cakupan (JANGAN dikerjakan dulu)
- Kolaborasi/berbagi tugas antar pengguna
- Notifikasi/email pengingat
- Login Google/OAuth
- Aplikasi mobile native, mode offline/PWA
- Lampiran file, subtask, tugas berulang
- Mode gelap
