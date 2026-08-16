import './css/style.css';
import bola from './img/ball.svg';
import { daftarKlub, cariKlub } from './clubs.js';
import { renderDaftarKlub } from './render.js';

const ikon = document.getElementById('ikon-bola');
if (ikon) ikon.src = bola;

const daftarEl = document.getElementById('daftar-klub');
const inputCari = document.getElementById('input-cari');

renderDaftarKlub(daftarEl, daftarKlub);

inputCari.addEventListener('input', (event) => {
  const hasil = cariKlub(event.target.value);
  renderDaftarKlub(daftarEl, hasil);
});
