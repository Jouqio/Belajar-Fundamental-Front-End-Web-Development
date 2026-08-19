# Modul 4: Cross-Origin Resource Sharing (CORS)

## Masalah yang Sering Bikin Bingung Pemula
Pernah mencoba melakukan request ke sebuah API dari kode JavaScript-mu, lalu muncul error seperti ini di Console?
```
Access to fetch at 'https://api.contoh.com/data' from origin 'http://localhost:5500'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
on the requested resource.
```
Ini adalah error **CORS** salah satu error paling umum ditemui pemula saat pertama kali belajar konsumsi API.

## Apa itu "Origin"?
Origin adalah kombinasi dari **protokol + domain + port** sebuah alamat web:
```
https://www.contoh.com:443
└──┬──┘└───────┬──────┘└┬┘
protokol      domain    port
```
Dua alamat dianggap **origin yang berbeda** kalau salah satu dari ketiga bagian ini berbeda:
```
http://localhost:3000   dan   http://localhost:5500   -> BEDA origin (port beda)
http://contoh.com       dan   https://contoh.com       -> BEDA origin (protokol beda)
https://api.contoh.com  dan   https://www.contoh.com   -> BEDA origin (domain beda)
```

## Apa itu CORS?
**CORS (Cross-Origin Resource Sharing)** adalah mekanisme keamanan **browser** yang membatasi halaman web dari satu origin untuk mengakses resource dari origin lain, **kecuali** server tujuan secara eksplisit mengizinkannya lewat header khusus.

## Kenapa Aturan Ini Ada?
Bayangkan tanpa CORS: kamu login ke `bank.com`, lalu tanpa sadar membuka website jahat `situs-jahat.com` di tab lain. Tanpa proteksi CORS, script di `situs-jahat.com` **bisa saja** diam-diam mengirim request ke `bank.com` memakai sesi login-mu dan mencuri data. CORS mencegah skenario ini dengan memastikan server harus **secara eksplisit mengizinkan** origin mana saja yang boleh mengaksesnya.

## Bagaimana Server Mengizinkan Akses?
Server perlu mengirim header khusus di response-nya:
```
Access-Control-Allow-Origin: *
```
Tanda `*` artinya **semua origin diizinkan**. Bisa juga dibatasi hanya origin tertentu:
```
Access-Control-Allow-Origin: https://aplikasiku.com
```

Contoh nyata di mock API server latihan kita (lihat `07-Persiapan-Proyek-Latihan/project-latihan/server/server.js`):
```js
res.writeHead(statusCode, {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});
```
Header inilah yang membuat request dari file HTML latihan (dibuka lewat origin berbeda, misalnya `http://127.0.0.1:5500`) **diizinkan** mengakses API di `http://localhost:3000`.

## Preflight Request (Request "OPTIONS")
Untuk request tertentu (misalnya yang memakai method `PUT`/`DELETE`, atau header custom), browser akan **otomatis** mengirim request pendahuluan bermethod `OPTIONS` ke server terlebih dahulu disebut **preflight request** — untuk "bertanya" apakah request sungguhan boleh dilanjutkan.
```
Browser: "Permisi server, kalau saya kirim DELETE dari origin saya, boleh?"  (OPTIONS)
Server:  "Boleh, silakan."                                                    (204 + header CORS)
Browser: (baru mengirim request DELETE yang sesungguhnya)
```
Inilah kenapa mock API server latihan kita punya penanganan khusus untuk method `OPTIONS`:
```js
if (req.method === 'OPTIONS') {
  sendJson(res, 204, {});
  return;
}
```
Tanpa penanganan ini, request `PUT`/`DELETE` dari browser akan **gagal total** meski endpoint-nya sendiri sebenarnya benar.

## CORS Adalah Proteksi Browser, Bukan Proteksi Jaringan
Penting dipahami: CORS **hanya berlaku di browser**. Kalau kamu mengakses API yang sama lewat Postman (Modul 5) atau `curl` di terminal, CORS **tidak akan menghalangi** karena CORS memang dirancang khusus untuk melindungi pengguna browser, bukan untuk membatasi akses API itu sendiri secara umum.

## Cara Mengatasi Error CORS Sebagai Developer Front-End
- Kalau API-nya milikmu sendiri (atau tim back-end satu tim), **minta ditambahkan header CORS** yang sesuai di sisi server.
- Kalau API-nya publik dan tidak mendukung CORS, biasanya perlu memakai **proxy** di sisi server sendiri (di luar cakupan materi ini).
- **Jangan** mencoba "mengakali" CORS dengan mematikan fitur keamanan browser ini berbahaya dan tidak disarankan, bahkan untuk keperluan development sekalipun.

## Ringkasan
CORS bukan "bug" atau kesalahan di kodemu CORS adalah **fitur keamanan browser** yang memang sengaja membatasi akses lintas origin, dan hanya bisa diizinkan lewat konfigurasi header di sisi **server**.
