    class UserCard extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<b>${this.getAttribute('name')}</b>`;
      }
    }
    customElements.define('user-card', UserCard);

    class PrettyCard extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <style>
            .card {
              background: linear-gradient(135deg, #667eea, #764ba2);
              color: white;
              padding: 20px;
              border-radius: 10px;
              text-align: center;
              max-width: 250px;
            }
          </style>
          <div class="card">✨ Komponen Cool ✨</div>
        `;
      }
    }
    customElements.define('pretty-card', PrettyCard);

    class MyBadge extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <style>
            span {
              background: var(--badge-color, gray);
              color: white;
              padding: 4px 10px;
              border-radius: 12px;
            }
          </style>
          <span>Label</span>
        `;
      }
    }
    customElements.define('my-badge', MyBadge);