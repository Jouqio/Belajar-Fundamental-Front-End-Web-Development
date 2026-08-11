# 0. Pengantar HTML Form Lanjutan

## Kenapa Belajar Form Lagi?

Form adalah salah satu elemen HTML yang paling sering dipakai — mulai dari login, pendaftaran, checkout belanja, sampai pencarian. Di tahap dasar, biasanya kamu sudah kenal `<input>`, `<label>`, dan `<button>`. Di modul **lanjutan** ini kita akan masuk lebih dalam ke:

- Elemen-elemen form yang jarang dipakai tapi powerful (`<fieldset>`, `<datalist>`, `<output>`, dll)
- Berbagai jenis `type` pada `<input>` yang sering terlewat
- Atribut-atribut yang mengontrol perilaku field secara detail
- Validasi data bawaan browser (tanpa JavaScript) maupun dengan JavaScript
- Auto-completion agar pengguna mengisi form lebih cepat
- Styling form modern dengan CSS
- Interaksi form yang lebih dinamis dengan JavaScript
- Semantik HTML agar form ramah aksesibilitas (accessibility)
- Best practice dari developer profesional
- Studi kasus nyata: membangun **Club Finder App**

## Tujuan Akhir Modul

Setelah menyelesaikan modul ini kamu diharapkan mampu:

1. Membangun form yang **fungsional**, **aman**, dan **mudah diakses** (accessible).
2. Memvalidasi input pengguna secara otomatis sebelum data dikirim ke server.
3. Menulis form yang semantik sehingga mudah dibaca screen reader dan mesin pencari.
4. Menstyling form agar enak dipandang dan konsisten dengan desain aplikasi.
5. Menambahkan interaktivitas dengan JavaScript (misalnya validasi real-time, autocomplete kustom).

## Struktur Form Dasar (Penyegaran Cepat)

```html
<form action="/submit" method="POST">
  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama" required>

  <button type="submit">Kirim</button>
</form>
```

Ingat 3 hal penting:
- `action` → ke mana data dikirim.
- `method` → `GET` (data tampil di URL, untuk pencarian) atau `POST` (data tersembunyi di body request, untuk data sensitif/besar).
- `name` pada setiap field → **wajib** ada, karena inilah yang dikirim ke server sebagai key-value pair.

## Peta Belajar Modul Ini

```
Elemen Form → Form Field → Atribut Field → Validasi
      ↓
Auto Completion → Styling → JavaScript → Semantik
      ↓
Best Practice → Studi Kasus (Club Finder App) → Rangkuman → Kuis
```

➡️ Lanjut ke: `01-Pendalaman-Elemen-Form.md`
