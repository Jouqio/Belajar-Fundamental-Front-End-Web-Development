// Kunci Jawaban: Fungsi getBook

const BASE_URL = 'http://localhost:3000';

function getBook(id, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${BASE_URL}/books/${id}`);

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    callback(result);
  };

  xhr.send();
}
