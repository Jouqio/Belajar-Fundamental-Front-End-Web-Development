# Modul 11: Dia Adalah Shadow DOM

## Membuat Shadow Root dengan `attachShadow()`
```js
class SimpleBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<p>Saya berada di dalam Shadow DOM.</p>`;
  }
}
customElements.define('simple-box', SimpleBox);
```
> **Praktik terbaik:** panggil `attachShadow()` di dalam `constructor()`, bukan `connectedCallback()`, karena Shadow Root idealnya hanya dibuat sekali seumur hidup elemen.

## Mode `open` vs `closed`

### Mode `open` (paling umum dipakai)
```js
this.attachShadow({ mode: 'open' });
```
Shadow Root bisa diakses dari luar lewat `element.shadowRoot`:
```js
console.log(document.querySelector('simple-box').shadowRoot); // bisa diakses
```

### Mode `closed`
```js
this.attachShadow({ mode: 'closed' });
```
`element.shadowRoot` akan bernilai `null` dari luar — struktur internal benar-benar tersembunyi:
```js
console.log(document.querySelector('simple-box').shadowRoot); // null
```

## Kapan Pakai `closed`?
Jarang dipakai dalam praktik nyata — kebanyakan library dan design system (termasuk komponen bawaan browser seperti `<video>`) tetap memakai `open` karena `closed` menyulitkan testing dan debugging tanpa manfaat keamanan yang signifikan (developer tetap bisa mengaksesnya dengan trik tertentu).

## Perbedaan Shadow DOM vs `innerHTML` Biasa

| Aspek | `innerHTML` biasa | Shadow DOM |
|---|---|---|
| CSS di dalam bocor keluar? | Ya | Tidak |
| CSS dari luar tembus masuk? | Ya | Tidak (kecuali CSS custom properties & beberapa pengecualian) |
| Terlihat sebagai node terpisah di DevTools? | Tidak | Ya (`#shadow-root`) |
| Query dari luar (`document.querySelector`) | Bisa jangkau isinya | Tidak bisa jangkau langsung, harus lewat `.shadowRoot` |

## Coba Sendiri
Buka `contoh/index.html`, lalu buka DevTools → Elements. Kamu akan melihat label `#shadow-root (open)` di dalam tag `<simple-box>` — inilah bukti visual bahwa Shadow DOM benar-benar terpisah dari Light DOM.
