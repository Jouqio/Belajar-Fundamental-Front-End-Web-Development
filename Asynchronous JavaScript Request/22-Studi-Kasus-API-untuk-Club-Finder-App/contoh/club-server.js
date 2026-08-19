/**
 * club-server.js
 * Mock REST API untuk studi kasus "Club Finder App".
 * Murni Node.js core module (http), tanpa dependency npm.
 *
 * Endpoint:
 *   GET /clubs              -> semua klub
 *   GET /clubs?search=kata  -> klub yang namanya mengandung "kata" (case-insensitive)
 *
 * Cara menjalankan:
 *   node club-server.js
 * Server berjalan di http://localhost:4000
 */

const http = require('http');

const PORT = 4000;

const clubs = [
  { id: 1, name: 'Garuda United', city: 'Jakarta', founded: 1998, color: '#e63946' },
  { id: 2, name: 'Elang Muda FC', city: 'Bandung', founded: 2005, color: '#2a9d8f' },
  { id: 3, name: 'Macan Kemayoran', city: 'Jakarta', founded: 1970, color: '#f4a261' },
  { id: 4, name: 'Rimba Hijau United', city: 'Palembang', founded: 1988, color: '#264653' },
  { id: 5, name: 'Ombak Selatan FC', city: 'Yogyakarta', founded: 2011, color: '#e76f51' },
  { id: 6, name: 'Baja Kuning Malang', city: 'Malang', founded: 1963, color: '#ffb703' },
  { id: 7, name: 'Elang Laut Surabaya', city: 'Surabaya', founded: 1980, color: '#023047' },
  { id: 8, name: 'Garuda Muda Bali', city: 'Denpasar', founded: 2002, color: '#8ecae6' },
];

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (url.pathname !== '/clubs' || req.method !== 'GET') {
    sendJson(res, 404, { error: true, message: 'Endpoint tidak ditemukan' });
    return;
  }

  const keyword = (url.searchParams.get('search') || '').toLowerCase().trim();

  const hasil = keyword
    ? clubs.filter((club) => club.name.toLowerCase().includes(keyword))
    : clubs;

  sendJson(res, 200, { error: false, count: hasil.length, clubs: hasil });
});

server.listen(PORT, () => {
  console.log(`Club Finder API berjalan di http://localhost:${PORT}`);
  console.log('Contoh: http://localhost:4000/clubs?search=garuda');
});
