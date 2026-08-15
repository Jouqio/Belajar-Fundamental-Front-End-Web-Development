    class ProfileCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      static get observedAttributes() {
        return ['name', 'role'];
      }
      attributeChangedCallback() {
        this.render();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const name = this.getAttribute('name') || 'Tanpa Nama';
        const role = this.getAttribute('role') || 'Anggota';
        this.shadowRoot.innerHTML = `
          <style>
            .card {
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 16px;
              max-width: 220px;
            }
            .name { font-weight: bold; font-size: 16px; }
            .role { color: #777; font-size: 14px; }
          </style>
          <div class="card">
            <div class="name">${name}</div>
            <div class="role">${role}</div>
          </div>
        `;
      }
    }
    customElements.define('profile-card', ProfileCard);