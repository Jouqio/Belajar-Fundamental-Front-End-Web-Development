# Modul 22: Studi Kasus — API untuk Club Finder App

Studi kasus ini menggabungkan **semua konsep** yang sudah dipelajari di Modul 1-21 ke dalam satu aplikasi nyata: **Club Finder App**, aplikasi pencarian klub sepak bola sederhana.

## Fitur Aplikasi
- Menampilkan seluruh klub saat halaman pertama dibuka.
- Kotak pencarian untuk mencari klub berdasarkan nama (real-time via tombol/Enter).
- Setiap klub ditampilkan sebagai kartu dalam **CSS Grid** yang responsif.
- Setiap kartu dibangun sebagai **Web Component** (`<club-card>`).
- Seluruh komunikasi data memakai **Fetch API** dengan `async`/`await`.

## Struktur Proyek
```
contoh/
├── club-server.js   <- Mock API (murni Node.js, tanpa dependency)
├── index.html       <- Halaman utama + CSS Grid
├── app.js           <- Logika fetch data & pencarian
└── club-card.js     <- Web Component kartu klub
```

## Cara Menjalankan

**Langkah 1 — Jalankan API server** (di satu jendela terminal):
```bash
cd contoh
node club-server.js
```
Server berjalan di `http://localhost:4000`.

**Langkah 2 — Jalankan halaman web** (di jendela terminal lain, atau lewat Live Server):
```bash
cd contoh
python -m http.server 5600
```
Buka `http://localhost:5600` di browser.

> Perhatikan: halaman web (port `5600`) dan API (port `4000`) berjalan di **origin yang berbeda** — inilah kenapa `club-server.js` menyertakan header CORS (lihat Modul 4), agar browser mengizinkan komunikasi antar keduanya.

## Penjelasan Alur Kode

### 1. Mengambil Data Awal (`app.js`)
```js
async function fetchClubs(keyword = '') {
  const url = keyword
    ? `${BASE_URL}/clubs?search=${encodeURIComponent(keyword)}`
    : `${BASE_URL}/clubs`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request gagal dengan status ${response.status}`);
  }

  return response.json();
}
```
- Memakai **query parameter** (`?search=...`) untuk mengirim kata kunci pencarian ke server — pola umum untuk request `GET` yang butuh parameter tambahan.
- `encodeURIComponent()` dipakai untuk memastikan karakter spesial dalam kata kunci pencarian (misalnya spasi) tidak merusak format URL.
- Penanganan error mengikuti anjuran di Modul 15: cek `response.ok` secara manual, karena fetch tidak otomatis "gagal" untuk status error.

### 2. Menampilkan Data lewat Web Component (`club-card.js`)
```js
set club(value) {
  this._club = value;
  this.render();
}
```
Pola ini sama seperti `<note-item>` di materi Web Component — data dikirim lewat **properti JavaScript**, bukan atribut HTML, karena datanya berupa object.

### 3. Menghubungkan Pencarian dengan Tampilan (`app.js`)
```js
async function handleSearch() {
  const keyword = searchInput.value.trim();
  statusEl.textContent = 'Mencari...';

  try {
    const data = await fetchClubs(keyword);
    statusEl.textContent = `Ditemukan ${data.count} klub.`;
    renderClubs(data.clubs);
  } catch (error) {
    statusEl.textContent = 'Terjadi kesalahan: ' + error.message;
    gridEl.innerHTML = '';
  }
}
```
Alur ini merangkum keseluruhan materi: **asynchronous request** (Modul 1) → **Fetch API** (Modul 15) → **error handling** (Modul 16) → hasilnya dirender lewat **Web Component** dalam **CSS Grid**.

## Coba Sendiri
1. Jalankan kedua server seperti instruksi di atas.
2. Coba cari `garuda`, `elang`, atau `fc` — perhatikan jumlah hasil berubah sesuai kata kunci.
3. Coba cari kata yang tidak ada, misalnya `xyz` — perhatikan pesan "Klub tidak ditemukan." muncul.
4. Coba matikan `club-server.js` (Ctrl+C di terminalnya), lalu cari lagi di halaman web — perhatikan pesan error yang muncul (bukti bahwa penanganan error di `try...catch` bekerja).

## Ide Pengembangan Lanjutan (Opsional)
- Tambahkan filter berdasarkan kota.
- Tambahkan endpoint `GET /clubs/:id` untuk halaman detail klub.
- Terapkan **debounce** pada input pencarian, agar tidak mengirim request di setiap ketikan huruf.
