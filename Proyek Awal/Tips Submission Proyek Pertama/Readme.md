# Modul 1: Tips Submission — Proyek Pertama

Sebelum mulai mengerjakan, penting untuk memahami **apa yang dinilai** dan **bagaimana cara mengerjakan submission dengan baik**. Modul ini membahas strategi umum yang berlaku untuk hampir semua submission proyek front-end pemula.

## Apa Itu "Submission"?

Submission adalah proyek yang kamu kerjakan dan kumpulkan sebagai bukti bahwa kamu sudah memahami materi yang diajarkan. Berbeda dari latihan biasa, submission biasanya punya **kriteria wajib** yang harus dipenuhi, dan sering juga ada **kriteria opsional** untuk nilai tambah (saran/rekomendasi).

## Struktur Umum Kriteria Penilaian

Kriteria penilaian biasanya dibagi dua level:

### Kriteria Wajib (Wajib Dipenuhi)
Kalau salah satu kriteria wajib tidak terpenuhi, submission biasanya otomatis tidak lulus, walau bagian lain sudah bagus. Contoh kriteria wajib pada proyek Notes App:
- Aplikasi bisa menambah catatan baru.
- Aplikasi bisa menghapus catatan.
- Data catatan tetap ada meski halaman di-refresh (persist).
- Tidak ada error di console browser.

### Kriteria Opsional/Saran (Nilai Tambah)
Tidak wajib, tapi meningkatkan kualitas submission dan sering jadi pembeda submission "lulus" vs "lulus dengan predikat baik". Contoh:
- Tampilan responsif di berbagai ukuran layar.
- Ada animasi/transisi yang halus.
- Kode terorganisir rapi dengan pemisahan tanggung jawab (separation of concerns).
- Ada indikator loading saat data sedang diproses.

## Tips Praktis Mengerjakan Submission

### 1. Baca Kriteria Sampai Tuntas Sebelum Mulai Coding
Kesalahan paling umum pemula: langsung coding tanpa membaca seluruh kriteria, sehingga harus banyak refactor di tengah jalan. Buat **checklist** dari semua kriteria sebelum menulis baris kode pertama.

### 2. Rencanakan Struktur File Dulu
Sebelum menulis kode, gambarkan dulu (di kertas/catatan) struktur folder dan file apa saja yang dibutuhkan. Contoh pola umum:
```
project/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── components/
```

### 3. Kerjakan Fitur Inti (Wajib) Dulu, Baru Fitur Tambahan
Jangan tergoda membuat animasi cantik dulu sebelum fitur utama (misalnya CRUD catatan) benar-benar berfungsi. Urutan yang disarankan:
1. Fitur wajib berfungsi dengan benar (walau tampilan masih polos).
2. Perbaiki struktur kode (clean code, pemisahan file).
3. Baru percantik tampilan & tambahkan fitur opsional.

### 4. Selalu Cek Console Browser
Buka DevTools → Console setiap kali menguji aplikasi. Banyak submission gagal bukan karena fitur tidak ada, tapi karena ada **error JavaScript** yang membuat sebagian fitur diam-diam tidak berjalan.

### 5. Tulis Kode yang "Bersih" (Clean Code)
- Beri nama variabel dan fungsi yang **jelas maksudnya** (`renderNotes()` lebih baik dari `f1()`).
- Satu fungsi sebaiknya melakukan **satu tanggung jawab** saja.
- Hindari duplikasi kode — kalau ada logika yang sama diulang di banyak tempat, jadikan fungsi terpisah.
- Beri komentar pada bagian kode yang logikanya tidak langsung terlihat jelas, tapi jangan berlebihan mengomentari hal yang sudah jelas dari nama variabelnya.

### 6. Uji Coba Sendiri Sebelum Submit
Coba jalankan semua skenario penggunaan seperti calon reviewer:
- Apa yang terjadi kalau form dikosongkan lalu disubmit?
- Apa yang terjadi kalau menambah banyak catatan sekaligus?
- Apa yang terjadi kalau halaman di-refresh?

## Checklist Sebelum Mengumpulkan
- [ ] Semua kriteria wajib sudah dicoba dan berfungsi.
- [ ] Tidak ada error merah di Console browser.
- [ ] Kode sudah dirapikan (indentasi konsisten, tidak ada `console.log` sisa debugging).
- [ ] README proyek menjelaskan cara menjalankan aplikasi.
- [ ] Sudah dicoba di browser yang berbeda (minimal Chrome) atau ukuran layar berbeda.

## Lanjut ke Proyek
Setelah memahami tips di atas, lanjutkan ke [Modul 2: Submission : Membangun Notes App](../Submission Membangun Notes App/README.md) untuk mulai membangun proyek nyatanya.
