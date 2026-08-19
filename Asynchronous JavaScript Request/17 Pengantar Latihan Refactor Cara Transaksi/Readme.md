# Modul 17: Pengantar Latihan — Refactor Cara Transaksi

## Tentang Latihan Ini
Sekarang giliranmu **me-refactor** (menulis ulang dengan cara lebih baik, tanpa mengubah perilakunya) keempat fungsi yang sudah kamu buat di Modul 11-14 dari `XMLHttpRequest` menjadi **Fetch API** dengan `async`/`await`.

## Kontrak Fungsi (Tetap Sama, Hanya Implementasinya yang Berbeda)
```js
async function getBook(id) {
  // return: { error: false, book: {...} } atau { error: true, message: "..." }
}

async function insertBook(book) {
  // return: { error: false, message: "...", book: {...} }
}

async function updateBook(id, book) {
  // return: { error: false, message: "...", book: {...} }
}

async function removeBook(id) {
  // return: { error: false, message: "..." }
}
```

## Perbedaan Penting dari Versi XHR
Perhatikan bahwa versi Fetch **tidak lagi memakai parameter `callback`** karena `async function` sudah otomatis mengembalikan **Promise**, kita bisa langsung memakai `await` saat memanggilnya:
```js
// Versi lama (XHR + callback, Modul 11-14):
getBook('1', (result) => {
  console.log(result);
});

// Versi baru (Fetch + async/await, Modul 18-21):
const result = await getBook('1');
console.log(result);
```
Inilah salah satu keuntungan besar Fetch API kode jadi lebih ringkas dan lebih mudah dibaca urutannya, tanpa perlu "bersarang" di dalam callback.

## Struktur Folder Latihan
Sama seperti Modul 11-14, tiap folder latihan (18-21) berisi:
```
18-Latihan-Refactor-Fungsi-getBook/
├── README.md
├── soal/
│   ├── index.html
│   └── book-api.js   <- versi XHR yang sudah jadi, kamu ubah jadi versi Fetch
└── kunci-jawaban/
    ├── index.html
    └── book-api.js
```
Di folder `soal/`, kamu akan menemukan **versi XHR yang sudah lengkap** (hasil dari Modul 11-14) sebagai referensi tugasmu adalah menulis ulang fungsi tersebut memakai Fetch API, dengan hasil akhir (fungsinya) tetap berperilaku sama.

## Tips Refactor
1. Ganti `new XMLHttpRequest()` + `open()` + `send()` menjadi satu baris `fetch(url, options)`.
2. Ganti `xhr.onload` menjadi `await` (karena `fetch` sudah berbasis Promise).
3. Ganti `JSON.parse(xhr.responseText)` menjadi `await response.json()`.
4. Tambahkan kata kunci `async` di depan deklarasi fungsi.
5. Untuk `POST`/`PUT`, pindahkan `xhr.setRequestHeader(...)` menjadi object `headers` di dalam konfigurasi `fetch()`.

Yuk lanjut ke [Modul 18: Latihan Refactor Fungsi getBook](../18-Latihan-Refactor-Fungsi-getBook/README.md).
