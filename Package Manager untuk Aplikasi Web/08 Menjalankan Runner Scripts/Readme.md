# Modul 8: Menjalankan Runner Scripts

## Apa itu npm Scripts?
npm Scripts adalah fitur untuk mendefinisikan **perintah otomatisasi** di dalam `package.json`, sehingga perintah panjang/rumit bisa dijalankan cukup dengan satu kata pendek.

## Struktur Dasar
```json
{
  "scripts": {
    "nama-script": "perintah-yang-dijalankan"
  }
}
```

## Contoh Sederhana
```json
{
  "scripts": {
    "start": "node index.js",
    "greet": "echo Halo dari npm script!"
  }
}
```
Menjalankannya:
```bash
npm run start
npm run greet
```

## Script Khusus yang Punya "Jalan Pintas"
Dua script berikut **tidak perlu** ditulis `run`, cukup:
```bash
npm start   # sama dengan: npm run start
npm test    # sama dengan: npm run test
```
Script lain tetap wajib memakai `npm run nama-script`.

## Kenapa npm Scripts Sangat Berguna?
Bayangkan proyekmu butuh menjalankan beberapa proses sekaligus untuk build production:
```bash
npx eslint . && npx prettier --write . && node build.js --minify --output=dist
```
Daripada mengetik ulang perintah panjang ini setiap kali (dan berisiko typo), cukup definisikan sekali di `package.json`:
```json
{
  "scripts": {
    "build": "eslint . && prettier --write . && node build.js --minify --output=dist"
  }
}
```
Lalu cukup jalankan:
```bash
npm run build
```

## Contoh Script yang Umum Dipakai di Proyek Nyata
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build": "vite build"
  }
}
```

## Menjalankan Beberapa Script Berurutan
Gunakan `&&` agar script kedua hanya jalan kalau script pertama **berhasil** (tidak error):
```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest",
    "verify": "npm run lint && npm run test"
  }
}
```

## Melihat Semua Script yang Tersedia
```bash
npm run
```
Perintah ini akan menampilkan daftar semua script yang terdaftar di `package.json`, tanpa menjalankannya.

## Coba Sendiri
Buka `contoh/`, lihat isi `package.json`-nya, lalu jalankan:
```bash
cd contoh
npm run greet
npm run info
npm start
```

## Kenapa Ini Penting untuk Front-End Development?
Hampir semua tool front-end modern (Vite, Webpack, Parcel) bergantung pada npm scripts sebagai "pintu masuk" utama menjalankan proyek — perintah seperti `npm run dev` atau `npm run build` yang sering kamu lihat di dokumentasi framework, sebenarnya hanyalah npm script biasa yang didefinisikan di `package.json` proyek tersebut.
