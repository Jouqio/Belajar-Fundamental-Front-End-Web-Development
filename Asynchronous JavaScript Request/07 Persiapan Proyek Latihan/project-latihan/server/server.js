/**
 * server.js
 * Mock REST API sederhana untuk latihan "Bookshelf" (rak buku).
 *
 * Sengaja ditulis HANYA memakai modul bawaan Node.js (http, url) --
 * TANPA dependency npm apa pun -- supaya:
 *   1. Bisa langsung dijalankan tanpa "npm install".
 *   2. Fokus belajar tetap di konsep HTTP request, bukan di framework.
 *
 * Endpoint yang tersedia:
 *   GET    /books        -> ambil semua buku
 *   GET    /books/:id     -> ambil satu buku berdasarkan id
 *   POST   /books        -> tambah buku baru
 *   PUT    /books/:id     -> perbarui buku berdasarkan id
 *   DELETE /books/:id     -> hapus buku berdasarkan id
 *
 * Cara menjalankan:
 *   node server.js
 * Server akan berjalan di http://localhost:3000
 */

const http = require('http');

const PORT = 3000;

// "Database" sederhana disimpan di memori (reset setiap server di-restart)
let books = [
  { id: '1', title: 'Laskar Pelangi', author: 'Andrea Hirata', year: 2005, finished: true },
  { id: '2', title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', year: 1980, finished: false },
  { id: '3', title: 'Filosofi Teras', author: 'Henry Manampiring', year: 2018, finished: true },
];
let nextId = 4;

/** Mengirim response JSON dengan header CORS agar bisa diakses dari origin lain */
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    // ===== Header CORS (lihat Modul 4: Cross-Origin Resource Sharing) =====
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

/** Membaca body request (dipakai untuk POST & PUT) */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let rawData = '';
    req.on('data', (chunk) => (rawData += chunk));
    req.on('end', () => {
      try {
        resolve(rawData ? JSON.parse(rawData) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathParts = url.pathname.split('/').filter(Boolean); // ["books"] atau ["books", "1"]

  // Browser mengirim request "OPTIONS" (preflight) sebelum request sungguhan
  // untuk method selain GET/POST sederhana -- lihat Modul 4 (CORS).
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (pathParts[0] !== 'books') {
    sendJson(res, 404, { error: true, message: 'Endpoint tidak ditemukan' });
    return;
  }

  const bookId = pathParts[1]; // undefined kalau request ke /books saja

  // ===== GET /books atau GET /books/:id =====
  if (req.method === 'GET') {
    if (!bookId) {
      sendJson(res, 200, { error: false, books });
      return;
    }
    const book = books.find((b) => b.id === bookId);
    if (!book) {
      sendJson(res, 404, { error: true, message: `Buku dengan id ${bookId} tidak ditemukan` });
      return;
    }
    sendJson(res, 200, { error: false, book });
    return;
  }

  // ===== POST /books =====
  if (req.method === 'POST') {
    try {
      const body = await readBody(req);
      if (!body.title || !body.author) {
        sendJson(res, 400, { error: true, message: 'title dan author wajib diisi' });
        return;
      }
      const newBook = {
        id: String(nextId++),
        title: body.title,
        author: body.author,
        year: body.year || null,
        finished: body.finished || false,
      };
      books.push(newBook);
      sendJson(res, 201, { error: false, message: 'Buku berhasil ditambahkan', book: newBook });
    } catch (error) {
      sendJson(res, 400, { error: true, message: 'Body request bukan JSON yang valid' });
    }
    return;
  }

  // ===== PUT /books/:id =====
  if (req.method === 'PUT') {
    try {
      const body = await readBody(req);
      const index = books.findIndex((b) => b.id === bookId);
      if (index === -1) {
        sendJson(res, 404, { error: true, message: `Buku dengan id ${bookId} tidak ditemukan` });
        return;
      }
      books[index] = { ...books[index], ...body, id: bookId };
      sendJson(res, 200, { error: false, message: 'Buku berhasil diperbarui', book: books[index] });
    } catch (error) {
      sendJson(res, 400, { error: true, message: 'Body request bukan JSON yang valid' });
    }
    return;
  }

  // ===== DELETE /books/:id =====
  if (req.method === 'DELETE') {
    const index = books.findIndex((b) => b.id === bookId);
    if (index === -1) {
      sendJson(res, 404, { error: true, message: `Buku dengan id ${bookId} tidak ditemukan` });
      return;
    }
    books.splice(index, 1);
    sendJson(res, 200, { error: false, message: 'Buku berhasil dihapus' });
    return;
  }

  sendJson(res, 405, { error: true, message: 'Method tidak didukung' });
});

server.listen(PORT, () => {
  console.log(`Mock Book API berjalan di http://localhost:${PORT}`);
  console.log('Endpoint tersedia: GET/POST /books, GET/PUT/DELETE /books/:id');
});
