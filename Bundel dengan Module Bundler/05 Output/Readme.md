# 05 - Output

##  Pengertian

Kalau **Entry** menjawab pertanyaan "dari mana Webpack mulai membaca?", maka
**Output** menjawab pertanyaan **"hasil akhirnya disimpan ke mana, dan diberi nama apa?"**

Output adalah konfigurasi yang memberi tahu Webpack:
- Di **folder** mana file hasil bundling akan ditulis (`path`).
- Dengan **nama file** apa hasil bundling itu disimpan (`filename`).

## ⚙️ Properti Penting dalam `output`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // folder tujuan (harus absolute path)
    filename: 'bundle.js',                  // nama file hasil bundle
    clean: true,                            // bersihkan folder dist sebelum build baru
  },
};
```

### Penjelasan tiap properti:

| Properti  | Fungsi |
|-----------|--------|
| `path`    | Lokasi folder tujuan output. **Harus absolute path**, karena itu biasanya ditulis dengan `path.resolve(__dirname, 'dist')`. |
| `filename`| Nama file bundle yang dihasilkan, misal `bundle.js`, `main.js`, atau pola dinamis seperti `[name].bundle.js`. |
| `clean`   | Kalau `true`, folder output akan dibersihkan dulu setiap kali build (menghindari file lama menumpuk). Fitur ini tersedia sejak Webpack 5. |

##  Kenapa `path` Harus Absolute?

Webpack butuh tahu **lokasi pasti** di sistem file komputer, bukan sekadar path
relatif seperti `'dist'`. Karena itu kita gunakan modul bawaan Node.js, `path`,
dan variabel `__dirname` (lokasi folder tempat file konfigurasi berada):

```js
const path = require('path');

path.resolve(__dirname, 'dist');
// contoh hasil: /home/user/proyek-saya/dist
```

##  Pola Nama Dinamis (Placeholder)

Berguna terutama saat entry lebih dari satu (multiple entry):

```js
module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Hasilnya akan ada 2 file: `app.bundle.js` dan `admin.bundle.js` — nama `[name]`
otomatis diganti sesuai key pada `entry`.

Placeholder umum lainnya:

| Placeholder    | Fungsi |
|----------------|--------|
| `[name]`       | Nama entry (key pada objek `entry`) |
| `[contenthash]`| Hash unik berdasarkan isi file — berguna untuk **cache busting** di production |

Contoh untuk production (agar browser tidak memakai cache lama saat isi file berubah):
```js
output: {
  filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
}
```

##  Contoh Praktik

Lihat [`contoh/`](./contoh) — melanjutkan contoh dari materi Entry Point, kali ini
dengan konfigurasi Output yang lebih lengkap (termasuk `clean: true`).

Jalankan:
```bash
cd contoh
npm install
npm run build
```

Lalu perhatikan folder `dist/` yang muncul, berisi `bundle.js`.
Coba jalankan `npm run build` dua kali — perhatikan bahwa folder `dist` selalu
bersih (tidak menumpuk file lama) berkat `clean: true`.

##  Ringkasan

- Output menentukan **lokasi** dan **nama** file hasil bundling.
- `path` wajib berupa absolute path, biasanya ditulis dengan `path.resolve(__dirname, 'dist')`.
- `filename` bisa statis (`bundle.js`) atau dinamis pakai placeholder (`[name]`, `[contenthash]`).
- `clean: true` membantu menjaga folder output tetap rapi setiap kali build.

##  Navigasi

⬅️ [04 - Entry Point](../04-Entry-Point) | ➡️ [06 - Loaders](../06-Loaders)
