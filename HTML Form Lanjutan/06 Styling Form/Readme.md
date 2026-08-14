# 6. Styling Form

Form yang fungsional saja tidak cukup tampilan yang rapi meningkatkan kepercayaan dan kenyamanan pengguna.

## Reset Dasar
Elemen form punya style bawaan browser yang berbeda-beda. Mulai dengan reset ringan:

```css
input, textarea, select, button {
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
}
```

## Styling Input Dasar

```css
.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.field label {
  font-weight: 600;
  font-size: 0.9rem;
}

.field input,
.field textarea,
.field select {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

## Pseudo-class Penting untuk Form

| Pseudo-class | Kapan Aktif |
|---------------|-------------|
| `:focus` | Saat field sedang aktif diklik/diketik |
| `:hover` | Saat kursor di atas field |
| `:disabled` | Saat field dinonaktifkan |
| `:required` | Field wajib diisi |
| `:valid` / `:invalid` | Sesuai/tidak sesuai aturan validasi |
| `:checked` | Checkbox/radio yang dicentang |
| `:placeholder-shown` | Saat placeholder masih terlihat (belum diisi) |

```css
input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}
input:valid:not(:placeholder-shown) {
  border-color: #22c55e;
}
```

## Custom Checkbox & Radio (Sederhana)

```css
input[type="checkbox"],
input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #3b82f6; /* cara mudah ganti warna tanpa hack CSS rumit */
}
```

## Styling Button Submit

```css
button[type="submit"] {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #2563eb;
}

button[type="submit"]:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}
```

## Layout Form dengan Flexbox/Grid

```css
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr; /* jadi 1 kolom di layar kecil */
  }
}
```

## Prinsip Desain Form yang Baik
1. **Konsistensi** — padding, border-radius, warna sama di semua field.
2. **Feedback jelas** — warna merah/hijau untuk invalid/valid, tapi jangan hanya andalkan warna (tambahkan ikon/teks untuk aksesibilitas warna buta).
3. **Spacing cukup** — jangan field terlalu rapat, sulit diklik di HP.
4. **Ukuran target sentuh** — minimal 44x44px untuk elemen yang diklik di mobile.

Contoh lengkap form yang sudah distyling ada di `examples/06-styling-form.html`.

➡️ Lanjut ke: `07-Lebih-Maju-dengan-JavaScript.md`
