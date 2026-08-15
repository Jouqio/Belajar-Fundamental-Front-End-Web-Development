# Modul 15: Kuis Layouting dengan CSS Grid

Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah.

1. Properti apa yang digunakan untuk mengaktifkan CSS Grid pada sebuah elemen?
2. Apa perbedaan utama antara Flexbox dan CSS Grid?
3. Apa fungsi unit `fr` dalam `grid-template-columns`?
4. Tuliskan kode agar sebuah item melebar 3 kolom menggunakan `span`.
5. Properti apa yang dipakai untuk memusatkan item secara horizontal **dan** vertikal sekaligus dengan satu baris kode?
6. Apa fungsi `grid-template-areas`?
7. Bagaimana cara membuat grid yang otomatis menambah/mengurangi jumlah kolom sesuai lebar layar tanpa media query?

<details>
<summary>Klik untuk lihat kunci jawaban</summary>

1. `display: grid;`
2. Flexbox bekerja dalam 1 dimensi (baris atau kolom saja), sedangkan CSS Grid bekerja dalam 2 dimensi (baris dan kolom sekaligus).
3. `fr` (fraction) membagi ruang yang tersedia secara proporsional antar kolom/baris.
4. `grid-column: span 3;`
5. `place-items: center;` (pada container, bersama `display: grid;`)
6. Untuk mendefinisikan layout halaman dengan memberi nama pada setiap area grid, sehingga struktur HTML dan CSS menjadi lebih mudah dibaca.
7. Dengan `grid-template-columns: repeat(auto-fit, minmax(ukuran-min, 1fr));`

</details>

## Selamat!
Kamu telah menyelesaikan seluruh materi **Teknik Layouting dengan CSS Grid**. Lanjutkan dengan praktik membangun layout nyata untuk memperkuat pemahaman.