# 8. Semantik Itu Penting

Semantik HTML berarti memilih elemen sesuai **makna**, bukan sekadar tampilannya. Form yang semantik lebih mudah diakses screen reader, lebih ramah SEO, dan lebih mudah dipelihara.

## Kenapa Semantik Penting untuk Form?
1. **Aksesibilitas (a11y)** — pengguna screen reader (misalnya tunanetra) bergantung pada struktur HTML yang benar untuk memahami form.
2. **SEO** — mesin pencari lebih memahami konteks halaman.
3. **Maintainability** — developer lain lebih mudah membaca kode.

## Selalu Gunakan `<label>` yang Terhubung

```html
<!-- ❌ Buruk: tidak ada hubungan label-input -->
<div>Nama</div>
<input type="text">

<!-- ✅ Baik -->
<label for="nama">Nama</label>
<input type="text" id="nama">
```

## `aria-label` dan `aria-labelledby`
Kadang label visual tidak diperlukan (misalnya ikon search), tapi field tetap butuh nama untuk screen reader.

```html
<input type="search" aria-label="Cari produk" placeholder="Cari...">
```

```html
<h2 id="judul-alamat">Alamat Pengiriman</h2>
<input type="text" aria-labelledby="judul-alamat" name="alamat">
```

## `aria-describedby` untuk Teks Bantuan/Error

```html
<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-help">
<small id="password-help">Minimal 8 karakter, kombinasi huruf & angka</small>
```

## `aria-invalid` untuk Menandai Error

```html
<label for="email">Email</label>
<input type="email" id="email" aria-invalid="true" aria-describedby="email-error">
<span id="email-error" role="alert">Format email tidak valid</span>
```

## Struktur Form yang Semantik

```html
<form>
  <fieldset>
    <legend>Informasi Akun</legend>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required>
  </fieldset>

  <fieldset>
    <legend>Preferensi Notifikasi</legend>
    <label>
      <input type="checkbox" name="notif" value="email"> Email
    </label>
    <label>
      <input type="checkbox" name="notif" value="sms"> SMS
    </label>
  </fieldset>
</form>
```
`<fieldset>` + `<legend>` membantu screen reader mengumumkan konteks grup field, bukan cuma field satu per satu.

## Urutan Tab yang Logis
Jangan sembarangan memakai `tabindex` dengan angka besar — biarkan browser mengikuti urutan HTML secara alami. Gunakan `tabindex="0"` hanya jika elemen non-interaktif perlu difokuskan, dan hindari `tabindex` dengan nilai positif.

## Checklist Semantik Form
- ✅ Semua input punya `<label>` (visual) atau `aria-label` (jika label visual tidak memungkinkan).
- ✅ Field terkait dikelompokkan dengan `<fieldset>`/`<legend>`.
- ✅ Pesan error terhubung dengan `aria-describedby` dan diumumkan dengan `role="alert"`.
- ✅ Gunakan elemen native (`<button>`, `<select>`) daripada `<div>` yang di-styling menyerupai — elemen native otomatis accessible.
- ✅ Kontras warna teks & border cukup (minimal rasio 4.5:1 untuk teks normal).

Contoh form ber-semantik lengkap ada di `examples/08-semantik.html`.

➡️ Lanjut ke: `09-Best-Practice-dalam-Membangun-Form.md`
