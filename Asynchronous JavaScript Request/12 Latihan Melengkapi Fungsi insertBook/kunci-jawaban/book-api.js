// Kunci Jawaban: Fungsi insertBook

const BASE_URL = 'http://localhost:3000';

function insertBook(book, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', `${BASE_URL}/books`);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    callback(result);
  };

  xhr.send(JSON.stringify(book));
}
