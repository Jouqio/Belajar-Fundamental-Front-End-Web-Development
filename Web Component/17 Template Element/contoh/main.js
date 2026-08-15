    class MyCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.getElementById('card-template');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
    customElements.define('my-card', MyCard);

    class JsCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
          <style>.card { border: 1px solid #4c8bf5; padding: 12px; border-radius: 8px; max-width: 250px; }</style>
          <div class="card"><slot></slot></div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
    customElements.define('js-card', JsCard);