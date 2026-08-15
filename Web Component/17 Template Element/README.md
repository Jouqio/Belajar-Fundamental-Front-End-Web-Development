# Modul 17: Mudah dengan Template Element

## Apa itu `<template>`?
Tag `<template>` adalah tag HTML bawaan yang isinya **tidak langsung dirender** ke halaman kontennya "tersimpan" (inert) sampai kita ambil dan pasang secara manual lewat JavaScript. Ini adalah pilar ketiga Web Component setelah Custom Elements dan Shadow DOM.

## Kenapa Pakai `<template>` daripada Menulis String `innerHTML`?
- **Lebih mudah dibaca** markup ditulis sebagai HTML asli, bukan template string JS yang panjang.
- **Diparsing browser sekali di awal** sedikit lebih efisien untuk komponen yang dipakai berkali-kali.
- **Mendukung syntax highlighting & tooling editor** dengan lebih baik dibanding string JS biasa.

## Contoh Dasar
```html
<template id="card-template">
  <style>
    .card { border: 1px solid #ccc; padding: 12px; border-radius: 8px; }
  </style>
  <div class="card">
    <slot></slot>
  </div>
</template>

<my-card>Konten di dalam card</my-card>

<script>
  class MyCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.getElementById('card-template');
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('my-card', MyCard);
</script>
```

## Penjelasan Kunci
- `template.content` adalah `DocumentFragment` berisi isi template.
- `.cloneNode(true)` **wajib** dipakai kalau tidak, `content` yang sama akan "dipindah" (bukan disalin) ke komponen pertama saja, dan komponen berikutnya jadi kosong.

## Menggabungkan Template di Dalam Script (Tanpa HTML Terpisah)
Kadang lebih praktis mendefinisikan template langsung di JavaScript menggunakan template literal, lalu mem-parsingnya:
```js
class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>.card { border: 1px solid #ccc; padding: 12px; }</style>
      <div class="card"><slot></slot></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('my-card', MyCard);
```
Pendekatan ini populer karena komponen jadi **satu file mandiri** tidak butuh tag `<template>` terpisah di HTML halaman.

## Kapan Pakai `<template>` di HTML vs di JS?
| Pendekatan | Cocok untuk |
|---|---|
| `<template>` di HTML halaman | Komponen yang hanya dipakai di satu halaman tertentu |
| `template` dibuat via JS (`createElement`) | Komponen mandiri/reusable yang didistribusikan sebagai satu file `.js` |

## Ringkasan Tiga Pilar Web Component
Sampai modul ini, kamu sudah menguasai ketiga pilar utama Web Component:
1. **Custom Elements** (Modul 3-9) mendefinisikan tag & perilaku.
2. **Shadow DOM** (Modul 10-16) mengisolasi struktur & style.
3. **HTML Template** (Modul 17) mendefinisikan markup yang efisien & reusable.
