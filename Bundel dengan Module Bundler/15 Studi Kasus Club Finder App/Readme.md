# 15 - Studi Kasus: Webpack untuk Club Finder App

##  Pengantar

Sekarang saatnya **menggabungkan semua yang sudah dipelajari** (materi 01–14)
ke dalam sebuah proyek nyata: **Club Finder App** — aplikasi sederhana untuk
mencari klub sepak bola berdasarkan nama atau liga.

Proyek ini akan memakai:
- **Entry & Output** — mengatur titik masuk dan hasil bundle.
- **Loaders** — memproses CSS dan gambar logo klub.
- **Plugins** — `HtmlWebpackPlugin` untuk membuat halaman otomatis.
- **DevServer** — supaya bisa dikembangkan secara *live*.
- **Konfigurasi per Environment** — `webpack.dev.js` dan `webpack.prod.js`.

##  Fitur Aplikasi

- Menampilkan daftar klub sepak bola (nama, liga, logo).
- Input pencarian untuk memfilter klub berdasarkan nama.
- Tampilan dibuat responsif dan sederhana memakai CSS murni (tanpa framework),
  supaya fokus pembelajaran tetap ke Webpack, bukan ke CSS framework.

##  Struktur Proyek

```
15-Studi-Kasus-Club-Finder-App/
├── src/
│   ├── index.js          # entry point utama
│   ├── clubs.js          # data & logic daftar klub (module terpisah)
│   ├── render.js          # module untuk menampilkan klub ke DOM
│   ├── css/
│   │   └── style.css      # styling aplikasi
│   ├── img/
│   │   └── ball.svg       # logo/ikon yang di-import lewat JS
│   └── index.html         # template HTML untuk HtmlWebpackPlugin
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── README.md   <- kamu di sini
```

##  Penjelasan Tiap Bagian Kode

### 1. `src/clubs.js` — Module Data (Konsep: Module & Entry Graph)

Berisi data klub dan fungsi murni untuk mencari/memfilter klub. Dipisah dari
`index.js` supaya kode lebih rapi dan gampang diuji secara terpisah — ini
mempraktikkan gagasan **module** yang dibahas di materi 01.

```js
export const daftarKlub = [
  { nama: 'Persib Bandung', liga: 'Liga 1' },
  { nama: 'Persija Jakarta', liga: 'Liga 1' },
  // ...
];

export function cariKlub(kataKunci) {
  return daftarKlub.filter((klub) =>
    klub.nama.toLowerCase().includes(kataKunci.toLowerCase())
  );
}
```

### 2. `src/render.js` — Module untuk Manipulasi DOM

```js
export function renderDaftarKlub(container, klubs) {
  container.innerHTML = klubs
    .map((klub) => `
      <li class="klub-item">
        <span class="klub-nama">${klub.nama}</span>
        <span class="klub-liga">${klub.liga}</span>
      </li>
    `)
    .join('');
}
```

### 3. `src/index.js` — Entry Point (Konsep: Entry)

```js
import './css/style.css';   // <- diproses oleh css-loader + style-loader
import bola from './img/ball.svg'; // <- diproses oleh Asset Modules
import { daftarKlub, cariKlub } from './clubs.js';
import { renderDaftarKlub } from './render.js';

const ikon = document.getElementById('ikon-bola');
ikon.src = bola;

const daftarEl = document.getElementById('daftar-klub');
const inputCari = document.getElementById('input-cari');

renderDaftarKlub(daftarEl, daftarKlub);

inputCari.addEventListener('input', (e) => {
  const hasil = cariKlub(e.target.value);
  renderDaftarKlub(daftarEl, hasil);
});
```

### 4. `webpack.common.js` — Loader & Plugin (Konsep: Loaders & Plugins)

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Club Finder App',
      template: './src/index.html',
    }),
  ],
};
```

### 5. `webpack.dev.js` & `webpack.prod.js` (Konsep: Mode, Output, DevServer, Environment)

Sama seperti pola di materi 14 — memisahkan pengaturan development
(devServer, source map) dan production (minifikasi, `[contenthash]`).

## 🪜 Cara Menjalankan

```bash
npm install

# mode development, dengan live reload
npm start
# buka http://localhost:3000

# mode production, hasil akhir siap dirilis
npm run build
# cek folder dist/
```

##  Latihan Tambahan (Opsional, untuk Menguji Pemahaman)

1. Tambahkan filter berdasarkan **liga**, bukan cuma nama klub.
2. Tambahkan module baru `src/favorit.js` yang menyimpan klub favorit ke
   `localStorage`, lalu `import` di `index.js` — latihan ini melatih
   pemahamanmu soal bagaimana Webpack menelusuri dependency graph.
3. Coba ubah `output.filename` di `webpack.prod.js` menjadi statis (tanpa
   `[contenthash]`), lalu amati bedanya saat build dua kali berturut-turut.
4. Tambahkan plugin `CopyWebpackPlugin` untuk menyalin folder `public/favicon.ico`
   ke folder `dist/` (latihan menambahkan plugin baru secara mandiri).

##  Ringkasan

Studi kasus Club Finder App ini menggabungkan seluruh konsep Webpack yang
sudah dipelajari: Entry, Output, Loaders (CSS & gambar), Plugins
(`HtmlWebpackPlugin`), DevServer, dan pemisahan konfigurasi per environment
— semuanya dalam satu proyek nyata yang bisa kamu kembangkan lebih lanjut.

##  Navigasi

⬅️ [14 - Mengonfigurasi Webpack Berdasarkan Environment](../14-Mengonfigurasi-Webpack-Berdasarkan-Environment) | ➡️ [16 - Rangkuman](../16-Rangkuman)
