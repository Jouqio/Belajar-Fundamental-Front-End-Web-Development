export const daftarKlub = [
  { nama: 'Persib Bandung', liga: 'Liga 1' },
  { nama: 'Persija Jakarta', liga: 'Liga 1' },
  { nama: 'PSM Makassar', liga: 'Liga 1' },
  { nama: 'Arema FC', liga: 'Liga 1' },
  { nama: 'Bali United', liga: 'Liga 1' },
  { nama: 'Manchester United', liga: 'Premier League' },
  { nama: 'Liverpool', liga: 'Premier League' },
  { nama: 'Real Madrid', liga: 'La Liga' },
  { nama: 'Barcelona', liga: 'La Liga' },
  { nama: 'Bayern Munich', liga: 'Bundesliga' },
];

/**
 * Mencari klub berdasarkan kata kunci nama.
 * @param {string} kataKunci
 * @returns {Array<{nama: string, liga: string}>}
 */
export function cariKlub(kataKunci) {
  const kunci = kataKunci.trim().toLowerCase();
  if (!kunci) return daftarKlub;
  return daftarKlub.filter((klub) =>
    klub.nama.toLowerCase().includes(kunci)
  );
}
