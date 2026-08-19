# Modul 9: Header dan Body Request dengan XMLHttpRequest

## Menambahkan Header dengan `setRequestHeader()`
Dipanggil **setelah** `open()`, tapi **sebelum** `send()`:
```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/books');
xhr.setRequestHeader('Content-Type', 'application/json'); // <- wajib untuk body JSON
xhr.send(/* body */);
```

## Kenapa Header `Content-Type` Penting?
Header ini memberi tahu server **format data** yang dikirim, supaya server tahu cara "membaca" body request dengan benar. Kalau body-nya JSON tapi header `Content-Type` tidak diset (atau salah), banyak server (termasuk mock API server latihan kita) akan gagal mem-parsing body-nya.

## Mengirim Body dengan `send(data)`
Body **harus** berupa string, bukan object JavaScript langsung karena itu kita perlu `JSON.stringify()` (lihat Modul 6):
```js
const bukuBaru = {
  title: 'Laut Bercerita',
  author: 'Leila S. Chudori',
  year: 2017,
};

xhr.send(JSON.stringify(bukuBaru));
```

## Contoh Lengkap: Menambah Buku Baru (POST)
```js
const xhr = new XMLHttpRequest();

xhr.open('POST', 'http://localhost:3000/books');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
  if (xhr.status === 201) {
    const data = JSON.parse(xhr.responseText);
    console.log('Buku berhasil ditambahkan:', data.book);
  } else {
    console.error('Gagal menambahkan buku, status:', xhr.status);
  }
};

const bukuBaru = { title: 'Laut Bercerita', author: 'Leila S. Chudori', year: 2017 };
xhr.send(JSON.stringify(bukuBaru));
```

## Contoh Lengkap: Memperbarui Buku (PUT)
```js
const xhr = new XMLHttpRequest();

xhr.open('PUT', 'http://localhost:3000/books/1');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log('Buku berhasil diperbarui:', JSON.parse(xhr.responseText));
  }
};

xhr.send(JSON.stringify({ finished: true }));
```

## Contoh Lengkap: Menghapus Buku (DELETE)
DELETE biasanya **tidak butuh body**, jadi `send()` dipanggil tanpa argumen:
```js
const xhr = new XMLHttpRequest();

xhr.open('DELETE', 'http://localhost:3000/books/1');

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log('Buku berhasil dihapus.');
  }
};

xhr.send();
```

## Membaca Response Header dari Server
```js
xhr.onload = function () {
  console.log(xhr.getResponseHeader('Content-Type'));
  console.log(xhr.getAllResponseHeaders());
};
```

## Urutan yang Benar — Kesalahan Umum Pemula
```js
// ❌ SALAH — setRequestHeader dipanggil SEBELUM open()
xhr.setRequestHeader('Content-Type', 'application/json'); // Error!
xhr.open('POST', url);

// ✅ BENAR — urutannya: open() dulu, baru setRequestHeader(), baru send()
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));
```

## Coba Sendiri
Buka `contoh/xhr-crud-demo.html` lewat Live Server (pastikan server latihan juga berjalan). Halaman ini punya tombol untuk mencoba POST, PUT, dan DELETE sekaligus, lengkap dengan log di layar.
