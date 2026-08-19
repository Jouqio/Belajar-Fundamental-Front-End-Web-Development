// Latihan: Refactor Fungsi getBook (dari XHR menjadi Fetch API)

const BASE_URL = 'http://localhost:3000';

// ===== Versi lama (XHR) -- REFERENSI, jangan dihapus dulu =====
function getBookXHR(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/books/${id}`);
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

// ===== TODO: Tulis ulang jadi versi Fetch API (async/await) =====
async function getBook(id) {
  // Isi di sini

}
