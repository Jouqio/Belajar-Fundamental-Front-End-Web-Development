# 3. Pendalaman Atribut Form Field

Atribut mengontrol perilaku sebuah field: apakah wajib diisi, batas panjang teks, nilai default, dsb.

## Atribut Umum

| Atribut | Fungsi | Contoh |
|---------|--------|--------|
| `required` | Field wajib diisi | `<input required>` |
| `placeholder` | Teks bayangan (bukan pengganti label!) | `placeholder="Masukkan nama"` |
| `value` | Nilai default/awal | `value="Bontang"` |
| `readonly` | Bisa dibaca, tapi tidak bisa diedit (tetap terkirim saat submit) | `<input readonly>` |
| `disabled` | Field nonaktif total (tidak terkirim saat submit) | `<input disabled>` |
| `maxlength` / `minlength` | Batas jumlah karakter | `maxlength="20"` |
| `max` / `min` | Batas nilai (number, date, range) | `min="0" max="100"` |
| `step` | Interval kenaikan nilai | `step="5"` |
| `pattern` | Regex untuk validasi custom | `pattern="[0-9]{5}"` |
| `autofocus` | Otomatis fokus saat halaman dimuat | `<input autofocus>` |
| `multiple` | Boleh pilih lebih dari satu (file/email) | `<input type="file" multiple>` |
| `autocomplete` | Aktif/nonaktifkan saran isian browser | `autocomplete="off"` |

## `readonly` vs `disabled` — Sering Tertukar!

```html
<!-- readonly: terlihat, tidak bisa diubah, TETAP dikirim saat submit -->
<input type="text" value="INV-2026-001" readonly name="invoice">

<!-- disabled: terlihat abu-abu, tidak bisa diubah, TIDAK dikirim saat submit -->
<input type="text" value="Draft" disabled name="status">
```

## Contoh `pattern` (Regex Validasi)

```html
<label for="kodepos">Kode Pos (5 digit)</label>
<input
  type="text"
  id="kodepos"
  name="kodepos"
  pattern="[0-9]{5}"
  title="Masukkan 5 digit angka"
  required>
```
Jika format salah, browser otomatis menolak submit dan menampilkan pesan dari atribut `title`.

## Kombinasi `min`, `max`, `step` pada Number/Range

```html
<label for="jumlah">Jumlah Tiket</label>
<input type="number" id="jumlah" name="jumlah" min="1" max="10" step="1" value="1">
```

## Placeholder BUKAN Pengganti Label
Kesalahan umum:
```html
<!-- ❌ Salah — tidak ada label, aksesibilitas buruk -->
<input type="text" placeholder="Nama Lengkap">
```
```html
<!-- ✅ Benar — placeholder hanya sebagai bantuan tambahan -->
<label for="nama">Nama Lengkap</label>
<input type="text" id="nama" placeholder="Contoh: Budi Santoso">
```
Placeholder hilang begitu user mulai mengetik, sehingga tidak bisa diandalkan sebagai satu-satunya penjelasan field.

Coba semua atribut ini secara live di `examples/03-atribut-field.html`.

➡️ Lanjut ke: `04-Validasi-Data.md`
