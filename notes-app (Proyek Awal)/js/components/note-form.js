/**
 * <note-form>
 *
 * KRITERIA WAJIB 2 (Formulir Tambah Catatan): dua input (judul & isi),
 * isi catatan memakai <textarea> sesuai kebutuhan (teks panjang).
 *
 * KRITERIA OPSIONAL 2 (Realtime Validation): validasi berjalan setiap kali
 * pengguna MENGETIK (event "input"), bukan hanya saat form disubmit.
 * Pesan error muncul/hilang secara langsung, dan tombol submit otomatis
 * nonaktif selama form belum valid.
 */
class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
    this.validate(); // jalankan validasi awal agar tombol submit langsung nonaktif
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          border-radius: 12px;
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
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          transition: border-color 0.15s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #4c8bf5;
        }
        input.invalid, textarea.invalid {
          border-color: #f44336;
        }
        textarea {
          min-height: 90px;
          resize: vertical;
        }
        .char-counter {
          font-size: 11px;
          color: #999;
          text-align: right;
        }
        .error-text {
          color: #f44336;
          font-size: 12px;
          min-height: 16px;
        }
        button {
          margin-top: 12px;
          padding: 11px;
          background: #4c8bf5;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        button:hover:not(:disabled) {
          background: #3a6fd1;
        }
        button:disabled {
          background: #c7d4ea;
          cursor: not-allowed;
        }
      </style>

      <h2>Tambah Catatan Baru</h2>
      <form novalidate>
        <label for="title">Judul</label>
        <input type="text" id="title" maxlength="50" placeholder="Judul catatan...">
        <small class="error-text" id="title-error"></small>

        <label for="body">Isi Catatan</label>
        <textarea id="body" maxlength="200" placeholder="Tulis catatanmu di sini..."></textarea>
        <div class="char-counter" id="body-counter">0/200</div>
        <small class="error-text" id="body-error"></small>

        <button type="submit" id="submit-btn" disabled>Tambah Catatan</button>
      </form>
    `;
  }

  bindEvents() {
    const form = this.shadowRoot.querySelector('form');
    const titleInput = this.shadowRoot.querySelector('#title');
    const bodyInput = this.shadowRoot.querySelector('#body');

    // Realtime validation: divalidasi setiap kali pengguna mengetik
    titleInput.addEventListener('input', () => this.validate());
    bodyInput.addEventListener('input', () => this.validate());

    form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  /**
   * Memvalidasi isi form secara realtime, menampilkan pesan error
   * yang relevan, dan mengatur status tombol submit (aktif/nonaktif).
   */
  validate() {
    const titleInput = this.shadowRoot.querySelector('#title');
    const bodyInput = this.shadowRoot.querySelector('#body');
    const titleError = this.shadowRoot.querySelector('#title-error');
    const bodyError = this.shadowRoot.querySelector('#body-error');
    const bodyCounter = this.shadowRoot.querySelector('#body-counter');
    const submitBtn = this.shadowRoot.querySelector('#submit-btn');

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    let isValid = true;

    // Validasi judul
    if (title === '') {
      titleError.textContent = '';
      titleInput.classList.remove('invalid');
      isValid = false; // kosong: belum error ditampilkan, tapi tetap belum valid
    } else if (title.length < 3) {
      titleError.textContent = 'Judul minimal 3 karakter.';
      titleInput.classList.add('invalid');
      isValid = false;
    } else {
      titleError.textContent = '';
      titleInput.classList.remove('invalid');
    }

    // Validasi isi catatan
    bodyCounter.textContent = `${body.length}/200`;
    if (body === '') {
      bodyError.textContent = '';
      bodyInput.classList.remove('invalid');
      isValid = false;
    } else if (body.length < 5) {
      bodyError.textContent = 'Isi catatan minimal 5 karakter.';
      bodyInput.classList.add('invalid');
      isValid = false;
    } else {
      bodyError.textContent = '';
      bodyInput.classList.remove('invalid');
    }

    submitBtn.disabled = !isValid;
    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.validate()) return;

    const titleInput = this.shadowRoot.querySelector('#title');
    const bodyInput = this.shadowRoot.querySelector('#body');
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

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
    this.validate();
    titleInput.focus();
  }
}

customElements.define('note-form', NoteForm);
