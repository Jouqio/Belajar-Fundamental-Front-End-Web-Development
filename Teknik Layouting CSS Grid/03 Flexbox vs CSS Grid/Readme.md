# Modul 3: Flexbox vs CSS Grid

Keduanya sama-sama alat layout modern di CSS, tapi punya tujuan berbeda.

| Aspek | Flexbox | CSS Grid |
|---|---|---|
| Dimensi | 1 dimensi (baris **atau** kolom) | 2 dimensi (baris **dan** kolom) |
| Cocok untuk | Navbar, tombol, daftar sejajar | Layout halaman, galeri, dashboard |
| Kontrol | Elemen menyesuaikan ruang tersedia | Kita tentukan struktur grid dari awal |

## Contoh Flexbox (1 dimensi)
```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

## Contoh Grid (2 dimensi)
```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
}
```

## Aturan Praktis untuk Pemula
- Elemen hanya perlu disusun dalam **satu baris/kolom** → pakai Flexbox.
- Butuh mengatur **baris dan kolom bersamaan** (header, sidebar, konten, footer) → pakai Grid.
- Keduanya boleh dipakai bersamaan dalam satu halaman!

## Coba Sendiri
Buka `contoh/index.html` — bandingkan langsung perilaku Flexbox di bagian atas dengan Grid di bagian bawah.