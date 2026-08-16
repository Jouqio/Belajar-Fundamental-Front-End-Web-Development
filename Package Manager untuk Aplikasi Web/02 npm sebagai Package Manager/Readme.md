# Modul 2: npm sebagai Package Manager

## Apa itu npm?
**npm** adalah singkatan dari **Node Package Manager** package manager resmi yang otomatis terpasang bersama **Node.js**. npm terdiri dari tiga komponen:

1. **CLI (Command Line Interface)**  perintah `npm` yang kita ketik di terminal.
2. **Registry**  server pusat berisi jutaan package yang bisa dipasang secara publik (di `npmjs.com`).
3. **Website**  `npmjs.com`, tempat mencari dan melihat dokumentasi package.

## Sekilas Sejarah
npm dirilis tahun 2010 bersamaan dengan pertumbuhan Node.js. Sejak itu, npm registry tumbuh menjadi salah satu **registry package terbesar di dunia**, dengan lebih dari 2 juta package publik yang bisa dipasang secara gratis.

## Kenapa npm Jadi Pilihan Utama?
- **Terpasang otomatis bersama Node.js**  tidak perlu instalasi terpisah.
- **Ekosistem terbesar**  hampir semua library front-end/back-end populer (React, Vue, Express, dll) dipublikasikan lewat npm.
- **Didukung penuh oleh dokumentasi resmi** dan komunitas yang sangat besar.
- **Terintegrasi dengan `package.json`**  file konfigurasi standar yang dikenali hampir semua tool JavaScript modern.

## Cara Kerja Singkat npm
```
Kamu ketik perintah  →  npm CLI membaca package.json  →  npm menghubungi npm Registry
     di terminal            (kalau ada)                    untuk mengunduh package
                                                                      │
                                                                      ▼
                                                         Package disimpan di folder
                                                              node_modules/
```

## Tiga Perintah npm yang Paling Sering Dipakai (Sekilas)
```bash
npm install nama-package   # memasang sebuah package
npm uninstall nama-package # menghapus sebuah package
npm run nama-script        # menjalankan script otomatisasi
```
Jangan khawatir kalau belum paham detailnya — setiap perintah ini akan dibahas mendalam satu per satu di modul-modul berikutnya.

## npm vs Alternatif Lain (Sekilas Perbandingan)

| Aspek | npm | Yarn | pnpm |
|---|---|---|---|
| Instalasi | Bawaan Node.js | Perlu dipasang terpisah | Perlu dipasang terpisah |
| Kecepatan | Baik (terus membaik tiap versi) | Sangat cepat | Sangat cepat & hemat disk |
| Popularitas | Paling luas dipakai | Populer, terutama di ekosistem React lama | Semakin populer |
| Perintah dasar | `npm install` | `yarn add` | `pnpm add` |

Untuk pemula, **npm adalah pilihan paling aman** untuk memulai karena sudah terpasang otomatis dan dokumentasinya paling lengkap.

## Yang Akan Dipelajari Selanjutnya
Modul 3 akan membahas cara memasang Node.js (yang otomatis akan memasang npm juga) di komputer kamu.
