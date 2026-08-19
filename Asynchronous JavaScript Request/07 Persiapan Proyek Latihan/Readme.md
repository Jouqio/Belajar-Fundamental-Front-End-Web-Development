# Modul 7: Persiapan Proyek Latihan

Mulai modul ini, kita akan praktik langsung mengirim asynchronous request ke sebuah API sungguhan. Karena kita belum masuk ke materi back-end, disediakan **mock API server** sederhana yang bisa dijalankan di komputer sendiri.

## Tentang Mock API Server
Server latihan ini (`server.js`) adalah REST API untuk mengelola data buku ("Bookshelf"), dengan endpoint:

| Method | Endpoint | Fungsi |
|---|---|---|
| `GET` | `/books` | Mengambil semua buku |
| `GET` | `/books/:id` | Mengambil satu buku |
| `POST` | `/books` | Menambah buku baru |
| `PUT` | `/books/:id` | Memperbarui buku |
| `DELETE` | `/books/:id` | Menghapus buku |

Server ini ditulis **murni** dengan modul bawaan Node.js (`http`) **tanpa** dependency npm apa pun, jadi tidak perlu `npm install` sama sekali.

## Struktur Folder Proyek Latihan
```
project-latihan/
└── server/
    └── server.js       <- Mock API server, jalankan dengan "node server.js"
```
Modul-modul selanjutnya (8-21) akan menambahkan file HTML/JS latihan yang terhubung ke server ini.

## Langkah 1: Jalankan Server
Buka terminal, arahkan ke folder server, lalu jalankan:
```bash
cd project-latihan/server
node server.js
```
Kalau berhasil, akan muncul pesan:
```
Mock Book API berjalan di http://localhost:3000
Endpoint tersedia: GET/POST /books, GET/PUT/DELETE /books/:id
```
**Biarkan terminal ini tetap terbuka** selama kamu berlatih — server harus terus berjalan agar bisa diakses.

## Langkah 2: Uji Coba Cepat Lewat Browser
Buka tab browser baru, kunjungi:
```
http://localhost:3000/books
```
Kamu akan melihat response JSON berisi 3 buku contoh (data awal).

## Langkah 3: Uji Coba Lewat Postman (Opsional, Reinforcement dari Modul 5)
Coba ulangi latihan Postman dari Modul 5 di sini untuk memastikan server berjalan sempurna sebelum lanjut menulis kode JavaScript.

## Data Awal (Seed Data)
```js
[
  { id: '1', title: 'Laskar Pelangi', author: 'Andrea Hirata', year: 2005, finished: true },
  { id: '2', title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', year: 1980, finished: false },
  { id: '3', title: 'Filosofi Teras', author: 'Henry Manampiring', year: 2018, finished: true },
]
```
> ⚠️ Data ini disimpan **di memori (RAM)**, bukan di file/database — artinya setiap kali server di-**restart** (dihentikan lalu dijalankan ulang), data akan **kembali ke kondisi awal**. Ini disengaja agar kamu bisa mengulang latihan dari kondisi bersih kapan saja.

## Menjalankan File HTML Latihan
File HTML latihan di modul-modul berikutnya perlu dibuka lewat **local server juga** (bukan `file://`), supaya perilakunya mendekati kondisi nyata (lihat kaitannya dengan CORS di Modul 4). Gunakan salah satu cara berikut, di jendela terminal **kedua** (biarkan server API tetap berjalan di jendela pertama):

**VS Code Live Server** — klik kanan file HTML → *Open with Live Server*.

**Python:**
```bash
python -m http.server 5500
```

## Checklist Sebelum Lanjut ke Modul 8
- [ ] `node server.js` berhasil dijalankan tanpa error.
- [ ] `http://localhost:3000/books` menampilkan data JSON di browser.
- [ ] Sudah paham bahwa server harus tetap berjalan selama latihan berlangsung.
