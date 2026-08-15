# Modul 12: Dasar Penggunaan Shadow DOM

## Menambahkan Elemen ke Shadow DOM
Ada dua cara utama mengisi Shadow Root:

### 1. Lewat `innerHTML` (paling praktis)
```js
this.shadowRoot.innerHTML = `
  <style>p { color: green; }</style>
  <p>Konten Shadow DOM</p>
`;
```

### 2. Lewat DOM API manual (`createElement`, `appendChild`)
```js
const p = document.createElement('p');
p.textContent = 'Konten Shadow DOM';
this.shadowRoot.appendChild(p);
```
Cara kedua sedikit lebih verbose tapi lebih aman dari risiko XSS jika kontennya berasal dari input pengguna, karena tidak mem-parsing string sebagai HTML.

## Query Element di Dalam Shadow DOM
Karena terisolasi, `document.querySelector()` **tidak bisa** menjangkau isi Shadow DOM secara langsung. Kita harus query lewat `shadowRoot`:
```js
class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <p id="angka">0</p>
      <button id="tambah">Tambah</button>
    `;
    let angka = 0;
    const label = this.shadowRoot.querySelector('#angka');
    this.shadowRoot.querySelector('#tambah').addEventListener('click', () => {
      angka++;
      label.textContent = angka;
    });
  }
}
customElements.define('my-counter', Counter);
```
```js
// Dari luar, ini TIDAK akan menemukan tombolnya:
document.querySelector('#tambah'); // null

// Harus lewat shadowRoot:
document.querySelector('my-counter').shadowRoot.querySelector('#tambah');
```

## Event di Dalam Shadow DOM Tetap "Bubbling" ke Luar (untuk event tertentu)
Sebagian besar event bawaan browser (seperti `click`) tetap bisa "naik" (bubble) sampai ke Light DOM, tapi `event.target` akan **di-retarget** menjadi elemen host-nya (bukan elemen internal), demi menjaga enkapsulasi.
```js
document.querySelector('my-counter').addEventListener('click', (e) => {
  console.log(e.target); // <my-counter>, bukan <button> internalnya
});
```

## Ringkasan Praktik Dasar
1. `attachShadow({mode:'open'})` di constructor.
2. Isi kontennya lewat `this.shadowRoot.innerHTML` di `connectedCallback()`.
3. Query elemen internal selalu lewat `this.shadowRoot.querySelector(...)`, bukan `document.querySelector(...)`.
4. Tambahkan event listener di dalam `shadowRoot`, bukan di `document`.
