document.getElementById('tambah').addEventListener('click', () => {
  const container = document.getElementById('daftar-hobi');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'hobi[]';
  input.placeholder = `Hobi ${container.children.length + 1}`;
  container.appendChild(input);
});

const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Mengirim...';

  const formData = new FormData(form);
  const hobiList = formData.getAll('hobi[]').filter(h => h.trim() !== '');
  const data = { nama: formData.get('nama'), hobi: hobiList };

  // Simulasi proses async (misalnya fetch ke server)
  setTimeout(() => {
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Kirim Data';
  }, 800);
});