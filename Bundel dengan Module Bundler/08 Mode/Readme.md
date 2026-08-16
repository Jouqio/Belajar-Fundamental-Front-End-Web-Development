# 08 - Mode

##  Pengertian

`mode` adalah salah satu opsi konfigurasi Webpack yang memberi tahu Webpack
**untuk keperluan apa** proses build ini dilakukan. Berdasarkan nilai `mode`,
Webpack akan otomatis mengaktifkan sekumpulan optimasi bawaan yang sesuai.

```js
module.exports = {
  mode: 'development', // atau 'production', atau 'none'
};
```

## ⚙️ 3 Pilihan Nilai `mode`

### 1. `development`
Dipakai saat kamu sedang **aktif menulis kode / debugging**.

- Build **lebih cepat**.
- Kode hasil bundle **tidak diminifikasi** (mudah dibaca saat debugging).
- Menghasilkan **source map** yang lebih detail secara default, memudahkan
  menemukan letak error di file aslinya (bukan di file bundle yang sudah digabung).

### 2. `production`
Dipakai saat kamu **siap merilis aplikasi ke pengguna sungguhan**.

- Webpack otomatis melakukan **minifikasi** (mengecilkan ukuran file JS dengan
  menghapus spasi, komentar, memendekkan nama variabel, dll).
- Mengaktifkan optimasi seperti **tree-shaking** (menghapus kode yang tidak
  pernah dipakai / *dead code*).
- Build biasanya **lebih lambat** dibanding `development`, tapi hasil akhirnya
  jauh lebih ringan dan cepat dijalankan di browser pengguna.

### 3. `none`
Tidak mengaktifkan optimasi bawaan apa pun. Jarang dipakai kecuali kamu ingin
mengatur semua optimasi secara manual dari nol.

## 🆚 Perbandingan Singkat

| | `development` | `production` |
|---|----------------|----------------|
| Kecepatan build | Cepat | Lebih lambat |
| Ukuran file hasil | Besar, mudah dibaca | Kecil, sudah diminifikasi |
| Source map | Detail, untuk debugging | Biasanya lebih ringkas/dinonaktifkan |
| Cocok untuk | Proses development sehari-hari | Rilis ke production/pengguna akhir |

##  Contoh Perbandingan Hasil

Kode sumber:
```js
function jumlahkan(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua;
}

console.log(jumlahkan(4, 5));
```

Hasil bundle dengan `mode: 'development'` (disederhanakan):
```js
function jumlahkan(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua;
}

console.log(jumlahkan(4, 5));
```
*(Mudah dibaca, mirip kode asli)*

Hasil bundle dengan `mode: 'production'` (disederhanakan):
```js
function o(n,t){return n+t}console.log(o(4,5));
```
*(Sudah diminifikasi — nama variabel dipendekkan, spasi dihapus)*

##  Cara Mengatur Mode

### Cara 1: Langsung di file konfigurasi
```js
module.exports = {
  mode: 'development',
};
```

### Cara 2: Lewat perintah CLI (lebih fleksibel)
```bash
npx webpack --mode production
npx webpack --mode development
```

### Cara 3: Lewat script di `package.json` (paling umum di proyek nyata)
```json
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  }
}
```

> 💡 Cara ke-3 ini akan kita gunakan dan kembangkan lebih lanjut di materi
> **[14 - Mengonfigurasi Webpack Berdasarkan Environment](../14-Mengonfigurasi-Webpack-Berdasarkan-Environment)**.

##  Ringkasan

- `mode` menentukan sekumpulan optimasi bawaan yang otomatis diaktifkan Webpack.
- `development`: cepat, mudah dibaca, cocok untuk proses ngoding sehari-hari.
- `production`: dioptimalkan (diminifikasi, tree-shaking) untuk dirilis ke pengguna.
- Bisa diatur lewat file konfigurasi, CLI, atau script npm.

##  Navigasi

⬅️ [07 - Plugin](../07-Plugin) | ➡️ [09 - Memasang dan Menggunakan Webpack](../09-Memasang-dan-Menggunakan-Webpack)
