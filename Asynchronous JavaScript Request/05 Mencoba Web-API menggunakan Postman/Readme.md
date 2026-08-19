# Modul 5: Mencoba Web API menggunakan Postman

## Apa itu Postman?
**Postman** adalah aplikasi (tersedia sebagai desktop app maupun ekstensi browser) yang memudahkan developer **menguji Web API** tanpa perlu menulis kode JavaScript terlebih dahulu cukup lewat antarmuka klik-klik yang ramah pengguna.

## Kenapa Perlu Menguji API Sebelum Menulis Kode?
- Memastikan endpoint **benar-benar berfungsi** sebelum menghabiskan waktu debug di kode JavaScript.
- Melihat **struktur response** yang sebenarnya (nama field, tipe data), supaya kode yang ditulis nanti sudah sesuai sejak awal.
- Mencoba berbagai skenario (data valid, data salah, tanpa autentikasi, dll) dengan cepat.

## Cara Memasang Postman
1. Download di [postman.com/downloads](https://www.postman.com/downloads/)
2. Pasang seperti aplikasi pada umumnya, lalu buka.
3. Kamu bisa memakainya tanpa akun (Guest), meski disarankan membuat akun gratis agar riwayat request tersimpan.

## Mengirim Request Pertama di Postman

### Langkah-Langkah Mencoba GET Request
1. Klik **New** → **HTTP Request** (atau tombol `+` di tab baru).
2. Pilih method **GET** dari dropdown.
3. Ketik URL, misalnya (jika mock API server latihan kita sedang berjalan):
   ```
   http://localhost:3000/books
   ```
4. Klik tombol **Send**.
5. Lihat hasilnya di panel bawah tab **Body** menampilkan response JSON, dan kamu juga bisa melihat **Status** (misalnya `200 OK`) di bagian atas hasil.

### Mencoba POST Request (Mengirim Data)
1. Ganti method jadi **POST**.
2. URL: `http://localhost:3000/books`
3. Klik tab **Body** → pilih **raw** → pilih format **JSON** di dropdown sebelah kanan.
4. Isi body-nya, contoh:
   ```json
   {
     "title": "Laut Bercerita",
     "author": "Leila S. Chudori",
     "year": 2017
   }
   ```
5. Klik **Send**. Kalau berhasil, kamu akan melihat status `201 Created` dan data buku baru di response.

### Mencoba PUT Request (Memperbarui Data)
1. Method: **PUT**
2. URL: `http://localhost:3000/books/1`
3. Body (raw, JSON):
   ```json
   { "finished": true }
   ```
4. Klik **Send**.

### Mencoba DELETE Request
1. Method: **DELETE**
2. URL: `http://localhost:3000/books/1`
3. Klik **Send** (tidak perlu body).

## Menambahkan Header Custom di Postman
Kalau API butuh header tambahan (misalnya API Key atau token autentikasi):
1. Klik tab **Headers**.
2. Tambahkan key-value, contoh:
   ```
   Key: Authorization
   Value: Bearer abcd1234
   ```

## Menyimpan Request agar Bisa Dipakai Ulang (Collection)
Postman memungkinkan kamu mengelompokkan beberapa request ke dalam satu **Collection** sangat berguna kalau kamu menguji banyak endpoint dari API yang sama, supaya tidak perlu mengetik ulang URL setiap kali.
1. Klik **Save** setelah membuat request.
2. Beri nama, lalu pilih/buat Collection baru (contoh: "Bookshelf API").

## Coba Sendiri
1. Jalankan mock API server latihan (lihat [Modul 7](../07-Persiapan-Proyek-Latihan/README.md)):
   ```bash
   cd 07-Persiapan-Proyek-Latihan/project-latihan/server
   node server.js
   ```
2. Buka Postman, coba keempat jenis request di atas (GET, POST, PUT, DELETE) ke `http://localhost:3000/books`.
3. Perhatikan bagaimana response berubah setelah kamu menambah/mengubah/menghapus data.

## Kenapa Ini Penting Sebelum Menulis Kode JavaScript?
Setelah memastikan API berjalan sesuai harapan lewat Postman, kamu akan jauh lebih percaya diri saat menulis kode `XMLHttpRequest` (Modul 8) atau `fetch()` (Modul 15) — karena kalau nanti ada error, kamu sudah tahu pasti bahwa masalahnya ada di kode JavaScript-mu, bukan di API-nya.
