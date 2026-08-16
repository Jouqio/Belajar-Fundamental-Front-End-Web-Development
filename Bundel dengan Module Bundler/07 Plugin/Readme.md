# 07 - Plugin

##  Pengertian

Kalau **Loader** bekerja secara spesifik pada **satu file dalam satu waktu**
(mengubah isi file dari satu bentuk ke bentuk lain), maka **Plugin** bekerja pada
level yang lebih luas: **seluruh proses build/bundling**.

Plugin bisa "ikut campur" di berbagai tahap proses Webpack — sebelum build dimulai,
saat build berjalan, sampai setelah build selesai. Karena itu Plugin bisa melakukan
hal-hal yang tidak bisa dilakukan Loader, misalnya:

- Membuat file `index.html` secara otomatis yang sudah menyertakan `<script>` ke bundle.
- Membersihkan folder output sebelum build baru dimulai.
- Mengekstrak CSS menjadi file `.css` terpisah (bukan disisipkan lewat JS).
- Menyalin file statis (misalnya folder `public/`) ke folder output.
- Menampilkan progress build di terminal.

> 💡 Analogi: Kalau Loader itu "penerjemah bahan mentah" (per file), Plugin itu
> seperti **asisten koki** yang bisa melakukan banyak hal tambahan di dapur secara
> keseluruhan — menata piring otomatis, membersihkan meja, menyalakan lampu, dll.

## ⚙️ Cara Menggunakan Plugin

1. Install plugin lewat npm.
2. Import plugin di `webpack.config.js`.
3. Masukkan **instance** (hasil `new NamaPlugin(opsi)`) ke dalam array `plugins`.

```bash
npm install --save-dev html-webpack-plugin
```

```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...entry, output, module, dst
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belajar Webpack',
      template: './src/index.html', // opsional: pakai template HTML sendiri
    }),
  ],
};
```

##  Plugin Populer yang Sering Dipakai

| Plugin | Fungsi |
|--------|--------|
| `HtmlWebpackPlugin` | Membuat file HTML otomatis yang sudah menyertakan `<script>` ke bundle hasil Webpack |
| `MiniCssExtractPlugin` | Mengekstrak CSS menjadi file `.css` terpisah, bukan disisipkan lewat JavaScript |
| `CleanWebpackPlugin` | Membersihkan folder output sebelum build baru (di Webpack 5 modern, fitur ini sudah tersedia lewat `output.clean: true`) |
| `CopyWebpackPlugin` | Menyalin file/folder statis (misalnya gambar, favicon) langsung ke folder output |
| `DefinePlugin` | Membuat variabel global yang nilainya ditentukan saat build, misalnya membedakan environment development/production |

## 🆚 Perbedaan Loader vs Plugin (Ringkasan)

| | Loader | Plugin |
|---|--------|--------|
| **Bekerja pada** | Satu file (per file yang cocok dengan `test`) | Keseluruhan proses build |
| **Dikonfigurasi di** | `module.rules` | `plugins` |
| **Contoh tugas** | Mengubah SCSS → CSS, CSS → JS module | Membuat HTML otomatis, membersihkan folder, mengekstrak CSS |
| **Cara dipanggil** | String nama loader (`'css-loader'`) | Instance class (`new HtmlWebpackPlugin()`) |

##  Contoh Sederhana: Membuat HTML Otomatis

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Halaman Buatan Webpack',
    }),
  ],
  mode: 'development',
};
```

Setelah dijalankan, `HtmlWebpackPlugin` akan otomatis membuat `dist/index.html`
yang isinya sudah menyertakan tag `<script src="bundle.js"></script>` —
kamu tidak perlu menulis file HTML itu secara manual!

Praktik lengkap ada di materi **[12 - Menggunakan Plugin](../12-Menggunakan-Plugin)**.

##  Ringkasan

- Plugin menambah kemampuan Webpack di level keseluruhan proses build, bukan cuma per file.
- Dikonfigurasi lewat array `plugins`, isinya instance dari class plugin (`new NamaPlugin()`).
- Plugin populer: `HtmlWebpackPlugin`, `MiniCssExtractPlugin`, `CopyWebpackPlugin`, `DefinePlugin`.
- Loader mengubah **isi file**, Plugin mengubah/menambah **proses build**.

##  Navigasi

⬅️ [06 - Loaders](../06-Loaders) | ➡️ [08 - Mode](../08-Mode)
