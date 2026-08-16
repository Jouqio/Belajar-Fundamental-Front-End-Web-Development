# Modul 9: Hapus Instalasi Package

## Perintah Dasar Menghapus Package
```bash
npm uninstall nama-package
```
Bisa disingkat:
```bash
npm un nama-package
npm remove nama-package
npm rm nama-package
```

## Apa yang Terjadi Saat Package Dihapus?
1. Folder package tersebut dihapus dari `node_modules/`.
2. Entri package tersebut dihapus otomatis dari `dependencies` (atau `devDependencies`) di `package.json`.
3. `package-lock.json` diperbarui otomatis mengikuti perubahan tersebut.

## Menghapus devDependency
Sama seperti instalasi, penghapusan devDependency memakai perintah yang **sama** — npm otomatis tahu di kategori mana package tersebut terdaftar:
```bash
npm uninstall eslint
```

## Menghapus Beberapa Package Sekaligus
```bash
npm uninstall chalk dayjs eslint
```

## Menghapus Package Global
Package yang dipasang secara **global** (`-g`, dibahas juga di Modul 3) perlu dihapus dengan flag yang sama:
```bash
npm uninstall -g nama-package
```
Cek dulu daftar package global yang terpasang:
```bash
npm list -g --depth=0
```

## Membersihkan Total: Menghapus `node_modules` Secara Manual
Kadang kita ingin memasang ulang **semua** dependency dari nol (misalnya karena `node_modules` bermasalah/corrupt). Caranya:

**Di macOS/Linux:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Di Windows (Command Prompt):**
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

> ⚠️ Perhatikan: menghapus `package-lock.json` sebelum `npm install` bisa menyebabkan versi dependency sedikit berubah (mengikuti rentang versi di `package.json`). Kalau hanya ingin memasang ulang tanpa mengubah versi, **cukup hapus `node_modules` saja** tanpa menghapus `package-lock.json`.

## Kenapa Perlu Rutin "Membersihkan" Dependency yang Tidak Terpakai?
- **Mengurangi ukuran proyek** package yang tidak terpakai tetap memakan ruang di `node_modules`.
- **Mengurangi risiko keamanan** semakin sedikit dependency, semakin kecil kemungkinan ada celah keamanan dari package pihak ketiga yang sudah tidak dipakai lagi.
- **Mempercepat proses instalasi** di lingkungan CI/CD (server otomatisasi).

## Mengecek Package yang Tidak Terpakai (Opsional, Lanjutan)
Ada tool pihak ketiga seperti `depcheck` untuk menganalisis package mana saja di `package.json` yang sebenarnya sudah tidak dipakai lagi di kode:
```bash
npx depcheck
```

## Coba Sendiri
Buka `contoh/`, jalankan langkah berikut untuk melihat siklus penuh pasang → pakai → hapus:
```bash
cd contoh
npm install
node index.js
npm uninstall chalk
```
Perhatikan `package.json` — entri `chalk` di bagian `dependencies` otomatis hilang.

## Ringkasan Perintah Modul Ini
| Perintah | Fungsi |
|---|---|
| `npm uninstall nama-package` | Menghapus satu package |
| `npm uninstall -g nama-package` | Menghapus package global |
| `npm list -g --depth=0` | Melihat daftar package global |
| `rm -rf node_modules && npm install` | Memasang ulang semua dependency dari nol |
