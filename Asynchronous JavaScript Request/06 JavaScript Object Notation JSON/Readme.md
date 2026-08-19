# Modul 6: JavaScript Object Notation (JSON)

## Apa itu JSON?
**JSON (JavaScript Object Notation)** adalah format teks ringan untuk menyimpan dan mengirim data, dan menjadi format **standar** yang dipakai hampir semua Web API modern untuk mengirim response.

## Kenapa JSON Populer?
- **Mudah dibaca manusia** strukturnya mirip object JavaScript, jadi intuitif bagi developer JS.
- **Ringan** dibanding format lain seperti XML, JSON lebih ringkas.
- **Didukung hampir semua bahasa pemrograman** bukan cuma JavaScript.

## Aturan Penulisan JSON
```json
{
  "title": "Laskar Pelangi",
  "author": "Andrea Hirata",
  "year": 2005,
  "finished": true,
  "rating": null,
  "genre": ["Drama", "Pendidikan"],
  "publisher": {
    "name": "Bentang Pustaka",
    "city": "Yogyakarta"
  }
}
```

Aturan penting yang wajib diikuti:
1. **Key (nama field) harus pakai tanda kutip ganda** (`"title"`), bukan kutip satu (`'title'`).
2. **String** juga wajib pakai kutip ganda.
3. **Tidak boleh ada trailing comma** (koma setelah elemen terakhir).
4. **Tidak boleh ada komentar** (`//` atau `/* */`) di dalam JSON murni.
5. Tipe data yang didukung: `string`, `number`, `boolean` (`true`/`false`), `null`, `object`, dan `array`.

## Perbedaan JSON vs Object JavaScript

| | JSON | Object JavaScript |
|---|---|---|
| Key pakai kutip? | Wajib (`"key"`) | Opsional (`key` atau `"key"`) |
| Boleh trailing comma? | Tidak | Boleh |
| Boleh berisi fungsi? | Tidak | Boleh |
| Boleh komentar? | Tidak | Boleh |
| Bentuk | String/teks | Struktur data asli JavaScript |

**JSON sebenarnya adalah string (teks)**, hanya saja strukturnya menyerupai object JavaScript.

## Mengubah antara JSON dan Object JavaScript

### `JSON.parse()` dari String JSON menjadi Object JavaScript
Dipakai setiap kali kita menerima response dari API (yang berbentuk teks JSON), lalu ingin memakainya sebagai object JavaScript biasa:
```js
const teksJson = '{"title": "Laskar Pelangi", "year": 2005}';
const objekJs = JSON.parse(teksJson);

console.log(objekJs.title); // "Laskar Pelangi"
console.log(typeof objekJs); // "object"
```

### `JSON.stringify()` dari Object JavaScript menjadi String JSON
Dipakai setiap kali kita ingin **mengirim** data ke server (body request `POST`/`PUT` harus berupa string JSON, bukan object JS langsung):
```js
const buku = { title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', year: 1980 };
const teksJson = JSON.stringify(buku);

console.log(teksJson);
// '{"title":"Bumi Manusia","author":"Pramoedya Ananta Toer","year":1980}'
console.log(typeof teksJson); // "string"
```

## Kenapa Ini Penting untuk Asynchronous Request?
Setiap kali mengirim data lewat `POST`/`PUT` (Modul 9, 15), kita **wajib** mengubah object JS menjadi string JSON dulu dengan `JSON.stringify()`. Sebaliknya, setiap kali menerima response dari API, kita perlu mengubah teks JSON tersebut kembali menjadi object JS dengan `JSON.parse()` (untuk `XMLHttpRequest`) meski Fetch API punya cara pintasnya sendiri lewat `response.json()`, akan dibahas di Modul 15.

## Coba Sendiri
Buka `contoh/json-demo.html` di browser, lalu buka Console DevTools untuk melihat hasil `JSON.parse()` dan `JSON.stringify()` secara langsung.

## Kesalahan Umum Pemula
```js
// ❌ SALAH - pakai kutip satu, tidak valid sebagai JSON
const teks = "{'title': 'Buku'}";
JSON.parse(teks); // Error: Unexpected token ' in JSON

// ✅ BENAR
const teks2 = '{"title": "Buku"}';
JSON.parse(teks2); // { title: "Buku" }
```
```js
// ❌ SALAH - lupa JSON.stringify() saat kirim data
fetch(url, { method: 'POST', body: { title: 'Buku' } }); // akan salah/error

// ✅ BENAR
fetch(url, { method: 'POST', body: JSON.stringify({ title: 'Buku' }) });
```
