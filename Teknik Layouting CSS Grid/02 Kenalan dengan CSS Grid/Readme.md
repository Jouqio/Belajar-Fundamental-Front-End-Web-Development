# Modul 2: Kenalkan, Saya CSS Grid

## Sekilas Sejarah
CSS Grid pertama kali didukung luas oleh browser sekitar tahun 2017. Sejak itu, CSS Grid menjadi standar untuk membuat layout halaman modern seperti Netflix, Airbnb, dan hampir semua website besar.

## Cara Kerja Dasar
1. Buat elemen pembungkus (parent) → beri `display: grid;`
2. Elemen di dalamnya (children) otomatis jadi bagian dari grid.
3. Atur jumlah kolom dengan `grid-template-columns`.
4. Atur jarak antar elemen dengan `gap`.

## Contoh Lengkap
```html
<div class="grid-container">
  <div>Kotak 1</div>
  <div>Kotak 2</div>
  <div>Kotak 3</div>
  <div>Kotak 4</div>
  <div>Kotak 5</div>
  <div>Kotak 6</div>
</div>
```
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: #eee;
  padding: 12px;
}
.grid-container div {
  background: #4c8bf5;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}
```

`repeat(3, 1fr)` artinya: buat 3 kolom, masing-masing lebar sama (`1fr` = 1 fraction/bagian).

## Coba Sendiri
Buka `contoh/index.html`, ubah `repeat(3, 1fr)` menjadi `repeat(2, 1fr)` lalu lihat perbedaannya.