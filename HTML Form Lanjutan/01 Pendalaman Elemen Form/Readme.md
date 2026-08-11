# 1. Pendalaman Elemen Form

Selain `<form>`, `<input>`, dan `<button>`, HTML punya beberapa elemen form lain yang jarang dipakai pemula tapi sangat berguna.

## 1. `<fieldset>` dan `<legend>`
Mengelompokkan field yang berhubungan, memberi struktur visual dan semantik.

```html
<fieldset>
  <legend>Data Pribadi</legend>
  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama">

  <label for="email">Email</label>
  <input type="email" id="email" name="email">
</fieldset>
```

## 2. `<label>`
Menghubungkan teks dengan field agar bisa diklik dan terbaca screen reader.

```html
<!-- Cara 1: pakai for + id -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Cara 2: bungkus langsung -->
<label>
  Email
  <input type="email">
</label>
```

## 3. `<select>`, `<option>`, `<optgroup>`
Dropdown pilihan. `optgroup` mengelompokkan opsi.

```html
<label for="kota">Kota</label>
<select id="kota" name="kota">
  <optgroup label="Kalimantan">
    <option value="bontang">Bontang</option>
    <option value="balikpapan">Balikpapan</option>
  </optgroup>
  <optgroup label="Jawa">
    <option value="jakarta">Jakarta</option>
  </optgroup>
</select>
```

## 4. `<textarea>`
Input teks multi-baris.

```html
<label for="pesan">Pesan</label>
<textarea id="pesan" name="pesan" rows="4" cols="40"></textarea>
```

## 5. `<datalist>`
Memberi saran/autocomplete pada `<input>` biasa (beda dengan `<select>`, user tetap bisa mengetik bebas).

```html
<label for="browser">Browser favorit</label>
<input list="browser-list" id="browser" name="browser">
<datalist id="browser-list">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
  <option value="Safari">
</datalist>
```

## 6. `<output>`
Menampilkan hasil kalkulasi dari input (biasanya dikombinasikan dengan JavaScript).

```html
<form oninput="hasil.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="hasil" for="a b">0</output>
</form>
```

## 7. `<progress>` dan `<meter>`
- `<progress>` → menunjukkan progres (misal: upload file).
- `<meter>` → menunjukkan nilai dalam rentang tertentu (misal: kekuatan password).

```html
<progress value="70" max="100">70%</progress>
<meter min="0" max="100" value="65">65 dari 100</meter>
```

## Latihan Singkat
Buat form pendaftaran webinar yang memakai minimal: `fieldset`, `select` dengan `optgroup`, `textarea`, dan `datalist`. Coba lihat contohnya di `examples/01-elemen-form.html`.

➡️ Lanjut ke: `02-Pendalaman-Form-Field.md`
