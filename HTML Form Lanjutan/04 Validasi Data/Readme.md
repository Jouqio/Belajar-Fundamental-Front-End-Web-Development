# 4. Validasi Data

Validasi memastikan data yang dikirim pengguna sesuai format yang diharapkan **sebelum** diproses server. Ada dua lapis validasi yang idealnya dipakai bersama:

1. **Client-side** (di browser, HTML/JS) → untuk UX, respons instan.
2. **Server-side** (di backend) → **wajib**, karena client-side bisa dilewati (user bisa mematikan JS atau kirim request langsung).

> ⚠️ Aturan emas: **Jangan pernah percaya sepenuhnya pada validasi client-side.** Selalu validasi ulang di server.

## Validasi HTML Bawaan (Tanpa JavaScript)

```html
<form>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="umur">Umur</label>
  <input type="number" id="umur" name="umur" min="17" max="60" required>

  <label for="password">Password (min 8 karakter)</label>
  <input type="password" id="password" name="password" minlength="8" required>

  <button type="submit">Daftar</button>
</form>
```
Browser otomatis:
- Menolak submit jika field kosong (`required`)
- Menolak format email salah
- Menolak umur di luar 17–60
- Menolak password kurang dari 8 karakter

## Pseudo-class CSS untuk Validasi

```css
input:invalid {
  border-color: red;
}
input:valid {
  border-color: green;
}
input:required {
  border-left: 3px solid orange;
}
```

## Constraint Validation API (JavaScript)

Untuk pesan error custom atau logika validasi kompleks:

```html
<input type="text" id="username" required>
<span id="error"></span>

<script>
const username = document.getElementById('username');

username.addEventListener('input', () => {
  if (username.validity.valueMissing) {
    username.setCustomValidity('Username wajib diisi ya!');
  } else if (username.value.length < 4) {
    username.setCustomValidity('Username minimal 4 karakter');
  } else {
    username.setCustomValidity(''); // valid
  }
});
</script>
```

Objek `validity` punya beberapa properti berguna:
| Properti | Arti |
|----------|------|
| `valueMissing` | Field required tapi kosong |
| `typeMismatch` | Format tidak sesuai type (misal email) |
| `tooShort` / `tooLong` | Melanggar minlength/maxlength |
| `rangeUnderflow` / `rangeOverflow` | Melanggar min/max |
| `patternMismatch` | Tidak cocok dengan regex pattern |
| `valid` | Semua aturan terpenuhi |

## Validasi Konfirmasi Password (Custom Logic)

```html
<input type="password" id="pass" required minlength="8">
<input type="password" id="confirmPass" required>

<script>
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');

function cekPassword() {
  if (pass.value !== confirmPass.value) {
    confirmPass.setCustomValidity('Password tidak cocok');
  } else {
    confirmPass.setCustomValidity('');
  }
}

pass.addEventListener('input', cekPassword);
confirmPass.addEventListener('input', cekPassword);
</script>
```

## Checklist Validasi yang Baik
- ✅ Gunakan atribut HTML dulu (`required`, `type`, `pattern`, `min/max`) sebelum menulis JS.
- ✅ Beri pesan error yang jelas dan spesifik, bukan cuma "Input salah".
- ✅ Validasi real-time (saat mengetik) lebih ramah daripada baru muncul setelah submit.
- ✅ Tetap validasi ulang di server — client-side hanya lapisan UX.

Coba praktik langsung di `examples/04-validasi.html`.

➡️ Lanjut ke: `05-Pentingnya-Auto-Completion.md`
