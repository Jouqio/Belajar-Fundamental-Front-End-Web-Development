# 5. Pentingnya Auto Completion

Auto completion (autofill) membantu pengguna mengisi form lebih cepat dengan memakai data yang pernah mereka simpan di browser (nama, alamat, email, kartu kredit, dll).

## Kenapa Ini Penting?
- Mempercepat pengisian form → mengurangi *drop-off* (pengguna kabur karena form terlalu ribet).
- Mengurangi typo pada data penting (alamat email, nomor telepon).
- Meningkatkan aksesibilitas untuk pengguna dengan keterbatasan motorik.

## Atribut `autocomplete`

```html
<form>
  <label for="nama">Nama Lengkap</label>
  <input type="text" id="nama" name="nama" autocomplete="name">

  <label for="email">Email</label>
  <input type="email" id="email" name="email" autocomplete="email">

  <label for="telp">No. Telepon</label>
  <input type="tel" id="telp" name="telp" autocomplete="tel">

  <label for="alamat">Alamat</label>
  <input type="text" id="alamat" name="alamat" autocomplete="street-address">

  <label for="kota">Kota</label>
  <input type="text" id="kota" name="kota" autocomplete="address-level2">

  <label for="kodepos">Kode Pos</label>
  <input type="text" id="kodepos" name="kodepos" autocomplete="postal-code">
</form>
```

## Nilai `autocomplete` yang Sering Dipakai

| Nilai | Untuk Field |
|-------|-------------|
| `name` | Nama lengkap |
| `given-name` | Nama depan |
| `family-name` | Nama belakang |
| `email` | Email |
| `tel` | Nomor telepon |
| `street-address` | Alamat jalan |
| `address-level2` | Kota |
| `postal-code` | Kode pos |
| `country` | Negara |
| `username` | Username login |
| `current-password` | Password saat login |
| `new-password` | Password saat daftar/ganti password |
| `cc-number` | Nomor kartu kredit |
| `bday` | Tanggal lahir |
| `off` | Matikan autocomplete untuk field ini |

## Kapan Mematikan Autocomplete?
Untuk data sensitif satu kali pakai (misalnya kode OTP, kode kupon), sebaiknya dimatikan agar browser tidak menyarankan isian lama:

```html
<label for="otp">Kode OTP</label>
<input type="text" id="otp" name="otp" autocomplete="one-time-code" inputmode="numeric">
```

## Autocomplete Kustom dengan `<datalist>`
Untuk saran spesifik aplikasi (bukan data pribadi user), gunakan `<datalist>` seperti dibahas di modul 1:

```html
<label for="kampus">Kampus</label>
<input list="daftar-kampus" id="kampus" name="kampus">
<datalist id="daftar-kampus">
  <option value="STITEK Bontang">
  <option value="Universitas Mulawarman">
  <option value="ITK Balikpapan">
</datalist>
```

## Tips UX
- Kelompokkan field terkait (nama depan & belakang bersebelahan) supaya autofill browser bekerja lebih akurat.
- Gunakan `name` dan `autocomplete` yang standar/umum — browser mengenali pola nama field yang lazim (`email`, `phone`, dll).
- Jangan matikan autocomplete di seluruh form hanya karena alasan estetika; itu justru menyulitkan pengguna.

Coba demo autocomplete di `examples/05-auto-completion.html`.

➡️ Lanjut ke: `06-Styling-Form.md`
