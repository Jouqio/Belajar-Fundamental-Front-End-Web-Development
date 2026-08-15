    class FilmCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
          <style>
            .card {
              width: 220px;
              border: 1px solid #ddd;
              border-radius: 10px;
              overflow: hidden;
              background: white;
              box-shadow: 0 2px 6px rgba(0,0,0,.1);
            }
            ::slotted(img) { width: 100%; display: block; }
            .info { padding: 10px; }
            .title { font-weight: bold; font-size: 16px; }
            .meta { color: #777; font-size: 13px; margin: 4px 0; }
            .rating { color: #f5a623; font-weight: bold; }
            .genres { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 6px; }
            ::slotted([slot="genre"]) {
              background: #eee;
              padding: 2px 8px;
              border-radius: 10px;
              font-size: 11px;
            }
          </style>
          <div class="card">
            <slot name="poster"></slot>
            <div class="info">
              <div class="title"></div>
              <div class="meta">
                <span class="year"></span> • <span class="rating"></span>
              </div>
              <div class="genres"><slot name="genre"></slot></div>
            </div>
          </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }

      static get observedAttributes() {
        return ['title', 'year', 'rating'];
      }

      attributeChangedCallback() {
        this.render();
      }

      connectedCallback() {
        this.render();
      }

      render() {
        this.shadowRoot.querySelector('.title').textContent = this.getAttribute('title') || 'Tanpa Judul';
        this.shadowRoot.querySelector('.year').textContent = this.getAttribute('year') || '-';
        this.shadowRoot.querySelector('.rating').textContent = '⭐ ' + (this.getAttribute('rating') || '-');
      }
    }
    customElements.define('film-card', FilmCard);