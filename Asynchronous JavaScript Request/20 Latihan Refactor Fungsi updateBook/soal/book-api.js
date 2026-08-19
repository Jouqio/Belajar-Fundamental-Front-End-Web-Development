// Latihan: Refactor Fungsi updateBook (dari XHR menjadi Fetch API)

const BASE_URL = 'http://localhost:3000';

// ===== Versi lama (XHR) -- REFERENSI =====
function updateBookXHR(id, book, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${BASE_URL}/books/${id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send(JSON.stringify(book));
}

// ===== TODO: Tulis ulang jadi versi Fetch API =====
async function updateBook(id, book) {
  // Isi di sini

}
