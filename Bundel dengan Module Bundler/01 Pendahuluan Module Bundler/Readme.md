# 01 - Pendahuluan Module Bundler

##  Kenapa Materi Ini Penting?

Bayangkan kamu sedang membangun sebuah website. Di awal, mungkin proyekmu hanya punya
1 file HTML, 1 file CSS, dan 1 file JavaScript. Gampang dikelola, tinggal `<script src="app.js">`
lalu dibuka di browser. Selesai.

Tapi begitu proyekmu makin besar, biasanya kamu akan:

- Memecah JavaScript menjadi banyak file kecil (module) agar rapi dan mudah dipelihara.
- Menggunakan library dari luar lewat `npm install` (misalnya React, Lodash, Axios, dll).
- Menulis CSS modern (Sass/SCSS) yang tidak dimengerti browser secara langsung.
- Menggunakan sintaks JavaScript terbaru yang belum didukung semua browser.
- Ingin file yang dikirim ke browser seukuran mungkin (biar website cepat).

Kalau semua itu dilakukan manual, akan sangat merepotkan. Di sinilah **module bundler**
berperan.

##  Apa Itu "Module"?

Module adalah potongan kode yang berdiri sendiri, biasanya 1 file, yang bisa
mengekspor (`export`) sesuatu agar bisa dipakai (`import`) oleh file lain.

```js
// math.js — sebuah module
export function tambah(a, b) {
  return a + b;
}
```

```js
// app.js — memakai module lain
import { tambah } from './math.js';

console.log(tambah(2, 3)); // 5
```

Masalahnya: `import`/`export` seperti ini (disebut **ES Module**) tidak bisa langsung
dijalankan di banyak browser lama hanya dengan `<script src="app.js">` tanpa pengaturan
khusus, dan tidak efisien jika module-nya banyak sekali (browser harus request banyak file
satu per satu).

## 📦 Apa Itu "Bundler"?

**Bundler** adalah alat yang tugasnya:

1. **Membaca** titik masuk (entry point) proyekmu, misalnya `src/index.js`.
2. **Menelusuri** semua `import` yang dipakai di dalamnya (dan `import` di dalam `import`, dst).
3. **Menggabungkan** semua module tadi menjadi satu (atau beberapa) file akhir yang disebut **bundle**.
4. **Mengoptimalkan** hasilnya — misalnya menghapus kode yang tidak dipakai, mengecilkan ukuran file (minify), dll.

Secara sederhana, prosesnya seperti ini:

```
src/index.js  ─┐
src/math.js    ├──►  [ BUNDLER ]  ──►  dist/bundle.js  (siap dipakai browser)
src/utils.js  ─┘
```

## 🤔 Kenapa Tidak Cukup Pakai <script> Biasa?

| Cara Manual (`<script>` biasa)              | Pakai Bundler                                   |
|----------------------------------------------|--------------------------------------------------|
| Harus urutkan `<script>` secara manual       | Urutan dependency diatur otomatis                 |
| Tidak bisa pakai `import`/`export` dengan aman di semua browser | Bisa pakai module modern dengan bebas             |
| Sulit memakai library dari npm                | Tinggal `npm install` lalu `import`               |
| Banyak file = banyak HTTP request             | Bisa digabung jadi sedikit file (lebih cepat)      |
| Tidak ada optimasi ukuran file otomatis       | Ada minifikasi, tree-shaking, code-splitting, dll |
| Sulit memproses CSS/gambar/font sebagai bagian dari kode | Bisa diproses lewat *loader*                     |

## 🌍 Contoh Bundler yang Populer

- **Webpack** — paling matang, sangat fleksibel, banyak dipakai di industri (fokus utama kita di modul ini).
- **Vite** — lebih baru, sangat cepat saat development.
- **Rollup** — cocok untuk membuat library.
- **Parcel** — konfigurasi minim (zero-config).
- **esbuild** — sangat cepat, ditulis dengan bahasa Go.

Di modul ini kita fokus ke **Webpack**, karena konsep-konsepnya (entry, output, loader,
plugin) juga jadi dasar pemahaman untuk bundler lain.

##  Ringkasan

- Module bundler = alat yang menggabungkan banyak file kode (module) menjadi satu/lebih file siap pakai di browser.
- Dibutuhkan karena proyek front-end modern menggunakan banyak module, library dari npm, dan format kode yang belum tentu dipahami browser secara langsung.
- Webpack adalah salah satu module bundler paling populer dan akan kita pelajari mendalam di modul ini.

##  Lanjut ke Materi Berikutnya

➡️ [02 - Apa Itu Webpack](../02-Apa-Itu-Webpack)
