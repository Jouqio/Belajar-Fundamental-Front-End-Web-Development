# Modul 14: Fleksibel dengan Slot Element

## Masalah: Bagaimana Menyisipkan Konten dari Luar?
Sejauh ini, semua konten Shadow DOM kita datang dari atribut (string sederhana). Tapi bagaimana kalau kita ingin pengguna komponen menyisipkan **HTML bebas** dari luar — mirip `children` di React?

## Solusi: Tag `<slot>`
`<slot>` adalah "lubang" di dalam Shadow DOM yang akan diisi otomatis oleh konten yang ditulis di antara tag pembuka-penutup komponen di Light DOM.

```js
class InfoBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .box { border: 1px solid #ccc; padding: 12px; border-radius: 8px; }
      </style>
      <div class="box">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('info-box', InfoBox);
```
```html
<info-box>
  <p>Ini konten dari Light DOM yang disisipkan lewat slot!</p>
</info-box>
```
Hasilnya: `<p>` tersebut akan tampil di dalam `.box`, padahal `.box` sendiri berada di Shadow DOM.

## Named Slot — Beberapa "Lubang" Sekaligus
Kalau butuh lebih dari satu titik penyisipan, beri nama pada tiap slot:
```js
this.shadowRoot.innerHTML = `
  <div class="card">
    <header><slot name="judul"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="aksi"></slot></footer>
  </div>
`;
```
```html
<my-card>
  <span slot="judul">Judul Kartu</span>
  <p>Ini konten utama tanpa nama slot, otomatis masuk ke slot default.</p>
  <button slot="aksi">OK</button>
</my-card>
```
- Elemen dengan atribut `slot="nama"` akan masuk ke `<slot name="nama">` yang cocok.
- Elemen **tanpa** atribut `slot` akan masuk ke `<slot>` default (tanpa nama).

## Fallback Content (konten default kalau slot kosong)
```html
<slot name="judul">Judul Default</slot>
```
Kalau pengguna tidak mengisi `slot="judul"`, teks "Judul Default" akan tampil sebagai gantinya.

## Styling Konten Slot dari Dalam Shadow DOM
Gunakan pseudo-element `::slotted()`:
```css
::slotted(p) {
  color: green;
  font-style: italic;
}
```
> Catatan: `::slotted()` hanya bisa menyeleksi elemen **langsung** yang disisipkan ke slot (top-level), tidak bisa menembus ke anak-anaknya lebih dalam.

## Kenapa Slot Penting?
Slot membuat komponen kita jauh lebih **fleksibel** — sama seperti kita bisa mengisi `<button>Apa saja di sini</button>` dengan teks/ikon bebas, komponen custom kita pun bisa menerima konten dinamis dari pengguna tanpa kehilangan enkapsulasi style internalnya.
