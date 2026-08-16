# Modul 5: Membangun Proyek JavaScript dengan npm

Saatnya membangun proyek JavaScript pertama yang dikelola dengan npm dari awal, langkah demi langkah.

## Langkah 1: Buat Folder Proyek
```bash
mkdir proyek-pertama
cd proyek-pertama
```

## Langkah 2: Inisialisasi npm
```bash
npm init -y
```
Ini akan membuat `package.json` seperti dijelaskan di Modul 4.

## Langkah 3: Buat File JavaScript Utama
Buat file `index.js`:
```js
console.log('Halo dari proyek npm pertamaku!');
```

## Langkah 4: Jalankan dengan Node.js
```bash
node index.js
```
Output:
```
Halo dari proyek npm pertamaku!
```

## Struktur Proyek Sejauh Ini
```
proyek-pertama/
├── package.json
└── index.js
```

## Langkah 5: Menambahkan Package Pertama
Sekarang mari tambahkan satu package populer bernama `chalk` (versi 4, agar kompatibel dengan `require`) untuk mewarnai teks di terminal:
```bash
npm install chalk@4
```

Setelah instalasi, struktur proyek berubah:
```
proyek-pertama/
├── node_modules/       <- folder baru, berisi kode package chalk (dan dependency-nya)
├── package.json        <- otomatis diperbarui, chalk tercatat sebagai dependency
├── package-lock.json    <- file baru, mengunci versi persis semua dependency
└── index.js
```

## Langkah 6: Memakai Package yang Sudah Terpasang
Ubah `index.js`:
```js
const chalk = require('chalk');

console.log(chalk.blue('Halo dari proyek npm pertamaku!'));
console.log(chalk.green('Package berhasil dipasang dan dipakai!'));
```
Jalankan lagi:
```bash
node index.js
```
Sekarang teksnya akan tampil berwarna di terminal (biru dan hijau).

## Contoh Lengkap
Semua langkah di atas sudah disiapkan di folder `contoh/` — buka `contoh/index.js` dan `contoh/package.json` untuk melihat hasil akhirnya. Untuk mencobanya sendiri:
```bash
cd contoh
npm install
node index.js
```

## Kenapa `node_modules` Tidak Perlu Diunggah ke Git?
Folder `node_modules` bisa berisi **ribuan file** dan ukurannya bisa mencapai ratusan MB, padahal isinya bisa dipasang ulang kapan saja hanya dengan `npm install` (karena sudah tercatat di `package.json`). Karena itu, folder ini **selalu** dimasukkan ke `.gitignore` agar tidak ikut diunggah ke repository Git.

## Ringkasan Alur Kerja Proyek npm
```
npm init -y  →  npm install nama-package  →  require()/import package di kode  →  node index.js
```
Alur ini adalah pola dasar yang akan terus kamu ulangi di hampir semua proyek JavaScript, baik untuk front-end maupun back-end.
