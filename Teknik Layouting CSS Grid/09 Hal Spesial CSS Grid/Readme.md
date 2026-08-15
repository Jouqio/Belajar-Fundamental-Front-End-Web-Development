# Modul 9: Hal Spesial untuk Anda yang Spesial

Beberapa fitur "spesial" CSS Grid yang jarang diketahui pemula.

## 1. `grid-auto-flow: dense`
Mengisi celah kosong secara otomatis:
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
}
```

## 2. Kolom/Baris Implisit
Kalau ada item yang "meluber" dari struktur yang sudah ditentukan, grid otomatis membuat track baru. Ukurannya bisa diatur:
```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px; /* baris tambahan otomatis tingginya 100px */
}
```

## 3. Named Grid Lines
Memberi nama pada garis grid supaya lebih mudah dibaca:
```css
.container {
  display: grid;
  grid-template-columns: [start] 1fr [center] 1fr [end];
}
.item {
  grid-column: start / center;
}
```

## 4. Subgrid (fitur baru, didukung browser modern)
Child grid bisa "mewarisi" struktur grid dari parent-nya:
```css
.item {
  display: grid;
  grid-template-columns: subgrid;
}
```

## Catatan
Fitur-fitur ini tidak wajib dihafal di awal, tapi bagus diketahui karena sangat membantu saat menghadapi layout yang rumit.