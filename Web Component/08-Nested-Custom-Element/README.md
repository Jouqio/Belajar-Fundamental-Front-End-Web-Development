# Modul 8: Nested Custom Element

Custom Element bisa **disarangkan (nested)** di dalam Custom Element lain, persis seperti tag HTML biasa bisa saling bersarang.

## Contoh Sederhana
```html
<user-list>
  <user-item name="Andi"></user-item>
  <user-item name="Siti"></user-item>
  <user-item name="Rudi"></user-item>
</user-list>
```
```js
class UserItem extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    this.innerHTML = `<li>${this.getAttribute('name')}</li>`;
  }
}
customElements.define('user-item', UserItem);

class UserList extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    // Elemen anak (user-item) tetap dirender oleh dirinya sendiri
  }
}
customElements.define('user-list', UserList);
```

## Komponen Induk Membuat Komponen Anak Secara Dinamis
Kadang kita ingin komponen induk yang **membangun** elemen anaknya lewat JavaScript, bukan lewat HTML manual:
```js
class UserList extends HTMLElement {
  connectedCallback() {
    const data = ['Andi', 'Siti', 'Rudi'];
    this.innerHTML = data
      .map(nama => `<user-item name="${nama}"></user-item>`)
      .join('');
  }
}
customElements.define('user-list', UserList);
```
```html
<user-list></user-list>
```
Browser akan otomatis "meng-upgrade" tag `<user-item>` yang baru ditambahkan menjadi Custom Element yang berfungsi penuh, selama `user-item` sudah pernah di-`define()` sebelumnya.

## Komunikasi Antar Komponen Nested

**Dari induk ke anak** — lewat atribut (seperti contoh di atas) atau lewat properti JS langsung:
```js
const item = document.querySelector('user-item');
item.setAttribute('name', 'Baru');
```

**Dari anak ke induk** — lewat **custom event** (`CustomEvent`):
```js
class UserItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Hapus ${this.getAttribute('name')}</button>`;
    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('hapus-user', {
        bubbles: true,
        detail: { name: this.getAttribute('name') }
      }));
    });
  }
}
```
```js
document.querySelector('user-list').addEventListener('hapus-user', (e) => {
  console.log('Menghapus:', e.detail.name);
});
```
`bubbles: true` penting agar event bisa "naik" ke elemen induk, sama seperti event bawaan browser (`click`, dll).

## Kenapa Ini Penting?
Pola nested + custom event ini adalah dasar dari **arsitektur komponen** — mirip konsep "parent-child communication" di React (props turun, event naik), tapi sepenuhnya native tanpa framework.
