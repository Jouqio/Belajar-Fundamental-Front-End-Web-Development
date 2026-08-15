# Modul 8: Tentukan Kolom dan Barismu

Ini inti dari CSS Grid: mendefinisikan struktur kolom dan baris.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 1fr;
  grid-template-rows: 80px auto 60px;
}
```
- `100px 200px 1fr` → 3 kolom: lebar tetap 100px, 200px, dan sisa ruang (`1fr`).
- `80px auto 60px` → 3 baris: tinggi tetap, otomatis menyesuaikan konten, dan tetap lagi.

## Unit `fr` (fraction)
```css
grid-template-columns: 1fr 2fr 1fr;
```
Ruang dibagi jadi 4 bagian: kolom tengah dapat 2 bagian, kolom kiri & kanan masing-masing 1 bagian.

## Fungsi `repeat()`
```css
grid-template-columns: repeat(4, 1fr);
/* sama dengan: 1fr 1fr 1fr 1fr */
```

## Fungsi `minmax()` — kolom fleksibel dengan batas
```css
grid-template-columns: repeat(3, minmax(150px, 1fr));
```
Kolom minimal 150px, tapi bisa melebar sampai membagi rata sisa ruang.

## Grid Responsif Otomatis (tanpa media query!)
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
```
Otomatis menambah/mengurangi jumlah kolom sesuai lebar layar — berguna untuk galeri foto atau kartu produk yang responsif.

## Coba Sendiri
Buka `contoh/index.html`, perkecil lebar browser dan perhatikan bagian "Responsif otomatis" berubah jumlah kolomnya sendiri.