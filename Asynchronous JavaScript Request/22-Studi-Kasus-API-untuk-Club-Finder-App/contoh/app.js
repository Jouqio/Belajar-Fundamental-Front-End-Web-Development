/**
 * app.js
 * Logika utama Club Finder App -- murni Fetch API + async/await,
 * menerapkan semua konsep dari Modul 1-21:
 *   - Asynchronous request (Modul 1)
 *   - HTTP GET dengan query parameter (Modul 2)
 *   - Konsumsi Web API (Modul 3)
 *   - CORS diizinkan lewat header di club-server.js (Modul 4)
 *   - Parsing JSON otomatis lewat response.json() (Modul 6)
 *   - Fetch API + async/await + penanganan error (Modul 15-16)
 */

const BASE_URL = 'http://localhost:4000';

const statusEl = document.getElementById('status');
const gridEl = document.getElementById('club-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

/** Mengambil daftar klub dari API, opsional dengan kata kunci pencarian */
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

/** Merender daftar klub ke dalam grid, memakai custom element <club-card> */
function renderClubs(clubs) {
  gridEl.innerHTML = '';

  if (clubs.length === 0) {
    gridEl.innerHTML = '<p style="grid-column: 1 / -1; color:#888;">Klub tidak ditemukan.</p>';
    return;
  }

  clubs.forEach((club) => {
    const card = document.createElement('club-card');
    card.club = club;
    gridEl.appendChild(card);
  });
}

/** Alur pencarian: ambil kata kunci -> fetch -> render, dengan penanganan loading & error */
async function handleSearch() {
  const keyword = searchInput.value.trim();
  statusEl.textContent = 'Mencari...';

  try {
    const data = await fetchClubs(keyword);
    statusEl.textContent = `Ditemukan ${data.count} klub.`;
    renderClubs(data.clubs);
  } catch (error) {
    statusEl.textContent = 'Terjadi kesalahan: ' + error.message + ' (pastikan club-server.js berjalan)';
    gridEl.innerHTML = '';
  }
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleSearch();
});

// Muat semua klub saat halaman pertama kali dibuka
handleSearch();
