# Modul 3: Latihan Menulis Custom Element Pertama

Saatnya praktik langsung membuat Custom Element pertamamu! Buka `contoh/index.html` di browser.

## Langkah-Langkah

### 1. Buat class yang extends `HTMLElement`
```js
class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Halo, ini komponen pertamaku!</p>`;
  }
}
```

### 2. Daftarkan dengan `customElements.define()`
```js
customElements.define('hello-world', HelloWorld);
```
> **Aturan penting:** nama tag custom element **wajib mengandung tanda hubung (-)**, contoh: `hello-world`, `user-card`, `my-button`. Ini untuk membedakan dari tag HTML bawaan (yang tidak pernah pakai tanda hubung).

### 3. Pakai tag-nya di HTML
```html
<hello-world></hello-world>
```

## Kode Lengkap
```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Custom Element Pertama</title>
</head>
<body>
  <hello-world></hello-world>

  <script>
    class HelloWorld extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<p>Halo, ini komponen pertamaku!</p>`;
      }
    }
    customElements.define('hello-world', HelloWorld);
  </script>
</body>
</html>
```

## Penjelasan
- `connectedCallback()` adalah fungsi bawaan yang otomatis dipanggil saat elemen ditambahkan ke halaman (dijelaskan detail di Modul 5).
- `this.innerHTML` merujuk ke tag `<hello-world>` itu sendiri — kita mengisi kontennya seperti mengisi `div` biasa.

## Tantangan Latihan
1. Ubah teks di dalam `connectedCallback()` menjadi salam dengan namamu.
2. Tambahkan 2 tag `<hello-world></hello-world>` lagi di HTML — perhatikan bahwa komponen bisa dipakai berkali-kali.
3. Coba buka DevTools → tab Elements, lihat bagaimana isi tag `<hello-world>` sudah otomatis terisi HTML.

## Kesalahan Umum Pemula
- Lupa tanda hubung di nama tag → akan muncul error `"custom element names must contain a hyphen"`.
- Mendaftarkan nama yang sama dua kali dengan `customElements.define()` → akan error karena nama sudah terpakai.
