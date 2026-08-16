# 09 - Memasang dan Menggunakan Webpack

##  Pengantar

Setelah memahami konsep-konsep dasarnya, sekarang saatnya **praktik langsung**:
menginstal Webpack dari nol di sebuah proyek Node.js, lalu menjalankannya untuk
pertama kali.

##  Prasyarat

- **Node.js** dan **npm** sudah terinstal. Cek dengan:
  ```bash
  node -v
  npm -v
  ```
  Kalau belum ada, install dulu dari [nodejs.org](https://nodejs.org).

##  Langkah-Langkah Instalasi

### 1. Buat Folder Proyek Baru

```bash
mkdir belajar-webpack
cd belajar-webpack
```

### 2. Inisialisasi `package.json`

```bash
npm init -y
```

Perintah ini membuat file `package.json` dengan pengaturan default, tempat
menyimpan informasi proyek dan daftar dependency.

### 3. Instal Webpack dan Webpack CLI

```bash
npm install --save-dev webpack webpack-cli
```

Penjelasan:
- `webpack` — package inti (mesin bundler-nya).
- `webpack-cli` — alat untuk menjalankan Webpack lewat perintah terminal.
- `--save-dev` (atau `-D`) — menandai bahwa package ini hanya dibutuhkan saat
  development, bukan saat aplikasi dijalankan di production (karena hasil akhirnya
  hanya file bundle biasa, Webpack sendiri tidak ikut "dikirim" ke pengguna).

Setelah proses ini selesai, akan muncul:
- Folder `node_modules/` — berisi semua library yang diinstal.
- File `package-lock.json` — mencatat versi persis tiap dependency.
- `package.json` akan bertambah bagian `devDependencies`.

### 4. Buat Struktur Folder Proyek

```bash
mkdir src
```

Buat file `src/index.js`:
```js
console.log('Webpack berhasil dipasang dan berjalan! 🎉');
```

### 5. Jalankan Webpack (Tanpa File Konfigurasi Dulu)

```bash
npx webpack
```

Karena belum ada `webpack.config.js`, Webpack akan memakai pengaturan default:
- Entry default: `./src/index.js`
- Output default: `./dist/main.js`
- Mode default: `production` (Webpack akan memberi peringatan/warning kalau
  `mode` tidak diatur secara eksplisit — ini normal untuk saat ini).

Setelah perintah selesai, cek folder `dist/` — akan ada file `main.js` di sana.

### 6. (Opsional) Coba Jalankan Hasilnya di Browser

Buat file `dist/index.html` sederhana:
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Belajar Webpack</title>
</head>
<body>
  <h1>Buka Console (F12) untuk lihat hasilnya</h1>
  <script src="main.js"></script>
</body>
</html>
```

Buka `dist/index.html` di browser, lalu buka **Console** (klik kanan → Inspect →
tab Console). Kamu akan melihat pesan `"Webpack berhasil dipasang dan berjalan! 🎉"`.

## 📦 Menambahkan Script npm (Praktik Standar)

Daripada mengetik `npx webpack` terus-menerus, tambahkan script di `package.json`:

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

Sekarang cukup jalankan:
```bash
npm run build
```

##  Contoh Lengkap

Lihat folder [`contoh/`](./contoh) untuk struktur proyek Webpack minimal yang
siap dicoba langsung:

```bash
cd contoh
npm install
npm run build
```

## ⚠️ Kesalahan Umum Pemula

| Masalah | Penyebab | Solusi |
|---------|----------|--------|
| `webpack: command not found` | Mencoba menjalankan `webpack` langsung tanpa `npx` atau tanpa script npm | Gunakan `npx webpack` atau tambahkan script di `package.json` |
| Warning "configuration.mode should be one of..." | Belum mengatur `mode` di config atau CLI | Tambahkan `mode: 'development'` (akan dibahas lengkap di materi 08 & 10) |
| `Cannot find module 'webpack'` | Belum menjalankan `npm install` setelah clone/pindah proyek | Jalankan `npm install` dulu |

##  Ringkasan

- Webpack diinstal sebagai `devDependency` lewat `npm install --save-dev webpack webpack-cli`.
- Tanpa file konfigurasi, Webpack tetap bisa jalan dengan pengaturan default (entry `src/index.js`, output `dist/main.js`).
- Sebaiknya tambahkan script `"build": "webpack"` di `package.json` agar lebih praktis dijalankan lewat `npm run build`.

##  Navigasi

⬅️ [08 - Mode](../08-Mode) | ➡️ [10 - Membuat Berkas Konfigurasi](../10-Membuat-Berkas-Konfigurasi)
