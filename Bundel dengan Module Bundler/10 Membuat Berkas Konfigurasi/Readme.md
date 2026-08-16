# 10 - Membuat Berkas Konfigurasi

##  Pengertian

**Berkas konfigurasi** Webpack adalah file bernama `webpack.config.js` yang
ditaruh di root folder proyek. File ini berisi objek JavaScript yang
memberi tahu Webpack **secara eksplisit** bagaimana proses bundling harus
dilakukan — mulai dari entry, output, loader, plugin, hingga mode.

Tanpa file ini, Webpack tetap bisa berjalan dengan pengaturan default
(seperti di materi 09), tapi untuk proyek nyata, kamu **hampir selalu**
membutuhkan file konfigurasi karena tiap proyek punya kebutuhan berbeda-beda.

##  Langkah Membuat `webpack.config.js`

### 1. Buat File di Root Proyek

```bash
touch webpack.config.js
```

### 2. Struktur Dasar

File ini menggunakan sistem module **CommonJS** (`require` dan `module.exports`),
karena file ini dijalankan langsung oleh Node.js, bukan oleh Webpack itu sendiri.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  mode: 'development',

  module: {
    rules: [
      // aturan loader akan ditambahkan di sini (materi 11)
    ],
  },

  plugins: [
    // plugin akan ditambahkan di sini (materi 12)
  ],
};
```

### 3. Jalankan dengan File Konfigurasi Ini

```bash
npx webpack
```

Webpack **otomatis mencari** file bernama `webpack.config.js` di root folder
proyek — tidak perlu ditulis manual namanya, kecuali kamu memakai nama file
yang berbeda.

## 🔤 Kalau Nama File Konfigurasi Berbeda

Kadang proyek punya lebih dari satu file konfigurasi (misalnya
`webpack.dev.js` dan `webpack.prod.js` — akan dibahas di materi 14). Dalam
kasus ini, kamu perlu menyebutkan nama filenya secara eksplisit:

```bash
npx webpack --config webpack.dev.js
```

##  Penjelasan Tiap Bagian Config

```js
module.exports = {
  entry: './src/index.js',
  //     ^ dari mana Webpack mulai membaca (materi 04)

  output: { ... },
  //      ^ hasil akhir disimpan di mana (materi 05)

  mode: 'development',
  //    ^ preset optimasi: development / production (materi 08)

  module: {
    rules: [ ... ],
    //      ^ daftar loader untuk memproses file non-JS (materi 06 & 11)
  },

  plugins: [ ... ],
  //        ^ daftar plugin untuk fitur tambahan (materi 07 & 12)

  devServer: { ... },
  //          ^ pengaturan development server (materi 13)
};
```

##  Contoh Praktik

Lihat [`contoh/`](./contoh) — proyek sederhana dengan `webpack.config.js`
lengkap yang sudah mencakup entry, output, dan mode secara eksplisit.

```bash
cd contoh
npm install
npm run build
```

Bandingkan hasilnya dengan materi 09 (yang tanpa file konfigurasi) — kali ini
tidak ada lagi warning soal `mode`, karena sudah diatur secara eksplisit.

## ✅ Checklist Konfigurasi Dasar yang Baik

- [ ] `entry` sudah menunjuk ke file yang benar.
- [ ] `output.path` menggunakan `path.resolve(__dirname, ...)`.
- [ ] `mode` sudah diatur (`development` atau `production`).
- [ ] `output.clean: true` supaya folder output tidak menumpuk file lama.

##  Ringkasan

- File konfigurasi Webpack bernama `webpack.config.js`, ditulis dengan format CommonJS.
- Webpack otomatis membaca file ini kalau namanya persis `webpack.config.js`.
- Untuk nama file lain, gunakan flag `--config nama-file.js` saat menjalankan Webpack.
- File ini adalah tempat "pusat kendali" semua pengaturan: entry, output, loader, plugin, mode, dan devServer.

##  Navigasi

⬅️ [09 - Memasang dan Menggunakan Webpack](../09-Memasang-dan-Menggunakan-Webpack) | ➡️ [11 - Menggunakan Loader](../11-Menggunakan-Loader)
