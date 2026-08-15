# Modul 15: Tantangan — Shadow DOM dan Slot pada Image

Latihan gabungan Shadow DOM + Slot, kali ini diterapkan pada kasus **kartu gambar (image card)** — pola yang sangat umum dipakai di galeri produk, artikel, atau poster film.

## Soal Tantangan
Buatlah Custom Element `<image-card>` dengan ketentuan:

1. Punya named slot `image` untuk menyisipkan elemen `<img>` dari luar.
2. Punya named slot `caption` untuk teks keterangan gambar.
3. Gambar harus memenuhi lebar card dan punya `border-radius` di bagian atas saja.
4. Kalau slot `caption` kosong, tampilkan teks fallback **"Tanpa keterangan"**.

## Contoh Kunci Jawaban
```js
class ImageCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          width: 220px;
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          font-family: sans-serif;
        }
        ::slotted(img) {
          width: 100%;
          display: block;
        }
        .caption {
          padding: 10px;
          font-size: 14px;
          color: #444;
        }
      </style>
      <div class="card">
        <slot name="image"></slot>
        <div class="caption">
          <slot name="caption">Tanpa keterangan</slot>
        </div>
      </div>
    `;
  }
}
customElements.define('image-card', ImageCard);
```
```html
<image-card>
  <img slot="image" src="https://picsum.photos/220/150?1" alt="Contoh gambar">
  <span slot="caption">Pemandangan gunung</span>
</image-card>

<image-card>
  <img slot="image" src="https://picsum.photos/220/150?2" alt="Contoh gambar">
  <!-- Tidak ada slot caption -> otomatis tampil "Tanpa keterangan" -->
</image-card>
```

## Poin Penting yang Dilatih
- `::slotted(img)` dipakai untuk styling elemen `<img>` yang disisipkan dari luar — hal ini **tidak bisa** dilakukan dengan CSS biasa terhadap Light DOM tanpa Shadow DOM.
- `overflow: hidden` pada `.card` membuat sudut gambar ikut terpotong mengikuti `border-radius` container, walau gambar aslinya persegi.
- Fallback content pada slot `caption` menunjukkan bagaimana komponen tetap terlihat rapi walau pengguna lupa mengisi keterangan.

## Coba Sendiri
Buka `contoh/index.html`, lalu coba tambahkan slot baru bernama `badge` di pojok kanan atas gambar (misalnya untuk label "Baru" atau "Diskon").
