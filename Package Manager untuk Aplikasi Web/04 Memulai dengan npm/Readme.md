# Modul 4: Memulai dengan npm

## Perintah Dasar npm
Coba jalankan di terminal untuk melihat daftar perintah yang tersedia:
```bash
npm help
```

## Membuat Proyek Baru yang Dikenali npm
Sebuah folder proyek "dikenali" oleh npm kalau di dalamnya ada file bernama **`package.json`**. File ini berisi informasi tentang proyekmu (nama, versi, daftar dependency, dsb) — akan dibahas detail di Modul 6.

Untuk membuat `package.json` secara otomatis:
```bash
npm init
```
Perintah ini akan menanyakan beberapa pertanyaan interaktif (nama proyek, versi, deskripsi, dst). Kamu bisa langsung tekan **Enter** berkali-kali untuk memakai nilai default.

**Cara cepat (skip semua pertanyaan, langsung pakai nilai default):**
```bash
npm init -y
```
Flag `-y` artinya "yes to all" — otomatis menyetujui semua nilai default tanpa tanya-jawab interaktif.

## Coba Langsung
Buka `contoh/`, lalu jalankan dari terminal (pastikan posisi terminal sudah berada di dalam folder tersebut):
```bash
cd contoh
npm init -y
```
Perhatikan sebuah file baru bernama `package.json` akan muncul di folder tersebut.

## Isi `package.json` Setelah `npm init -y`
```json
{
  "name": "contoh",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Penjelasan Tiap Bagian
| Field | Fungsi |
|---|---|
| `name` | Nama proyek/package (huruf kecil, tanpa spasi) |
| `version` | Nomor versi proyek, mengikuti format Semantic Versioning (dibahas di Modul 10) |
| `description` | Deskripsi singkat proyek |
| `main` | File JavaScript utama yang jadi "pintu masuk" proyek |
| `scripts` | Kumpulan perintah otomatisasi (dibahas detail di Modul 8) |
| `license` | Jenis lisensi proyek (misalnya MIT, ISC) |

## Perintah Berguna Lainnya untuk Pemula
```bash
npm --version      # cek versi npm yang terpasang
npm config list    # lihat konfigurasi npm saat ini
npm doctor         # mendiagnosis masalah umum pada instalasi npm
```

## Kenapa `package.json` Penting?
`package.json` adalah **"identitas" dan "daftar belanja"** proyekmu — file ini mencatat semua package yang dipakai proyek, sehingga siapa pun (termasuk kamu sendiri di komputer lain) bisa memasang ulang semua dependency yang sama persis hanya dengan satu perintah (`npm install`), tanpa perlu tahu detail package apa saja yang dipakai satu per satu.
