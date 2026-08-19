// Kunci Jawaban: Fungsi removeBook

const BASE_URL = 'http://localhost:3000';

function removeBook(id, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('DELETE', `${BASE_URL}/books/${id}`);

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    callback(result);
  };

  xhr.send();
}
