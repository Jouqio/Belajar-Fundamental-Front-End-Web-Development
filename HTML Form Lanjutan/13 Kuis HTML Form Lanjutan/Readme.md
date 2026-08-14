# 13. Kuis HTML Form Lanjutan

> Kerjakan dulu tanpa membuka catatan. Jawaban ada di paling bawah (jangan intip dulu! 😄)

## Soal Pilihan Ganda

**1.** Elemen apa yang digunakan untuk mengelompokkan field yang berhubungan dan memberi judul kelompok?

- A. `<group>`
- B. `<fieldset>` + `<legend>`
- C. `<section>`
- D. `<optgroup>`

**2.** Apa perbedaan utama antara `readonly` dan `disabled`?

- A. Tidak ada bedanya
- B. `readonly` mengubah warna, `disabled` tidak
- C. `readonly` tetap terkirim saat submit, `disabled` tidak terkirim
- D. `disabled` tetap terkirim saat submit, `readonly` tidak

**3.** Atribut mana yang memberi saran isian kustom (bukan data pribadi browser) pada `<input>` teks biasa?

- A. `autocomplete`
- B. `<datalist>` + atribut `list`
- C. `placeholder`
- D. `pattern`

**4.** Kenapa validasi server-side tetap wajib meski sudah ada validasi client-side?

- A. Supaya kode lebih panjang
- B. Karena client-side bisa dilewati/dimatikan pengguna
- C. Karena server-side lebih cepat
- D. Tidak wajib, cukup client-side saja

**5.** Manakah nilai `type` input yang PALING tepat untuk field "Nomor Telepon"?

- A. `text`
- B. `number`
- C. `tel`
- D. `email`

**6.** Apa fungsi `aria-describedby` pada sebuah input?

- A. Menyembunyikan input dari screen reader
- B. Menghubungkan input dengan teks bantuan/deskripsi tambahan
- C. Mengubah warna border saat error
- D. Memvalidasi format email

**7.** Dalam Constraint Validation API, properti apa yang bernilai `true` jika field wajib diisi (required) tapi kosong?

- A. `typeMismatch`
- B. `tooShort`
- C. `valueMissing`
- D. `patternMismatch`

**8.** Apa tujuan utama fungsi `debounce` pada live search?

- A. Membuat tampilan lebih berwarna
- B. Menunda eksekusi fungsi agar tidak terlalu sering dipanggil saat user mengetik cepat
- C. Menghapus data lama sebelum pencarian baru
- D. Mengurutkan hasil pencarian

**9.** Manakah cara TERBAIK menghubungkan `<label>` dengan `<input>`?

- A. Meletakkannya berdekatan secara visual saja
- B. Menggunakan `for` pada label yang sama dengan `id` pada input
- C. Menambahkan `placeholder` yang jelas
- D. Menggunakan `<div>` sebagai pembungkus

**10.** Pada studi kasus Club Finder App, apa fungsi `aria-live="polite"` pada elemen daftar hasil?

- A. Membuat elemen bisa diklik
- B. Memberi tahu screen reader untuk mengumumkan perubahan konten secara otomatis
- C. Menstyling elemen agar polos (plain)
- D. Menonaktifkan elemen sementara

## Soal Praktik (Coding)

**11.** Buatlah sebuah field email yang: wajib diisi, memakai autocomplete yang sesuai, dan menampilkan pesan error custom "Email wajib diisi dengan format yang benar" menggunakan `setCustomValidity`.

**12.** Modifikasi Club Finder App (`examples/11-club-finder-app.html`) agar menambahkan tombol "Reset Filter" yang mengembalikan semua field ke kondisi awal dan menampilkan seluruh daftar klub kembali.

---

## Kunci Jawaban

1. B
2. C
3. B
4. B
5. C
6. B
7. C
8. B
9. B
10. B

**Soal 11 (contoh jawaban):**

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" required autocomplete="email" />

<script>
  const email = document.getElementById("email");
  email.addEventListener("input", () => {
    if (email.validity.valueMissing || email.validity.typeMismatch) {
      email.setCustomValidity("Email wajib diisi dengan format yang benar");
    } else {
      email.setCustomValidity("");
    }
  });
</script>
```

**Soal 12 (contoh jawaban):**

```html
<button type="button" id="reset-btn">Reset Filter</button>
```

```js
document.getElementById("reset-btn").addEventListener("click", () => {
  keywordInput.value = "";
  kategoriSelect.value = "";
  kotaSelect.value = "";
  renderHasil(daftarKlub);
});
```

### Skor Kamu

- 9–12 benar: Mantap! Kamu sudah menguasai HTML Form Lanjutan.
- 5–8 benar: Lumayan, coba ulang bagian yang masih salah.
- 0–4 benar: Yuk baca ulang materi 1–9 sebelum lanjut ke topik berikutnya.

Selamat, kamu telah menyelesaikan modul **HTML Form Lanjutan**! 🎓
