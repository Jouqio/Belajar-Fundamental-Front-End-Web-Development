# Modul 4: Define dan Render Custom Element

## `customElements.define()` Secara Detail
```js
customElements.define(nama_tag, class_component, opsi);
```
- `nama_tag` string, wajib mengandung tanda hubung.
- `class_component` class yang extends `HTMLElement`.
- `opsi` object opsional, biasanya dipakai untuk **customized built-in element** (extend tag bawaan seperti `button`).

## Dua Cara Membuat Custom Element

### 1. Autonomous Custom Element (paling umum)
Tag sepenuhnya baru, tidak berdasar tag bawaan:
```js
class MyBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<span style="background:orange;padding:4px 8px;border-radius:4px;">Baru</span>`;
  }
}
customElements.define('my-badge', MyBadge);
```
```html
<my-badge></my-badge>
```

### 2. Customized Built-in Element
Memperluas tag HTML bawaan, misalnya `<button>`:
```js
class FancyButton extends HTMLButtonElement {
  connectedCallback() {
    this.style.background = 'purple';
    this.style.color = 'white';
  }
}
customElements.define('fancy-button', FancyButton, { extends: 'button' });
```
```html
<button is="fancy-button">Klik Saya</button>
```
> Catatan: dukungan browser untuk customized built-in element tidak seluas autonomous element (Safari belum mendukung penuh), jadi autonomous element lebih disarankan untuk pemula.

## Proses "Render" pada Custom Element
Berbeda dari framework seperti React yang punya virtual DOM, Custom Element **merender dirinya sendiri secara manual** — biasanya lewat `this.innerHTML` atau manipulasi DOM langsung di dalam lifecycle callback

```js
class UserCard extends HTMLElement {
  connectedCallback() {
    const nama = this.getAttribute('name') || 'Tanpa Nama';
    this.innerHTML = `
      <div style="border:1px solid #ccc; padding:10px; border-radius:6px;">
        <b>${nama}</b>
      </div>
    `;
  }
}
customElements.define('user-card', UserCard);
```
```html
<user-card name="Siti"></user-card>
<user-card name="Andi"></user-card>
```

## Poin Penting
- Nama class boleh apa saja (PascalCase konvensinya), tapi nama tag di `define()` wajib huruf kecil dan mengandung tanda hubung.
- Satu class hanya bisa didaftarkan ke **satu** nama tag.
- Setelah `define()` dipanggil, semua tag dengan nama tersebut di HTML bahkan yang sudah ada sebelum script dimuat akan otomatis "di-upgrade" menjadi Custom Element.
