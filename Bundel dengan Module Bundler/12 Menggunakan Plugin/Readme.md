# 12 - Menggunakan Plugin

##  Pengantar

Di materi 07 kita sudah belajar **konsep** Plugin. Sekarang kita praktik
langsung memakai plugin paling populer di dunia Webpack: **`HtmlWebpackPlugin`**.

##  Masalah yang Ingin Diselesaikan

Selama ini di contoh-contoh sebelumnya, kita **membuat file `dist/index.html`
secara manual** dan menulis sendiri tag `<script src="bundle.js">`. Ini
merepotkan, apalagi kalau nama file bundle berubah-ubah (misalnya memakai
`[contenthash]`). `HtmlWebpackPlugin` menyelesaikan masalah ini dengan
**membuat HTML secara otomatis**, sudah termasuk tag `<script>` yang sesuai.

##  Langkah 1 — Instal Plugin

```bash
npm install --save-dev html-webpack-plugin
```

##  Langkah 2 — Import dan Gunakan di `webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // nama file berubah tiap kali isi berubah
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belajar Plugin Webpack',
      template: './src/index.html', // opsional, pakai template sendiri
    }),
  ],
  mode: 'development',
};
```

Perhatikan: karena nama file output memakai `[contenthash]` (akan berubah
setiap kali isi bundle berubah), kita **tidak mungkin** menulis nama file
`<script>` secara manual. Di sinilah `HtmlWebpackPlugin` sangat membantu —
dia otomatis tahu nama file terbaru dan menyisipkannya ke HTML.

##  Langkah 3 — (Opsional) Pakai Template HTML Sendiri

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Placeholder — akan diganti otomatis</title>
</head>
<body>
  <div id="app"></div>
  <!-- HtmlWebpackPlugin otomatis menyisipkan <script> di sini -->
</body>
</html>
```

Kalau opsi `template` tidak diisi, `HtmlWebpackPlugin` akan memakai template
default bawaan miliknya sendiri — cukup untuk kebutuhan sederhana.

##  Contoh Lengkap yang Bisa Dicoba

Lihat folder [`contoh/`](./contoh):

```
contoh/
├── src/
│   ├── index.js
│   └── index.html    (template)
├── webpack.config.js
└── package.json
```

Jalankan:
```bash
cd contoh
npm install
npm run build
```

Lalu buka `dist/index.html` yang **dihasilkan otomatis** oleh Webpack.
Perhatikan bahwa file ini sudah menyertakan tag `<script>` dengan nama file
yang sesuai dengan hasil build (termasuk hash-nya).

##  Menggabungkan Beberapa Plugin Sekaligus

Array `plugins` bisa diisi lebih dari satu plugin sekaligus:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack'); // DefinePlugin bawaan Webpack, tidak perlu diinstal terpisah

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ title: 'Aplikasiku' }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
```

`DefinePlugin` di atas berguna untuk membuat variabel global
`process.env.NODE_ENV` yang bisa dicek di kode JavaScript, misalnya untuk
menampilkan log tambahan hanya saat development.

## ⚠️ Kesalahan Umum Pemula

| Masalah | Penyebab | Solusi |
|---------|----------|--------|
| `HtmlWebpackPlugin is not a constructor` | Salah cara import (lupa bahwa exportnya bukan named export) | Gunakan `const HtmlWebpackPlugin = require('html-webpack-plugin');` |
| Plugin tidak berefek sama sekali | Lupa menambahkannya ke array `plugins`, atau lupa `new` | Pastikan ditulis `new HtmlWebpackPlugin({...})` di dalam array `plugins` |
| HTML hasil build kosong / tidak sesuai template | Path `template` salah | Pastikan path relatif terhadap lokasi `webpack.config.js`, misalnya `./src/index.html` |

##  Ringkasan

- Plugin diaktifkan dengan cara `new NamaPlugin({ opsi })` di dalam array `plugins`.
- `HtmlWebpackPlugin` membuat file HTML otomatis, termasuk tag `<script>` yang selalu sesuai dengan nama file bundle terbaru.
- Bisa memakai banyak plugin sekaligus dalam satu konfigurasi.

##  Navigasi

⬅️ [11 - Menggunakan Loader](../11-Menggunakan-Loader) | ➡️ [13 - DevServer](../13-DevServer)
