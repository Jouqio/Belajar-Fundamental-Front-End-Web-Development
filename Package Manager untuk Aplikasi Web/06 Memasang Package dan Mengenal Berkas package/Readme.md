# Modul 6: Memasang Package dan Mengenal Berkas package.json

## Cara Memasang Package

### Memasang Versi Terbaru
```bash
npm install nama-package
```
Bisa disingkat:
```bash
npm i nama-package
```

### Memasang Versi Tertentu
```bash
npm install nama-package@4.1.2
```

### Memasang Beberapa Package Sekaligus
```bash
npm install express chalk dotenv
```

## Dua Jenis Dependency: `dependencies` vs `devDependencies`

### `dependencies` — Dibutuhkan Saat Aplikasi Berjalan
Package yang **benar-benar dipakai** aplikasi saat sedang berjalan/dipakai pengguna. Contoh: `express` (framework server), `chalk` (mewarnai output).
```bash
npm install express
```

### `devDependencies` — Hanya Dibutuhkan Saat Development
Package yang hanya membantu proses pengembangan, tapi **tidak dibutuhkan** saat aplikasi sudah jadi dan dipakai pengguna akhir. Contoh: tool testing, linter, formatter.
```bash
npm install --save-dev eslint
# atau disingkat
npm install -D eslint
```

**Contoh perbedaannya di `package.json`:**
```json
{
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "eslint": "^8.56.0"
  }
}
```

## Memahami Tanda `^` dan `~` (Semantic Versioning)
npm mengikuti standar **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`, contoh `4.1.2`.
- **MAJOR** — perubahan besar, berpotensi tidak kompatibel dengan versi sebelumnya (*breaking changes*).
- **MINOR** — penambahan fitur baru, tetap kompatibel dengan versi sebelumnya.
- **PATCH** — perbaikan bug kecil, tetap kompatibel.

| Simbol | Arti | Contoh | Boleh Update ke |
|---|---|---|---|
| `^4.1.2` | Boleh update MINOR & PATCH | `^4.1.2` | `4.2.0`, `4.9.9` — **tidak** boleh `5.0.0` |
| `~4.1.2` | Boleh update PATCH saja | `~4.1.2` | `4.1.3`, `4.1.9` — **tidak** boleh `4.2.0` |
| `4.1.2` | Persis versi itu saja | `4.1.2` | Tidak boleh berubah sama sekali |

## Mengenal `package.json` Lebih Dalam
```json
{
  "name": "proyek-pertama",
  "version": "1.0.0",
  "description": "Proyek latihan pertama menggunakan npm",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "chalk": "^4.1.2"
  }
}
```
File ini berfungsi sebagai **daftar belanja** — mencatat *nama* dan *rentang versi* package yang dipakai, tapi **tidak** menyimpan kode package itu sendiri.

## Mengenal `package-lock.json`
File ini **dibuat otomatis** oleh npm setiap kali kamu menjalankan `npm install`. Bedanya dengan `package.json`:

| | `package.json` | `package-lock.json` |
|---|---|---|
| Isi | Rentang versi (`^4.1.2`) | Versi **persis** yang benar-benar terpasang (`4.1.2`) |
| Siapa yang edit | Developer (manual atau lewat `npm install`) | npm (otomatis, jangan diedit manual) |
| Fungsi | "Daftar belanja" | "Struk belanja" — mencatat detail transaksi persis |
| Perlu di-commit ke Git? | Ya, wajib | **Ya, sangat disarankan** — agar semua anggota tim memasang versi persis yang sama |

Potongan `package-lock.json` (lihat contoh lengkap di `contoh/`):
```json
"node_modules/chalk": {
  "version": "4.1.2",
  "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
  "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA=="
}
```
Field `integrity` adalah checksum keamanan — memastikan file yang diunduh **tidak dimodifikasi** dari yang seharusnya.

## Mengapa `npm install` Bisa Berbeda Hasilnya Tanpa `package-lock.json`?
Kalau file ini tidak ada/tidak ikut ter-commit, dua orang yang menjalankan `npm install` di waktu berbeda bisa mendapat **versi minor/patch yang berbeda** (karena tanda `^`), berpotensi menyebabkan bug yang sulit dilacak karena "kebetulan beda versi". Inilah alasan `package-lock.json` sangat penting untuk konsistensi tim.

## Coba Sendiri
Buka folder `contoh/`, lihat isi `package.json` dan `package-lock.json` yang sudah disiapkan, lalu jalankan:
```bash
cd contoh
npm install
```
Perhatikan folder `node_modules/` muncul, berisi bukan cuma `chalk`, tapi juga dependency dari `chalk` itu sendiri (seperti `ansi-styles`, `supports-color`) — inilah kenapa package manager sangat membantu, karena kita tidak perlu memikirkan dependency-dari-dependency secara manual.
