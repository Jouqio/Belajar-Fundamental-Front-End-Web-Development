# Modul 15: Asynchronous JavaScript Request dengan Fetch API

## Apa itu Fetch API?
**Fetch API** adalah cara modern untuk melakukan HTTP request di browser, dirancang sebagai alternatif yang lebih ringkas dari `XMLHttpRequest`. Fetch berbasis **Promise**, sehingga bisa dipakai bersama `async`/`await` membuat kode asynchronous terbaca hampir seperti kode synchronous biasa.

## Perbandingan Singkat: XHR vs Fetch

| | XMLHttpRequest | Fetch API |
|---|---|---|
| Gaya kode | Callback (`onload`) | Promise / `async`-`await` |
| Parsing JSON | Manual (`JSON.parse`) | Built-in (`response.json()`) |
| Dukungan browser | Sangat luas (termasuk browser lama) | Browser modern |
| Penanganan error jaringan | `onerror` | `.catch()` / `try-catch` |

## Sintaks Dasar Fetch (dengan `.then()`)
```js
fetch('http://localhost:3000/books')
  .then((response) => response.json()) // parsing otomatis JSON -> object
  .then((data) => {
    console.log('Daftar buku:', data.books);
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
```

## Sintaks Modern dengan `async`/`await` (Direkomendasikan)
```js
async function ambilDaftarBuku() {
  try {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    console.log('Daftar buku:', data.books);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

ambilDaftarBuku();
```
> `await` hanya bisa dipakai **di dalam** fungsi yang dideklarasikan dengan kata kunci `async`.

## Kenapa Perlu Dua Kali `await`/`.then()`?
```js
const response = await fetch(url); // (1) menunggu koneksi & header response
const data = await response.json(); // (2) menunggu body response selesai di-parse
```
Ini karena `fetch()` **hanya** menunggu sampai header response diterima belum tentu **body**-nya (yang mungkin berukuran besar) sudah selesai diunduh sepenuhnya. Memanggil `response.json()` adalah langkah **terpisah** untuk membaca dan mem-parsing body-nya, dan ini juga bersifat asynchronous (karena itu perlu `await` lagi).

## ⚠️ Jebakan Umum: Fetch Tidak "Reject" untuk Status Error (4xx/5xx)!
Ini adalah **perbedaan penting** dari XHR yang sering bikin bingung pemula:
```js
async function ambilBuku(id) {
  const response = await fetch(`http://localhost:3000/books/${id}`);
  const data = await response.json();
  console.log(data); // tetap jalan walau id tidak ditemukan (404)!
}
```
`fetch()` **hanya** akan reject (masuk ke `catch`) kalau terjadi **kegagalan jaringan** (misalnya tidak ada koneksi internet) bukan karena status `404` atau `500`. Kita harus **secara manual** mengecek `response.ok` atau `response.status`:
```js
async function ambilBuku(id) {
  const response = await fetch(`http://localhost:3000/books/${id}`);

  if (!response.ok) {
    console.error('Request gagal dengan status:', response.status);
    return;
  }

  const data = await response.json();
  console.log(data);
}
```
`response.ok` bernilai `true` untuk status `200-299`, dan `false` untuk status lainnya (termasuk `4xx`/`5xx`).

## Coba Sendiri
Buka `contoh/fetch-get-books.html` lewat Live Server (pastikan server latihan juga berjalan), lalu buka Console.

## Yang Akan Dipelajari Selanjutnya
Modul 16 akan membahas cara mengirim `POST`/`PUT`/`DELETE` dengan Fetch API (mengatur `method`, `headers`, dan `body`), serta teknik lanjutan seperti `Promise.all()`.
