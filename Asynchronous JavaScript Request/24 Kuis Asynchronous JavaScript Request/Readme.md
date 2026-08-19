# Modul 24: Kuis Asynchronous JavaScript Request

Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah.

1. Apa perbedaan mendasar antara proses synchronous dan asynchronous?
2. Sebutkan empat HTTP method yang paling sering dipakai beserta fungsinya masing-masing.
3. Apa arti status code `404` dan `500`?
4. Apa itu CORS, dan kenapa browser menerapkan aturan ini?
5. Apa fungsi `JSON.parse()` dan `JSON.stringify()`? Kapan masing-masing dipakai?
6. Tuliskan urutan langkah dasar memakai `XMLHttpRequest` untuk mengirim GET request.
7. Kenapa `xhr.setRequestHeader()` harus dipanggil setelah `xhr.open()` tapi sebelum `xhr.send()`?
8. Apa perbedaan utama Fetch API dibanding XMLHttpRequest dari segi gaya penulisan kode?
9. Kenapa `fetch()` **tidak** otomatis dianggap gagal (reject) untuk response berstatus `404` atau `500`? Bagaimana cara menanganinya dengan benar?
10. Apa fungsi `Promise.all()`, dan kapan sebaiknya dipakai?

<details>
<summary>Klik untuk lihat kunci jawaban</summary>

1. Synchronous berarti setiap proses dijalankan berurutan dan harus menunggu proses sebelumnya selesai (bisa membuat program "macet" saat menunggu proses lama). Asynchronous berarti proses berjalan di latar belakang tanpa menghentikan eksekusi kode lain, sehingga program tetap responsif selama menunggu.
2. `GET` (mengambil data), `POST` (menambah data baru), `PUT`/`PATCH` (memperbarui data), `DELETE` (menghapus data).
3. `404 Not Found` berarti resource yang diminta tidak ditemukan di server. `500 Internal Server Error` berarti terjadi kesalahan di sisi server saat memproses request.
4. CORS (Cross-Origin Resource Sharing) adalah mekanisme keamanan browser yang membatasi halaman web dari satu origin mengakses resource dari origin lain, kecuali server tujuan secara eksplisit mengizinkannya lewat header `Access-Control-Allow-Origin`. Aturan ini ada untuk mencegah script berbahaya di satu situs mengakses data dari situs lain tanpa izin.
5. `JSON.parse()` mengubah string JSON menjadi object JavaScript (dipakai saat menerima response dari API). `JSON.stringify()` mengubah object JavaScript menjadi string JSON (dipakai saat mengirim data lewat body request).
6. `new XMLHttpRequest()` → `xhr.open('GET', url)` → mendefinisikan `xhr.onload` → `xhr.send()`.
7. Karena `open()` berfungsi membuka/menyiapkan koneksi terlebih dahulu; header hanya bisa ditambahkan pada koneksi yang sudah dibuka namun belum benar-benar dikirim (`send()`). Kalau urutannya dibalik, browser tidak tahu ke koneksi mana header tersebut harus ditambahkan.
8. XMLHttpRequest memakai gaya callback (`xhr.onload = function() {...}`), sedangkan Fetch API berbasis Promise sehingga bisa memakai `async`/`await`, membuat kode asynchronous terbaca lebih mirip kode synchronous biasa dan lebih ringkas.
9. Karena `fetch()` hanya reject (masuk ke `catch`) untuk kegagalan jaringan (misalnya tidak ada koneksi internet) — bukan untuk status HTTP error. Cara menanganinya: cek secara manual properti `response.ok` (atau `response.status`) setelah `await fetch(...)`, dan tangani kasus gagalnya secara eksplisit (misalnya dengan `throw new Error(...)`).
10. `Promise.all()` menjalankan beberapa Promise **secara bersamaan (paralel)** dan menunggu **semuanya** selesai sebelum melanjutkan. Sebaiknya dipakai ketika kita perlu mengambil beberapa data yang **tidak saling bergantung** satu sama lain, supaya total waktu tunggu jauh lebih cepat dibanding dilakukan satu per satu secara berurutan.

</details>

## Selamat!
Kamu telah menyelesaikan seluruh materi **Asynchronous JavaScript Request**. Kemampuan mengambil dan mengirim data ke server adalah salah satu skill paling fundamental bagi seorang front-end web developer — hampir semua aplikasi web modern, dari media sosial hingga e-commerce, dibangun di atas konsep yang baru saja kamu pelajari.
