# Modul 23: Rangkuman Asynchronous JavaScript Request

## Ringkasan Konsep Inti

| Konsep | Penjelasan Singkat |
|---|---|
| **Asynchronous** | Proses berjalan di latar belakang tanpa menghentikan eksekusi kode lain |
| **HTTP Request/Response** | Siklus permintaan-jawaban antara browser (client) dan server |
| **HTTP Method** | `GET` (ambil), `POST` (tambah), `PUT` (perbarui), `DELETE` (hapus) |
| **Status Code** | Kode angka penjelas hasil request (`200` OK, `404` Not Found, dst) |
| **Web API / REST API** | "Pintu" yang disediakan server agar aplikasi lain bisa mengambil/mengirim data |
| **CORS** | Mekanisme keamanan browser yang membatasi request lintas origin |
| **JSON** | Format teks standar untuk pertukaran data di hampir semua Web API |
| **XMLHttpRequest** | API lama untuk request asynchronous, berbasis callback |
| **Fetch API** | API modern untuk request asynchronous, berbasis Promise/`async`-`await` |

## Perbandingan Kode: XHR vs Fetch untuk Kasus yang Sama

**Mengambil data (GET):**
```js
// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => console.log(JSON.parse(xhr.responseText));
xhr.send();

// Fetch API
const response = await fetch(url);
console.log(await response.json());
```

**Mengirim data (POST):**
```js
// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => console.log(JSON.parse(xhr.responseText));
xhr.send(JSON.stringify(data));

// Fetch API
const response = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
console.log(await response.json());
```

## Alur Belajar yang Sudah Dilalui
1. Memahami konsep dasar asynchronous & HTTP (Modul 1-2).
2. Memahami Web API, CORS, dan cara menguji API dengan Postman (Modul 3-5).
3. Memahami format data JSON (Modul 6).
4. Membangun & menjalankan mock API server latihan (Modul 7).
5. Praktik CRUD dengan `XMLHttpRequest` (Modul 8-14).
6. Praktik CRUD dengan `Fetch API` (Modul 15-16).
7. Me-refactor kode XHR menjadi Fetch API (Modul 17-21).
8. Menerapkan semuanya dalam studi kasus nyata: Club Finder App (Modul 22).

## Kapan Memilih XHR vs Fetch di Proyek Nyata?
- **Fetch API** adalah pilihan **default** untuk proyek baru — lebih ringkas, berbasis Promise, dan didukung penuh di semua browser modern.
- **XMLHttpRequest** masih relevan diketahui karena: (1) banyak kode lama/legacy masih memakainya, (2) beberapa library HTTP client populer (seperti Axios) sebenarnya dibangun di atas XHR secara internal, dan (3) XHR mendukung fitur progress upload/download secara native yang tidak dimiliki Fetch API standar.

## Kesalahan Umum yang Perlu Dihindari
- **Lupa `JSON.stringify()`** saat mengirim body request.
- **Lupa mengecek `response.ok`** di Fetch API — fetch tidak otomatis reject untuk status error (`4xx`/`5xx`).
- **Lupa header `Content-Type`** saat mengirim body JSON lewat `POST`/`PUT`.
- **Mengira error CORS adalah kesalahan di kode sendiri** — CORS adalah keputusan konfigurasi di sisi **server**, bukan sesuatu yang bisa "diperbaiki" hanya dari sisi front-end.
- **Menjalankan file HTML langsung** (`file://`) alih-alih lewat local server saat berlatih dengan mock API.

## Langkah Selanjutnya yang Disarankan
- Coba jelajahi API publik gratis lainnya (banyak didaftar di [publicapis.dev](https://publicapis.dev) atau sejenisnya) untuk berlatih lebih lanjut.
- Pelajari library seperti **Axios**, yang menyederhanakan beberapa hal dari Fetch API (misalnya otomatis melempar error untuk status `4xx`/`5xx`).
- Lanjutkan ke materi tentang **Asynchronous JavaScript** yang lebih dalam, seperti `Promise.race()`, `Promise.allSettled()`, dan pola-pola penanganan error tingkat lanjut.
