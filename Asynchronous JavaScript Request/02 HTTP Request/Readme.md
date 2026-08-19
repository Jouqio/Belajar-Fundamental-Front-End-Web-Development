# Modul 2: HTTP Request

## Apa itu HTTP?
**HTTP (HyperText Transfer Protocol)** adalah "aturan main" atau protokol standar yang dipakai browser dan server untuk saling berkomunikasi di internet. Setiap kali kamu membuka website, browser mengirim **HTTP Request** ke server, dan server membalas dengan **HTTP Response**.

## Anatomi Sebuah HTTP Request
Sebuah request terdiri dari beberapa bagian:

```
GET /books/1 HTTP/1.1        <- Method + Path + Versi HTTP
Host: localhost:3000          <- Header
Content-Type: application/json <- Header
                               <- (baris kosong)
{ "title": "Buku Baru" }      <- Body (opsional, tidak semua request punya body)
```

1. **Method** jenis aksi yang diminta (dibahas detail di bawah).
2. **Path/URL** alamat resource yang dituju, misalnya `/books/1`.
3. **Headers** informasi tambahan (jenis data, autentikasi, dll).
4. **Body** data yang dikirim (biasanya hanya ada di `POST`/`PUT`).

## HTTP Methods (Verb) yang Paling Sering Dipakai

| Method | Fungsi | Analogi |
|---|---|---|
| `GET` | Mengambil data | Membaca buku di rak |
| `POST` | Menambah data baru | Menaruh buku baru ke rak |
| `PUT` / `PATCH` | Memperbarui data yang sudah ada | Mengganti sampul buku yang sudah ada |
| `DELETE` | Menghapus data | Membuang buku dari rak |

> `PUT` biasanya mengganti **seluruh** data, sedangkan `PATCH` hanya mengubah **sebagian** field saja. Banyak API (termasuk mock API di materi ini) memperlakukan keduanya cukup fleksibel.

## Anatomi Sebuah HTTP Response
```
HTTP/1.1 200 OK                       <- Status Line
Content-Type: application/json        <- Header
                                        <- (baris kosong)
{ "error": false, "books": [...] }    <- Body
```

## Status Code — Kode Angka yang Menjelaskan Hasil Request
Status code dikelompokkan berdasarkan digit pertamanya:

| Rentang | Arti | Contoh |
|---|---|---|
| `1xx` | Informational (jarang dipakai langsung) | `100 Continue` |
| `2xx` | **Berhasil** | `200 OK`, `201 Created`, `204 No Content` |
| `3xx` | Redirect (dialihkan) | `301 Moved Permanently` |
| `4xx` | **Kesalahan dari sisi client/pengguna** | `400 Bad Request`, `404 Not Found` |
| `5xx` | **Kesalahan dari sisi server** | `500 Internal Server Error` |

Status code yang paling sering ditemui pemula:
- `200 OK` request berhasil, data dikembalikan.
- `201 Created` data baru berhasil dibuat (biasanya respons dari `POST`).
- `400 Bad Request` request yang dikirim tidak valid (misalnya body kosong padahal wajib diisi).
- `404 Not Found` resource yang diminta tidak ditemukan.
- `500 Internal Server Error` — terjadi kesalahan di sisi server.

## Request-Response Cycle (Siklus Permintaan-Respons)
```
Browser (Client)                          Server
      │                                      │
      │──── HTTP Request (GET /books) ─────▶│
      │                                      │  (server memproses)
      │◀─── HTTP Response (200 + data) ─────│
      │                                      │
```
Siklus ini terjadi **setiap kali** JavaScript melakukan asynchronous request inilah yang akan kita praktikkan mulai Modul 8 dengan XMLHttpRequest dan Modul 15 dengan Fetch API.

## Coba Sendiri (Tanpa Kode)
Buka salah satu website favoritmu, lalu buka DevTools → tab **Network**. Refresh halamannya, dan lihat daftar request yang dikirim browser perhatikan kolom **Method**, **Status**, dan klik salah satu request untuk melihat detail **Headers** dan **Response**-nya.
