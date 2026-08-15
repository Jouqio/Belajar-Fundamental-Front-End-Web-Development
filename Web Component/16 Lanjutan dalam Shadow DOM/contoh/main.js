    class MyButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            :host { display: inline-block; margin: 4px; }
            :host([disabled]) { opacity: 0.5; pointer-events: none; }
            button { padding: 8px 16px; }
          </style>
          <button><slot></slot></button>
        `;
      }
    }
    customElements.define('my-button', MyButton);

    class SlotWatcher extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div><slot></slot></div>`;
      }
      connectedCallback() {
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', (e) => {
          console.log('slotchange terpicu, jumlah elemen:', e.target.assignedElements().length);
        });
      }
    }
    customElements.define('slot-watcher', SlotWatcher);

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`p { color: teal; font-weight: bold; }`);

    class MyText extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
        this.shadowRoot.innerHTML = `<p>Teks berwarna teal (berbagi stylesheet)</p>`;
      }
    }
    customElements.define('my-text', MyText);