# Modul 5: Terminologi Grid

Sebelum lanjut lebih dalam, kenali dulu istilah-istilah pentingnya:

- **Grid Container**  elemen pembungkus dengan `display: grid`.
- **Grid Item**  elemen anak langsung di dalam grid container.
- **Grid Line**  garis pembatas yang membentuk struktur grid (vertikal & horizontal).
- **Grid Track**  ruang di antara dua grid line (bisa berupa kolom atau baris).
- **Grid Cell**  satu unit terkecil dalam grid, seperti sel di tabel.
- **Grid Area**  gabungan beberapa grid cell yang membentuk area lebih besar.
- **Gap (Gutter)**  jarak antar track (dulu disebut `grid-gap`, sekarang cukup `gap`).

## Ilustrasi Konsep

+---------+---------+---------+ <- Grid Line horizontal
| Cell 1 | Cell 2 | Cell 3 | <- Grid Track (baris 1)
+---------+---------+---------+
| Cell 4 | Cell 5 | Cell 6 | <- Grid Track (baris 2)
+---------+---------+---------+
^
Grid Line vertikal

## Kenapa Ini Penting?
Memahami istilah ini penting karena banyak properti CSS Grid (`grid-column`, `grid-row`, dll.) merujuk langsung ke Grid Line, bukan ke elemen.

## Coba Sendiri
Buka `contoh/index.html` dan coba hitung sendiri berapa jumlah Grid Line horizontal dan vertikal yang terbentuk.