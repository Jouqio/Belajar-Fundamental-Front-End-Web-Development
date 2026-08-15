
    class SimpleBox extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = `
          <style>
            p { color: blue; } /* hanya berlaku di dalam Shadow DOM ini */
          </style>
          <p>Saya di dalam Shadow DOM — tetap biru walau ada CSS global "p { color: red }".</p>
        `;
      }
    }
    customElements.define('simple-box', SimpleBox);

    console.log('shadowRoot bisa diakses:', document.querySelector('simple-box').shadowRoot);
