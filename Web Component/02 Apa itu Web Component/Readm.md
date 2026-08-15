# Modul 2: Apa Itu Web Component

## Definisi Lebih Formal
Web Component adalah **spesifikasi resmi W3C** yang terdiri dari beberapa teknologi browser native yang bekerja bersama untuk memungkinkan pembuatan elemen HTML kustom yang reusable dan encapsulated.

## Perbandingan dengan Cara Lama

**Cara lama (tanpa Web Component)**  membuat "komponen" tombol dengan style konsisten harus copy-paste HTML+CSS di banyak tempat:
```html
<button class="btn btn-primary">Simpan</button>
<button class="btn btn-primary">Hapus</button>
```
Kalau class `btn-primary` bentrok dengan CSS lain di halaman, style bisa rusak.

**Cara baru (dengan Web Component)**  dibungkus jadi tag sendiri, style-nya terisolasi:
```html
<my-button label="Simpan"></my-button>
<my-button label="Hapus"></my-button>
```
Style di dalam `<my-button>` tidak akan bentrok dengan CSS di luar, karena (nantinya) memakai Shadow DOM.

## Empat Karakteristik Utama Web Component

1. **Encapsulated**  HTML, CSS, dan JS di dalam komponen terisolasi dari halaman utama.
2. **Reusable** — bisa dipakai berkali-kali, bahkan lintas project.
3. **Interoperable** — berjalan di semua browser modern dan kompatibel dengan framework apa pun.
4. **Composable** — komponen bisa berisi komponen lain di dalamnya (nested), seperti tag HTML biasa.

## Contoh Analogi Sederhana
Web Component itu seperti membuat "tag HTML custom buatanmu sendiri", mirip cara kamu memakai `<video>` atau `<select>` — kamu tidak perlu tahu cara kerja internalnya, cukup pakai tag-nya dan atur atributnya.

```html
<!-- Tag bawaan browser -->
<video controls src="film.mp4"></video>

<!-- Tag buatan sendiri dengan Web Component -->
<film-card title="Inception" year="2010"></film-card>
```

## Kesalahpahaman Umum
- Web Component **bukan** framework ia adalah kumpulan API bawaan browser.
- Web Component **bukan** pengganti React/Vue sepenuhnya keduanya bisa saling melengkapi (banyak design system besar seperti Adobe Spectrum dan Ionic dibangun dengan Web Component).
- Web Component **tidak butuh** build tool atau compiler bisa langsung ditulis dan dijalankan di file `.html` biasa.
