// Kunci Jawaban: Refactor Fungsi updateBook (Fetch API)

const BASE_URL = 'http://localhost:3000';

async function updateBook(id, book) {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  const result = await response.json();
  return result;
}
