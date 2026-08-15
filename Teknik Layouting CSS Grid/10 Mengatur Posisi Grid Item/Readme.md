# Modul 10: Mengatur Posisi

Untuk menempatkan grid item di posisi tertentu, gunakan `grid-column` dan `grid-row` (merujuk ke Grid Line, dimulai dari angka 1).

```css
.item-besar {
  grid-column: 1 / 3;   /* dari garis 1 sampai garis 3 = lebar 2 kolom */
  grid-row: 1 / 3;      /* dari garis 1 sampai garis 3 = tinggi 2 baris */
}
```

## Alternatif dengan `span` (lebih praktis)
```css
.item-besar {
  grid-column: span 2;  /* melebar 2 kolom dari posisi saat ini */
  grid-row: span 2;     /* meninggi 2 baris */
}
```

## Contoh Lengkap — Layout Kartu dengan 1 Item Besar
```html
<div class="grid">
  <div class="card besar">Featured</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
  <div class="card">5</div>
</div>
```
```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.besar {
  grid-column: span 2;
  grid-row: span 2;
  background: #ff8800;
}
.card { background: #4c8bf5; color: white; padding: 10px; }
```

## Coba Sendiri
Buka `contoh/index.html`, ubah `span 2` menjadi `span 3` pada `.besar` dan lihat perubahannya.