# Modul 21: Latihan — Refactor Fungsi removeBook

## Tujuan
Menulis ulang fungsi `removeBook` dari versi XHR (Modul 14) menjadi versi **Fetch API** — latihan terakhir dari seri refactor ini.

## Soal
Buka `soal/book-api.js`:
```js
// TODO: Tulis ulang jadi versi Fetch API
async function removeBook(id) {
  // Isi di sini
}
```

## Petunjuk
- Paling sederhana dari semuanya: `fetch(url, { method: 'DELETE' })`, tidak butuh `headers` maupun `body`.

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Hapus salah satu buku, lalu coba `getBook` lagi untuk memastikan datanya benar-benar hilang.

## Selamat!
Kamu sudah berhasil merefactor **seluruh fungsi CRUD** dari `XMLHttpRequest` menjadi **Fetch API** dengan `async`/`await`. Bandingkan jumlah baris kode dan keterbacaan antara kedua versi — perbedaannya cukup terasa, bukan?

Lanjut ke [Modul 22: Studi Kasus — API untuk Club Finder App](../22-Studi-Kasus-API-untuk-Club-Finder-App/README.md) untuk menerapkan semua yang sudah dipelajari dalam sebuah aplikasi nyata.
