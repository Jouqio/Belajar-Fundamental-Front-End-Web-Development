/**
 * Menampilkan daftar klub ke dalam elemen <ul> atau <ol>.
 * @param {HTMLElement} container
 * @param {Array<{nama: string, liga: string}>} klubs
 */
export function renderDaftarKlub(container, klubs) {
  if (klubs.length === 0) {
    container.innerHTML = '<li class="klub-kosong">Klub tidak ditemukan.</li>';
    return;
  }

  container.innerHTML = klubs
    .map(
      (klub) => `
      <li class="klub-item">
        <span class="klub-nama">${klub.nama}</span>
        <span class="klub-liga">${klub.liga}</span>
      </li>
    `
    )
    .join('');
}
