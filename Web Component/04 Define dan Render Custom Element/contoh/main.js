    class MyBadge extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<span style="background:orange;padding:4px 8px;border-radius:4px;">Baru</span>`;
      }
    }
    customElements.define('my-badge', MyBadge);

    class UserCard extends HTMLElement {
      connectedCallback() {
        const nama = this.getAttribute('name') || 'Tanpa Nama';
        this.innerHTML = `
          <div style="border:1px solid #ccc; padding:10px; border-radius:6px; margin-bottom:8px; display:inline-block;">
            <b>${nama}</b>
          </div>
        `;
      }
    }
    customElements.define('user-card', UserCard);