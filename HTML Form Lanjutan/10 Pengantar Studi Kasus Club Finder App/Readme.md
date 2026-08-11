# 10. Pengantar Studi Kasus: Club Finder App

Sekarang saatnya menerapkan semua yang sudah dipelajari ke sebuah studi kasus nyata: **Club Finder App** — aplikasi sederhana untuk mencari klub/komunitas (misalnya klub olahraga, komunitas coding, klub buku) berdasarkan kategori dan lokasi.

## Konsep Aplikasi

Pengguna dapat:
1. Mencari klub berdasarkan **nama** atau **kata kunci**.
2. Memfilter berdasarkan **kategori** (Olahraga, Teknologi, Seni, dll).
3. Memfilter berdasarkan **lokasi/kota**.
4. Melihat hasil pencarian secara **real-time** tanpa reload halaman.

## Kenapa Studi Kasus Ini Bagus untuk Belajar Form?

Club Finder App menggabungkan hampir semua materi yang sudah dipelajari:

| Materi | Penerapan di Club Finder App |
|--------|-------------------------------|
| Elemen Form | `<select>` kategori, `<input type="search">` |
| Form Field | `type="search"`, `type="text"` |
| Atribut Field | `placeholder`, `autocomplete`, `list` |
| Validasi | Memastikan minimal 1 filter dipilih |
| Auto Completion | `<datalist>` untuk saran nama klub/kota |
| Styling | Tampilan search bar & filter yang menarik |
| JavaScript | Live search dengan `input` event + debounce |
| Semantik | `aria-label` untuk search bar, `role="alert"` untuk hasil kosong |

## Wireframe Sederhana

```
┌─────────────────────────────────────────┐
│  🔍  [ Cari klub...           ]  [Cari]  │
├─────────────────────────────────────────┤
│  Kategori: [Semua ▾]   Kota: [Semua ▾]   │
├─────────────────────────────────────────┤
│  ▸ Klub Coding Bontang     (Teknologi)   │
│  ▸ Klub Lari Pagi          (Olahraga)    │
│  ▸ Klub Baca Buku           (Seni)       │
└─────────────────────────────────────────┘
```

## Struktur HTML Awal

```html
<form id="search-form" role="search">
  <div class="search-bar">
    <label for="keyword" class="sr-only">Cari klub</label>
    <input
      type="search"
      id="keyword"
      name="keyword"
      placeholder="Cari nama klub..."
      list="club-suggestions"
      autocomplete="off">
    <datalist id="club-suggestions">
      <option value="Klub Coding Bontang">
      <option value="Klub Lari Pagi">
      <option value="Klub Baca Buku">
    </datalist>
    <button type="submit">Cari</button>
  </div>

  <div class="filters">
    <label for="kategori">Kategori</label>
    <select id="kategori" name="kategori">
      <option value="">Semua</option>
      <option value="olahraga">Olahraga</option>
      <option value="teknologi">Teknologi</option>
      <option value="seni">Seni</option>
    </select>

    <label for="kota">Kota</label>
    <select id="kota" name="kota">
      <option value="">Semua</option>
      <option value="bontang">Bontang</option>
      <option value="balikpapan">Balikpapan</option>
      <option value="samarinda">Samarinda</option>
    </select>
  </div>
</form>

<ul id="hasil-pencarian" aria-live="polite"></ul>
```

Perhatikan atribut `role="search"` pada form dan `aria-live="polite"` pada daftar hasil — ini adalah penerapan langsung materi Semantik (modul 8) supaya screen reader tahu bahwa area ini akan berubah secara dinamis.

Lihat kerangka awal proyek di `examples/10-club-finder-starter.html`.

➡️ Lanjut ke: `11-Studi-Kasus-Pencarian-Club-Finder.md` (implementasi logika pencarian lengkap)
