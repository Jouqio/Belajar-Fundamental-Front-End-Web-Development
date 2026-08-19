# Modul 13: Latihan Melengkapi Fungsi updateBook

## Tujuan
Melengkapi fungsi `updateBook(id, book, callback)` yang memperbarui data buku yang sudah ada memakai method `PUT`.

## Soal
Buka `soal/book-api.js`:
```js
function updateBook(id, book, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method PUT ke endpoint `${BASE_URL}/books/${id}`

  // TODO 2: Set header Content-Type menjadi application/json

  // TODO 3: Tangani event "onload", parse response, lalu panggil callback(result)

  // TODO 4: Kirim request dengan body berupa string JSON dari parameter "book"
}
```

## Petunjuk
- Sangat mirip dengan `insertBook` (Modul 12), bedanya di **method** (`PUT`, bukan `POST`) dan **URL** (perlu menyertakan `id` di path-nya).
- Kamu tidak perlu mengirim **seluruh** field buku — mock API server latihan kita cukup pintar untuk hanya memperbarui field yang kamu kirim saja (lihat kode `{ ...books[index], ...body }` di `server.js`).

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Masukkan id buku yang ingin diperbarui (misalnya `1`), ubah judul/status selesainya, lalu klik **Perbarui Buku**.
4. Coba `getBook` (Modul 11) lagi dengan id yang sama untuk memastikan datanya benar-benar berubah.

## Kalau Sudah Selesai
Bandingkan dengan `kunci-jawaban/book-api.js`, lalu lanjut ke [Modul 14: Latihan — Melengkapi Fungsi removeBook](../14-Latihan-Melengkapi-Fungsi-removeBook/README.md).
