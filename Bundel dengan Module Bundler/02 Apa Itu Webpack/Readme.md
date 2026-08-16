# 02 - Apa Itu Webpack

##  Pengertian

**Webpack** adalah sebuah **static module bundler** untuk aplikasi JavaScript modern.
Artinya, Webpack membaca semua file dalam proyekmu (JS, CSS, gambar, font, dll),
memahami bagaimana file-file itu saling terhubung lewat `import`/`require`, lalu
menggabungkannya menjadi satu atau beberapa file **bundle** yang siap dijalankan di browser.

Webpack dibuat pertama kali oleh **Tobias Koppers** pada tahun 2012, dan sejak itu menjadi
salah satu tool paling banyak dipakai di ekosistem front-end, termasuk menjadi "mesin" di
balik banyak tool populer seperti Create React App (versi lama) dan Vue CLI.

##  Ilustrasi Cara Kerja Webpack

```
        ┌─────────────┐
        │  index.js   │  (entry point)
        └──────┬──────┘
               │ import
      ┌────────┼────────┐
      ▼        ▼         ▼
 header.js  style.css  logo.png
      │
      ▼
  utils.js

Semua file di atas disebut "dependency graph" (peta ketergantungan).
Webpack menelusuri graph ini mulai dari entry point.
```

Setelah graph itu selesai ditelusuri, Webpack akan:

1. Memproses setiap jenis file sesuai aturan (pakai **Loader**).
2. Menjalankan proses tambahan lewat **Plugin** (misalnya membuat file HTML otomatis).
3. Menghasilkan **Output** — biasanya berupa `bundle.js` (dan file lain jika perlu) di folder `dist/`.

##  Mengapa Webpack Disebut "Module Bundler"?

Karena tugas utamanya adalah **memahami hubungan antar-module** (siapa mengimpor siapa)
dan **membundel** semuanya menjadi output akhir. Bedanya dengan bundler lain:

- Webpack bisa memperlakukan **hampir semua jenis file sebagai module** — bukan cuma
  JavaScript. CSS, gambar, font, bahkan file `.txt` bisa di-`import` di dalam kode JS
  berkat sistem **Loader**-nya.
- Sangat **fleksibel dan bisa dikonfigurasi** secara mendetail lewat file
  `webpack.config.js`, cocok untuk proyek kecil sampai proyek skala besar milik perusahaan.

##  4 Konsep Inti Webpack

Empat konsep berikut akan kita bahas satu per satu di materi selanjutnya:

| Konsep | Fungsi Singkat |
|--------|----------------|
| **Entry**   | Titik awal Webpack mulai membaca dependency graph |
| **Output**  | Menentukan di mana dan dengan nama apa hasil bundle disimpan |
| **Loaders** | Mengubah/memproses jenis file selain JS (CSS, gambar, dll) agar bisa dipakai sebagai module |
| **Plugins** | Menambahkan kemampuan ekstra di luar tugas dasar bundling (misalnya generate HTML, bersihkan folder output, dll) |

##  Contoh Instalasi Singkat (Preview)

Kita akan bahas instalasi secara detail di materi 09, tapi sebagai gambaran awal,
begini cara menambahkan Webpack ke proyek Node.js:

```bash
npm init -y
npm install --save-dev webpack webpack-cli
```

Lalu, secara default, Webpack akan mencari file entry di `src/index.js` dan
menghasilkan output di `dist/main.js` — meskipun kita bisa (dan sebaiknya) mengatur
semua ini secara eksplisit lewat `webpack.config.js`.

##  Ringkasan

- Webpack adalah static module bundler yang sangat populer dan fleksibel.
- Tugasnya: membaca dependency graph dari entry point, memproses tiap file lewat Loader,
  menjalankan Plugin untuk fitur tambahan, lalu menghasilkan file Output siap pakai.
- 4 konsep inti Webpack: **Entry, Output, Loaders, Plugins** — akan kita pelajari satu per
  satu di materi berikutnya.

##  Navigasi

⬅️ [01 - Pendahuluan Module Bundler](../01-Pendahuluan-Module-Bundler) | ➡️ [03 - Konsep Inti](../03-KonsepInti)
