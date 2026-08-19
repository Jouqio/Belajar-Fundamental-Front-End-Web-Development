# Modul 16: Penggunaan Fetch API Lebih Lanjut

## Mengirim POST dengan Fetch
Berbeda dari `GET` (yang cukup `fetch(url)`), untuk `POST`/`PUT`/`DELETE` kita perlu memberikan **object konfigurasi** sebagai parameter kedua:
```js
async function tambahBuku(book) {
  const response = await fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  const data = await response.json();
  return data;
}
```

## Mengirim PUT dengan Fetch
```js
async function perbaruiBuku(id, perubahan) {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(perubahan),
  });

  return await response.json();
}
```

## Mengirim DELETE dengan Fetch
```js
async function hapusBuku(id) {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE',
  });

  return await response.json();
}
```

## Menjalankan Beberapa Request Sekaligus dengan `Promise.all()`
Kadang kita perlu mengambil beberapa data **secara bersamaan** (paralel), bukan satu-satu berurutan. `Promise.all()` menunggu **semua** Promise selesai, baru melanjutkan:
```js
async function ambilTigaBuku() {
  const [buku1, buku2, buku3] = await Promise.all([
    fetch('http://localhost:3000/books/1').then((res) => res.json()),
    fetch('http://localhost:3000/books/2').then((res) => res.json()),
    fetch('http://localhost:3000/books/3').then((res) => res.json()),
  ]);

  console.log(buku1, buku2, buku3);
}
```
> Kalau dilakukan satu-satu dengan `await` berurutan, total waktu tunggu adalah **jumlah** dari ketiga request. Dengan `Promise.all()`, ketiganya berjalan **bersamaan**, sehingga total waktu tunggu mendekati waktu request **paling lambat saja**.

## Menangani Error dengan Baik memakai `try...catch`
```js
async function ambilBuku(id) {
  try {
    const response = await fetch(`http://localhost:3000/books/${id}`);

    if (!response.ok) {
      throw new Error(`Buku tidak ditemukan (status ${response.status})`);
    }

    const data = await response.json();
    return data.book;
  } catch (error) {
    console.error('Gagal mengambil buku:', error.message);
    return null;
  }
}
```

## Menambahkan Timeout pada Fetch (dengan `AbortController`)
Fetch **tidak** punya timeout bawaan seperti beberapa library lain. Untuk membatalkan request yang terlalu lama, gunakan `AbortController`:
```js
async function fetchDenganTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), ms);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request dibatalkan karena timeout.');
    }
    throw error;
  }
}
```

## Coba Sendiri
Buka `contoh/fetch-lanjutan-demo.html` lewat Live Server (pastikan server latihan juga berjalan) untuk mencoba `POST`, `Promise.all()`, dan penanganan error dalam satu halaman.

## Ringkasan Perbandingan Kode: XHR vs Fetch untuk Kasus yang Sama
```js
// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => console.log(JSON.parse(xhr.responseText));
xhr.send();

// Fetch API
const response = await fetch(url);
console.log(await response.json());
```
Fetch jelas lebih ringkas — inilah alasan Modul 17-21 akan mengajakmu **me-refactor** ulang keempat fungsi (`getBook`, `insertBook`, `updateBook`, `removeBook`) yang sudah dibuat dengan XHR, menjadi versi Fetch API yang lebih modern.
