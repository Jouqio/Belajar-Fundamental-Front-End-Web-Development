// Latihan: Melengkapi Fungsi insertBook
// Cari komentar "TODO" di bawah dan lengkapi bagian yang kosong.

const BASE_URL = 'http://localhost:3000';

function insertBook(book, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method POST ke endpoint `${BASE_URL}/books`


  // TODO 2: Set header Content-Type menjadi application/json
  //         (WAJIB dilakukan SEBELUM xhr.send())


  // TODO 3: Tangani event "onload", parse response, lalu panggil callback(result)


  // TODO 4: Kirim request dengan body berupa string JSON dari parameter "book"

}
