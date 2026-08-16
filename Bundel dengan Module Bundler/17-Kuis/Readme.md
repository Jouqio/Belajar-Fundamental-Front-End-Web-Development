# 17 - Kuis: Bundel dengan Module Bundler

Uji pemahamanmu terhadap seluruh materi Bundel dengan Module Bundler lewat
15 soal pilihan ganda berikut. Coba jawab dulu sebelum melihat kunci jawaban
di bagian bawah!

---

**1. Apa fungsi utama sebuah module bundler?**
- A. Menjalankan server backend
- B. Menggabungkan banyak file/module menjadi satu atau beberapa file siap pakai di browser
- C. Mengganti browser pengguna
- D. Menulis kode CSS secara otomatis

**2. Konsep Webpack manakah yang menentukan *dari mana* Webpack mulai membaca dependency graph?**
- A. Output
- B. Plugin
- C. Entry
- D. Mode

**3. Properti apa yang wajib berupa absolute path dalam konfigurasi `output`?**
- A. `filename`
- B. `path`
- C. `clean`
- D. `mode`

**4. Apa perbedaan utama antara Loader dan Plugin?**
- A. Loader bekerja pada satu file, Plugin bekerja pada keseluruhan proses build
- B. Loader dan Plugin adalah hal yang persis sama
- C. Plugin hanya bisa dipakai di production
- D. Loader tidak bisa dikonfigurasi

**5. Di mana Loader dikonfigurasi dalam `webpack.config.js`?**
- A. `plugins`
- B. `devServer`
- C. `module.rules`
- D. `entry`

**6. Kombinasi loader manakah yang tepat untuk memproses file CSS agar bisa di-`import` di JavaScript dan tampil di halaman?**
- A. `['babel-loader', 'ts-loader']`
- B. `['style-loader', 'css-loader']`
- C. `['file-loader']`
- D. `['html-loader']`

**7. Loader dalam array `use` dijalankan dengan urutan seperti apa?**
- A. Dari kiri ke kanan
- B. Acak
- C. Dari kanan ke kiri
- D. Berdasarkan abjad nama loader

**8. Plugin apa yang berguna untuk membuat file HTML secara otomatis, lengkap dengan tag `<script>` ke file bundle?**
- A. `MiniCssExtractPlugin`
- B. `HtmlWebpackPlugin`
- C. `CopyWebpackPlugin`
- D. `DefinePlugin`

**9. Apa efek utama mengatur `mode: 'production'`?**
- A. Build menjadi lebih lambat tapi hasilnya diminifikasi dan lebih ringan
- B. File hasil bundle menjadi lebih besar
- C. Source map otomatis lebih detail
- D. DevServer otomatis aktif

**10. Perintah apa yang dipakai untuk menginstal Webpack beserta CLI-nya?**
- A. `npm install webpack-only`
- B. `npm install --save-dev webpack webpack-cli`
- C. `npm start webpack`
- D. `npm build webpack`

**11. Nama file konfigurasi default yang otomatis dicari Webpack adalah...**
- A. `config.webpack.js`
- B. `webpack.json`
- C. `webpack.config.js`
- D. `bundler.config.js`

**12. Fitur bawaan Webpack 5 untuk memproses gambar tanpa perlu install `file-loader` disebut...**
- A. Asset Modules
- B. Image Loader
- C. File System API
- D. CSS Modules

**13. Apa fungsi utama `webpack-dev-server`?**
- A. Menggantikan proses build production
- B. Menyajikan aplikasi secara live dan otomatis rebuild saat ada perubahan file
- C. Menghapus semua file di folder `dist`
- D. Meng-hosting aplikasi ke internet secara publik

**14. Dalam strategi konfigurasi per environment, tool apa yang biasa dipakai untuk menggabungkan `webpack.common.js` dengan `webpack.dev.js`/`webpack.prod.js`?**
- A. `webpack-merge`
- B. `webpack-combine`
- C. `merge-webpack-config`
- D. `webpack-join`

**15. Placeholder `[contenthash]` pada `output.filename` paling berguna untuk...**
- A. Mempercepat proses development
- B. Menentukan warna tema aplikasi
- C. Cache busting — memastikan browser mengambil file baru saat isi bundle berubah
- D. Menambahkan komentar ke dalam kode

---

## 🔑 Kunci Jawaban

<details>
<summary>Klik untuk melihat kunci jawaban</summary>

1. B — Module bundler menggabungkan banyak module menjadi file siap pakai di browser.
2. C — Entry adalah titik awal Webpack membaca dependency graph.
3. B — `path` pada `output` wajib absolute path.
4. A — Loader bekerja per file, Plugin bekerja di level keseluruhan proses build.
5. C — Loader dikonfigurasi di `module.rules`.
6. B — `style-loader` + `css-loader` adalah kombinasi standar untuk CSS.
7. C — Loader dijalankan dari kanan ke kiri (atau bawah ke atas).
8. B — `HtmlWebpackPlugin` membuat HTML otomatis dengan tag `<script>` yang sesuai.
9. A — `production` mengaktifkan minifikasi & optimasi, build jadi lebih lambat tapi hasil lebih ringan.
10. B — `npm install --save-dev webpack webpack-cli`.
11. C — `webpack.config.js` adalah nama file default yang dicari Webpack.
12. A — Asset Modules (`type: 'asset/resource'`) adalah fitur bawaan Webpack 5.
13. B — `webpack-dev-server` menyajikan aplikasi secara live dengan auto-rebuild.
14. A — `webpack-merge` dipakai untuk menggabungkan beberapa file konfigurasi.
15. C — `[contenthash]` berguna untuk cache busting di production.

</details>

##  Skala Penilaian

| Skor Benar | Predikat |
|------------|----------|
| 13 – 15    |  Mantap! Kamu sudah sangat memahami Webpack. |
| 9 – 12     |  Baik, coba baca ulang bagian yang masih kurang yakin. |
| 5 – 8      |  Perlu review materi 04–13 lagi sebelum lanjut. |
| 0 – 4      |  Sebaiknya ulangi dari materi 01, pelan-pelan tidak apa-apa! |

##  Navigasi

 [16 - Rangkuman](../16-Rangkuman) |  [Kembali ke Daftar Materi](../README.md)
