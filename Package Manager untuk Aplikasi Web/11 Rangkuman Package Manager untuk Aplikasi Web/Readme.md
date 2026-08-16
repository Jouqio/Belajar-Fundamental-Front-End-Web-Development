# Modul 11: Rangkuman Package Manager untuk Aplikasi Web

## Ringkasan Konsep Inti

| Konsep | Penjelasan Singkat |
|---|---|
| **Package Manager** | Alat untuk memasang, mengelola, dan menghapus package secara otomatis |
| **npm** | Package manager bawaan Node.js, terhubung ke registry publik terbesar |
| **package.json** | "Daftar belanja" — mencatat nama & rentang versi dependency proyek |
| **package-lock.json** | "Struk belanja" — mencatat versi persis yang benar-benar terpasang |
| **node_modules** | Folder tempat kode package sungguhan disimpan (tidak perlu di-commit ke Git) |
| **dependencies** | Package yang dibutuhkan aplikasi saat berjalan |
| **devDependencies** | Package yang hanya dibutuhkan saat proses development |
| **Semantic Versioning** | Format `MAJOR.MINOR.PATCH` untuk penomoran versi package |
| **npm scripts** | Perintah otomatisasi yang didefinisikan di `package.json`, dijalankan lewat `npm run` |
| **Package Scope** | Pengelompokan package dengan awalan `@nama-scope/`, mencegah bentrok nama |

## Ringkasan Perintah npm yang Sudah Dipelajari

```bash
# Instalasi Node.js & npm
node -v
npm -v

# Inisialisasi proyek
npm init
npm init -y

# Memasang package
npm install nama-package
npm install nama-package@versi
npm install --save-dev nama-package    # devDependency
npm install -g nama-package            # global

# Menjalankan script
npm run nama-script
npm start        # jalan pintas untuk "npm run start"
npm test         # jalan pintas untuk "npm run test"
npm run          # melihat semua script yang tersedia

# Menghapus package
npm uninstall nama-package
npm uninstall -g nama-package
npm list -g --depth=0

# Memasang ulang semua dependency dari nol
rm -rf node_modules
npm install
```

## Alur Kerja Standar Proyek npm
```
1. npm init -y                         → membuat package.json
2. npm install nama-package            → memasang dependency yang dibutuhkan
3. require()/import di dalam kode      → memakai package tersebut
4. Tambahkan script build/test/dev     → otomatisasi lewat npm scripts
5. .gitignore berisi "node_modules/"   → jangan commit folder ini
6. git commit package.json & lock      → agar tim lain bisa "npm install" ulang
```

## Alur Belajar yang Sudah Dilalui
1. Memahami konsep dasar & alasan package manager dibutuhkan (Modul 1-2).
2. Memasang Node.js dan npm di komputer (Modul 3).
3. Membuat `package.json` dan proyek npm pertama (Modul 4-5).
4. Memasang, memakai, dan memahami `package.json`/`package-lock.json` secara mendalam (Modul 6-7).
5. Mengotomatisasi perintah lewat npm scripts (Modul 8).
6. Menghapus package dengan aman (Modul 9).
7. Memahami package scope untuk proyek/organisasi skala besar (Modul 10).

## Kesalahan Umum yang Perlu Dihindari
- **Meng-commit folder `node_modules/`** ke Git — selalu tambahkan ke `.gitignore`.
- **Menghapus `package-lock.json`** tanpa alasan jelas bisa menyebabkan versi dependency berubah tak terduga.
- **Memasang package sebagai `dependencies`** padahal hanya dipakai saat development (seharusnya `devDependencies`) membuat ukuran aplikasi production membengkak tanpa perlu.
- **Tidak membaca dokumentasi package** sebelum memakainya banyak bug pemula sebenarnya berasal dari cara pakai API package yang salah, bukan bug di package itu sendiri.

## Langkah Selanjutnya yang Disarankan
- Coba jelajahi [npmjs.com](https://www.npmjs.com) dan cari beberapa package yang menarik minatmu.
- Bangun proyek kecil yang memakai minimal 3 package berbeda untuk melatih alur kerja penuh: install → pakai → scripts → hapus package yang tidak jadi dipakai.
- Pelajari lebih lanjut tentang **bundler** (Vite, Webpack) yang biasanya dijalankan lewat npm scripts di proyek front-end modern.
