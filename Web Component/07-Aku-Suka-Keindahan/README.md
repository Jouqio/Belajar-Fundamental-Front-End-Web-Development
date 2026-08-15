# Modul 7: Aku Suka Keindahan (Styling Custom Element)

Modul ini membahas cara mempercantik tampilan Custom Element **sebelum** kita masuk ke Shadow DOM (Modul 10 ke atas).

## Styling dengan CSS Biasa (Global)
Karena tanpa Shadow DOM elemen custom masih "menyatu" dengan halaman utama, kita bisa styling seperti elemen HTML biasa:
```css
user-card {
  display: block;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 250px;
  font-family: sans-serif;
}
```
```html
<user-card name="Budi"></user-card>
```
> Perhatikan: elemen custom **default-nya `display: inline`**, seperti `<span>`. Kalau ingin berperilaku seperti blok, tambahkan `display: block;` secara eksplisit.

## Styling dari Dalam Komponen (via `innerHTML`)
```js
class PrettyCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .card {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
      </style>
      <div class="card">✨ Komponen Cantik ✨</div>
    `;
  }
}
customElements.define('pretty-card', PrettyCard);
```

## ⚠️ Masalah Tanpa Shadow DOM: Style Bisa Bocor!
Karena `<style>` di atas ditulis di `innerHTML`, style tersebut sebenarnya **ikut masuk ke DOM global halaman** — artinya bisa memengaruhi elemen lain yang kebetulan memakai class `.card`. Ini disebut **style leakage**, dan menjadi salah satu alasan utama kenapa Shadow DOM dibutuhkan (akan dibahas di Modul 10-13) untuk benar-benar mengisolasi style.

## Menggunakan CSS Custom Properties agar Komponen Bisa Ditema
```css
my-badge {
  --badge-color: orange;
}
```
```js
class MyBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        span {
          background: var(--badge-color, gray);
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
        }
      </style>
      <span>Label</span>
    `;
  }
}
```
Dengan CSS Custom Properties (variabel CSS), pengguna komponen bisa **mengganti warna dari luar** tanpa perlu mengubah kode internal komponen — teknik ini tetap relevan bahkan setelah pakai Shadow DOM nanti.

## Ringkasan
- Styling dari luar (CSS global) → gampang tapi rawan bentrok nama class.
- Styling dari dalam (`<style>` di `innerHTML`) → lebih terkontrol, tapi tetap bocor ke halaman tanpa Shadow DOM.
- CSS Custom Properties → cara terbaik membiarkan komponen bisa ditema dari luar, tetap relevan di semua pendekatan styling.
