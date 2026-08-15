# Modul 13: Shadow DOM untuk Web Component

Modul ini menyatukan **Custom Element** (Modul 3-9) dengan **Shadow DOM** (Modul 10-12) menjadi komponen yang benar-benar encapsulated inilah bentuk "Web Component" yang sesungguhnya.

## Pola Umum Membuat Web Component dengan Shadow DOM
```js
class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'role'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'Tanpa Nama';
    const role = this.getAttribute('role') || 'Anggota';

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 16px;
          font-family: sans-serif;
          max-width: 220px;
        }
        .name { font-weight: bold; font-size: 16px; }
        .role { color: #777; font-size: 14px; }
      </style>
      <div class="card">
        <div class="name">${name}</div>
        <div class="role">${role}</div>
      </div>
    `;
  }
}
customElements.define('profile-card', ProfileCard);
```
```html
<profile-card name="Dewi" role="UI Designer"></profile-card>
<profile-card name="Fajar" role="Front-End Developer"></profile-card>
```

## Kenapa Pola Ini Ideal?
- **Encapsulation penuh** — style `.card` tidak akan bentrok dengan class `.card` di halaman manapun, walau namanya sama persis.
- **Reaktif** — berkat `observedAttributes` + `attributeChangedCallback`, komponen otomatis update saat atribut berubah.
- **Reusable** — tinggal panggil tag-nya di HTML mana pun, tanpa import CSS terpisah.

## Checklist Membuat Web Component yang Baik
1. ✅ `constructor()` — panggil `super()` lalu `attachShadow({mode:'open'})`.
2. ✅ `static get observedAttributes()` — daftarkan atribut yang perlu dipantau.
3. ✅ `attributeChangedCallback()` — panggil ulang fungsi render.
4. ✅ `connectedCallback()` — render pertama kali saat elemen masuk ke DOM.
5. ✅ Method `render()` terpisah — supaya tidak duplikasi kode antara langkah 3 dan 4.

## Coba Sendiri
Buka `contoh/index.html` dan tambahkan atribut baru, misalnya `avatar` (URL gambar), lalu tampilkan sebagai elemen `<img>` di dalam card.
