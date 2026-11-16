# agent.md — Aturan Tetap

Dokumen ini berisi aturan yang HARUS dipatuhi AI agent (GitHub Copilot) di setiap sesi.

## Konteks Proyek
- Produk: website pencatatan tugas "TugasKu" (detail di `docs/spec.md`).
- Rencana kerja: `docs/plan.md`. Ingatan antar sesi: `docs/history.md`.

## Alur Kerja Wajib Setiap Sesi
1. Di awal sesi, baca `agent.md`, `docs/spec.md`, `docs/plan.md`, dan `docs/history.md`.
2. Kerjakan HANYA tugas berikutnya yang belum dicentang di `plan.md`. Jangan loncat fase.
3. Kerjakan satu tugas kecil per langkah, jelaskan apa yang diubah.
4. Di akhir sesi: centang tugas selesai di `plan.md` dan tambahkan entri baru di `docs/history.md`.
5. Jika spesifikasi ambigu atau bertentangan, TANYA dulu. Jangan menebak.

## Tech Stack (tetap)
- Frontend: React.js (Vite), JavaScript (JSX), React Router.
- Backend/DB/Auth: Supabase (PostgreSQL, Supabase Auth, Row Level Security).
- Deploy: Vercel.
- Styling: Tailwind CSS.
- Package manager: npm.
- Dilarang menambah library/dependency baru tanpa persetujuan eksplisit dari saya.

## Struktur Folder
```
src/
  components/     # komponen UI yang dipakai ulang
  pages/          # halaman (Login, Register, Dashboard, dst.)
  hooks/          # custom hooks (useAuth, useTasks, dst.)
  services/       # semua pemanggilan Supabase (tasksService.js, authService.js)
  lib/            # supabaseClient.js, helper umum
  routes/         # konfigurasi routing & ProtectedRoute
  App.jsx
  main.jsx
docs/             # spec.md, plan.md, history.md
supabase/
  migrations/     # file SQL berurutan
```

## Aturan Kode
- Gunakan functional component + hooks. Tidak ada class component.
- Nama komponen/file komponen: `PascalCase`. Fungsi/variabel: `camelCase`. Konstanta: `UPPER_SNAKE_CASE`.
- Satu komponen satu file. Komponen lebih dari ~150 baris harus dipecah.
- Komponen UI TIDAK boleh memanggil Supabase langsung. Semua query lewat `src/services/`.
- Semua operasi async wajib memakai `try/catch` dan menampilkan state `loading` serta `error` ke pengguna.
- Tidak ada `console.log` tersisa di kode final.
- Teks antarmuka dalam Bahasa Indonesia. Nama variabel, fungsi, dan komentar teknis dalam Bahasa Inggris.
- Wajib responsif (mobile-first).

## Aturan Supabase & Keamanan
- Kredensial hanya lewat environment variable: `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`.
- JANGAN PERNAH memakai atau menulis `service_role` key di kode frontend.
- JANGAN PERNAH commit file `.env`. Pastikan `.env` ada di `.gitignore`. Sediakan `.env.example`.
- Semua tabel wajib mengaktifkan Row Level Security (RLS). Pengguna hanya boleh mengakses datanya sendiri.
- Perubahan skema database disimpan sebagai file SQL berurutan di `supabase/migrations/` (mis. `001_create_tasks.sql`).

## Aturan Deploy (Vercel)
- Build command: `npm run build`, output directory: `dist`.
- Environment variable diatur di dashboard Vercel, bukan di repo.
- Tambahkan `vercel.json` berisi rewrite ke `index.html` agar React Router tidak 404 saat refresh.

## Git
- Branch: `main` (stabil), `feat/<nama-fitur>` untuk pekerjaan baru.
- Format commit: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:` diikuti deskripsi singkat.

## Definition of Done (sebuah tugas dianggap selesai jika)
- Berjalan tanpa error di `npm run dev` dan `npm run build`.
- Sesuai kriteria penerimaan di `spec.md`.
- Loading, error, dan empty state ditangani.
- `plan.md` dan `history.md` sudah diperbarui.

## Larangan
- Jangan mengubah isi `spec.md` atau aturan di `agent.md` tanpa izin saya.
- Jangan menghapus data atau file tanpa konfirmasi.
- Jangan mengerjakan fitur di luar `spec.md` (lihat bagian "Di Luar Cakupan").
