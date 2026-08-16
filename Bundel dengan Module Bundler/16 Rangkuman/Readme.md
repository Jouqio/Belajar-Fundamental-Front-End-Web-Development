# 16 - Rangkuman: Bundel dengan Module Bundler

Selamat! 🎉 Kamu sudah menyelesaikan seluruh materi **Bundel dengan Module
Bundler**. Sebelum lanjut ke kuis, mari kita rangkum semua yang sudah
dipelajari.

##  Peta Konsep

```
Module Bundler (konsep umum)
        │
        ▼
     Webpack (implementasi yang kita pelajari)
        │
        ├── Entry     → titik awal dependency graph
        ├── Output    → lokasi & nama hasil bundle
        ├── Loaders   → memproses file non-JS (CSS, gambar, dst)
        ├── Plugins   → fitur tambahan level keseluruhan build
        └── Mode      → preset optimasi (development / production)
                │
                ▼
        Praktik: instalasi → konfigurasi → loader → plugin → devServer
                │
                ▼
        Konfigurasi per Environment (dev vs prod)
                │
                ▼
        Studi Kasus: Club Finder App (menggabungkan semuanya)
```

##  Ringkasan Tiap Materi

| No | Materi | Poin Utama |
|----|--------|-------------|
| 1 | Pendahuluan Module Bundler | Bundler dibutuhkan karena proyek modern punya banyak module, dependency npm, dan format kode yang tak dikenali browser secara langsung. |
| 2 | Apa Itu Webpack | Webpack = static module bundler paling populer; bekerja lewat dependency graph dari entry point. |
| 3 | Konsep Inti | 4 pilar Webpack: Entry, Output, Loaders, Plugins — semua ditulis di `webpack.config.js`. |
| 4 | Entry Point | Titik awal Webpack membaca kode; bisa tunggal atau ganda (multi-entry). |
| 5 | Output | Menentukan folder (`path`) dan nama file (`filename`) hasil bundle; bisa pakai placeholder `[name]`, `[contenthash]`. |
| 6 | Loaders | Menerjemahkan file non-JS agar bisa diproses Webpack; dikonfigurasi di `module.rules`. |
| 7 | Plugin | Menambah kemampuan di level keseluruhan proses build, contoh: `HtmlWebpackPlugin`. |
| 8 | Mode | `development` (cepat, mudah dibaca) vs `production` (dioptimalkan, diminifikasi). |
| 9 | Memasang & Menggunakan Webpack | Instalasi lewat `npm install --save-dev webpack webpack-cli`, dijalankan lewat `npx webpack`. |
| 10 | Membuat Berkas Konfigurasi | `webpack.config.js` sebagai "pusat kendali" semua pengaturan. |
| 11 | Menggunakan Loader | Praktik `style-loader` + `css-loader` untuk CSS, Asset Modules untuk gambar. |
| 12 | Menggunakan Plugin | Praktik `HtmlWebpackPlugin` untuk membuat HTML otomatis. |
| 13 | DevServer | `webpack-dev-server` untuk live reload saat development. |
| 14 | Konfigurasi per Environment | Memisahkan config jadi `common` + `dev` + `prod`, digabung dengan `webpack-merge`. |
| 15 | Studi Kasus: Club Finder App | Menggabungkan semua konsep dalam proyek nyata. |

##  Cheat Sheet Perintah Penting

```bash
# instalasi dasar
npm install --save-dev webpack webpack-cli

# instalasi devServer
npm install --save-dev webpack-dev-server

# instalasi loader CSS
npm install --save-dev style-loader css-loader

# instalasi plugin HTML
npm install --save-dev html-webpack-plugin

# instalasi tool untuk konfigurasi per environment
npm install --save-dev webpack-merge

# menjalankan build
npx webpack --mode production
npx webpack --config webpack.prod.js

# menjalankan devServer
npx webpack serve --mode development
```

##  Cheat Sheet Struktur `webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',           // 1. ENTRY
  output: {                            // 2. OUTPUT
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {                            // 3. LOADERS
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [ /* ... */ ],              // 4. PLUGINS
  mode: 'development',                 // 5. MODE
  devServer: { port: 3000, open: true }, // 6. DEVSERVER
};
```

##  Apa Selanjutnya?

Setelah menguasai dasar-dasar Webpack ini, kamu bisa lanjut mengeksplorasi:

- **Code Splitting** — memecah bundle menjadi beberapa file agar loading lebih cepat.
- **Tree Shaking** lanjutan — memastikan kode yang tidak dipakai benar-benar terhapus.
- **Babel** — mengompilasi JavaScript modern (dan JSX untuk React) agar kompatibel browser lama.
- Membandingkan Webpack dengan bundler modern lain seperti **Vite** untuk proyek baru.

##  Selesai!

Kamu sudah punya fondasi yang kuat untuk memahami bagaimana proyek front-end
modern dibangun di balik layar. Sekarang, uji pemahamanmu lewat kuis di
materi berikutnya!

##  Navigasi

⬅️ [15 - Studi Kasus: Club Finder App](../15-Studi-Kasus-Club-Finder-App) | ➡️ [17 - Kuis](../17-Kuis)
