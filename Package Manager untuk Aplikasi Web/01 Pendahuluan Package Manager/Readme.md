# Modul 1: Pendahuluan Package Manager

## Apa itu Package Manager?
Package Manager adalah **alat (tool)** yang membantu developer memasang, mengelola, memperbarui, dan menghapus **package** (kode/library yang dibuat orang lain) di dalam sebuah proyek, tanpa perlu melakukannya secara manual.

## Apa itu "Package"?
Package adalah **kumpulan kode yang sudah jadi dan siap dipakai ulang**, biasanya dibuat untuk menyelesaikan masalah umum agar developer lain tidak perlu menulis ulang dari nol. Contoh: package untuk memformat tanggal, package untuk membuat animasi, package untuk membangun antarmuka (framework seperti React/Vue).

## Kenapa Package Manager Dibutuhkan?

Bayangkan tanpa package manager, kamu ingin memakai library untuk memformat tanggal di proyekmu. Langkah manualnya:
1. Cari kode library-nya di internet.
2. Download file-nya satu per satu.
3. Taruh manual di folder proyek.
4. Kalau library itu butuh library lain (dependency), ulangi proses yang sama untuk semuanya.
5. Kalau ada versi baru/perbaikan bug, download ulang manual.

Sangat merepotkan dan rawan kesalahan! Package Manager menyelesaikan semua masalah ini secara otomatis hanya dengan satu perintah:
```bash
npm install nama-package
```

## Manfaat Utama Package Manager

1. **Instalasi otomatis**  cukup satu perintah, package beserta semua dependency-nya langsung terpasang.
2. **Manajemen versi**  mudah memasang versi tertentu, memperbarui, atau mengunci versi package agar proyek tetap stabil.
3. **Konsistensi tim**  semua anggota tim bisa memasang dependency yang **persis sama** lewat satu file konfigurasi, menghindari masalah "di komputer saya jalan, di komputer kamu error".
4. **Menghapus package dengan aman**  tinggal satu perintah, tanpa takut ada sisa file yang tertinggal.
5. **Menjalankan automasi**  banyak package manager juga bisa menjalankan script otomatisasi (build, testing, dsb).

## Contoh Package Manager yang Populer di Dunia JavaScript
- **npm** (Node Package Manager) — bawaan Node.js, paling banyak dipakai, akan jadi fokus utama materi ini.
- **Yarn**  dibuat Meta (Facebook), fokus pada kecepatan dan konsistensi instalasi.
- **pnpm**  dikenal sangat efisien dalam penggunaan disk space.

Ketiganya punya tujuan yang sama, hanya berbeda performa dan sedikit perbedaan perintah. Materi ini akan fokus ke **npm** karena paling umum dan otomatis terpasang bersama Node.js.

## Package Manager di Luar Dunia JavaScript (Sekadar Wawasan)
Konsep package manager bukan hal unik di JavaScript hampir semua bahasa pemrograman punya package manager sendiri, contoh: `pip` (Python), `composer` (PHP), `cargo` (Rust). Kalau kamu paham konsep npm, kamu akan lebih mudah memahami package manager bahasa lain di kemudian hari.

## Yang Akan Dipelajari Selanjutnya
Modul-modul berikutnya akan fokus membahas **npm** secara mendalam mulai dari instalasi, cara memasang package, memahami `package.json`, hingga menjalankan script otomatisasi.
