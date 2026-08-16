# Modul 10: Package Scope

## Apa itu Package Scope?
Scope adalah cara **mengelompokkan package** di bawah satu "namespace" atau nama organisasi/pengguna, ditandai dengan awalan `@`. Contoh package ber-scope:
```
@angular/core
@babel/preset-env
@testing-library/react
@vue/cli
```
Dibandingkan package tanpa scope:
```
express
chalk
lodash
```

## Kenapa Package Scope Dibutuhkan?

### 1. Menghindari Bentrok Nama (Naming Collision)
npm registry punya lebih dari 2 juta package publik — kemungkinan besar nama sederhana seperti `utils` atau `logger` sudah dipakai orang lain. Dengan scope, organisasi bisa memakai nama package sesuka mereka tanpa takut bentrok:
```
@perusahaanku/utils
@perusahaanku/logger
```

### 2. Mengelompokkan Package Terkait
Framework besar biasanya memecah kodenya jadi banyak package kecil di bawah satu scope yang sama, supaya developer bisa memasang hanya bagian yang dibutuhkan:
```bash
npm install @angular/core @angular/common @angular/router
```

### 3. Package Privat untuk Perusahaan/Tim
Scope memungkinkan perusahaan membuat package **privat** (tidak publik) yang hanya bisa diakses oleh anggota tim/organisasi mereka di npm — cocok untuk kode internal yang tidak ingin dipublikasikan ke umum.

## Cara Memasang Package Ber-Scope
Cara pakainya **sama persis** seperti package biasa, cukup sertakan awalan `@nama-scope/`:
```bash
npm install @babel/core
```
Hasilnya di `package.json`:
```json
{
  "dependencies": {
    "@babel/core": "^7.23.9"
  }
}
```

## Struktur Folder di `node_modules`
Package ber-scope disimpan dalam sub-folder tersendiri sesuai nama scope-nya:
```
node_modules/
└── @babel/
    ├── core/
    └── preset-env/
```

## Scope Publik vs Scope Privat

| | Scope Publik | Scope Privat |
|---|---|---|
| Siapa yang bisa install | Siapa saja | Hanya anggota organisasi yang berlangganan npm berbayar |
| Biaya | Gratis | Berbayar (npm Team/Enterprise plan) |
| Contoh | `@angular/core` | `@nama-perusahaan-privat/internal-lib` |

## Membuat Package dengan Scope Sendiri (Sekadar Wawasan)
Kalau suatu saat kamu mempublikasikan package sendiri, kamu bisa memberi scope dengan nama akun/organisasi npm-mu:
```json
{
  "name": "@username-npm-kamu/nama-package",
  "version": "1.0.0"
}
```
Lalu dipublikasikan dengan:
```bash
npm publish --access public
```
> Flag `--access public` wajib disertakan untuk package ber-scope kalau ingin dipublikasikan gratis untuk umum — secara default, package ber-scope akan dianggap privat (berbayar) kalau flag ini tidak disertakan.

## Coba Sendiri
Buka `contoh/`, lihat isi `package.json`-nya yang memakai dua package ber-scope (`@babel/core` sebagai devDependency), lalu jalankan:
```bash
cd contoh
npm install
```
Perhatikan folder `node_modules/@babel/` yang terbentuk — bandingkan dengan `node_modules/chalk` (package tanpa scope) di modul-modul sebelumnya.

## Ringkasan
- Scope ditandai dengan awalan `@nama-scope/`.
- Fungsinya: menghindari bentrok nama, mengelompokkan package terkait, dan memungkinkan package privat.
- Cara instalasi & pemakaiannya identik dengan package biasa, hanya beda penulisan nama.
