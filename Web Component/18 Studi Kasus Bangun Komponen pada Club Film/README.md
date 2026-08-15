# Modul 18: Studi Kasus — Bangun Komponen pada Club Film

Praktik nyata: membangun komponen `<film-card>` yang reusable untuk website "Club Film", menggabungkan **semua** materi yang sudah dipelajari Custom Element, Shadow DOM, Slot, Template, dan Custom Attribute.

## Fitur Komponen yang Akan Dibangun
- Menerima atribut `title`, `year`, dan `rating`.
- Punya slot `poster` untuk gambar poster film.
- Punya named slot `genre` untuk menampilkan badge genre (bisa lebih dari satu).
- Tampilan sepenuhnya terisolasi lewat Shadow DOM.
- Bereaksi otomatis kalau atribut `rating` diubah lewat JavaScript.

## Kode Lengkap
Kode lengkapnya ada di `contoh/index.html`. Berikut struktur class-nya:

```js
class FilmCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .card {
          width: 220px;
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          font-family: sans-serif;
          box-shadow: 0 2px 6px rgba(0,0,0,.1);
        }
        ::slotted(img) { width: 100%; display: block; }
        .info { padding: 10px; }
        .title { font-weight: bold; font-size: 16px; }
        .meta { color: #777; font-size: 13px; margin: 4px 0; }
        .rating { color: #f5a623; font-weight: bold; }
        .genres { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 6px; }
        ::slotted([slot="genre"]) {
          background: #eee;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 11px;
        }
      </style>
      <div class="card">
        <slot name="poster"></slot>
        <div class="info">
          <div class="title"></div>
          <div class="meta">
            <span class="year"></span> • <span class="rating"></span>
          </div>
          <div class="genres"><slot name="genre"></slot></div>
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['title', 'year', 'rating'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.querySelector('.title').textContent = this.getAttribute('title') || 'Tanpa Judul';
    this.shadowRoot.querySelector('.year').textContent = this.getAttribute('year') || '-';
    this.shadowRoot.querySelector('.rating').textContent = '⭐ ' + (this.getAttribute('rating') || '-');
  }
}
customElements.define('film-card', FilmCard);
```

## Pemakaian di HTML
```html
<film-card title="Inception" year="2010" rating="8.8">
  <img slot="poster" src="https://picsum.photos/220/300?1" alt="Poster">
  <span slot="genre">Sci-Fi</span>
  <span slot="genre">Thriller</span>
</film-card>
```

## Uji Reaktivitas
```js
document.querySelector('film-card').setAttribute('rating', '9.5');
// tampilan rating otomatis update tanpa reload
```

## Konsep yang Dipraktikkan di Studi Kasus Ini
| Konsep | Diterapkan di |
|---|---|
| Custom Element + `observedAttributes` | Atribut `title`, `year`, `rating` |
| Shadow DOM | Isolasi seluruh style `.card` |
| Named Slot | `poster` dan `genre` (bisa lebih dari satu elemen) |
| `::slotted()` | Styling gambar poster & badge genre dari luar |
| `<template>` via JS | Struktur markup card yang efisien |

## Tantangan Lanjutan
Coba tambahkan slot baru bernama `sinopsis` untuk menampilkan ringkasan cerita film di bagian bawah card, lengkap dengan fallback text "Sinopsis belum tersedia" kalau slot kosong.
