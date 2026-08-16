# Modul 3: Memasang Node.js dan npm

## Apa itu Node.js?
Node.js adalah **runtime** yang memungkinkan JavaScript dijalankan **di luar browser**  misalnya langsung di terminal/komputer kamu. npm ikut terpasang otomatis begitu Node.js terpasang, jadi kita hanya perlu memasang satu hal saja: **Node.js**.

## Cara Memasang Node.js

### Opsi 1 Download Installer Resmi (paling mudah untuk pemula)
1. Buka [https://nodejs.org](https://nodejs.org)
2. Download versi **LTS** (Long Term Support) — versi ini paling stabil dan direkomendasikan untuk kebanyakan proyek, dibanding versi "Current" yang berisi fitur terbaru tapi lebih rawan perubahan.
3. Jalankan installer dan ikuti langkah-langkahnya (klik Next/Continue seperti memasang aplikasi pada umumnya).

### Opsi 2 Menggunakan Node Version Manager (disarankan untuk penggunaan jangka panjang)
Sangat berguna kalau suatu saat kamu perlu berpindah-pindah versi Node.js antar proyek.

**Di macOS/Linux (nvm):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
```

**Di Windows (nvm-windows):**
Download installer dari [github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows), lalu jalankan:
```powershell
nvm install lts
nvm use lts
```

## Memastikan Instalasi Berhasil
Buka terminal (Command Prompt, PowerShell, atau Terminal di macOS/Linux), lalu ketik:
```bash
node -v
```
Kalau berhasil, akan muncul nomor versi, contoh:
```
v20.11.1
```

Cek juga versi npm-nya (otomatis ikut terpasang):
```bash
npm -v
```
Contoh output:
```
10.2.4
```

## Troubleshooting Umum untuk Pemula

**Masalah: `node: command not found` atau `'node' is not recognized`**
- Kemungkinan instalasi belum selesai sempurna, atau terminal perlu ditutup dan dibuka ulang setelah instalasi.
- Di Windows, pastikan opsi "Add to PATH" tercentang saat instalasi (biasanya sudah default tercentang).

**Masalah: Versi Node.js terlalu lama**
- Uninstall versi lama terlebih dahulu, lalu pasang ulang versi LTS terbaru dari nodejs.org, atau gunakan `nvm install --lts` kalau memakai Node Version Manager.

## Memperbarui npm ke Versi Terbaru (Opsional)
npm kadang merilis versi lebih baru daripada yang terpasang bersama Node.js. Untuk memperbarui:
```bash
npm install -g npm@latest
```
Flag `-g` artinya "global" dipasang untuk seluruh sistem, bukan untuk proyek tertentu saja (dibahas lebih detail di Modul 6).

## Checklist Sebelum Lanjut ke Modul Berikutnya
- [ ] `node -v` menampilkan nomor versi tanpa error.
- [ ] `npm -v` menampilkan nomor versi tanpa error.
