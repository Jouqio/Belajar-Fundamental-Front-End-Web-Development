# 04 - Entry Point

## 📖 Pengertian

**Entry point** adalah file yang menjadi **titik awal** Webpack mulai membangun
dependency graph (peta ketergantungan). Dari file inilah Webpack menelusuri setiap
`import`/`require` untuk menemukan semua module yang dibutuhkan aplikasi.

> 💡 Analogi: Entry point itu seperti **halaman pertama sebuah buku cerita**. Dari
> halaman itu, kamu (pembaca) diarahkan ke bab-bab lain sampai seluruh cerita selesai
> dibaca. Webpack melakukan hal yang sama terhadap kode — mulai dari 1 file, lalu
> "membaca" semua file lain yang terhubung dengannya.

## ⚙️ Cara Menulis Konfigurasi Entry

### 1. Entry Tunggal (Single Entry) — Paling Umum

```js
// webpack.config.js
module.exports = {
  entry: './src/index.js',
};
```

Ini setara dengan bentuk objek berikut (Webpack otomatis menamainya `main`):

```js
module.exports = {
  entry: {
    main: './src/index.js',
  },
};
```

### 2. Entry Ganda (Multiple Entry)

Berguna kalau kamu punya lebih dari satu halaman/bagian aplikasi yang independen,
misalnya halaman `admin` dan halaman `landing-page` yang tidak saling bergantung.

```js
module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js',
  },
};
```

Dengan konfigurasi ini, Webpack akan menghasilkan **dua bundle terpisah**:
satu untuk `app`, satu untuk `admin`.

##  Contoh Praktik

Lihat folder [`contoh/`](./contoh) untuk mencoba langsung konsep ini.

Struktur folder contoh:

```
contoh/
├── src/
│   ├── index.js     # entry point utama
│   └── greet.js      # module yang di-import oleh index.js
├── webpack.config.js
└── package.json
```

`src/greet.js`:
```js
export function sapa(nama) {
  return `Halo, ${nama}! Selamat belajar Webpack.`;
}
```

`src/index.js` (entry point):
```js
import { sapa } from './greet.js';

console.log(sapa('Pemula'));
```

`webpack.config.js`:
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',   // <- di sinilah Webpack "mulai membaca"
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
```

Jalankan:
```bash
cd contoh
npm install
npx webpack
```

Setelah selesai, cek folder `dist/bundle.js` — di situ kamu akan melihat isi
`greet.js` dan `index.js` sudah **digabung menjadi satu file**.

## ⚠️ Kesalahan Umum Pemula

- **Lupa menentukan path relatif dengan benar.** `entry: 'src/index.js'` vs
  `entry: './src/index.js'` — sebaiknya selalu gunakan `./` di depan agar jelas
  itu path relatif dari lokasi `webpack.config.js`.
- **Menaruh banyak logic langsung di entry file.** Idealnya entry file cukup singkat,
  isinya mengimpor module-module lain — bukan tempat menulis semua logic aplikasi.

## ✅ Ringkasan

- Entry point = file awal tempat Webpack mulai membangun dependency graph.
- Bisa berupa entry tunggal (`entry: './src/index.js'`) atau entry ganda
  (`entry: { app: '...', admin: '...' }`).
- Dari entry point, Webpack menelusuri semua `import` untuk tahu file apa saja
  yang perlu dimasukkan ke dalam bundle.

##  Navigasi

⬅️ [03 - Konsep Inti](../03-Konsep-Inti) | ➡️ [05 - Output](../05-Output)
