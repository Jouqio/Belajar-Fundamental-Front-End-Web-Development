# Modul 1: Pengantar CSS Grid

## Apa itu CSS Grid?
CSS Grid Layout adalah sistem layout **2 dimensi** (mengatur baris **dan** kolom sekaligus) yang dibuat khusus untuk menyusun elemen di halaman web. Sebelum ada CSS Grid, developer biasanya memakai `float`, `table`, atau `flexbox` — semuanya punya keterbatasan untuk layout yang kompleks.

## Kenapa CSS Grid penting?
- Bisa mengatur baris **dan** kolom dalam satu sistem (2D), berbeda dari Flexbox yang hanya 1 dimensi.
- Kode lebih ringkas layout rumit bisa dibuat hanya dengan beberapa baris CSS.
- Didukung semua browser modern (Chrome, Firefox, Edge, Safari).

## Contoh Sederhana
```html
<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
```
Hasilnya: 4 kotak tersusun rapi jadi 2 kolom x 2 baris otomatis.

## Poin Penting untuk Pemula
- CSS Grid diaktifkan dengan `display: grid;` pada elemen pembungkus (container).
- Elemen di dalamnya otomatis menjadi "grid item".

## Coba Sendiri
Buka `contoh/index.html` di browser, lalu ubah `grid-template-columns: 1fr 1fr;` menjadi `1fr 1fr 1fr` dan lihat perubahannya.