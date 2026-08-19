// Kunci Jawaban: Refactor Fungsi removeBook (Fetch API)

const BASE_URL = 'http://localhost:3000';

async function removeBook(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return result;
}
