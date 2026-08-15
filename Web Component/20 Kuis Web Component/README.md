# Modul 20: Kuis Web Component

Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah.

1. Apa syarat wajib penamaan tag pada Custom Element?
2. Sebutkan tiga pilar utama teknologi Web Component.
3. Method apa yang harus dipanggil pertama kali di dalam `constructor()` sebuah Custom Element?
4. Lifecycle callback apa yang terpanggil saat elemen dihapus dari DOM?
5. Apa fungsi `static get observedAttributes()`?
6. Apa perbedaan mode `open` dan `closed` pada `attachShadow()`?
7. Apa fungsi tag `<slot>` di dalam Shadow DOM?
8. Bagaimana cara membuat "lubang" penyisipan konten yang lebih dari satu (named slot)?
9. Pseudo-element apa yang dipakai untuk styling konten yang disisipkan ke dalam slot dari luar?
10. Kenapa `template.content.cloneNode(true)` penting saat memakai `<template>` untuk banyak instance komponen?

<details>
<summary>Klik untuk lihat kunci jawaban</summary>

1. Nama tag wajib mengandung tanda hubung (`-`), contoh: `user-card`, `my-button`.
2. Custom Elements, Shadow DOM, dan HTML Template.
3. `super()` — wajib dipanggil sebelum kode lain di constructor.
4. `disconnectedCallback()`.
5. Mendaftarkan atribut mana saja yang ingin dipantau perubahannya, agar `attributeChangedCallback()` bisa terpicu.
6. Mode `open` memungkinkan `shadowRoot` diakses dari luar (`element.shadowRoot`), sedangkan mode `closed` membuat `element.shadowRoot` bernilai `null` dari luar.
7. `<slot>` berfungsi sebagai "lubang" di Shadow DOM yang otomatis diisi oleh konten Light DOM yang ditulis di antara tag pembuka-penutup komponen.
8. Dengan memberi nama pada slot menggunakan atribut `name`, contoh `<slot name="judul"></slot>`, lalu elemen dari luar diberi atribut `slot="judul"` yang sesuai.
9. `::slotted()`, contoh: `::slotted(img) { ... }`.
10. Karena `template.content` adalah referensi tunggal — tanpa `cloneNode(true)`, konten akan "dipindahkan" (bukan disalin) ke instance komponen pertama saja, membuat instance berikutnya kosong.

</details>

## Selamat!
Kamu telah menyelesaikan seluruh materi **Web Component**. Lanjutkan dengan mempraktikkan pembuatan komponen nyata untuk memperkuat pemahamanmu, dan pertimbangkan mempelajari library seperti **Lit** untuk pengalaman development yang lebih ringkas.
