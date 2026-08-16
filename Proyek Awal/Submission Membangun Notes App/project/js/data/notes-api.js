/**
 * notes-api.js
 * Lapisan data aplikasi. Semua fungsi di sini bersifat "async"
 * dan mengembalikan Promise — meniru pola pemanggilan REST API sungguhan,
 * walau sebenarnya datanya disimpan di localStorage browser.
 *
 * Kenapa dibuat begini? Supaya kalau suatu saat Notes App ini
 * disambungkan ke API server sungguhan, kode di main.js dan komponen
 * TIDAK perlu diubah sama sekali — cukup ganti isi file ini.
 */

const STORAGE_KEY = 'notesapp-data';

/** Data awal yang dipakai saat aplikasi pertama kali dijalankan */
const initialNotes = [
  {
    id: 'notes-1',
    title: 'Belajar CSS Grid',
    body: 'Jangan lupa review materi grid-template-areas sebelum lanjut ke Flexbox lanjutan.',
    createdAt: '2026-08-10T09:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-2',
    title: 'Ide Proyek',
    body: 'Coba bangun ulang Notes App ini dengan menambahkan fitur pencarian.',
    createdAt: '2026-08-12T09:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-3',
    title: 'Catatan Lama',
    body: 'Ini contoh catatan yang sudah dipindahkan ke arsip.',
    createdAt: '2026-07-01T09:00:00.000Z',
    archived: true,
  },
];

/** Membuat delay buatan untuk mensimulasikan waktu tunggu jaringan */
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

/**
 * Mengambil semua catatan.
 * Dipanggil sekali saat aplikasi pertama kali dimuat.
 */
export async function fetchNotes() {
  await delay(800); // simulasi network delay agar loading indicator terlihat

  let notes = readFromStorage();
  if (!notes) {
    notes = initialNotes;
    writeToStorage(notes);
  }
  return notes;
}

/**
 * Menambahkan catatan baru.
 * Mengembalikan seluruh daftar catatan terbaru (bukan hanya catatan barunya),
 * supaya main.js bisa langsung me-render ulang tanpa perlu fetch lagi.
 */
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
