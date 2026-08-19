# Modul 14: Latihan Melengkapi Fungsi removeBook

## Tujuan
Melengkapi fungsi `removeBook(id, callback)` yang menghapus buku dari server memakai method `DELETE`.

## Soal
Buka `soal/book-api.js`:
```js
function removeBook(id, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method DELETE ke endpoint `${BASE_URL}/books/${id}`

  // TODO 2: Tangani event "onload", parse response, lalu panggil callback(result)

  // TODO 3: Kirim request (DELETE tidak butuh body, jadi xhr.send() tanpa argumen)
}
```

## Petunjuk
- `DELETE` biasanya **tidak** membutuhkan body maupun header `Content-Type` cukup `open()` dan `send()` tanpa argumen.
- Ini adalah fungsi **paling sederhana** dari keempat latihan, karena tidak perlu mengirim data apa pun.

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Masukkan id buku yang ingin dihapus, klik **Hapus Buku**.
4. Coba `getBook` (Modul 11) lagi dengan id yang sama — seharusnya sekarang muncul pesan "tidak ditemukan".

## Selamat!
Kalau keempat fungsi (`getBook`, `insertBook`, `updateBook`, `removeBook`) sudah berhasil kamu lengkapi, kamu sudah menguasai **CRUD lengkap dengan XMLHttpRequest**! Lanjut ke [Modul 15: Asynchronous JavaScript Request dengan Fetch API](../15-Asynchronous-JavaScript-Request-denganFetch-API/README.md) untuk mempelajari cara yang lebih modern dan ringkas melakukan hal yang sama.
