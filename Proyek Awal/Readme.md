# Proyek Awal
### Belajar Fundamental Front-End Web Development

Ini adalah bagian **proyek** dari pembelajaran saatnya mempraktikkan semua materi yang sudah dipelajari sebelumnya (CSS Grid, Web Component, dll) menjadi satu aplikasi web nyata yang utuh.

## Daftar Isi

1. [Tips Submission: Proyek Pertama](./01-Tips-Submission-Proyek-Pertama/README.md)
2. [Submission: Membangun Notes App](./02-Submission-Membangun-Notes-App/README.md)

## Tentang Proyek Ini

Proyek awal ini berupa **Notes App** (aplikasi catatan) sederhana namun lengkap, yang dibangun murni dengan **HTML, CSS, dan JavaScript** (tanpa framework), memakai konsep-konsep yang sudah dipelajari di modul sebelumnya:

- **CSS Grid** — untuk menyusun layout daftar catatan yang responsif.
- **Web Component** (Custom Element + Shadow DOM) — untuk membangun elemen catatan (`<note-item>`) dan form (`<note-form>`) yang reusable dan terisolasi.
- **JavaScript modern** (`async/await`, `Promise`, ES Module) — untuk mengelola data dan interaksi pengguna.

## Cara Menggunakan Folder Ini

1. Baca dulu **Modul 1 (Tips Submission)** untuk memahami kriteria penilaian dan cara mengerjakan proyek dengan baik.
2. Buka **Modul 2 (Submission: Notes App)** untuk melihat penjelasan lengkap arsitektur aplikasi, potongan kode dengan penjelasan, dan folder `project/` berisi aplikasi yang sudah jadi dan siap dijalankan.

## Menjalankan Proyek

Karena proyek ini memakai **ES Module** (`import`/`export`), proyek **tidak bisa** dibuka langsung dengan cara klik dua kali file `index.html` (`file://`) — harus dijalankan lewat local server. Cara termudah:

**Opsi 1 — VS Code Live Server**
1. Install ekstensi **Live Server** di VS Code.
2. Buka folder `project/`, klik kanan `index.html` → **Open with Live Server**.

**Opsi 2 — Python (jika sudah terpasang)**
```bash
cd project
python -m http.server 5500
```
Lalu buka `http://localhost:5500` di browser.

**Opsi 3 — Node.js**
```bash
cd project
npx serve .
```
