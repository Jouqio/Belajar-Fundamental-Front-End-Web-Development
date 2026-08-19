# Modul 8: Asynchronous JavaScript Request dengan XMLHttpRequest

## Apa itu XMLHttpRequest?
**XMLHttpRequest (sering disingkat XHR)** adalah API bawaan browser yang paling awal dipakai untuk mengirim HTTP request lewat JavaScript, sudah ada sejak awal 2000-an. Meski namanya mengandung kata "XML", XHR bisa dipakai untuk berbagai format data, termasuk JSON.

## Langkah Dasar Memakai XMLHttpRequest

### 1. Membuat Instance XMLHttpRequest
```js
const xhr = new XMLHttpRequest();
```

### 2. Membuka Koneksi dengan `open()`
```js
xhr.open('GET', 'http://localhost:3000/books');
```
Parameter: `open(method, url)`.

### 3. Menangani Event `load` (Respons Diterima)
```js
xhr.onload = function () {
  console.log('Status:', xhr.status);
  console.log('Response mentah (string):', xhr.responseText);
};
```

### 4. Mengirim Request dengan `send()`
```js
xhr.send();
```

## Contoh Lengkap: Mengambil Semua Buku
```js
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/books');

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText); // ubah string JSON -> object JS
    console.log('Daftar buku:', data.books);
  } else {
    console.error('Request gagal dengan status:', xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Terjadi kesalahan jaringan.');
};

xhr.send();
```

## Kenapa XHR Bersifat Asynchronous?
Perhatikan bahwa `xhr.send()` **tidak langsung mengembalikan data** data baru bisa diakses di dalam `xhr.onload`, yang dipanggil **nanti**, setelah respons benar-benar diterima dari server. Ini adalah inti dari konsep asynchronous yang dibahas di Modul 1.

```js
console.log('1. Sebelum mengirim request');
xhr.send();
console.log('2. Baris ini jalan duluan, TIDAK menunggu response');
// ... beberapa saat kemudian ...
// 3. xhr.onload baru terpanggil setelah response diterima
```

## Melacak Setiap Perubahan Status dengan `readyState`
XHR punya properti `readyState` yang berubah seiring proses request berlangsung:

| Nilai | Nama | Arti |
|---|---|---|
| `0` | `UNSENT` | Belum ada `open()` dipanggil |
| `1` | `OPENED` | `open()` sudah dipanggil |
| `2` | `HEADERS_RECEIVED` | Header response sudah diterima |
| `3` | `LOADING` | Body response sedang diunduh |
| `4` | `DONE` | Request selesai sepenuhnya |

Alternatif dari `onload`, bisa juga memakai `onreadystatechange`:
```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  }
};
```
> Untuk kebanyakan kasus, `onload` **lebih sederhana** dan lebih direkomendasikan dibanding `onreadystatechange`, karena `onload` otomatis hanya terpanggil sekali saat request benar-benar selesai.

## Coba Sendiri
1. Pastikan mock API server sudah berjalan (`node server.js`, lihat Modul 7).
2. Buka `contoh/xhr-get-books.html` lewat Live Server, lalu buka Console DevTools.

## Ringkasan Alur XMLHttpRequest
```
new XMLHttpRequest()  →  xhr.open(method, url)  →  xhr.onload = ...  →  xhr.send()
                                                            │
                                                  (dijalankan otomatis
                                                   saat response diterima)
```
