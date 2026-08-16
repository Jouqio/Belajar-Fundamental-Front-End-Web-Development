/**
 * <note-form>
 * Form untuk menambah catatan baru.
 *
 * Komponen ini TIDAK menyimpan data sendiri — ia hanya bertugas
 * menangkap input pengguna, memvalidasinya, lalu mengirim data ke luar
 * lewat CustomEvent "note-added". Logika penyimpanan ditangani
 * oleh main.js (pola "komponen anak mengirim event, induk yang memproses").
 */
class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector('form')
      .addEventListener('submit', (event) => this.handleSubmit(event));
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          margin-top: -24px;
          position: relative;
          z-index: 1;
        }
        h2 {
          margin: 0 0 16px;
          font-size: 18px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        label {
          font-weight: 600;
          font-size: 13px;
          margin-top: 8px;
        }
        input, textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
        }
        textarea {
          min-height: 90px;
          resize: vertical;
        }
        .error-text {
          color: #f44336;
          font-size: 12px;
          min-height: 16px;
        }
        button {
          margin-top: 10px;
          padding: 10px;
          background: #4c8bf5;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        button:hover {
          background: #3a6fd1;
        }
      </style>

      <h2>Tambah Catatan Baru</h2>
      <form novalidate>
        <label for="title">Judul</label>
        <input type="text" id="title" maxlength="50" placeholder="Judul catatan...">
        <small class="error-text" id="title-error"></small>

        <label for="body">Isi Catatan</label>
        <textarea id="body" placeholder="Tulis catatanmu di sini..."></textarea>
        <small class="error-text" id="body-error"></small>

        <button type="submit">Tambah Catatan</button>
      </form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();

    const titleInput = this.shadowRoot.querySelector('#title');
    const bodyInput = this.shadowRoot.querySelector('#body');
    const titleError = this.shadowRoot.querySelector('#title-error');
    const bodyError = this.shadowRoot.querySelector('#body-error');

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    // Reset pesan error setiap kali submit dicoba
    titleError.textContent = '';
    bodyError.textContent = '';

    let isValid = true;

    if (title === '') {
      titleError.textContent = 'Judul tidak boleh kosong.';
      isValid = false;
    }
    if (body === '') {
      bodyError.textContent = 'Isi catatan tidak boleh kosong.';
      isValid = false;
    }

    if (!isValid) return;

    // Kirim data ke luar komponen lewat custom event.
    // "composed: true" wajib agar event bisa menembus batas Shadow DOM.
    this.dispatchEvent(
      new CustomEvent('note-added', {
        bubbles: true,
        composed: true,
        detail: { title, body },
      })
    );

    // Kosongkan form setelah berhasil ditambahkan
    titleInput.value = '';
    bodyInput.value = '';
    titleInput.focus();
  }
}

customElements.define('note-form', NoteForm);
