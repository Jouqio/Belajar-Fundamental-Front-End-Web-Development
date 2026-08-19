# Modul 3: Web API

## Apa itu Web API (dalam konteks ini)?
Dalam konteks front-end/back-end, **Web API** (sering disebut juga **REST API**) adalah "pintu" yang disediakan server agar aplikasi lain (termasuk aplikasi front-end kita) bisa **meminta atau mengirim data** lewat HTTP.

> Catatan: istilah "Web API" juga dipakai untuk menyebut API bawaan **browser** (seperti `fetch()`, `localStorage`, dll pernah disinggung di materi Web Component). Di modul ini, fokusnya adalah **Web API sebagai layanan server** yang diakses lewat HTTP.

## Analogi Sederhana
Bayangkan sebuah restoran:
- **Dapur** = server & database (tempat data sebenarnya diproses/disimpan).
- **Pelayan** = Web API (perantara antara pelanggan dan dapur).
- **Pelanggan** = aplikasi front-end kita.

Pelanggan tidak masuk ke dapur secara langsung mereka memesan lewat pelayan, yang tahu persis cara berkomunikasi dengan dapur. Web API bekerja dengan cara yang sama: front-end tidak mengakses database secara langsung, melainkan lewat "pelayan" (API) yang sudah disediakan.

## Konsep REST (Representational State Transfer)
Kebanyakan Web API modern mengikuti gaya **REST** aturan umum yang membuat API mudah dipahami:
- Setiap **resource** (data) punya URL sendiri, contoh: `/books`, `/books/1`.
- Aksi terhadap resource ditentukan oleh **HTTP method** (`GET`, `POST`, `PUT`, `DELETE` — lihat Modul 2).
- Data biasanya dikirim/diterima dalam format **JSON** (Modul 6).

## Contoh Endpoint REST API
```
GET    /books        -> ambil semua buku
GET    /books/1       -> ambil buku dengan id 1
POST   /books        -> tambah buku baru
PUT    /books/1       -> perbarui buku dengan id 1
DELETE /books/1       -> hapus buku dengan id 1
```
Pola inilah yang dipakai oleh mock API server latihan kita (lihat Modul 7) dan pola yang **sama persis** akan kamu temui di hampir semua REST API sungguhan.

## Base URL dan Endpoint
```
https://api.contoh.com/v1/books
└──────────┬──────────┘└──┬──┘
       Base URL         Endpoint
```
- **Base URL** alamat dasar server API.
- **Endpoint** path spesifik menuju resource tertentu.

## Public API vs Private API
- **Public API** bisa diakses siapa saja (kadang butuh API Key untuk membatasi jumlah pemakaian), contoh: API cuaca, API film.
- **Private API** hanya dipakai internal aplikasi tertentu, biasanya butuh autentikasi (login/token) untuk mengaksesnya.

## API Key — Apa dan Kenapa Dibutuhkan?
Banyak public API mewajibkan **API Key** (semacam "kunci akses" unik per pengguna) untuk:
- Melacak siapa saja yang memakai API tersebut.
- Membatasi jumlah request per hari/menit (*rate limiting*), mencegah penyalahgunaan.

Cara pakainya biasanya disisipkan di URL atau header, contoh:
```
https://api.contoh.com/data?api_key=abcd1234
```

## Membaca Dokumentasi API
Sebelum memakai Web API mana pun, **selalu baca dokumentasinya** terlebih dahulu. Dokumentasi API yang baik biasanya menjelaskan:
- Daftar endpoint yang tersedia beserta method-nya.
- Parameter yang dibutuhkan (di URL, header, atau body).
- Contoh response yang akan diterima.
- Cara mendapatkan API Key (kalau dibutuhkan).

## Yang Akan Dipelajari Selanjutnya
Modul 4 akan membahas **CORS** aturan keamanan browser yang sering "menghalangi" request ke Web API kalau tidak dikonfigurasi dengan benar, dan Modul 5 akan membahas cara menguji Web API dengan tool bernama **Postman** sebelum menulis kode JavaScript-nya.
