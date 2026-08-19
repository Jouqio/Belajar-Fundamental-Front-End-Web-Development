# Modul 18: Latihan Refactor Fungsi getBook

## Tujuan
Menulis ulang fungsi `getBook` dari versi `XMLHttpRequest` (Modul 11) menjadi versi **Fetch API** dengan `async`/`await`.

## Soal
Buka `soal/book-api.js`. Kamu akan menemukan versi XHR yang sudah lengkap sebagai referensi:
```js
// Versi lama (XHR) -- REFERENSI, JANGAN DIHAPUS DULU
function getBookXHR(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/books/${id}`);
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

// TODO: Tulis ulang jadi versi Fetch API di bawah ini
async function getBook(id) {
  // Isi di sini
}
```

## Petunjuk
- Gunakan `fetch(\`${BASE_URL}/books/${id}\`)`.
- Jangan lupa `await` di dua tempat: saat memanggil `fetch()`, dan saat memanggil `response.json()`.
- Fungsi ini cukup me-*return* hasilnya langsung (bukan lewat callback lagi).

## Cara Menguji
1. Pastikan server latihan berjalan.
2. Buka `soal/index.html` lewat Live Server.
3. Coba cari buku dengan id `1`, `2`, atau `3` — perhatikan cara memanggilnya di `index.html` sudah berubah (pakai `await`, bukan callback lagi).

Lanjut ke [Modul 19: Latihan Refactor Fungsi insertBook](../19-Latihan-Refactor-Fungsi-insertBook/README.md).
