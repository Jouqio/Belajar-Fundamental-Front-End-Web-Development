# 14 - Mengonfigurasi Webpack Berdasarkan Environment

##  Pengantar

Kebutuhan konfigurasi Webpack saat **development** dan **production** itu
berbeda:

| | Development | Production |
|---|--------------|-------------|
| Kecepatan build | Diutamakan | Boleh lebih lambat |
| Minifikasi | Tidak perlu | Wajib |
| Source map | Detail, untuk debugging | Ringkas / dinonaktifkan |
| DevServer | Dipakai | Tidak relevan |
| Nama file output | Bebas, statis | Sebaiknya pakai `[contenthash]` untuk cache busting |

Kalau semua pengaturan ini ditumpuk dalam **satu** file `webpack.config.js`,
file itu akan penuh dengan kondisi `if/else` yang membingungkan. Solusi yang
lebih rapi: **memisahkan konfigurasi** menjadi beberapa file berdasarkan
environment, lalu **menggabungkannya**.

##  Strategi Umum: `webpack-merge`

Pendekatan paling umum di proyek nyata:

1. `webpack.common.js` — semua pengaturan yang **sama** di semua environment (entry, loader, plugin dasar).
2. `webpack.dev.js` — pengaturan khusus **development** (devServer, source map detail), digabung dengan `common`.
3. `webpack.prod.js` — pengaturan khusus **production** (minifikasi, `[contenthash]`), digabung dengan `common`.

```bash
npm install --save-dev webpack-merge
```

### `webpack.common.js`
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Aplikasiku' }),
  ],
};
```

### `webpack.dev.js`
```js
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // source map detail untuk debugging
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
  },
});
```

### `webpack.prod.js`
```js
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false, // tidak perlu source map detail di production
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
```

##  Script npm untuk Menjalankan Tiap Environment

```json
{
  "scripts": {
    "start": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
}
```

- `npm start` → menjalankan development server memakai `webpack.dev.js`.
- `npm run build` → membangun versi production memakai `webpack.prod.js`.

##  Bagaimana `webpack-merge` Bekerja?

`merge(configA, configB)` akan **menggabungkan dua objek konfigurasi**.
Kalau ada properti yang sama (misalnya `plugins`, `module.rules`), isinya
akan **digabung** (bukan ditimpa begitu saja), sedangkan properti primitif
seperti `mode` akan **ditimpa** oleh konfigurasi kedua (`configB`).

```js
merge(
  { mode: 'development', plugins: [pluginA] },
  { mode: 'production', plugins: [pluginB] }
);
// hasil: { mode: 'production', plugins: [pluginA, pluginB] }
```

##  Contoh Lengkap yang Bisa Dicoba

Lihat folder [`contoh/`](./contoh):

```
contoh/
├── src/
│   ├── index.js
│   └── style.css
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── package.json
```

```bash
cd contoh
npm install

# mode development, dengan devServer
npm start

# mode production, hasil di folder dist/ siap dirilis
npm run build
```

Coba bandingkan ukuran file `dist/*.js` hasil `npm run build` (sudah
diminifikasi & ada `contenthash`) dengan tampilan kode saat development.

##  Ringkasan

- Konfigurasi Webpack untuk development dan production sebaiknya dipisah agar rapi dan mudah dipelihara.
- Pola umum: `webpack.common.js` (shared) + `webpack.dev.js` + `webpack.prod.js`, digabung memakai `webpack-merge`.
- Jalankan environment yang sesuai lewat flag `--config`, biasanya dibungkus dalam script npm (`start` untuk dev, `build` untuk production).

##  Navigasi

⬅️ [13 - DevServer](../13-DevServer) | ➡️ [15 - Studi Kasus: Webpack untuk Club Finder App](../15-Studi-Kasus-Club-Finder-App)
