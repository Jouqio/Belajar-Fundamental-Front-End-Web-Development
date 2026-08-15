# Modul 12: Alignment

Alignment mengatur posisi item **di dalam** track grid-nya (bukan strukturnya).

## Di Level Container (mengatur semua item sekaligus)
```css
.container {
  display: grid;
  justify-items: center;  /* horizontal: start | end | center | stretch */
  align-items: center;    /* vertical: start | end | center | stretch */
}
```

## Meratakan Seluruh Grid dalam Container
```css
.container {
  justify-content: center; /* horizontal seluruh grid */
  align-content: center;   /* vertical seluruh grid */
}
```

## Di Level Item (mengatur satu item spesifik, override container)
```css
.item-khusus {
  justify-self: end;
  align-self: start;
}
```

## Shorthand `place-items` dan `place-content`
```css
.container {
  place-items: center;      /* = align-items + justify-items */
  place-content: center;    /* = align-content + justify-content */
}
```

## Trik Klasik: Memusatkan 1 Kotak Persis di Tengah Layar
```css
body {
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
}
```
Cukup 4 baris CSS untuk memusatkan elemen secara horizontal dan vertikal sekaligus.

## Coba Sendiri
Buka `contoh/index.html` dan bandingkan efek `justify-items: center` dengan `justify-items: start`.