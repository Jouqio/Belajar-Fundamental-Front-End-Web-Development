# 2. Pendalaman Form Field

`<input>` punya banyak variasi `type` yang masing-masing membuat browser menampilkan UI dan validasi berbeda tanpa perlu JavaScript tambahan.

## Tipe-Tipe Input Penting

| Type | Fungsi | Contoh |
|------|--------|--------|
| `text` | Teks bebas | Nama, alamat |
| `email` | Wajib format email, keyboard email di mobile | user@mail.com |
| `password` | Karakter disembunyikan | Password login |
| `number` | Hanya angka, ada tombol naik/turun | Umur, jumlah barang |
| `tel` | Nomor telepon, keyboard angka di mobile | 08123456789 |
| `url` | Wajib format URL | https://situs.com |
| `search` | Field pencarian (ada tombol clear "x") | Search box |
| `date` | Date picker bawaan browser | Tanggal lahir |
| `time` | Pemilih jam | Jam janji temu |
| `datetime-local` | Tanggal + jam | Jadwal acara |
| `month` | Bulan & tahun | Bulan kadaluarsa kartu |
| `week` | Minggu ke berapa | Laporan mingguan |
| `color` | Color picker | Pilih warna tema |
| `range` | Slider | Rating, volume |
| `checkbox` | Pilihan ya/tidak, bisa multi | Setuju S&K |
| `radio` | Pilih satu dari beberapa opsi | Jenis kelamin |
| `file` | Upload file | Upload foto profil |
| `hidden` | Data tersembunyi dikirim ke server | ID session |

## Contoh Kombinasi

```html
<label for="lahir">Tanggal Lahir</label>
<input type="date" id="lahir" name="lahir">

<label for="rating">Rating Kepuasan</label>
<input type="range" id="rating" name="rating" min="1" max="10" step="1">

<label for="warna">Warna Favorit</label>
<input type="color" id="warna" name="warna" value="#00aa88">

<label for="foto">Upload Foto</label>
<input type="file" id="foto" name="foto" accept="image/*">
```

## Checkbox vs Radio

```html
<!-- Radio: hanya bisa pilih 1 dalam grup yang sama (name sama) -->
<label><input type="radio" name="gender" value="L"> Laki-laki</label>
<label><input type="radio" name="gender" value="P"> Perempuan</label>

<!-- Checkbox: bisa pilih banyak -->
<label><input type="checkbox" name="hobi" value="baca"> Membaca</label>
<label><input type="checkbox" name="hobi" value="coding"> Coding</label>
```

## Kenapa Memilih `type` yang Tepat Itu Penting?
1. **Validasi otomatis** — browser menolak submit kalau format salah (misal `email` tanpa `@`).
2. **Keyboard yang sesuai di HP** — `type="tel"` memunculkan keypad angka, `type="email"` memunculkan tombol `@`.
3. **UX lebih baik** — `date`, `color`, `range` memberi kontrol visual bawaan tanpa perlu library tambahan.

Lihat demo interaktif semua tipe di `examples/02-form-field.html`.

➡️ Lanjut ke: `03-Pendalaman-Atribut-Form-Field.md`
