# 9. Best Practice dalam Membangun Form

Kumpulan praktik terbaik dari pengalaman developer profesional saat membangun form di dunia nyata.

## 1. Minimalkan Jumlah Field
Setiap field tambahan menurunkan kemungkinan pengguna menyelesaikan form. Tanyakan: "Apakah data ini benar-benar dibutuhkan sekarang?"

## 2. Satu Kolom Lebih Baik dari Multi-Kolom (untuk Form Panjang)
Form satu kolom lebih mudah diikuti mata dan lebih cepat diisi dibanding form berkolom-kolom, terutama di mobile.

## 3. Gunakan `type` dan `inputmode` yang Tepat

```html
<input type="tel" inputmode="numeric" pattern="[0-9]*" name="kodepos">
```
`inputmode` mengatur jenis keyboard virtual tanpa mengubah validasi `type`.

## 4. Beri Feedback Instan, Bukan Hanya Saat Submit
Validasi real-time (saat user selesai mengetik/`blur`) lebih baik daripada baru menampilkan semua error setelah tombol submit diklik.

## 5. Jangan Reset Form Setelah Error
Kalau validasi gagal, **jangan hapus data yang sudah diisi user** — itu bikin frustrasi. Cukup tandai field yang salah.

## 6. Tombol Submit yang Jelas
Gunakan teks aksi spesifik, bukan generic:
```html
<!-- ❌ Kurang jelas -->
<button type="submit">Submit</button>

<!-- ✅ Lebih jelas -->
<button type="submit">Buat Akun</button>
```

## 7. Loading State saat Proses Submit

```js
btn.disabled = true;
btn.innerHTML = '<span class="spinner"></span> Memproses...';
```
Ini mencegah double-submit dan memberi tahu user bahwa sistem sedang bekerja.

## 8. Progressive Disclosure untuk Form Panjang
Pecah form panjang menjadi beberapa langkah (multi-step form / wizard) agar tidak terasa membebani.

```
Langkah 1: Data Diri → Langkah 2: Alamat → Langkah 3: Konfirmasi
```

## 9. Autofocus Hanya di Field Pertama
```html
<input type="text" name="nama" autofocus>
```
Jangan pakai `autofocus` di form kedua/ketiga pada satu halaman — bisa membingungkan navigasi keyboard.

## 10. Selalu Validasi di Server Juga
Client-side validation adalah untuk UX. Server-side validation adalah untuk **keamanan**. Jangan pernah skip yang kedua.

## 11. Amankan dari Serangan Umum
- **CSRF token** untuk form yang mengubah data (bukan sekadar pencarian).
- **Rate limiting** pada endpoint form (mencegah spam/brute force).
- **Sanitasi input** di server sebelum disimpan ke database (mencegah SQL Injection, XSS).

## 12. Uji dengan Keyboard Saja
Coba isi form kamu **tanpa mouse** — hanya `Tab`, `Shift+Tab`, `Enter`, `Space`. Kalau ada bagian yang tidak bisa diakses lewat keyboard, itu masalah aksesibilitas.

## 13. Test di Perangkat Nyata
Form yang terlihat bagus di desktop bisa jadi berantakan di HP — selalu cek keyboard virtual, ukuran tombol, dan scroll behavior di mobile.

## Ringkasan Cepat (Checklist)
- [ ] Field seminimal mungkin
- [ ] Label jelas & terhubung
- [ ] Validasi client-side + server-side
- [ ] Feedback error real-time & spesifik
- [ ] Tombol submit deskriptif + loading state
- [ ] Accessible via keyboard & screen reader
- [ ] Aman dari CSRF/XSS/spam

➡️ Lanjut ke: `10-Pengantar-Studi-Kasus-Club-Finder-App.md`
