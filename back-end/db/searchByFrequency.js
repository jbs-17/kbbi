// searchByFrequency.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen berdasarkan rentang frekuensi pada field 'frekuensi'.
 * @param {number} minFrequency - Frekuensi minimum
 * @param {number} maxFrequency - Frekuensi maksimum
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan rentang frekuensi
 */
async function searchByFrequency(minFrequency, maxFrequency) {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { frekuensi: { $gte: minFrequency, $lte: maxFrequency } }; // Query rentang frekuensi
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchByFrequency; // Ekspor fungsi untuk penggunaan eksternal