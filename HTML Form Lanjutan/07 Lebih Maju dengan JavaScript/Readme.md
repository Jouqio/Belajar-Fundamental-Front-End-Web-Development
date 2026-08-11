# 7. Lebih Maju dengan JavaScript

HTML dan CSS menangani banyak hal, tapi interaksi dinamis butuh JavaScript.

## 1. Mencegah Submit Default & Menangani Data

```html
<form id="myForm">
  <input type="text" name="nama" id="nama">
  <button type="submit">Kirim</button>
</form>

<script>
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault(); // mencegah reload halaman
  const formData = new FormData(e.target);
  console.log(formData.get('nama'));
});
</script>
```

## 2. `FormData` API — Ambil Semua Data Sekaligus

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log(data); // { nama: "Budi", email: "budi@mail.com" }
});
```

## 3. Validasi Real-time

```js
const email = document.getElementById('email');
const errorEl = document.getElementById('email-error');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    errorEl.textContent = 'Format email tidak valid';
  } else {
    errorEl.textContent = '';
  }
});
```

## 4. Field Dinamis (Tambah/Hapus Baris)

```html
<div id="daftar-hobi">
  <input type="text" name="hobi[]">
</div>
<button type="button" id="tambah">+ Tambah Hobi</button>

<script>
document.getElementById('tambah').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'hobi[]';
  document.getElementById('daftar-hobi').appendChild(input);
});
</script>
```

## 5. Autocomplete Kustom dengan Fetch (Live Search)

```js
const input = document.getElementById('search');
const hasil = document.getElementById('hasil-search');

input.addEventListener('input', async () => {
  const query = input.value.trim();
  if (query.length < 2) {
    hasil.innerHTML = '';
    return;
  }
  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  hasil.innerHTML = data.map(item => `<li>${item.nama}</li>`).join('');
});
```
> Tips: gunakan **debounce** agar fetch tidak dipanggil di setiap ketikan (hemat request).

```js
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

input.addEventListener('input', debounce(handleSearch, 300));
```

## 6. Mengirim Data dengan `fetch` (Tanpa Reload Halaman)

```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Gagal mengirim');
    alert('Berhasil dikirim!');
    form.reset();
  } catch (err) {
    alert('Terjadi kesalahan: ' + err.message);
  }
});
```

## 7. Disable Button Saat Submit (Cegah Double Submit)

```js
form.addEventListener('submit', () => {
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Mengirim...';
});
```

Praktik langsung fitur-fitur di atas ada di `examples/07-javascript-form.html`.

➡️ Lanjut ke: `08-Semantik-Itu-Penting.md`
