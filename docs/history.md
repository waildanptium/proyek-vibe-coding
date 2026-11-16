# history.md — Ingatan Antar Sesi

Aturan pengisian: AI WAJIB memperbarui file ini di akhir setiap sesi. Entri terbaru ditaruh paling atas di bagian "Log Sesi". Tulis singkat dan faktual.

## Status Saat Ini
- Fase aktif: Fase 1 — Database
- Tugas terakhir selesai: 1.1 Buat `supabase/migrations/001_create_tasks.sql` dari model data di `spec.md`
- Tugas berikutnya: 1.2 Jalankan di Supabase SQL Editor
- Kendala yang belum selesai: Tugas 1.2 dan 1.3 menunggu SQL dijalankan serta RLS diuji manual oleh pengguna.

## Keputusan Penting
Catat keputusan teknis yang sudah final agar tidak dibahas ulang.
- Stack: React (Vite, JavaScript), Tailwind CSS, Supabase, Vercel.
- Autentikasi: email + password saja untuk MVP.

## Perubahan yang Disetujui pada Spec/Plan
(belum ada)

## Log Sesi

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
