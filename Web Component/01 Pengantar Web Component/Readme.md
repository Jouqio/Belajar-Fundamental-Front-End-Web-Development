# Modul 1: Pengantar Web Component

## Apa itu Web Component?
Web Component adalah kumpulan **standar API bawaan browser** yang memungkinkan kita membuat elemen HTML kustom (custom tag) yang reusable, terisolasi, dan bisa dipakai di project apa pun — tanpa perlu framework seperti React atau Vue.

Bayangkan kamu bisa membuat tag baru seperti ini dan langsung dipakai di HTML:
```html
<user-card name="Budi" role="Developer"></user-card>
```
Tag `<user-card>` bukan tag HTML bawaan itu adalah komponen buatan kita sendiri!

## Kenapa Web Component Penting?

- **Native browser API** — tidak butuh library atau framework tambahan, cukup JavaScript murni.
- **Reusable** — sekali dibuat, komponen bisa dipakai berulang kali di halaman atau project berbeda.
- **Encapsulation (terisolasi)** — style dan struktur internal komponen tidak akan "bocor" atau bentrok dengan CSS/JS lain di halaman.
- **Framework-agnostic** — bisa dipakai di project React, Vue, Angular, atau HTML polos sekalipun.

## Tiga Pilar Utama Web Component

1. **Custom Elements**  API untuk mendefinisikan tag HTML baru beserta perilakunya (dibahas mulai Modul 3).
2. **Shadow DOM**  API untuk mengisolasi struktur & style internal komponen dari halaman luar (dibahas mulai Modul 10).
3. **HTML Template**  API untuk mendefinisikan potongan markup yang bisa dipakai ulang tanpa langsung dirender (dibahas di Modul 17).

## Contoh Gambaran Umum
```html
<!-- Pemakaian di HTML, semudah tag biasa -->
<hello-world></hello-world>

<script>
  class HelloWorld extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h2>Halo dari Web Component!</h2>`;
    }
  }
  customElements.define('hello-world', HelloWorld);
</script>
```
Jangan khawatir kalau belum paham semua barisnya — ini akan dijelaskan detail mulai Modul 3 dan 4.

## Kapan Sebaiknya Pakai Web Component?
- Membuat **design system** atau komponen UI yang dipakai lintas project/tim.
- Membuat **widget** yang harus terisolasi dari CSS halaman (misalnya widget chat, banner iklan, embed pihak ketiga).
- Ingin belajar fundamental platform web tanpa bergantung pada framework tertentu.

## Yang Akan Kamu Pelajari Selanjutnya
Di modul-modul berikutnya kita akan mulai dari konsep dasar Custom Element, menulis komponen pertama, memahami siklus hidupnya, sampai membangun studi kasus nyata.
