    class StatusBadge extends HTMLElement {
      static get observedAttributes() {
        return ['status'];
      }
      attributeChangedCallback() {
        this.render();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const status = this.getAttribute('status') || 'pending';
        const config = {
          aktif:    { warna: '#4caf50', label: 'Aktif' },
          nonaktif: { warna: '#f44336', label: 'Nonaktif' },
          pending:  { warna: '#ff9800', label: 'Menunggu' }
        };
        const { warna, label } = config[status] || config.pending;
        this.innerHTML = `
          <style>
            span {
              background: ${warna};
              color: white;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 14px;
            }
          </style>
          <span>${label}</span>
        `;
      }
    }
    customElements.define('status-badge', StatusBadge);