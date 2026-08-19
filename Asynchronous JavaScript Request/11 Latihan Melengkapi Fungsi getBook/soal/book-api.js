// Latihan: Melengkapi Fungsi getBook
// Cari komentar "TODO" di bawah dan lengkapi bagian yang kosong.

const BASE_URL = 'http://localhost:3000';

function getBook(id, callback) {
  const xhr = new XMLHttpRequest();

  // TODO 1: Buka koneksi dengan method GET ke endpoint `${BASE_URL}/books/${id}`


  // TODO 2: Tangani event "onload". Di dalamnya:
  //   - parse response (xhr.responseText) dari string JSON menjadi object
  //   - panggil callback(result) dengan hasil parse tersebut


  // TODO 3: Kirim request (tanpa body, karena GET tidak butuh body)

}
