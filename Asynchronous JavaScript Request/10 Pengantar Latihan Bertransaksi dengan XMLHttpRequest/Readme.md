# Modul 10: Pengantar Latihan Bertransaksi dengan XMLHttpRequest

## Tentang Latihan Ini
Modul 11-14 adalah latihan **"fill in the blank"** — kamu akan melengkapi 4 fungsi transaksi buku (`getBook`, `insertBook`, `updateBook`, `removeBook`) satu per satu, masing-masing memakai `XMLHttpRequest`.

## Struktur Setiap Folder Latihan
```
11-Latihan-Melengkapi-Fungsi-getBook/
├── README.md              <- Instruksi & petunjuk pengerjaan
├── soal/                  <- Kerjakan di sini dulu! Ada bagian "// TODO"
│   ├── index.html
│   └── book-api.js
└── kunci-jawaban/         <- Cek ke sini SETELAH mencoba sendiri
    ├── index.html
    └── book-api.js
```

## Kontrak Fungsi yang Harus Dipenuhi
Agar konsisten, keempat fungsi mengikuti pola **callback** yang sama parameter terakhir selalu berupa fungsi `callback` yang dipanggil setelah response diterima:

```js
getBook(id, callback);
// callback dipanggil dengan: callback(result)
// result = { error: false, book: {...} }  atau  { error: true, message: "..." }

insertBook(book, callback);
// book = { title, author, year }
// callback dipanggil dengan: callback(result)

updateBook(id, book, callback);
// callback dipanggil dengan: callback(result)

removeBook(id, callback);
// callback dipanggil dengan: callback(result)
```

## Contoh Pola yang Akan Kamu Ikuti
Fungsi-fungsi ini pada dasarnya adalah pembungkus (wrapper) dari kode XHR yang sudah dipelajari di Modul 8-9, dikemas ulang menjadi fungsi yang bisa dipakai berulang:
```js
function getBook(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/books/${id}`);

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    callback(result);
  };

  xhr.send();
}

// Cara memakainya:
getBook('1', (result) => {
  if (!result.error) {
    console.log('Buku ditemukan:', result.book);
  }
});
```

## Sebelum Mulai
1. Pastikan mock API server sudah berjalan (`node server.js`, lihat Modul 7).
2. Buka folder `soal/` dari tiap modul latihan lewat Live Server.
3. Cari komentar `// TODO` di `book-api.js` — itulah bagian yang perlu kamu lengkapi.
4. Coba dulu sendiri sebelum membuka folder `kunci-jawaban/`.

## Tips Mengerjakan
- Baca dulu **komentar penjelas** di sekitar setiap `// TODO` biasanya sudah menjelaskan apa yang perlu diisi.
- Uji langsung lewat tombol-tombol di `index.html` dan lihat hasilnya di Console atau di layar.
- Kalau mentok, coba baca ulang Modul 8 dan 9 sebelum melihat kunci jawaban.

Yuk lanjut ke [Modul 11: Latihan — Melengkapi Fungsi getBook](../11-Latihan-Melengkapi-Fungsi-getBook/README.md).
