const daftarKlub = [
  { nama: "Klub Coding Bontang", kategori: "teknologi", kota: "bontang" },
  { nama: "Klub Lari Pagi", kategori: "olahraga", kota: "bontang" },
  { nama: "Klub Baca Buku", kategori: "seni", kota: "balikpapan" },
  { nama: "Komunitas Web Developer Kaltim", kategori: "teknologi", kota: "samarinda" },
  { nama: "Klub Futsal Anak Muda", kategori: "olahraga", kota: "balikpapan" },
  { nama: "Sanggar Lukis Kreatif", kategori: "seni", kota: "samarinda" },
];

const form = document.getElementById('search-form');
const keywordInput = document.getElementById('keyword');
const kategoriSelect = document.getElementById('kategori');
const kotaSelect = document.getElementById('kota');
const hintEl = document.getElementById('hint');

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}


function cariKlub({ keyword = "", kategori = "", kota = "" }) {
  return daftarKlub.filter((klub) => {
    const cocokKeyword = klub.nama.toLowerCase().includes(keyword.toLowerCase());
    const cocokKategori = kategori === "" || klub.kategori === kategori;
    const cocokKota = kota === "" || klub.kota === kota;
    return cocokKeyword && cocokKategori && cocokKota;
  });
}

function renderHasil(hasil) {
  const container = document.getElementById('hasil-pencarian');
  if (hasil.length === 0) {
    container.innerHTML = `<li role="alert">Tidak ada klub ditemukan.</li>`;
    return;
  }
  container.innerHTML = hasil.map((klub) => `
      <li>
        <strong>${klub.nama}</strong>
        <span class="badge">${klub.kategori}</span>
        <span class="lokasi">📍 ${klub.kota}</span>
      </li>`).join('');
}

function jalankanPencarian() {
  const keyword = keywordInput.value.trim();

  if (keyword.length === 1) {
    hintEl.textContent = 'Ketik minimal 2 karakter untuk hasil lebih akurat';
    return;
  }
  hintEl.textContent = '';

  const hasil = cariKlub({
    keyword,
    kategori: kategoriSelect.value,
    kota: kotaSelect.value,
  });
  renderHasil(hasil);
}

keywordInput.addEventListener('input', debounce(jalankanPencarian, 300));
kategoriSelect.addEventListener('change', jalankanPencarian);
kotaSelect.addEventListener('change', jalankanPencarian);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  jalankanPencarian();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  keywordInput.value = '';
  kategoriSelect.value = '';
  kotaSelect.value = '';
  hintEl.textContent = '';
  renderHasil(daftarKlub);
});

renderHasil(daftarKlub);
