# Modul 7: Menggunakan Package yang Terpasang pada Proyek

Setelah sebuah package terpasang (lewat `npm install`), langkah selanjutnya adalah **memakainya** di dalam kode.

## Dua Cara Mengimpor Package: `require()` vs `import`

### CommonJS — `require()` (cara lama, default di Node.js)
```js
const chalk = require('chalk');
console.log(chalk.blue('Halo!'));
```

### ES Module — `import` (standar modern, dipakai di browser & Node.js versi baru)
```js
import chalk from 'chalk';
console.log(chalk.blue('Halo!'));
```
> Agar `import` bisa dipakai di Node.js, tambahkan `"type": "module"` di `package.json`:
> ```json
> { "type": "module" }
> ```

## Contoh: Memakai Package `chalk` untuk Mewarnai Terminal
```js
const chalk = require('chalk');

console.log(chalk.green('✔ Berhasil!'));
console.log(chalk.red('✘ Terjadi kesalahan'));
console.log(chalk.bold.yellow('⚠ Peringatan penting'));
```

## Contoh: Memakai Package `dayjs` untuk Memformat Tanggal
```bash
npm install dayjs
```
```js
const dayjs = require('dayjs');
require('dayjs/locale/id'); // memuat format nama bulan berbahasa Indonesia
dayjs.locale('id');

const sekarang = dayjs();
console.log(sekarang.format('DD MMMM YYYY')); // contoh: 16 Agustus 2026
```

## Memakai Sebagian Fungsi Saja (Named Import)
Banyak package modern mengekspor beberapa fungsi terpisah, bukan satu object besar:
```js
const { format, addDays } = require('date-fns');

const besok = addDays(new Date(), 1);
console.log(format(besok, 'yyyy-MM-dd'));
```

## Membaca Dokumentasi Package Sebelum Memakainya
Setiap package punya cara pakai yang berbeda-beda. Sebelum memakai package baru, **selalu baca dokumentasinya** di halaman npm:
```
https://www.npmjs.com/package/nama-package
```
Di sana biasanya tersedia:
- Contoh kode dasar (basic usage).
- Daftar API/fungsi yang tersedia.
- Jumlah unduhan mingguan (indikator popularitas & kepercayaan komunitas).
- Tanggal update terakhir (indikator apakah package masih aktif dirawat).

## Coba Sendiri
Buka `contoh/`, lalu jalankan:
```bash
cd contoh
npm install
node index.js
```
Lihat bagaimana dua package berbeda (`chalk` dan `dayjs`) dipakai bersamaan dalam satu file.

## Kesalahan Umum Pemula
- **Lupa `npm install` dulu** sebelum menjalankan kode yang memakai `require()`/`import` — akan muncul error `Cannot find module 'nama-package'`.
- **Salah nama saat import** — pastikan nama yang di-`require()`/`import` persis sama dengan nama package di `package.json` (perhatikan huruf besar/kecil).
- **Mencampur `require()` dan `import`** dalam satu file tanpa konfigurasi yang tepat — pilih salah satu gaya secara konsisten di seluruh proyek.
