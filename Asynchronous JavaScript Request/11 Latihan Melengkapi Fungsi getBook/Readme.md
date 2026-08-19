# Modul 11: Latihan  Melengkapi Fungsi getBook

## Tujuan
Melengkapi fungsi `getBook(id, callback)` yang mengambil satu data buku berdasarkan `id` memakai `XMLHttpRequest`.

## Soal
Buka `soal/book-api.js`. Kamu akan menemukan fungsi seperti ini:
```js
function getBook(id, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method GET ke endpoint `${BASE_URL}/books/${id}`

  // TODO 2: Tangani event "onload". Di dalamnya:
  //   - parse response (xhr.responseText) dari string JSON menjadi object
  //   - panggil callback(result) dengan hasil parse tersebut

  // TODO 3: Kirim request (tanpa body, karena GET tidak butuh body)
}
```

## Petunjuk
- Method untuk mengambil data adalah `GET` (lihat Modul 2).
- URL endpoint-nya: `${BASE_URL}/books/${id}` perhatikan `BASE_URL` sudah didefinisikan di baris atas file.
- Response dari server berbentuk **string JSON**, perlu di-parse dulu dengan `JSON.parse()` (lihat Modul 6) sebelum dipakai.
- Fungsi ini tidak me-*return* nilai secara langsung hasilnya dikirim lewat parameter `callback` (lihat Modul 10 untuk penjelasan pola ini).

## Cara Menguji
1. Pastikan server latihan berjalan (`node server.js`).
2. Buka `soal/index.html` lewat Live Server.
3. Masukkan id buku (coba `1`, `2`, atau `3` — sesuai data awal di Modul 7), klik tombol **Cari Buku**.
4. Kalau berhasil, detail buku akan tampil di halaman.

## Kalau Sudah Selesai
Bandingkan hasil kerjamu dengan `kunci-jawaban/book-api.js`. Kalau logikanya sama (walau penulisan variabel sedikit berbeda), berarti kamu sudah benar!

Lanjut ke [Modul 12: Latihan — Melengkapi Fungsi insertBook](../12-Latihan-Melengkapi-Fungsi-insertBook/README.md).
