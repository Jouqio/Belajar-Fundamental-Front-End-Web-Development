# Modul 20: Latihan Refactor Fungsi updateBook

## Tujuan
Menulis ulang fungsi `updateBook` dari versi XHR (Modul 13) menjadi versi **Fetch API**.

## Soal
Buka `soal/book-api.js`:
```js
// TODO: Tulis ulang jadi versi Fetch API
async function updateBook(id, book) {
  // Isi di sini
}
```

## Petunjuk
- Sangat mirip dengan `insertBook` (Modul 19), bedanya `method: 'PUT'` dan URL menyertakan `id`.

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Perbarui salah satu buku, lalu cek lagi dengan `getBook` untuk memastikan perubahan tersimpan.

Lanjut ke [Modul 21: Latihan Refactor Fungsi removeBook](../21-Latihan-Refactor-Fungsi-removeBook/README.md).
