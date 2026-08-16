/**
 * <app-bar app-title="..." app-subtitle="...">
 *
 * KRITERIA WAJIB 4 (Web Component): salah satu dari minimal 3 custom element.
 * KRITERIA OPSIONAL 3 (Custom Attribute): komponen ini menerima data lewat
 * ATRIBUT HTML "app-title" dan "app-subtitle" yang ditulis LANGSUNG di
 * index.html, bukan lewat properti JavaScript. Ini dipantau lewat
 * `observedAttributes` + `attributeChangedCallback`, sehingga kalau atribut
 * ini diubah kapan pun (bahkan lewat DevTools), tampilan akan otomatis
 * ter-update tanpa reload halaman.
 */
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['app-title', 'app-subtitle'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('app-title') || 'Notes App';
    const subtitle = this.getAttribute('app-subtitle') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: linear-gradient(135deg, #4c8bf5, #6a5acd);
          color: white;
          padding: 28px 20px;
          text-align: center;
        }
        h1 {
          margin: 0;
          font-size: 26px;
        }
        p {
          margin: 6px 0 0;
          opacity: 0.9;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          h1 { font-size: 22px; }
          :host { padding: 20px 16px; }
        }
      </style>
      <h1>📝 ${this.escapeHtml(title)}</h1>
      ${subtitle ? `<p>${this.escapeHtml(subtitle)}</p>` : ''}
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('app-bar', AppBar);
