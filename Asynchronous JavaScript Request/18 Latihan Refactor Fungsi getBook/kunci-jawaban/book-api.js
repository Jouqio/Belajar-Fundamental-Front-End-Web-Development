// Kunci Jawaban: Refactor Fungsi getBook (Fetch API)

const BASE_URL = 'http://localhost:3000';

async function getBook(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  const result = await response.json();
  return result;
}
