# Modul 16: Lebih Lanjut dalam Shadow DOM

Modul ini membahas fitur-fitur Shadow DOM lanjutan yang berguna untuk membangun komponen yang lebih matang.

## 1. Event `slotchange`
Terpicu setiap kali konten yang disisipkan ke sebuah `<slot>` berubah:
```js
this.shadowRoot.querySelector('slot').addEventListener('slotchange', (e) => {
  console.log('Konten slot berubah:', e.target.assignedNodes());
});
```
Berguna misalnya untuk menghitung ulang jumlah item yang disisipkan ke sebuah slot.

## 2. `assignedElements()` dan `assignedNodes()`
```js
const slot = this.shadowRoot.querySelector('slot');
console.log(slot.assignedElements()); // hanya elemen HTML
console.log(slot.assignedNodes());    // termasuk text node
```

## 3. Styling Host dengan `:host` dan `:host()`
`:host` merujuk ke elemen host itu sendiri (elemen custom-nya), dari **dalam** Shadow DOM:
```css
:host {
  display: block;
  border: 1px solid #ccc;
}
```
`:host(kondisi)` — styling kondisional berdasar atribut/class pada host:
```css
:host([disabled]) {
  opacity: 0.5;
  pointer-events: none;
}
```
```html
<my-button disabled></my-button>
```

## 4. `:host-context()`
Styling berdasarkan konteks nenek moyang di luar Shadow DOM (dukungan browser terbatas, gunakan dengan hati-hati):
```css
:host-context(.dark-mode) {
  background: black;
  color: white;
}
```

## 5. Adopted Stylesheets (Cara Modern Berbagi CSS Antar Komponen)
Daripada menulis ulang `<style>` di setiap komponen, kita bisa membuat satu `CSSStyleSheet` dan memakainya di banyak Shadow Root:
```js
const sheet = new CSSStyleSheet();
sheet.replaceSync(`p { color: teal; }`);

class MyText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.shadowRoot.innerHTML = `<p>Teks berwarna teal</p>`;
  }
}
customElements.define('my-text', MyText);
```
Ini lebih efisien secara memori dibanding menulis `<style>` berulang di setiap instance komponen.

## 6. Shadow DOM Bersarang (Nested Shadow Root)
Sebuah komponen dengan Shadow DOM bisa berisi komponen lain yang juga punya Shadow DOM sendiri — masing-masing tetap terisolasi satu sama lain, membentuk struktur seperti "boneka matryoshka".

## Ringkasan
Fitur-fitur lanjutan ini tidak selalu dipakai di komponen sederhana, tapi sangat berguna ketika kamu mulai membangun **design system** skala besar dengan banyak komponen yang saling berbagi style dan berinteraksi satu sama lain.
