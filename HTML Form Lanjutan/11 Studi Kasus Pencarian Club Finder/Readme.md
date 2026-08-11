# 11. Studi Kasus: Pencarian untuk Club Finder App

Sekarang kita implementasikan logika pencarian dan filter secara penuh, dengan JavaScript murni (vanilla JS).

## 1. Data Dummy (Simulasi Database)

```js
const daftarKlub = [
  { nama: "Klub Coding Bontang", kategori: "teknologi", kota: "bontang" },
  { nama: "Klub Lari Pagi", kategori: "olahraga", kota: "bontang" },
  { nama: "Klub Baca Buku", kategori: "seni", kota: "balikpapan" },
  {
    nama: "Komunitas Web Developer Kaltim",
    kategori: "teknologi",
    kota: "samarinda",
  },
  { nama: "Klub Futsal Anak Muda", kategori: "olahraga", kota: "balikpapan" },
  { nama: "Sanggar Lukis Kreatif", kategori: "seni", kota: "samarinda" },
];
```

## 2. Fungsi Pencarian & Filter

```js
function cariKlub({ keyword = "", kategori = "", kota = "" }) {
  return daftarKlub.filter((klub) => {
    const cocokKeyword = klub.nama
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const cocokKategori = kategori === "" || klub.kategori === kategori;
    const cocokKota = kota === "" || klub.kota === kota;
    return cocokKeyword && cocokKategori && cocokKota;
  });
}
```

## 3. Merender Hasil ke DOM

```js
function renderHasil(hasil) {
  const container = document.getElementById("hasil-pencarian");

  if (hasil.length === 0) {
    container.innerHTML = `<li role="alert">Tidak ada klub ditemukan.</li>`;
    return;
  }

  container.innerHTML = hasil
    .map(
      (klub) => `
      <li>
        <strong>${klub.nama}</strong>
        <span class="badge">${klub.kategori}</span>
        <span class="lokasi">📍 ${klub.kota}</span>
      </li>`,
    )
    .join("");
}
```

## 4. Menghubungkan Form ke Fungsi Pencarian (Real-time + Debounce)

```js
const form = document.getElementById("search-form");
const keywordInput = document.getElementById("keyword");
const kategoriSelect = document.getElementById("kategori");
const kotaSelect = document.getElementById("kota");

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function jalankanPencarian() {
  const filter = {
    keyword: keywordInput.value,
    kategori: kategoriSelect.value,
    kota: kotaSelect.value,
  };
  const hasil = cariKlub(filter);
  renderHasil(hasil);
}

// Live search saat mengetik (dengan debounce)
keywordInput.addEventListener("input", debounce(jalankanPencarian, 300));

// Filter langsung update saat select berubah
kategoriSelect.addEventListener("change", jalankanPencarian);
kotaSelect.addEventListener("change", jalankanPencarian);

// Tetap tangani submit form (misal user tekan Enter)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  jalankanPencarian();
});

// Tampilkan semua klub saat halaman pertama kali dimuat
renderHasil(daftarKlub);
```

## 5. Menambahkan Validasi Sederhana

Misalnya, kita ingin memberi peringatan jika keyword terlalu pendek (1 karakter) supaya tidak menampilkan hasil yang terlalu luas:

```js
function jalankanPencarian() {
  const keyword = keywordInput.value.trim();

  if (keyword.length === 1) {
    document.getElementById("hint").textContent =
      "Ketik minimal 2 karakter untuk hasil lebih akurat";
    return;
  }
  document.getElementById("hint").textContent = "";

  const hasil = cariKlub({
    keyword,
    kategori: kategoriSelect.value,
    kota: kotaSelect.value,
  });
  renderHasil(hasil);
}
```

## 6. Menghubungkan ke API Sungguhan (Opsional/Lanjutan)

Kalau data klub berasal dari backend, ganti `cariKlub()` dengan `fetch`:

```js
async function cariKlub({ keyword, kategori, kota }) {
  const params = new URLSearchParams({ keyword, kategori, kota });
  const res = await fetch(`/api/klub?${params}`);
  if (!res.ok) throw new Error("Gagal mengambil data klub");
  return res.json();
}
```

## Hasil Akhir

Aplikasi lengkap dengan HTML + CSS + JS ada di `examples/11-club-finder-app.html` — buka langsung di browser, coba ketik "klub" atau filter kategori "teknologi".

## Tantangan Tambahan (Opsional)

1. Tambahkan tombol "Reset Filter".
2. Simpan pencarian terakhir ke `localStorage`.
3. Tambahkan loading spinner saat memakai `fetch` sungguhan.
4. Tambahkan pagination jika hasil lebih dari 10 klub.

➡️ Lanjut ke: `12-Rangkuman-HTML-Form-Lanjutan.md`
