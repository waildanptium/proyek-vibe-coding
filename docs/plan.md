# plan.md — Peta Rencana

Aturan: kerjakan berurutan dari atas. Centang `[x]` setelah selesai dan sesuai Definition of Done di `agent.md`. Satu butir = satu sesi/prompt kecil.

## Fase 0 — Persiapan
- [x] 0.1 Buat repo GitHub dan clone ke lokal
- [x] 0.2 Inisialisasi proyek React dengan Vite (JavaScript)
- [x] 0.3 Pasang dependency yang disetujui: `@supabase/supabase-js`, `react-router-dom`, `tailwindcss`
- [x] 0.4 Buat struktur folder sesuai `agent.md`
- [x] 0.5 Buat `.env.example`, pastikan `.env` ada di `.gitignore`
- [x] 0.6 Buat proyek di Supabase, isi `.env` lokal

## Fase 1 — Database
- [x] 1.1 Buat `supabase/migrations/001_create_tasks.sql` dari model data di `spec.md`
- [ ] 1.2 Jalankan di Supabase SQL Editor
- [ ] 1.3 Verifikasi RLS aktif (uji dengan 2 akun berbeda)

## Fase 2 — Fondasi Aplikasi
- [x] 2.1 `src/lib/supabaseClient.js`
- [x] 2.2 Layout dasar (navbar, container) dan konfigurasi React Router
- [x] 2.3 `authService.js` dan hook/context `useAuth` (menyimpan sesi)
- [ ] 2.4 `ProtectedRoute`

## Fase 3 — Autentikasi
- [x] 3.1 Halaman Register
- [x] 3.2 Halaman Login
- [x] 3.3 Tombol Logout di navbar
- [ ] 3.4 Penanganan error (email sudah terdaftar, password salah)

## Fase 4 — Manajemen Tugas
- [ ] 4.1 `tasksService.js`: fungsi `getTasks`
- [ ] 4.2 `tasksService.js`: fungsi `createTask`, `updateTask`, `deleteTask`
- [ ] 4.3 Hook `useTasks` (state tasks, loading, error, dan aksi CRUD)
- [ ] 4.4 Komponen `TaskCard` (judul, subject, prioritas, status, deadline)
- [ ] 4.5 Halaman `/tasks`: tampilkan daftar + loading + empty state
- [ ] 4.6 Komponen `TaskForm` dengan validasi (dipakai tambah dan ubah)
- [ ] 4.7 Halaman `/tasks/new`
- [ ] 4.8 Halaman `/tasks/:id/edit`
- [ ] 4.9 Dialog konfirmasi hapus + aksi hapus
- [ ] 4.10 Tombol tandai selesai

## Fase 5 — Filter, Pencarian, Dashboard
- [ ] 5.1 Filter status, prioritas, subject
- [ ] 5.2 Pencarian judul
- [ ] 5.3 Pengurutan (deadline, prioritas, terbaru)
- [ ] 5.4 Penanda "Terlambat"
- [ ] 5.5 Dashboard: kartu statistik
- [ ] 5.6 Dashboard: 5 tugas deadline terdekat

## Fase 6 — Penyempurnaan
- [ ] 6.1 Cek responsif di layar HP
- [ ] 6.2 Loading, error, dan empty state di semua halaman
- [ ] 6.3 Rapikan UI dan hapus `console.log`
- [ ] 6.4 Tulis `README.md` (cara menjalankan lokal)

## Fase 7 — Deploy
- [ ] 7.1 Tambah `vercel.json` (rewrite ke `index.html`)
- [ ] 7.2 Hubungkan repo ke Vercel
- [ ] 7.3 Isi environment variable di dashboard Vercel
- [ ] 7.4 Atur Site URL & Redirect URL di Supabase Auth ke domain Vercel
- [ ] 7.5 Uji semua kriteria penerimaan di versi produksi
