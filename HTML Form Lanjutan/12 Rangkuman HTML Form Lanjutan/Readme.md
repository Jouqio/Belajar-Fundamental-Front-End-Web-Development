# 12. Rangkuman HTML Form Lanjutan

## Peta Konsep Keseluruhan

```
FORM
├── Elemen: fieldset, legend, select, optgroup, textarea, datalist, output, progress, meter
├── Field (type): text, email, password, number, tel, url, date, time, color, range,
│                 checkbox, radio, file, hidden, search
├── Atribut: required, placeholder, value, readonly, disabled, maxlength/minlength,
│            min/max, step, pattern, autofocus, multiple, autocomplete
├── Validasi
│   ├── Client-side: HTML bawaan + Constraint Validation API (JS)
│   └── Server-side: WAJIB, jangan pernah dilewatkan
├── Auto Completion: autocomplete="..." & <datalist>
├── Styling: pseudo-class (:focus, :invalid, :checked), layout responsif
├── JavaScript: FormData, fetch, debounce, validasi real-time
├── Semantik: label, fieldset/legend, aria-label, aria-describedby, aria-invalid
└── Best Practice: minim field, feedback jelas, aman dari CSRF/XSS, accessible
```

## Poin Kunci per Topik

1. **Elemen Form** → Gunakan elemen yang tepat untuk maknanya, bukan cuma `<div>` semua.
2. **Form Field** → Pilih `type` yang sesuai data untuk validasi & UX otomatis.
3. **Atribut Field** → `readonly` tetap terkirim, `disabled` tidak. `pattern` untuk regex custom.
4. **Validasi Data** → Client-side untuk UX, server-side untuk keamanan — **keduanya wajib**.
5. **Auto Completion** → `autocomplete` mempercepat pengisian & mengurangi typo.
6. **Styling Form** → Konsistensi, feedback visual jelas, responsif di semua ukuran layar.
7. **JavaScript** → `FormData`, `fetch`, debounce, dan validasi real-time bikin form lebih hidup.
8. **Semantik** → Label terhubung, `fieldset`/`legend`, dan atribut ARIA membuat form accessible.
9. **Best Practice** → Form terbaik adalah yang tercepat diisi, sejelas mungkin, dan paling aman.
10–11. **Studi Kasus Club Finder App** → Menggabungkan semua konsep di atas dalam satu aplikasi pencarian nyata dengan live search & filter.

## Perbandingan Cepat: Sebelum vs Sesudah Belajar Modul Ini

| Sebelum | Sesudah |
|---------|---------|
| Semua input pakai `type="text"` | Pakai `type` spesifik (`email`, `tel`, `date`, dst) |
| Validasi hanya lewat JS manual dari nol | Manfaatkan HTML5 Constraint Validation API dulu |
| Label kadang tidak ada / tidak terhubung | Selalu pakai `<label for="">` atau `aria-label` |
| Styling form asal-asalan | Pakai pseudo-class + desain konsisten |
| Form statis, submit reload halaman | Form dinamis dengan `fetch` + live search |
| Tidak pikirkan aksesibilitas | Sadar ARIA, kontras warna, navigasi keyboard |

## Checklist Akhir Sebelum "Naik Level"
- [ ] Saya bisa menjelaskan bedanya `readonly` dan `disabled`.
- [ ] Saya bisa membuat validasi custom dengan `setCustomValidity`.
- [ ] Saya tahu kapan pakai `<datalist>` vs `<select>`.
- [ ] Saya bisa membangun live search dengan debounce.
- [ ] Saya bisa membuat form yang accessible (label, fieldset, ARIA).
- [ ] Saya paham kenapa validasi server-side tetap wajib meski sudah ada client-side.

Kalau semua sudah dicentang, kamu siap lanjut ke Kuis!

➡️ Lanjut ke: `13-Kuis-HTML-Form-Lanjutan.md`
