# Asynchronous JavaScript Request
### Belajar Fundamental Front-End Web Development

Materi ini terdiri dari 24 modul yang membahas cara front-end "berbicara" dengan server lewat HTTP request secara asynchronous — dari konsep dasar HTTP, XMLHttpRequest, Fetch API, hingga studi kasus aplikasi nyata.

## Daftar Isi

### Konsep Dasar
1. [Pengantar Asynchronous JavaScript Request](./01-Pengantar-Asynchronous-JavaScript-Request/README.md)
2. [HTTP Request](./02-HTTP-Request/README.md)
3. [Web API](./03-Web-API/README.md)
4. [Cross-Origin Resource Sharing (CORS)](./04-Cross-Origin-Resource-Sharing-CORS/README.md)
5. [Mencoba Web API menggunakan Postman](./05-Mencoba-Web-API-menggunakan-Postman/README.md)
6. [JavaScript Object Notation (JSON)](./06-JavaScript-Object-Notation-JSON/README.md)

### Persiapan Proyek Latihan
7. [Persiapan Proyek Latihan](./07-Persiapan-Proyek-Latihan/README.md)

### XMLHttpRequest
8. [Asynchronous JavaScript Request dengan XMLHttpRequest](./08-Asynchronous-JavaScript-Request-dengan-XMLHttpRequest/README.md)
9. [Header dan Body Request dengan XMLHttpRequest](./09-Header-dan-Body-Request-dengan-XMLHttpRequest/README.md)
10. [Pengantar Latihan: Bertransaksi dengan XMLHttpRequest](./10-Pengantar-Latihan-Bertransaksi-dengan-XMLHttpRequest/README.md)
11. [Latihan: Melengkapi Fungsi getBook](./11-Latihan-Melengkapi-Fungsi-getBook/README.md)
12. [Latihan: Melengkapi Fungsi insertBook](./12-Latihan-Melengkapi-Fungsi-insertBook/README.md)
13. [Latihan: Melengkapi Fungsi updateBook](./13-Latihan-Melengkapi-Fungsi-updateBook/README.md)
14. [Latihan: Melengkapi Fungsi removeBook](./14-Latihan-Melengkapi-Fungsi-removeBook/README.md)

### Fetch API
15. [Asynchronous JavaScript Request dengan Fetch API](./15-Asynchronous-JavaScript-Request-dengan-Fetch-API/README.md)
16. [Penggunaan Fetch API Lebih Lanjut](./16-Penggunaan-Fetch-API-Lebih-Lanjut/README.md)
17. [Pengantar Latihan: Refactor Cara Transaksi](./17-Pengantar-Latihan-Refactor-Cara-Transaksi/README.md)
18. [Latihan: Refactor Fungsi getBook](./18-Latihan-Refactor-Fungsi-getBook/README.md)
19. [Latihan: Refactor Fungsi insertBook](./19-Latihan-Refactor-Fungsi-insertBook/README.md)
20. [Latihan: Refactor Fungsi updateBook](./20-Latihan-Refactor-Fungsi-updateBook/README.md)
21. [Latihan: Refactor Fungsi removeBook](./21-Latihan-Refactor-Fungsi-removeBook/README.md)

### Studi Kasus & Penutup
22. [Studi Kasus: API untuk Club Finder App](./22-Studi-Kasus-API-untuk-Club-Finder-App/README.md)
23. [Rangkuman Asynchronous JavaScript Request](./23-Rangkuman-Asynchronous-JavaScript-Request/README.md)
24. [Kuis Asynchronous JavaScript Request](./24-Kuis-Asynchronous-JavaScript-Request/README.md)

## Cara Belajar

Modul 1-6 bersifat konseptual (cukup dibaca). Mulai Modul 7, kamu akan memakai **mock API server lokal** (`server.js`, murni Node.js tanpa dependency) untuk latihan CRUD (Create, Read, Update, Delete) buku secara nyata — baik dengan XMLHttpRequest maupun Fetch API.

Setiap folder latihan (Modul 11-14 dan 18-21) berisi:
- `soal/` kode dengan bagian **TODO** yang perlu kamu lengkapi sendiri
- `kunci-jawaban/` — kode lengkap sebagai referensi, coba kerjakan dulu sebelum melihatnya

## Prasyarat
- Sudah menyelesaikan materi **CSS Grid**, **Web Component**, dan **Package Manager**.
- Sudah memasang Node.js (lihat materi Package Manager Modul 3) — dipakai untuk menjalankan mock API server latihan.

## Cara Menjalankan Server Latihan
```bash
cd 07-Persiapan-Proyek-Latihan/project-latihan/server
node server.js
```
Server akan berjalan di `http://localhost:3000`. Biarkan tetap berjalan di satu jendela terminal, lalu buka file HTML latihan di jendela/tab lain (lewat Live Server atau `python -m http.server`).

## Apa yang Akan Kamu Kuasai
Setelah menyelesaikan seluruh modul, kamu akan bisa:
- Memahami cara kerja HTTP request/response dan Web API.
- Memahami konsep CORS dan kenapa browser membatasi request lintas origin.
- Mengirim request asynchronous dengan **XMLHttpRequest** maupun **Fetch API** (`async`/`await`).
- Melakukan operasi CRUD (GET, POST, PUT, DELETE) ke REST API.
- Menerapkan seluruh konsep di atas dalam studi kasus aplikasi nyata (Club Finder App).
