# Modul 1: Pengantar Asynchronous JavaScript Request

## Masalah yang Ingin Diselesaikan
Bayangkan sebuah halaman web menampilkan daftar produk dari server. Untuk mendapatkan data itu, browser harus **meminta data ke server** lewat internet — proses ini butuh waktu (bisa ratusan milidetik, bisa juga beberapa detik tergantung koneksi).

Kalau proses ini dilakukan secara **synchronous** (berurutan, menunggu), seluruh halaman web akan **freeze/macet total** selama menunggu respons server tombol tidak bisa diklik, scroll tidak jalan, semuanya diam sampai data selesai diterima.

## Solusi: Asynchronous Request
**Asynchronous** artinya proses berjalan "di latar belakang" tanpa menghentikan proses lain. Saat request dikirim ke server, JavaScript **tidak menunggu diam** ia tetap bisa menjalankan kode lain, dan begitu respons dari server sudah siap, barulah kode yang menangani respons tersebut dijalankan.

## Analogi Sederhana
Bayangkan kamu memesan makanan di restoran:
- **Synchronous** kamu berdiri di depan dapur, tidak melakukan apa pun, sampai makanan selesai dimasak. Semua orang di belakangmu juga harus menunggu.
- **Asynchronous** kamu memesan, mendapat nomor antrian, lalu duduk santai (bisa mengobrol, main HP). Begitu makanan siap, namamu dipanggil. Selama menunggu, restoran tetap bisa melayani pelanggan lain.

Begitu juga JavaScript: request ke server dikirim, lalu JavaScript **lanjut mengerjakan hal lain**, dan baru "dipanggil kembali" ketika data dari server sudah siap.

## Ilustrasi dalam Kode
```js
console.log('1. Mulai mengambil data...');

// Asynchronous: TIDAK menghentikan baris kode setelahnya
ambilDataDariServer(() => {
  console.log('3. Data berhasil diterima dari server!');
});

console.log('2. Baris ini tetap jalan duluan, tanpa menunggu data selesai.');
```
Output di console akan tercetak dengan urutan **1, 2, 3** — bukan 1, 3, 2 karena baris ke-3 baru berjalan **setelah** data benar-benar diterima (bisa beberapa saat kemudian), sementara baris ke-2 tidak perlu menunggu apa pun.

## Kenapa Ini Penting untuk Front-End Web Development?
Hampir semua aplikasi web modern mengambil data secara dinamis: daftar produk e-commerce, feed media sosial, hasil pencarian, dan sebagainya. Semuanya memakai **asynchronous request** agar halaman tetap responsif (bisa terus dipakai) selama menunggu data dari server.

## Dua Cara Utama Melakukan Asynchronous Request di Browser
Materi ini akan membahas dua API bawaan browser untuk melakukan request:
1. **XMLHttpRequest (XHR)** API lama, sudah ada sejak awal 2000-an, sedikit lebih verbose (Modul 8-14).
2. **Fetch API** API modern, lebih ringkas, berbasis `Promise` (Modul 15-21).

## Yang Akan Dipelajari Selanjutnya
Sebelum masuk ke kode, kita akan memahami dulu **konsep dasar** yang melandasi semua asynchronous request: apa itu HTTP Request (Modul 2), Web API (Modul 3), CORS (Modul 4), cara menguji API dengan Postman (Modul 5), dan format data JSON (Modul 6).
