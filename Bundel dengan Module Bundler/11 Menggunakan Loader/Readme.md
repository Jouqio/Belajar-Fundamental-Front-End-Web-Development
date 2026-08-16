# 11 - Menggunakan Loader

##  Pengantar

Di materi 06 kita sudah belajar **konsep** Loader. Sekarang saatnya praktik
langsung: memproses file **CSS** dan **gambar** di dalam proyek Webpack.

##  Studi Kasus: Menampilkan Halaman dengan CSS dan Gambar

Kita akan membuat halaman sederhana yang:
1. Memiliki styling dari file CSS terpisah (`style.css`).
2. Menampilkan sebuah gambar yang di-`import` langsung di JavaScript.

##  Langkah 1 — Instal Loader yang Dibutuhkan

```bash
npm install --save-dev style-loader css-loader
```

- `css-loader` → membaca file `.css`, memahami `@import` dan `url()` di
  dalamnya, lalu mengubahnya menjadi module JavaScript.
- `style-loader` → mengambil hasil dari `css-loader`, lalu menyisipkannya ke
  halaman lewat tag `<style>` di dalam `<head>`.

> Untuk gambar, kita **tidak perlu install apa pun** — Webpack 5 sudah
> menyediakan fitur bawaan bernama **Asset Modules**.

## 🪜 Langkah 2 — Tulis Rule di `webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // fitur bawaan Webpack 5 untuk file gambar
      },
    ],
  },
};
```

## 🪜 Langkah 3 — Import CSS dan Gambar di JavaScript

```js
// src/index.js
import './style.css';
import logo from './logo.svg';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo Belajar Webpack';
document.body.appendChild(img);

const judul = document.createElement('h1');
judul.textContent = 'Halo dari Webpack + Loader!';
document.body.appendChild(judul);
```

> 💡 Perhatikan: `import logo from './logo.svg'` akan menghasilkan **string
> path** ke file gambar tersebut di folder output (misalnya
> `"a1b2c3.svg"`), bukan isi gambarnya. Itulah kenapa kita bisa langsung
> memasukkannya ke `img.src`.

##  Contoh Lengkap yang Bisa Dicoba

Lihat folder [`contoh/`](./contoh). Struktur foldernya:

```
contoh/
├── src/
│   ├── index.js
│   ├── style.css
│   └── logo.svg
├── webpack.config.js
└── package.json
```

Jalankan:
```bash
cd contoh
npm install
npm run build
```

Lalu buka `dist/index.html` (bisa dibuat manual atau otomatis lewat
`HtmlWebpackPlugin` — akan kita bahas di materi 12) untuk melihat hasilnya:
halaman dengan background gelap, teks putih, dan sebuah logo SVG.

##  Bonus: Menggunakan Sass/SCSS

Kalau kamu ingin memakai Sass (fitur CSS lebih canggih seperti variabel dan
nesting), tinggal tambahkan `sass-loader` dan `sass`:

```bash
npm install --save-dev sass sass-loader
```

```js
{
  test: /\.scss$/i,
  use: ['style-loader', 'css-loader', 'sass-loader'],
}
```

Ingat urutannya: `sass-loader` (paling kanan) jalan duluan mengubah SCSS →
CSS biasa, baru diproses `css-loader`, lalu `style-loader`.

## ⚠️ Kesalahan Umum Pemula

| Masalah | Penyebab | Solusi |
|---------|----------|--------|
| `Module parse failed: Unexpected token` saat import CSS | Belum ada rule loader untuk `.css` | Tambahkan rule `test: /\.css$/i` dengan `style-loader` dan `css-loader` |
| Gambar tidak muncul / path salah | Lupa menggunakan `type: 'asset/resource'` atau lupa meng-import gambar sebagai variabel | Pastikan `import logo from './logo.svg'` lalu gunakan variabel `logo` sebagai `src` |
| Urutan loader terbalik, style tidak berfungsi | Salah urutan di array `use` | Ingat: loader jalan dari **kanan ke kiri** — `['style-loader', 'css-loader']` sudah benar |

##  Ringkasan

- Untuk memproses CSS, gunakan `style-loader` + `css-loader` di `module.rules`.
- Untuk memproses gambar di Webpack 5, gunakan Asset Modules (`type: 'asset/resource'`) — tidak perlu install loader tambahan.
- File CSS dan gambar bisa langsung di-`import` di dalam file JavaScript.

##  Navigasi

⬅️ [10 - Membuat Berkas Konfigurasi](../10-Membuat-Berkas-Konfigurasi) | ➡️ [12 - Menggunakan Plugin](../12-Menggunakan-Plugin)
