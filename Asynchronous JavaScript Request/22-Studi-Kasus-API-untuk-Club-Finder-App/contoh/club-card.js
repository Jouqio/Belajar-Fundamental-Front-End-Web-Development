/**
 * <club-card>
 * Web Component untuk menampilkan satu kartu klub.
 * Menggabungkan materi Web Component dengan materi Asynchronous JavaScript
 * Request: data yang ditampilkan komponen ini berasal dari hasil fetch()
 * ke Club Finder API (lihat app.js).
 */
class ClubCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._club = null;
  }

  set club(value) {
    this._club = value;
    this.render();
  }

  render() {
    if (!this._club) return;
    const { name, city, founded, color } = this._club;

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        .banner {
          height: 70px;
          background: ${color};
        }
        .info { padding: 14px; }
        .name { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
        .meta { font-size: 13px; color: #888; }
      </style>
      <article class="card">
        <div class="banner"></div>
        <div class="info">
          <div class="name">${this.escapeHtml(name)}</div>
          <div class="meta">${this.escapeHtml(city)} &middot; berdiri ${founded}</div>
        </div>
      </article>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('club-card', ClubCard);
