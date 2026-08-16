# Notes App
### Submission: Membangun Notes App — Belajar Fundamental Front-End Web Development

Aplikasi pencatatan (Notes App) yang dibangun murni dengan **HTML, CSS, dan JavaScript** (tanpa framework), disusun untuk memenuhi seluruh kriteria wajib dan kriteria opsional submission.

---

## Cara Menjalankan

Proyek ini memakai **ES Module** (`import`/`export`), sehingga **tidak bisa** dibuka langsung dengan klik dua kali `index.html` (`file://`) — harus dijalankan lewat local server.

**Opsi 1 — VS Code Live Server**
1. Install ekstensi **Live Server** di VS Code.
2. Klik kanan `index.html` → **Open with Live Server**.

**Opsi 2 — Python**
```bash
python -m http.server 5500
```
Buka `http://localhost:5500` di browser.

**Opsi 3 — Node.js**
```bash
npx serve .
```

> ⚠️ **Catatan penting:** Data pada `js/data/notes-source.js` adalah **data dummy contoh** dengan struktur field yang sama persis dengan data resmi Dicoding. Sebelum submission dikirim, **ganti isi array `dummyNotes`** dengan data dummy resmi dari tautan yang disediakan di halaman Kriteria Wajib 1 — cukup ganti isinya, tidak perlu mengubah kode lain.

---

## Pemetaan Kode ke Setiap Kriteria

### ✅ Kriteria Wajib 1 — Menampilkan Daftar Catatan dengan Baik
- Data dummy didefinisikan di `js/data/notes-source.js`.
- Diambil lewat `fetchNotes()` di `js/data/notes-api.js`, lalu dirender oleh `renderNotes()` di `js/main.js`.
- Catatan aktif dan arsip ditampilkan **terpisah** di dua section berbeda.

### ✅ Kriteria Wajib 2 — Formulir Tambah Catatan
- Ada di `js/components/note-form.js`.
- Dua input: `<input type="text">` untuk judul, `<textarea>` untuk isi (sesuai anjuran memakai tipe input yang tepat untuk teks panjang).

### ✅ Kriteria Wajib 3 — CSS Grid sebagai Metode Layouting
- Lihat `.notes-grid` di `css/style.css`:
  ```css
  .notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }
  ```

### ✅ Kriteria Wajib 4 — Bangun Komponen UI dengan Web Component
Terdapat **4 custom element** (melebihi minimal 3 yang disyaratkan):
| Custom Element | File | Fungsi |
|---|---|---|
| `<app-bar>` | `js/components/app-bar.js` | Header aplikasi |
| `<note-form>` | `js/components/note-form.js` | Form tambah catatan |
| `<note-item>` | `js/components/note-item.js` | Kartu catatan |
| `<loading-indicator>` | `js/components/loading-indicator.js` | Indikator loading |

---

## Pemetaan Kode ke Kriteria Opsional

### ⭐ Opsional 1 — Tampilan Menarik
- Palet warna (`#4c8bf5`, `#6a5acd`) dipilih dengan referensi kombinasi dari [colorhunt.co](https://colorhunt.co).
- Kartu catatan memakai `border-radius`, `box-shadow` halus, dan spacing (`padding`/`gap`) konsisten.
- Font sistem (`Segoe UI`/`Roboto`) dipilih agar mudah dibaca di semua perangkat.

### ⭐ Opsional 2 — Realtime Validation pada Formulir
- Lihat method `validate()` di `js/components/note-form.js`, dipanggil setiap event `input` (bukan hanya saat submit).
- Tombol submit otomatis nonaktif (`disabled`) selama form belum valid, dan pesan error tampil/hilang secara langsung saat mengetik.

### ⭐ Opsional 3 — Custom Attribute pada Custom Element
- Diterapkan pada `<app-bar>` di `index.html`:
  ```html
  <app-bar
    app-title="Notes App"
    app-subtitle="Simpan catatan pentingmu, kapan saja."
  ></app-bar>
  ```
- Atribut ini **ditulis langsung di dokumen HTML** (bukan lewat JS), dipantau lewat `observedAttributes` + `attributeChangedCallback` di `js/components/app-bar.js`.

### ⭐ Opsional 4 — Tampilan Responsive
- `.notes-grid` memakai `auto-fit` + `minmax()` sehingga jumlah kolom otomatis menyesuaikan lebar layar tanpa media query.
- Ditambah `@media (max-width: 600px)` di `css/style.css` untuk menyesuaikan padding & ukuran font di layar kecil (ponsel).

---

## Ketentuan yang Dipatuhi

- ❌ **Tidak** memakai React, Angular, Vue, atau framework JS apa pun — murni HTML/CSS/JS.
- ❌ **Tidak** menyertakan folder `node_modules` (proyek ini bahkan tidak memakai `npm install` sama sekali, karena semua fitur dibangun dengan Web API bawaan browser).
- ✅ Proyek terdiri dari HTML, CSS, JavaScript, dan tidak ada aset eksternal berbayar/berlisensi.

---

## Struktur Folder

```
notes-app/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── components/
    │   ├── app-bar.js
    │   ├── note-form.js
    │   ├── note-item.js
    │   └── loading-indicator.js
    └── data/
        ├── notes-source.js
        └── notes-api.js
```

---

## Checklist Review Mandiri

Sebelum submit, pastikan semua poin berikut sudah dicentang (sesuai halaman Review Mandiri):

- [x] Menampilkan Daftar Catatan dengan Baik
- [x] Formulir Tambah Catatan
- [x] CSS Grid sebagai Metode Layouting
- [x] Bangun Komponen UI dengan Web Component
- [x] *(Opsional)* Tampilan yang Menarik
- [x] *(Opsional)* Realtime Validation pada Formulir
- [x] *(Opsional)* Custom Attribute pada Custom Element
- [x] *(Opsional)* Tampilan Responsive di Berbagai Perangkat
- [ ] **Ganti data dummy** di `js/data/notes-source.js` dengan data resmi dari tautan submission sebelum mengirim
- [ ] Sudah dicoba jalan di browser (tanpa error di Console)
- [ ] Sudah dicoba di ukuran layar kecil (mode responsive DevTools)
- [ ] Tidak menyertakan folder `node_modules` dalam ZIP
- [ ] Nama file ZIP yang dikirim: `notes-app.zip`
