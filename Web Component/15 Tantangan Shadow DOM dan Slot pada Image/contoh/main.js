    class ImageCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            .card {
              width: 220px;
              border: 1px solid #ddd;
              border-radius: 10px;
              overflow: hidden;
            }
            ::slotted(img) { width: 100%; display: block; }
            .caption { padding: 10px; font-size: 14px; color: #444; }
          </style>
          <div class="card">
            <slot name="image"></slot>
            <div class="caption">
              <slot name="caption">Tanpa keterangan</slot>
            </div>
          </div>
        `;
      }
    }
    customElements.define('image-card', ImageCard);