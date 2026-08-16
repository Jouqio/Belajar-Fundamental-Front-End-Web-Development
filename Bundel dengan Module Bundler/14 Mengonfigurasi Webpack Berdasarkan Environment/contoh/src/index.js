import './style.css';

const el = document.createElement('h1');
el.textContent = 'Konfigurasi Webpack per Environment';
document.body.appendChild(el);

const info = document.createElement('p');
info.textContent =
  process.env.NODE_ENV === 'production'
    ? 'Mode: PRODUCTION (sudah diminifikasi)'
    : 'Mode: DEVELOPMENT';
document.body.appendChild(info);
