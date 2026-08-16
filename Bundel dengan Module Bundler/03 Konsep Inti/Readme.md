# 03 - Konsep Inti Webpack

##  Pengantar

Sebelum masuk lebih dalam ke masing-masing konsep secara terpisah (di materi 04–08),
mari kita lihat dulu **gambaran besar (big picture)** bagaimana keempat konsep inti
Webpack saling terhubung. Memahami ini akan membuat materi-materi selanjutnya jauh
lebih mudah dicerna.

##  4 Konsep Inti Webpack

Webpack dibangun di atas 4 konsep fundamental:

### 1. Entry (Titik Masuk)
Memberi tahu Webpack **file mana yang menjadi awal** dari dependency graph.
Dari file inilah Webpack mulai "menelusuri" semua `import`/`require` yang ada.

### 2. Output (Keluaran)
Memberi tahu Webpack **di folder mana** dan **dengan nama apa** hasil bundling
disimpan.

### 3. Loaders (Pemroses File)
Secara default, Webpack hanya mengerti file JavaScript dan JSON. **Loader** adalah
penerjemah yang mengubah jenis file lain (CSS, gambar, TypeScript, dll) menjadi
sesuatu yang bisa dimasukkan ke dalam dependency graph oleh Webpack.

### 4. Plugins (Plugin)
Jika Loader bekerja **per file** (transformasi file satu per satu), Plugin bekerja
di level **seluruh proses bundling** — bisa melakukan hal-hal seperti membersihkan
folder output sebelum build, membuat file HTML otomatis, mengekstrak CSS ke file
terpisah, dan banyak lagi.

##  Bagaimana Semuanya Terhubung?

```
┌───────────────────────────────────────────────────────────────────┐
│                          webpack.config.js                        │
│                                                                     │
│   entry: './src/index.js'   ──► titik awal penelusuran            │
│                                                                     │
│   module.rules: [ ... ]     ──► daftar Loader (per jenis file)    │
│                                                                     │
│   plugins: [ ... ]          ──► daftar Plugin (fitur tambahan)    │
│                                                                     │
│   output: { path, filename } ──► hasil akhir disimpan di mana     │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    Webpack menjalankan proses:
        1. Mulai dari entry, telusuri semua import (dependency graph)
        2. Setiap file yang bukan .js diproses sesuai Loader yang cocok
        3. Semua Plugin dijalankan pada tahap-tahap tertentu
        4. Hasil akhir ditulis ke lokasi sesuai konfigurasi output
```

## 📝 Contoh `webpack.config.js` Sederhana (Preview)

Berikut contoh singkat yang menunjukkan keempat konsep tadi dalam satu file
konfigurasi. Jangan khawatir kalau belum paham detailnya — ini baru gambaran umum,
detailnya ada di materi 04–10.

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. ENTRY — titik awal
  entry: './src/index.js',

  // 2. OUTPUT — hasil akhir disimpan di mana
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 3. LOADERS — cara memproses file selain JS
  module: {
    rules: [
      {
        test: /\.css$/i,       // file yang cocok dengan pola ini
        use: ['style-loader', 'css-loader'], // loader yang dipakai
      },
    ],
  },

  // 4. PLUGINS — fitur tambahan
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belajar Webpack',
    }),
  ],

  mode: 'development',
};
```

##  Tabel Ringkasan

| Konsep  | Analoginya                                | Ditulis di key apa? |
|---------|--------------------------------------------|----------------------|
| Entry   | "Dari mana saya mulai membaca resep?"      | `entry`              |
| Output  | "Masakan jadi ditaruh di piring mana?"     | `output`             |
| Loaders | "Bagaimana cara mengolah tiap bahan mentah?" | `module.rules`     |
| Plugins | "Bumbu/alat tambahan agar masakan lebih lengkap" | `plugins`       |

##  Ringkasan

- Webpack dibangun di atas 4 konsep inti: **Entry, Output, Loaders, Plugins**.
- Semua konsep ini biasanya ditulis dalam satu file `webpack.config.js`.
- Entry menentukan titik mulai, Output menentukan hasil akhir, Loaders memproses
  file non-JS, dan Plugins menambah fitur di level keseluruhan proses build.

##  Navigasi

⬅️ [02 - Apa Itu Webpack](../02-Apa-Itu-Webpack) | ➡️ [04 - Entry Point](../04-Entry-Point)
