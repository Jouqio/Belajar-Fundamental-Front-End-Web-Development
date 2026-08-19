// Kunci Jawaban: Fungsi updateBook

const BASE_URL = 'http://localhost:3000';

function updateBook(id, book, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('PUT', `${BASE_URL}/books/${id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    callback(result);
  };

  xhr.send(JSON.stringify(book));
}
