# 06 - Loaders

##  Pengertian

Secara default, **Webpack hanya mengerti file JavaScript dan JSON**. Kalau kamu
mencoba `import` file CSS, gambar, atau font langsung tanpa pengaturan tambahan,
Webpack akan error karena tidak tahu cara "membaca" file tersebut.

**Loader** adalah "penerjemah" yang memberi tahu Webpack cara memproses jenis file
tertentu, lalu mengubahnya menjadi sesuatu yang bisa dimasukkan ke dependency graph.

> 💡 Analogi: Loader itu seperti **penerjemah bahasa**. Webpack cuma "bisa bahasa
> JavaScript". Kalau ketemu file CSS (bahasa lain), Webpack butuh penerjemah
> (loader) supaya bisa memahami dan memprosesnya.

## ⚙️ Struktur Dasar Konfigurasi Loader

Loader dikonfigurasi di dalam `module.rules`, berupa array aturan:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,             // pola file yang cocok (regex)
        use: ['style-loader', 'css-loader'], // loader yang dipakai
      },
    ],
  },
};
```

### Penjelasan:

| Properti | Fungsi |
|----------|--------|
| `test`   | Regex/pola untuk menentukan file mana yang akan diproses oleh rule ini. |
| `use`    | Loader (atau daftar loader) yang akan dijalankan pada file yang cocok. |

> ⚠️ **Urutan loader dalam array `use` itu penting!** Loader dijalankan **dari
> kanan ke kiri (atau bawah ke atas)**. Jadi pada contoh di atas, `css-loader`
> jalan duluan (mengubah CSS jadi JS module), baru `style-loader` (menyisipkan
> hasilnya ke `<style>` di HTML).

##  Loader Populer yang Sering Dipakai

| Loader | Fungsi |
|--------|--------|
| `css-loader` | Membaca `@import` dan `url()` di dalam CSS, mengubah CSS menjadi module JS |
| `style-loader` | Menyisipkan CSS ke dalam DOM lewat tag `<style>` |
| `sass-loader` | Mengompilasi file Sass/SCSS (`.scss`) menjadi CSS biasa |
| `babel-loader` | Mengompilasi JavaScript modern (ES6+) agar kompatibel dengan browser lama |
| `ts-loader` | Mengompilasi TypeScript (`.ts`) menjadi JavaScript |
| `file-loader` / Asset Modules | Memproses file gambar, font, dan aset lain |

> 📌 Sejak **Webpack 5**, untuk memproses gambar/font sudah tidak perlu
> `file-loader` lagi — cukup pakai fitur bawaan **Asset Modules** (`type: 'asset/resource'`),
> yang akan kita bahas contohnya di materi 11.

##  Contoh Sederhana: Memproses File CSS

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

```css
/* src/style.css */
body {
  background-color: #1e1e2f;
  color: #ffffff;
  font-family: sans-serif;
}
```

```js
// src/index.js
import './style.css'; // <- ini akan error TANPA loader di atas!

console.log('CSS berhasil dimuat lewat Webpack');
```

Tanpa `css-loader` dan `style-loader`, baris `import './style.css'` di atas akan
membuat Webpack melempar error seperti:
```
Module parse failed: Unexpected token
You may need an appropriate loader to handle this file type.
```

Praktik lengkap dengan file yang bisa langsung dijalankan ada di materi
**[11 - Menggunakan Loader](../11-Menggunakan-Loader)**.

##  Ringkasan

- Loader = penerjemah yang membuat Webpack bisa memproses file selain JS/JSON.
- Dikonfigurasi lewat `module.rules`, tiap rule punya `test` (pola file) dan `use` (loader yang dipakai).
- Urutan loader dalam array `use` berjalan dari **kanan ke kiri**.
- Loader populer: `css-loader`, `style-loader`, `sass-loader`, `babel-loader`, `ts-loader`.

##  Navigasi

⬅️ [05 - Output](../05-Output) | ➡️ [07 - Plugin](../07-Plugin)
