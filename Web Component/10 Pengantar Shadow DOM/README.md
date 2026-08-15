# Modul 10: Pengantar Shadow DOM

## Masalah yang Ingin Diselesaikan
Di Modul 7 kita sudah menyinggung: styling dari `innerHTML` tetap **bocor** ke halaman utama, dan CSS halaman utama juga bisa **menembus** ke dalam komponen kita. Shadow DOM hadir untuk menyelesaikan masalah ini secara total.

## Apa itu Shadow DOM?
Shadow DOM adalah cara browser untuk membuat **DOM tersembunyi (terpisah)** yang menempel pada sebuah elemen, tapi terisolasi dari DOM utama halaman — baik dari sisi struktur maupun styling.

Bayangkan seperti "kotak kaca satu arah": apa yang terjadi di dalam Shadow DOM tidak terlihat/terpengaruh CSS dari luar, dan sebaliknya.

## Istilah-Istilah Dasar
- **Shadow Host** — elemen HTML biasa yang "ditumpangi" Shadow DOM (contoh: `<user-card>`).
- **Shadow Root** — akar/root dari struktur DOM tersembunyi tersebut.
- **Shadow Tree** — struktur elemen di dalam Shadow Root.
- **Light DOM** — DOM biasa di halaman utama (di luar Shadow DOM), termasuk konten yang ditulis di antara tag pembuka-penutup komponen.

## Contoh Analogi
Shadow DOM mirip `<video>` bawaan browser: kamu tidak bisa lihat/ubah struktur internal tombol play/pause bawaan video lewat DevTools biasa — itu karena `<video>` sebenarnya juga dibangun dengan Shadow DOM oleh browser!

## Cara Kerja Singkat (detail di Modul 11-13)
```js
class UserCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        p { color: blue; } /* CSS ini TIDAK bocor ke luar */
      </style>
      <p>Halo dari Shadow DOM!</p>
    `;
  }
}
customElements.define('user-card', UserCard);
```

## Kenapa Shadow DOM Penting untuk Web Component?
Tanpa Shadow DOM, Custom Element hanyalah "class JavaScript yang mengisi innerHTML" — style dan struktur tetap rawan bentrok. Dengan Shadow DOM, komponen benar-benar **encapsulated**, sesuai janji utama Web Component.

## Yang Akan Dipelajari Selanjutnya
Modul 11-16 akan membahas detail cara pakai Shadow DOM: mode open vs closed, styling di dalamnya, hingga fitur Slot untuk menyisipkan konten dari luar.
