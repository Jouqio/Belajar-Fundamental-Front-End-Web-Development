/**
 * <loading-indicator>
 * Menampilkan spinner sederhana. Sembunyikan/tampilkan lewat
 * atribut bawaan `hidden`, contoh:
 *   document.querySelector('loading-indicator').hidden = true;
 */
class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
          padding: 20px;
        }
        :host([hidden]) {
          display: none;
        }
        .spinner {
          width: 32px;
          height: 32px;
          margin: 0 auto 8px;
          border: 4px solid #e0e0e0;
          border-top-color: #4c8bf5;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        p {
          margin: 0;
          color: #888;
          font-size: 14px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
      <div class="spinner"></div>
      <p>Memuat catatan...</p>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
