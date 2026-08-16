# Modul 2: Submission : Membangun Notes App

Proyek ini adalah aplikasi **Notes App** (catatan) sederhana yang dibangun murni dengan HTML, CSS, dan JavaScript tanpa framework sebagai penerapan nyata dari materi **CSS Grid** dan **Web Component** yang sudah dipelajari sebelumnya.

Kode lengkapnya ada di folder [`project/`](./project). Modul ini menjelaskan **cara kerja**, **alasan desain**, dan **potongan kode penting** agar mudah dipahami pemula.

---

## 1. Kriteria Fungsional Aplikasi

Aplikasi ini memenuhi kriteria umum sebuah submission Notes App:

| # | Kriteria | Status |
|---|---|---|
| 1 | Menambahkan catatan baru lewat form | ✅ |
| 2 | Menampilkan daftar catatan (aktif & diarsipkan terpisah) | ✅ |
| 3 | Menghapus catatan | ✅ |
| 4 | Mengarsipkan / mengaktifkan kembali catatan | ✅ |
| 5 | Data tetap ada setelah halaman di-refresh (persist ke `localStorage`) | ✅ |
| 6 | Validasi input form (judul & isi tidak boleh kosong) | ✅ |
| 7 | Ada indikator loading saat data sedang dimuat | ✅ |
| 8 | Tampilan responsif (grid otomatis menyesuaikan lebar layar) | ✅ |
| 9 | Kode terorganisir & dipisah berdasarkan tanggung jawab (clean code) | ✅ |

---

## 2. Struktur Folder Proyek

```
project/
├── index.html                     # Struktur halaman utama
├── .gitignore
├── css/
│   └── style.css                  # Style global (layout & grid)
└── js/
    ├── main.js                    # Entry point: render & event handling
    ├── components/                # Web Component (UI)
    │   ├── app-bar.js
    │   ├── note-form.js
    │   ├── note-item.js
    │   └── loading-indicator.js
    └── data/
        └── notes-api.js           # Lapisan data (simulasi API + localStorage)
```

Struktur ini memisahkan tiga tanggung jawab utama:
- **`components/`**  bagaimana tampilan (UI) dibangun dan berperilaku sendiri.
- **`data/`**  bagaimana data disimpan, diambil, dan diubah.
- **`main.js`**  "penghubung" yang mengatur bagaimana UI dan data saling berkomunikasi.

Pemisahan ini adalah praktik **clean code** dasar: setiap file punya satu tanggung jawab yang jelas, sehingga mudah dibaca, diuji, dan dikembangkan lebih lanjut.

---

## 3. Arsitektur & Alur Data

Aplikasi ini memakai pola **"komponen anak melapor lewat event, induk yang memutuskan"**  pola dasar yang sama seperti dipelajari di materi Web Component (Modul 8: Nested Custom Element).

```
┌─────────────┐     event "note-added"      ┌──────────┐
│ <note-form> │ ───────────────────────────▶ │          │
└─────────────┘                              │          │      ┌────────────────┐
                                              │ main.js  │ ───▶ │ notes-api.js   │
┌─────────────┐  event "note-delete"         │          │      │ (localStorage) │
│ <note-item> │ ───────────────────────────▶ │          │ ◀─── └────────────────┘
└─────────────┘  event "note-archive-toggle" └──────────┘
                                                    │
                                                    ▼
                                         renderNotes() memperbarui
                                         tampilan <note-item> di layar
```

**Kenapa desain ini dipilih?**
- Komponen (`note-form`, `note-item`) **tidak tahu-menahu** soal `localStorage` atau cara data disimpan  mereka hanya fokus pada tampilan dan interaksi pengguna.
- `main.js` **tidak perlu tahu** detail HTML/CSS di dalam komponen ia cukup mendengarkan event dan memanggil fungsi data.
- Kalau nanti `notes-api.js` diganti untuk memanggil server sungguhan (`fetch('/api/notes')`), **tidak ada kode lain yang perlu diubah**.

---

## 4. Penjelasan Tiap Bagian Kode

### 4.1 `notes-api.js` — Lapisan Data

Semua fungsi di sini `async` dan mengembalikan `Promise`, meniru pola pemanggilan REST API:

```js
export async function fetchNotes() {
  await delay(800); // simulasi network delay
  let notes = readFromStorage();
  if (!notes) {
    notes = initialNotes;
    writeToStorage(notes);
  }
  return notes;
}
```

`delay(800)` sengaja ditambahkan supaya ada jeda waktu yang membuat **loading indicator** benar-benar terlihat mensimulasikan kondisi nyata saat aplikasi menunggu respons server.

Fungsi `createNote`, `deleteNote`, dan `toggleArchiveNote` semuanya mengembalikan **seluruh daftar catatan terbaru** (bukan cuma data yang berubah), supaya `main.js` bisa langsung me-render ulang tanpa perlu memanggil `fetchNotes()` lagi:

```js
export async function createNote({ title, body }) {
  await delay(300);
  const notes = readFromStorage() || [];
  const newNote = {
    id: generateId(),
    title,
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };
  const updatedNotes = [newNote, ...notes];
  writeToStorage(updatedNotes);
  return updatedNotes;
}
```

### 4.2 `note-form.js` — Form Tambah Catatan (Web Component)

Komponen ini memvalidasi input sebelum mengirim data:

```js
if (title === '') {
  titleError.textContent = 'Judul tidak boleh kosong.';
  isValid = false;
}
if (body === '') {
  bodyError.textContent = 'Isi catatan tidak boleh kosong.';
  isValid = false;
}
if (!isValid) return;
```

Setelah valid, data dikirim ke luar lewat **custom event**, bukan dengan memanggil fungsi API secara langsung dari dalam komponen:

```js
this.dispatchEvent(
  new CustomEvent('note-added', {
    bubbles: true,
    composed: true, // wajib agar event menembus batas Shadow DOM
    detail: { title, body },
  })
);
```

> **Kenapa `composed: true` penting?** Karena `note-form` memakai Shadow DOM, event yang di-dispatch dari dalamnya secara default **tidak akan keluar** dari batas Shadow DOM. `composed: true` membuat event tersebut bisa "menembus" ke `document`, tempat `main.js` mendengarkannya.

### 4.3 `note-item.js` — Kartu Catatan (Web Component)

Menerima data lewat **properti JavaScript**, bukan atribut HTML biasa, karena datanya berupa object:

```js
set note(value) {
  this._note = value;
  this.render();
}
```
```js
const noteElement = document.createElement('note-item');
noteElement.note = note; // <- properti, bukan setAttribute()
container.appendChild(noteElement);
```

Setiap kali properti `note` diisi ulang, tampilan otomatis dirender ulang lewat `render()`.

Tombol hapus meminta konfirmasi sebelum mengirim event, mencegah penghapusan tidak sengaja:

```js
const confirmed = confirm(`Hapus catatan "${title}"? Tindakan ini tidak bisa dibatalkan.`);
if (confirmed) {
  this.dispatchEvent(new CustomEvent('note-delete', {
    bubbles: true, composed: true, detail: { id }
  }));
}
```

Komponen ini juga memakai fungsi `escapeHtml()` untuk mencegah teks catatan pengguna dirender sebagai HTML mentah langkah keamanan dasar (mencegah *XSS* sederhana) yang baik dibiasakan sejak awal belajar.

### 4.4 `main.js` — Menghubungkan Semuanya

```js
document.addEventListener('note-added', async (event) => {
  const updatedNotes = await createNote(event.detail);
  renderNotes(updatedNotes);
});
```

Pola di atas diulang untuk ketiga jenis event (`note-added`, `note-delete`, `note-archive-toggle`) selalu: **terima event → panggil fungsi data → render ulang tampilan**. Konsistensi pola ini membuat kode mudah diikuti alurnya walau aplikasinya berkembang lebih besar.

### 4.5 `style.css` — Layout dengan CSS Grid

```css
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```
Teknik `auto-fit` + `minmax()` ini sama persis dengan yang dipelajari di **Modul 8 materi CSS Grid**  daftar catatan otomatis menyesuaikan jumlah kolom sesuai lebar layar, tanpa perlu menulis media query sama sekali.

---

## 5. Cara Menjalankan

Lihat [README utama Proyek Awal](../README.md#menjalankan-proyek) untuk instruksi lengkap. Ringkasnya:
```bash
cd project
npx serve .
```
Lalu buka alamat yang muncul di terminal (biasanya `http://localhost:3000`).

---

## 6. Cara Menguji Aplikasi Sendiri

Coba skenario berikut untuk memastikan semua fitur berjalan:
1. **Tambah catatan**  isi judul & isi, klik "Tambah Catatan". Catatan baru harus langsung muncul di bagian "Catatan Aktif".
2. **Validasi kosong**  coba submit form tanpa mengisi apa pun. Harus muncul pesan error, dan catatan **tidak** boleh ikut tertambah.
3. **Arsipkan**  klik "Arsipkan" pada sebuah catatan. Catatan harus berpindah ke bagian "Arsip".
4. **Kembalikan dari arsip**  klik "Aktifkan" pada catatan yang sudah diarsipkan.
5. **Hapus**  klik "Hapus", konfirmasi dialog harus muncul sebelum catatan benar-benar hilang.
6. **Persistensi data**  refresh halaman (F5). Semua catatan (termasuk yang sudah kamu tambah/arsipkan/hapus) harus tetap sesuai kondisi terakhir.
7. **Cek console**  buka DevTools → Console, pastikan tidak ada pesan error berwarna merah.

---

## 7. Ide Pengembangan Lanjutan (Opsional)

Kalau ingin melatih diri lebih jauh, coba tambahkan sendiri:
- Fitur **pencarian** catatan berdasarkan judul.
- **Animasi transisi** saat catatan ditambah/dihapus.
- Tombol **edit** catatan (ubah judul/isi catatan yang sudah ada).
- Mode gelap (**dark mode**) memakai CSS Custom Properties.
- Mengganti `notes-api.js` agar benar-benar memanggil REST API (misalnya `fetch()` ke server Express.js sederhana), tanpa mengubah kode di `main.js` maupun komponen — untuk membuktikan bahwa arsitektur ini benar-benar terpisah dengan baik antara data dan tampilan.
