# Modul 13: Studi Kasus — Mengatur Layout pada Club Film

Praktik nyata: membuat halaman landing sederhana untuk "Club Film" menggunakan gabungan semua materi sebelumnya.

## Struktur Halaman
```css
.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar content";
  min-height: 100vh;
}
```

## Galeri Poster Film (Grid Bersarang)
```css
.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}
.film-poster {
  height: 220px;
  background: #ccc;
  display: grid;
  place-items: center;
  color: #666;
}
```

Kode HTML+CSS lengkapnya ada di `contoh/index.html`.

## Yang Dipelajari dari Studi Kasus Ini
- `grid-template-areas` dipakai untuk kerangka halaman (navbar, sidebar, content).
- Grid bersarang (`.film-grid` di dalam `.content`) untuk galeri poster film yang responsif otomatis dengan `auto-fit` + `minmax`.
- `place-items: center` dipakai untuk memusatkan teks "Poster" di dalam kotak poster.

## Tantangan
Coba ubah `minmax(160px, 1fr)` menjadi `minmax(100px, 1fr)` dan perkecil lebar browser perhatikan jumlah kolom poster berubah otomatis tanpa media query.