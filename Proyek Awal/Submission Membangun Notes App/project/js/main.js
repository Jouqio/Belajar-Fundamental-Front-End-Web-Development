/**
 * main.js
 * Titik masuk (entry point) aplikasi.
 * Tanggung jawabnya:
 *  1. Mendaftarkan semua Web Component.
 *  2. Mengambil data awal & menampilkannya.
 *  3. Mendengarkan custom event dari komponen anak (note-form, note-item)
 *     lalu memproses perubahan data dan me-render ulang tampilan.
 */

// Mendaftarkan seluruh Web Component yang dipakai di index.html
import './components/app-bar.js';
import './components/note-form.js';
import './components/note-item.js';
import './components/loading-indicator.js';

import {
  fetchNotes,
  createNote,
  deleteNote,
  toggleArchiveNote,
} from './data/notes-api.js';

// Referensi elemen-elemen di halaman
const activeNotesList = document.querySelector('#active-notes-list');
const archivedNotesList = document.querySelector('#archived-notes-list');
const loadingIndicator = document.querySelector('#loading-indicator');

/**
 * Merender ulang seluruh tampilan daftar catatan
 * berdasarkan array data terbaru.
 */
function renderNotes(notes) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  renderNotesInto(activeNotesList, activeNotes, 'Belum ada catatan aktif.');
  renderNotesInto(archivedNotesList, archivedNotes, 'Belum ada catatan diarsipkan.');
}

/** Helper untuk merender satu grup catatan ke dalam sebuah container */
function renderNotesInto(container, notes, emptyMessage) {
  container.innerHTML = '';

  if (notes.length === 0) {
    container.innerHTML = `<p class="empty-text">${emptyMessage}</p>`;
    return;
  }

  notes.forEach((note) => {
    const noteElement = document.createElement('note-item');
    noteElement.note = note; // kirim data lewat properti, bukan atribut
    container.appendChild(noteElement);
  });
}

/** Memuat data pertama kali saat aplikasi dibuka */
async function loadInitialNotes() {
  loadingIndicator.hidden = false;
  const notes = await fetchNotes();
  loadingIndicator.hidden = true;
  renderNotes(notes);
}

// ===== Menangani event dari komponen anak =====
// Pola: komponen anak hanya "melapor" lewat event,
// main.js yang memutuskan bagaimana data diproses dan tampilan diperbarui.

document.addEventListener('note-added', async (event) => {
  const updatedNotes = await createNote(event.detail);
  renderNotes(updatedNotes);
});

document.addEventListener('note-delete', async (event) => {
  const updatedNotes = await deleteNote(event.detail.id);
  renderNotes(updatedNotes);
});

document.addEventListener('note-archive-toggle', async (event) => {
  const updatedNotes = await toggleArchiveNote(event.detail.id);
  renderNotes(updatedNotes);
});

// Jalankan aplikasi
loadInitialNotes();
