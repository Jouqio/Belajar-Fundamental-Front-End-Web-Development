    class Counter extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = `
          <style>
            p { font-size: 24px; font-weight: bold; }
            button { padding: 6px 14px; }
          </style>
          <p id="angka">0</p>
          <button id="tambah">Tambah</button>
        `;
        let angka = 0;
        const label = this.shadowRoot.querySelector('#angka');
        this.shadowRoot.querySelector('#tambah').addEventListener('click', () => {
          angka++;
          label.textContent = angka;
        });
      }
    }
    customElements.define('my-counter', Counter);

    document.querySelector('my-counter').addEventListener('click', (e) => {
      console.log('event.target dari luar:', e.target); // akan tercetak <my-counter>
    });