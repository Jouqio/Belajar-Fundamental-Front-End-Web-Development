/**
 * notes-api.js
 * Lapisan data aplikasi. Semua fungsi di sini bersifat "async" dan
 * mengembalikan Promise — meniru pola pemanggilan REST API sungguhan.
 *
 * Data awal berasal dari notes-source.js (data dummy). Perubahan yang
 * dilakukan pengguna (tambah/hapus/arsipkan) disimpan ke localStorage
 * agar tetap ada walau halaman di-refresh.
 */
import { dummyNotes } from './notes-source.js';

const STORAGE_KEY = 'notesapp-data';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateId() {
  return `notes-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function readFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error('Gagal membaca data dari localStorage:', error);
    return null;
  }
}

function writeToStorage(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

/** Mengambil semua catatan. Dipanggil saat aplikasi pertama kali dimuat. */
export async function fetchNotes() {
  await delay(600); // simulasi network delay agar loading indicator terlihat

  let notes = readFromStorage();
  if (!notes) {
    notes = dummyNotes;
    writeToStorage(notes);
  }
  return notes;
}

/** Menambahkan catatan baru. Mengembalikan seluruh daftar catatan terbaru. */
export async function createNote({ title, body }) {
  await delay(300);

  const notes = readFromStorage() || [];
  const newNote = {
    id: generateId(),
    title,
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };

  const updatedNotes = [newNote, ...notes];
  writeToStorage(updatedNotes);
  return updatedNotes;
}

/** Menghapus catatan berdasarkan id */
export async function deleteNote(id) {
  await delay(300);

  const notes = readFromStorage() || [];
  const updatedNotes = notes.filter((note) => note.id !== id);
  writeToStorage(updatedNotes);
  return updatedNotes;
}

/** Mengubah status arsip catatan (aktif <-> diarsipkan) */
export async function toggleArchiveNote(id) {
  await delay(300);

  const notes = readFromStorage() || [];
  const updatedNotes = notes.map((note) =>
    note.id === id ? { ...note, archived: !note.archived } : note
  );
  writeToStorage(updatedNotes);
  return updatedNotes;
}
