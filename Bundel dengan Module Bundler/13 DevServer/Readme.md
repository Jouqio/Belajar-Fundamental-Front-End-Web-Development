# 13 - DevServer

##  Pengertian

Selama ini di contoh-contoh sebelumnya, tiap kali kita mengubah kode, kita
harus:
1. Jalankan `npm run build` secara manual.
2. Refresh browser secara manual untuk melihat perubahan.

Cukup merepotkan kalau dilakukan berulang-ulang saat sedang aktif ngoding.
**`webpack-dev-server`** hadir untuk menyelesaikan masalah ini — sebuah
development server ringan yang:

- **Otomatis membangun ulang (rebuild)** kode setiap ada perubahan file.
- **Otomatis me-refresh browser** (atau bahkan hanya mengganti bagian yang
  berubah tanpa reload penuh, lewat fitur *Hot Module Replacement*).
- Menyajikan hasil bundle **langsung dari memori** (lebih cepat, tidak perlu
  menulis ulang file ke folder `dist/` setiap kali).

> 💡 Analogi: Tanpa DevServer, kamu seperti harus mencetak dan mencuci baju
> foto tiap kali ingin melihat hasil edit foto. Dengan DevServer, kamu bisa
> langsung melihat hasil edit itu secara *live* di layar begitu ada perubahan.

##  Langkah 1 — Instal

```bash
npm install --save-dev webpack-dev-server
```

##  Langkah 2 — Tambahkan Konfigurasi `devServer`

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // folder yang dijadikan "root" server
    port: 3000,          // port yang dipakai, bisa diakses di http://localhost:3000
    open: true,           // otomatis membuka browser saat server dijalankan
    hot: true,             // aktifkan Hot Module Replacement
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Belajar DevServer' }),
  ],
  mode: 'development',
};
```

##  Langkah 3 — Tambahkan Script npm

```json
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}
```

Jalankan:
```bash
npm start
```

Browser akan otomatis terbuka di `http://localhost:3000`, menampilkan
aplikasi kamu. Coba ubah teks di `src/index.js`, simpan filenya, lalu lihat
browser — halaman akan **otomatis ter-update** tanpa perlu refresh manual!

##  Opsi `devServer` yang Sering Dipakai

| Opsi | Fungsi |
|------|--------|
| `static` | Folder yang dijadikan sumber file statis tambahan (misalnya gambar di folder `public/`) |
| `port` | Nomor port server, default `8080` |
| `open` | Kalau `true`, otomatis membuka tab browser baru saat server dijalankan |
| `hot` | Mengaktifkan Hot Module Replacement (HMR) — mengganti module yang berubah tanpa reload penuh halaman |
| `compress` | Mengaktifkan kompresi gzip untuk aset yang disajikan |
| `historyApiFallback` | Berguna untuk Single Page Application (SPA) dengan client-side routing, agar refresh di halaman selain `/` tidak menghasilkan error 404 |

##  Contoh Lengkap yang Bisa Dicoba

Lihat folder [`contoh/`](./contoh):

```bash
cd contoh
npm install
npm start
```

Buka `http://localhost:3000`, lalu coba ubah teks di `src/index.js` — amati
bagaimana perubahan langsung terlihat di browser tanpa refresh manual.

## ⚠️ Penting: DevServer Tidak Menulis File ke Disk

`webpack-dev-server` **tidak benar-benar menulis** file `bundle.js` ke folder
`dist/` saat berjalan — semuanya disajikan langsung dari memori (RAM) demi
kecepatan. Karena itu, kalau kamu ingin melihat file hasil build fisik di
folder `dist/`, tetap gunakan perintah `npm run build` (bukan `npm start`).

##  Ringkasan

- `webpack-dev-server` menyajikan aplikasi secara *live* dan otomatis rebuild saat ada perubahan kode.
- Diaktifkan lewat konfigurasi `devServer` di `webpack.config.js`, dan dijalankan dengan `webpack serve`.
- Sangat membantu produktivitas saat development, tapi **bukan pengganti** proses `build` untuk production.

##  Navigasi

⬅️ [12 - Menggunakan Plugin](../12-Menggunakan-Plugin) | ➡️ [14 - Mengonfigurasi Webpack Berdasarkan Environment](../14-Mengonfigurasi-Webpack-Berdasarkan-Environment)
