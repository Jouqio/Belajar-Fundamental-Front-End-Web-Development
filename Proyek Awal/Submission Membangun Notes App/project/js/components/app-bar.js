/**
 * <app-bar>
 * Header sederhana aplikasi. Dibangun sebagai Web Component
 * dengan Shadow DOM agar style-nya tidak bentrok dengan CSS halaman.
 */
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
          font-size: 28px;
        }
        p {
          margin: 6px 0 0;
          opacity: 0.9;
          font-size: 14px;
        }
      </style>
      <h1>📝 Notes App</h1>
      <p>Simpan catatan pentingmu, kapan saja.</p>
    `;
  }
}

customElements.define('app-bar', AppBar);
