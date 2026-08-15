# Modul 5: Siklus Hidup (Lifecycle Callbacks)

Custom Element punya beberapa **lifecycle callback** — fungsi bawaan yang otomatis dipanggil browser pada momen tertentu dalam "hidup" sebuah elemen.

## Empat Callback Utama

### 1. `constructor()`
Dipanggil saat elemen **dibuat** (belum tentu sudah ada di halaman). Dipakai untuk inisialisasi dasar seperti setup Shadow DOM atau state awal.
```js
constructor() {
  super(); // WAJIB dipanggil pertama kali
  console.log('Elemen dibuat');
}
```
> **Penting:** jangan mengakses atribut atau anak elemen di `constructor()` — DOM belum sepenuhnya siap. Gunakan `connectedCallback()` untuk itu.

### 2. `connectedCallback()`
Dipanggil setiap kali elemen **ditambahkan ke DOM** (halaman). Ini tempat paling umum untuk merender konten.
```js
connectedCallback() {
  console.log('Elemen masuk ke halaman');
  this.innerHTML = `<p>Saya sudah tampil!</p>`;
}
```

### 3. `disconnectedCallback()`
Dipanggil saat elemen **dihapus dari DOM**. Cocok untuk membersihkan event listener atau timer supaya tidak terjadi memory leak.
```js
disconnectedCallback() {
  console.log('Elemen dihapus dari halaman');
}
```

### 4. `attributeChangedCallback(name, oldValue, newValue)`
Dipanggil saat atribut yang **dipantau** berubah nilainya (dijelaskan detail di Modul 6).
```js
static get observedAttributes() {
  return ['name'];
}
attributeChangedCallback(name, oldValue, newValue) {
  console.log(`Atribut ${name} berubah dari ${oldValue} ke ${newValue}`);
}
```

## Urutan Eksekusi
```
constructor() → attributeChangedCallback() (jika ada atribut awal) → connectedCallback()
```

## Contoh Lengkap Melacak Siklus Hidup
```js
class LifecycleDemo extends HTMLElement {
  constructor() {
    super();
    console.log('1. constructor dipanggil');
  }
  connectedCallback() {
    console.log('2. connectedCallback: elemen masuk ke DOM');
    this.innerHTML = '<p>Halo!</p>';
  }
  disconnectedCallback() {
    console.log('3. disconnectedCallback: elemen keluar dari DOM');
  }
}
customElements.define('lifecycle-demo', LifecycleDemo);
```

## Praktik di `contoh/index.html`
Buka file contoh, lalu buka **Console** di DevTools. Klik tombol "Hapus Elemen" untuk melihat `disconnectedCallback` terpanggil secara langsung.

## Kenapa Ini Penting?
Memahami siklus hidup membantu kamu tahu **kapan** waktu yang tepat untuk mengambil data, menambahkan event listener, atau membersihkan resource mirip konsep `useEffect` di React atau `mounted`/`unmounted` di Vue, tapi ini native browser API.
