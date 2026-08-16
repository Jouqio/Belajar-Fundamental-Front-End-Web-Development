import './style.css';
import logo from './logo.svg';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo Belajar Webpack';
document.body.appendChild(img);

const judul = document.createElement('h1');
judul.textContent = 'Halo dari Webpack + Loader!';
document.body.appendChild(judul);
