# Modul 7: Inspeksi CSS Grid Layout

Browser modern (Chrome, Firefox, Edge) punya alat bawaan untuk "membedah" grid secara visual — sangat berguna untuk debugging.

## Cara Inspeksi di Chrome DevTools
1. Klik kanan pada elemen grid → pilih **Inspect**.
2. Di panel **Elements**, cari elemen dengan label kecil `grid` di sebelah nama tag-nya.
3. Klik ikon kotak kecil (grid badge) untuk menampilkan overlay grid di halaman.
4. Overlay ini menunjukkan garis-garis grid, nomor grid line, dan ukuran track — langsung di atas halaman.

## Cara Inspeksi di Firefox (paling lengkap untuk Grid)
1. Buka DevTools → tab **Layout**.
2. Centang **Grid** pada elemen yang dipilih.
3. Firefox akan menampilkan nomor baris/kolom dan area grid dengan warna berbeda — ada juga "Grid Inspector" untuk melihat semua grid di halaman sekaligus.

## Kenapa Ini Penting?
Sering kali elemen "tidak muncul sesuai harapan" karena grid line yang salah dihitung, atau ada margin/padding tersembunyi. Dengan inspector, kamu bisa **melihat langsung** struktur grid tanpa perlu menebak-nebak lewat trial and error di kode.

## Latihan
Buka salah satu file contoh dari modul sebelumnya (misalnya modul 06), lalu praktikkan langkah inspeksi di atas menggunakan browser kamu.