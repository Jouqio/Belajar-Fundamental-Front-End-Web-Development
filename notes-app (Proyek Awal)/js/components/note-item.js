/**
 * <note-item>
 *
 * KRITERIA WAJIB 4 (Web Component): custom element kedua dari minimal 3.
 * KRITERIA WAJIB 1 (Menampilkan Daftar Catatan): komponen inilah yang
 * merender setiap item catatan dari data dummy.
 *
 * Data catatan dikirim lewat PROPERTI JavaScript (bukan atribut HTML),
 * karena datanya berupa object, bukan string sederhana:
 *
 *   const el = document.createElement('note-item');
 *   el.note = { id, title, body, createdAt, archived };
 */
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._note = null;
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  render() {
    if (!this._note) return;

    const { id, title, body, createdAt, archived } = this._note;
    const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          background: white;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .title {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 700;
          word-break: break-word;
        }
        .body {
          margin: 0 0 12px;
          font-size: 14px;
          color: #444;
          flex-grow: 1;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .date {
          font-size: 12px;
          color: #999;
          margin-bottom: 12px;
        }
        .actions {
          display: flex;
          gap: 8px;
        }
        button {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .btn-archive {
          background: #eef2ff;
          color: #4c8bf5;
        }
        .btn-archive:hover {
          background: #dce4ff;
        }
        .btn-delete {
          background: #fdecea;
          color: #f44336;
        }
        .btn-delete:hover {
          background: #fbdcd9;
        }
      </style>

      <article class="card">
        <h3 class="title">${this.escapeHtml(title)}</h3>
        <p class="body">${this.escapeHtml(body)}</p>
        <time class="date">${formattedDate}</time>
        <div class="actions">
          <button class="btn-archive">${archived ? '↩️ Aktifkan' : '🗄️ Arsipkan'}</button>
          <button class="btn-delete">🗑️ Hapus</button>
        </div>
      </article>
    `;

    this.shadowRoot.querySelector('.btn-archive').addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('note-archive-toggle', {
          bubbles: true,
          composed: true,
          detail: { id },
        })
      );
    });

    this.shadowRoot.querySelector('.btn-delete').addEventListener('click', () => {
      const confirmed = confirm(`Hapus catatan "${title}"? Tindakan ini tidak bisa dibatalkan.`);
      if (confirmed) {
        this.dispatchEvent(
          new CustomEvent('note-delete', {
            bubbles: true,
            composed: true,
            detail: { id },
          })
        );
      }
    });
  }

  /**
   * Mencegah teks catatan pengguna dirender sebagai HTML mentah
   * (mencegah celah XSS sederhana) dengan memanfaatkan textContent
   * sebagai perantara escaping.
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('note-item', NoteItem);
