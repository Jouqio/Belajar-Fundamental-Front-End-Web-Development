# Modul 4: Latihan — Memulai dengan CSS Grid

Saatnya praktik langsung! Buka file `contoh/latihan.html` di browser.

```html
<div class="container">
  <div>A</div><div>B</div><div>C</div><div>D</div>
  <div>E</div><div>F</div><div>G</div><div>H</div>
</div>
```
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.container div {
  background: coral;
  padding: 16px;
  color: white;
  text-align: center;
}
```

## Tantangan Latihan (coba sendiri)
1. Ubah `repeat(4, 1fr)` menjadi `repeat(2, 1fr)` — perhatikan perubahannya.
2. Ubah `gap: 8px` menjadi `gap: 30px`.
3. Tambahkan `div` ke-9 dan lihat bagaimana grid otomatis menambah baris baru.

## Yang Dipelajari
Latihan ini melatih intuisi bahwa **grid akan otomatis membuat baris baru (implicit rows)** kalau jumlah item lebih banyak dari kapasitas kolom yang ditentukan.