# Modul 12: Kuis Package Manager untuk Aplikasi Web

Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah.

1. Apa fungsi utama sebuah package manager?
2. Perintah apa yang dipakai untuk membuat `package.json` secara otomatis tanpa pertanyaan interaktif?
3. Apa perbedaan utama antara `dependencies` dan `devDependencies`?
4. Jelaskan arti dari versi `^4.1.2` menurut Semantic Versioning.
5. Apa perbedaan fungsi antara `package.json` dan `package-lock.json`?
6. Kenapa folder `node_modules` sebaiknya tidak ikut di-commit ke Git?
7. Perintah apa yang dipakai untuk menjalankan script bernama `build` yang didefinisikan di `package.json`?
8. Sebutkan dua script npm yang punya "jalan pintas" tanpa perlu mengetik kata `run`.
9. Perintah apa yang dipakai untuk menghapus sebuah package dari proyek?
10. Apa fungsi dari package scope (awalan `@nama-scope/`)?

<details>
<summary>Klik untuk lihat kunci jawaban</summary>

1. Membantu memasang, mengelola, memperbarui, dan menghapus package (library pihak ketiga) di dalam proyek secara otomatis, tanpa perlu dilakukan manual satu per satu.
2. `npm init -y`
3. `dependencies` adalah package yang dibutuhkan aplikasi saat benar-benar berjalan/dipakai pengguna, sedangkan `devDependencies` hanya dibutuhkan selama proses development (misalnya tool testing atau linter) dan tidak ikut dibutuhkan saat aplikasi sudah jadi.
4. Boleh memasang update MINOR dan PATCH (misalnya sampai versi `4.9.9`), tapi **tidak boleh** naik ke versi MAJOR berikutnya (`5.0.0`), karena versi MAJOR berpotensi membawa perubahan yang tidak kompatibel (*breaking changes*).
5. `package.json` mencatat rentang versi dependency yang diinginkan (seperti "daftar belanja"), sedangkan `package-lock.json` mencatat versi persis yang benar-benar terpasang di proyek (seperti "struk belanja") agar semua orang yang menjalankan `npm install` mendapatkan versi yang sama persis.
6. Karena isinya bisa sangat besar (ribuan file) dan bisa dipasang ulang kapan saja hanya dengan menjalankan `npm install`, selama `package.json` dan `package-lock.json` tersedia — sehingga tidak perlu ikut disimpan di riwayat Git.
7. `npm run build`
8. `npm start` (jalan pintas dari `npm run start`) dan `npm test` (jalan pintas dari `npm run test`).
9. `npm uninstall nama-package`
10. Untuk mengelompokkan package di bawah satu namespace (nama organisasi/pengguna), sehingga menghindari bentrok nama antar package publik, memudahkan pengelompokan package yang saling terkait, dan memungkinkan pembuatan package privat untuk tim/organisasi.

</details>

## Selamat!
Kamu telah menyelesaikan seluruh materi **Package Manager untuk Aplikasi Web**. Kemampuan ini adalah fondasi penting yang akan terus kamu pakai di hampir semua proyek front-end modern — mulai dari proyek sederhana sampai aplikasi berskala besar dengan framework seperti React, Vue, atau Angular.
