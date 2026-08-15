# Modul 9: Tantangan — Styling dan Custom Attribute

Modul ini adalah **latihan gabungan** dari Modul 6 (Custom Attribute) dan Modul 7 (Styling). Cobalah kerjakan sebelum melihat kunci jawabannya di `contoh/index.html`.

## Soal Tantangan
Buatlah sebuah Custom Element bernama `<status-badge>` dengan ketentuan:

1. Menerima atribut `status` yang nilainya bisa `"aktif"`, `"nonaktif"`, atau `"pending"`.
2. Warna badge berubah sesuai status:
   - `aktif` → hijau
   - `nonaktif` → merah
   - `pending` → kuning/oranye
3. Teks di dalam badge menyesuaikan status (contoh: "Aktif", "Nonaktif", "Menunggu").
4. Ketika atribut `status` diubah lewat JavaScript (`setAttribute`), tampilan badge harus ikut berubah **tanpa reload halaman**.

## Petunjuk
- Gunakan `static get observedAttributes()` supaya perubahan atribut bisa dipantau.
- Gunakan `attributeChangedCallback()` untuk merender ulang tampilan.
- Buat sebuah object/mapping status → warna & label di dalam class untuk merapikan logika.

## Contoh Kunci Jawaban
```js
class StatusBadge extends HTMLElement {
  static get observedAttributes() {
    return ['status'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const status = this.getAttribute('status') || 'pending';
    const config = {
      aktif:    { warna: '#4caf50', label: 'Aktif' },
      nonaktif: { warna: '#f44336', label: 'Nonaktif' },
      pending:  { warna: '#ff9800', label: 'Menunggu' }
    };
    const { warna, label } = config[status] || config.pending;

    this.innerHTML = `
      <style>
        span {
          background: ${warna};
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-family: sans-serif;
          font-size: 14px;
        }
      </style>
      <span>${label}</span>
    `;
  }
}
customElements.define('status-badge', StatusBadge);
```
```html
<status-badge status="aktif"></status-badge>
<status-badge status="pending"></status-badge>
<status-badge status="nonaktif"></status-badge>
```

## Uji Coba Interaktif
Coba jalankan di console browser:
```js
document.querySelector('status-badge').setAttribute('status', 'nonaktif');
```
Perhatikan badge langsung berubah warna dan teks tanpa reload!

## Yang Dilatih di Modul Ini
- Menggabungkan `observedAttributes` + `attributeChangedCallback` + styling internal dalam satu komponen yang reaktif terhadap perubahan data pondasi penting sebelum masuk ke Shadow DOM.
