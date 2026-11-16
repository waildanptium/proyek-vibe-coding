# history.md — Ingatan Antar Sesi

Aturan pengisian: AI WAJIB memperbarui file ini di akhir setiap sesi. Entri terbaru ditaruh paling atas di bagian "Log Sesi". Tulis singkat dan faktual.

## Status Saat Ini
- Fase aktif: Fase 1 — Database (menunggu langkah manual 1.2–1.3)
- Tugas terakhir selesai: 3.3 Tombol Logout di navbar
- Tugas berikutnya: 1.2 Jalankan di Supabase SQL Editor
- Kendala yang belum selesai: Tugas 1.2 dan 1.3 menunggu SQL dijalankan serta RLS diuji manual oleh pengguna; 2.4 dan 3.4 belum dikerjakan.

## Keputusan Penting
Catat keputusan teknis yang sudah final agar tidak dibahas ulang.
- Stack: React (Vite, JavaScript), Tailwind CSS, Supabase, Vercel.
- Autentikasi: email + password saja untuk MVP.

## Perubahan yang Disetujui pada Spec/Plan
(belum ada)

## Log Sesi

### Sesi 11 — 2026-11-16
- Yang dikerjakan: Membuat halaman Daftar dan Masuk dengan email/password, validasi input dasar, loading/error/success feedback, serta tombol Keluar saat pengguna masuk.
- File yang dibuat/diubah: `src/pages/RegisterPage.jsx`, `src/pages/LoginPage.jsx`, `src/components/AppLayout.jsx`, `src/App.jsx`, `src/App.css`, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada. Lint/build berhasil dan halaman Masuk/Daftar diperiksa di browser. Alur auth tidak diuji dengan akun Supabase nyata.
- Catatan untuk sesi berikutnya: Tugas 2.4 (ProtectedRoute) dan 3.4 (pemetaan error email terdaftar/password salah) belum selesai; tugas database 1.2–1.3 tetap menunggu langkah manual.

### Sesi 10 — 2026-11-16
- Yang dikerjakan: Membuat klien Supabase dari `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`, layout responsif dan rute sesuai spec, serta layanan autentikasi dan context/hook untuk sesi.
- File yang dibuat/diubah: `src/lib/supabaseClient.js`, `src/services/authService.js`, `src/hooks/AuthContext.js`, `src/hooks/AuthProvider.jsx`, `src/hooks/useAuth.js`, `src/components/AppLayout.jsx`, `src/pages/PlaceholderPage.jsx`, `src/App.jsx`, `src/App.css`, `src/index.css`, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Peringatan Fast Refresh diselesaikan dengan memisahkan context, provider, dan hook. Lint/build berhasil; semua rute spec merespons HTTP 200. `.env` tidak dibaca atau diubah secara manual.
- Catatan untuk sesi berikutnya: Jalankan migrasi di Supabase SQL Editor dan uji RLS dengan dua akun untuk menyelesaikan 1.2–1.3 sebelum lanjut sesuai urutan plan.

### Sesi 9 — 2026-11-16
- Yang dikerjakan: Membuat migrasi tabel `public.tasks`, indeks `tasks_user_due_idx`, mengaktifkan RLS, dan menambahkan empat kebijakan sesuai `docs/spec.md`.
- File yang dibuat/diubah: `supabase/migrations/001_create_tasks.sql`, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada. SQL tidak dijalankan; tugas 1.2 dan 1.3 menunggu tindakan manual pengguna.
- Catatan untuk sesi berikutnya: Jalankan file migrasi melalui Supabase SQL Editor, lalu verifikasi RLS dengan dua akun sebelum mencentang 1.2 dan 1.3.

### Sesi 8 — 2026-11-16
- Yang dikerjakan: Memverifikasi syarat 0.6 sesuai revisi: proyek Supabase sudah dibuat menurut pengguna, `.env` ada dan diabaikan Git, serta `.env.example` berisi nama variabel dengan nilai kosong.
- File yang dibuat/diubah: `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada; isi `.env` tidak dibaca atau diubah. Pembacaan `import.meta.env` tetap menjadi bagian tugas 2.1.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 1.1 di `plan.md`.

### Sesi 7 — 2026-11-16
- Yang dikerjakan: Memverifikasi `.env` ada dan diabaikan Git tanpa membaca isinya; mencari penggunaan `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` melalui `import.meta.env` di kode.
- File yang dibuat/diubah: `docs/history.md`.
- Masalah ditemukan & solusinya: `.env` terdeteksi dan cocok dengan aturan `.gitignore`, tetapi belum ada penggunaan variabel tersebut di kode. Tugas 0.6 tidak dicentang karena syarat verifikasi belum terpenuhi; integrasi kode tercantum di tugas 2.1.
- Catatan untuk sesi berikutnya: Jangan mengubah `.env`; implementasi pembacaan variabel dilakukan pada tugas 2.1 sesuai urutan `plan.md`.

### Sesi 6 — 2026-11-16
- Yang dikerjakan: Meninjau tugas 0.6; pengerjaan dihentikan karena pembuatan proyek Supabase dan pengisian `.env` membutuhkan tindakan manual pengguna.
- File yang dibuat/diubah: `docs/history.md`.
- Masalah ditemukan & solusinya: Tugas 0.6 belum selesai. Pengguna perlu membuat proyek Supabase dan mengisi `.env` secara lokal; tidak membaca atau mengubah `.env`.
- Catatan untuk sesi berikutnya: Setelah langkah manual selesai, lanjutkan verifikasi tugas 0.6 tanpa membagikan kredensial di chat.

### Sesi 5 — 2026-11-16
- Yang dikerjakan: Membuat `.env.example` dengan variabel `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`; memverifikasi `.env` lokal ada dan diabaikan Git.
- File yang dibuat/diubah: `.env.example`, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada; tidak membaca atau mengubah isi `.env`. Build berhasil dan server pengembangan merespons HTTP 200.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 0.6 di `plan.md`.

### Sesi 4 — 2026-11-16
- Yang dikerjakan: Membuat struktur direktori `src/components`, `src/pages`, `src/hooks`, `src/services`, `src/lib`, `src/routes`, dan `supabase/migrations` dengan placeholder agar dapat dilacak Git.
- File yang dibuat/diubah: placeholder `.gitkeep` pada direktori baru, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada; build berhasil dan server pengembangan merespons HTTP 200.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 0.5 di `plan.md`.

### Sesi 3 — 2026-11-16
- Yang dikerjakan: Memasang `@supabase/supabase-js`, `react-router-dom`, dan `tailwindcss` sesuai daftar dependency yang disetujui.
- File yang dibuat/diubah: `package.json`, `package-lock.json`, `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada; `npm run build` berhasil, server Vite merespons HTTP 200, dan audit npm melaporkan 0 kerentanan.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 0.4 di `plan.md`.

### Sesi 2 — 2026-11-16
- Yang dikerjakan: Memeriksa ulang tugas 0.1 dan 0.2; repo tetap terhubung ke GitHub melalui `origin` pada branch `main`, dan build produksi berhasil.
- File yang dibuat/diubah: `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada. Kedua tugas sudah ditandai selesai di `plan.md`, jadi tidak perlu perubahan tambahan pada checklist.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 0.3 di `plan.md`.

### Sesi 1 — 2026-11-16
- Yang dikerjakan: Memverifikasi 0.1 dan 0.2. Workspace sudah memiliki repo GitHub `waildanptium/proyek-vibe-coding`, remote `origin`, dan scaffold React + Vite; build produksi berhasil.
- File yang dibuat/diubah: `docs/plan.md`, `docs/history.md`.
- Masalah ditemukan & solusinya: Tidak ada. Repo tidak dibuat atau dikloning ulang karena workspace sudah terhubung.
- Catatan untuk sesi berikutnya: Lanjut ke tugas 0.3 di `plan.md`.

### Sesi 0 — [isi tanggal]
- Yang dikerjakan: dokumen `agent.md`, `spec.md`, `plan.md`, `history.md` dibuat.
- File yang dibuat/diubah: keempat dokumen di atas.
- Catatan untuk sesi berikutnya: mulai dari tugas 0.1 di `plan.md`.

<!-- Template entri baru, salin ke atas Sesi 0:

### Sesi N — [tanggal]
- Yang dikerjakan:
- File yang dibuat/diubah:
- Masalah ditemukan & solusinya:
- Catatan untuk sesi berikutnya:
-->
