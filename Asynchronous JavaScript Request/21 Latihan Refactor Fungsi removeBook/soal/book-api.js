// Latihan: Refactor Fungsi removeBook (dari XHR menjadi Fetch API)

const BASE_URL = 'http://localhost:3000';

// ===== Versi lama (XHR) -- REFERENSI =====
function removeBookXHR(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${BASE_URL}/books/${id}`);
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

// ===== TODO: Tulis ulang jadi versi Fetch API =====
async function removeBook(id) {
  // Isi di sini

}
