# Modul 6: Handling Custom Attribute

Custom Element bisa menerima **atribut HTML** sebagai "input", mirip `props` di React. Modul ini membahas cara membaca dan memantau perubahan atribut.

## Membaca Atribut dengan `getAttribute()`
```js
class UserCard extends HTMLElement {
  connectedCallback() {
    const nama = this.getAttribute('name');
    const umur = this.getAttribute('age');
    this.innerHTML = `<p>${nama}, ${umur} tahun</p>`;
  }
}
customElements.define('user-card', UserCard);
```
```html
<user-card name="Rina" age="25"></user-card>
```

## Memantau Perubahan Atribut dengan `observedAttributes`
Agar `attributeChangedCallback` bisa berjalan, kita **wajib** mendaftarkan atribut mana saja yang ingin dipantau lewat static getter `observedAttributes`:

```js
class Counter extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count') {
      this.render(newValue);
    }
  }

  connectedCallback() {
    this.render(this.getAttribute('count') || 0);
  }

  render(count) {
    this.innerHTML = `<p>Hitungan: ${count}</p>`;
  }
}
customElements.define('my-counter', Counter);
```
```html
<my-counter count="0" id="counter"></my-counter>
<button onclick="document.getElementById('counter').setAttribute('count', 5)">
  Ubah ke 5
</button>
```
Ketika tombol diklik, `setAttribute('count', 5)` akan otomatis memicu `attributeChangedCallback`, dan komponen merender ulang tampilannya.

## Membuat Getter/Setter agar Lebih Mudah Dipakai (seperti properti JS biasa)
```js
class UserCard extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }
  set name(value) {
    this.setAttribute('name', value);
  }
}
```
Dengan ini, kita bisa akses `document.querySelector('user-card').name = 'Budi'` layaknya properti objek biasa.

## Poin Penting untuk Pemula
- Nilai atribut HTML **selalu berupa string** — kalau butuh angka/boolean, lakukan konversi manual (`Number(...)`, dsb).
- `attributeChangedCallback` **hanya** terpanggil untuk atribut yang terdaftar di `observedAttributes` — atribut lain diabaikan demi performa.
- Selalu bandingkan `oldValue` dan `newValue` kalau ingin menghindari render berulang yang tidak perlu.
