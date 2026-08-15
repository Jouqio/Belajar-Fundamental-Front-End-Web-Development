
    class InfoBox extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            .box { border: 1px solid #ccc; padding: 12px; border-radius: 8px; }
            ::slotted(p) { color: green; font-style: italic; }
          </style>
          <div class="box"><slot></slot></div>
        `;
      }
    }
    customElements.define('info-box', InfoBox);

    class MyCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            .card { border: 1px solid #ddd; border-radius: 8px; padding: 12px; max-width: 300px; }
            header { font-weight: bold; margin-bottom: 8px; }
            footer { margin-top: 8px; }
          </style>
          <div class="card">
            <header><slot name="judul">Judul Default</slot></header>
            <main><slot></slot></main>
            <footer><slot name="aksi"></slot></footer>
          </div>
        `;
      }
    }
    customElements.define('my-card', MyCard);
