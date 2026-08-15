# Modul 11: Penuh Kendali dengan Grid Template

`grid-template-areas` memberi kontrol penuh dengan cara yang **sangat mudah dibaca** — cocok untuk layout halaman utuh.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  height: 100vh;
  gap: 8px;
}
.header  { grid-area: header; background: #333; color: white; }
.sidebar { grid-area: sidebar; background: #555; color: white; }
.main    { grid-area: main; background: #f4f4f4; }
.footer  { grid-area: footer; background: #333; color: white; }
```
```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Konten Utama</div>
  <div class="footer">Footer</div>
</div>
```

## Trik: Mengosongkan Cell
Kalau sebuah cell ingin dikosongkan, gunakan tanda titik `.`:
```css
grid-template-areas:
  "header header"
  ".      main";
```

## Kenapa Ini Bagus?
`grid-template-areas` sering dianggap cara **paling intuitif** untuk membuat layout halaman, karena kita bisa "menggambar" layout langsung di dalam CSS.

## Coba Sendiri
Buka `contoh/index.html`, ubah urutan `"sidebar header"` menjadi `"header header"` dan pindahkan sidebar ke baris kedua saja.