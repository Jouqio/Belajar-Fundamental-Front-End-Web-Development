# Modul 12: Latihan Melengkapi Fungsi insertBook

## Tujuan
Melengkapi fungsi `insertBook(book, callback)` yang mengirim data buku baru ke server memakai method `POST`.

## Soal
Buka `soal/book-api.js`:
```js
function insertBook(book, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method POST ke endpoint `${BASE_URL}/books`

  // TODO 2: Set header Content-Type menjadi application/json
  //         (WAJIB dilakukan SEBELUM xhr.send(), lihat Modul 9)

  // TODO 3: Tangani event "onload", parse response, lalu panggil callback(result)

  // TODO 4: Kirim request dengan body berupa string JSON dari parameter "book"
  //         (gunakan JSON.stringify(), lihat Modul 6)
}
```

## Petunjuk
- Method untuk menambah data baru adalah `POST` (lihat Modul 2).
- Jangan lupa `setRequestHeader('Content-Type', 'application/json')` tanpa ini, server tidak akan bisa membaca body-nya dengan benar (lihat Modul 9).
- Parameter `book` sudah berupa **object JavaScript**, contoh: `{ title: 'Buku Baru', author: 'Penulis', year: 2020 }` kamu perlu mengubahnya jadi string JSON dulu sebelum dikirim lewat `xhr.send()`.

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Isi form judul, penulis, dan tahun, lalu klik **Tambah Buku**.
4. Kalau berhasil, akan muncul pesan konfirmasi beserta `id` buku baru yang diberikan server.

## Kalau Sudah Selesai
Bandingkan dengan `kunci-jawaban/book-api.js`, lalu lanjut ke [Modul 13: Latihan — Melengkapi Fungsi updateBook](../13-Latihan-Melengkapi-Fungsi-updateBook/README.md).
