// searchByMeaning.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen berdasarkan makna pada field 'submakna'.
 * @param {string} meaning - Makna yang ingin dicari
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan makna
 */
async function searchByMeaning(meaning) {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { submakna: { $regex: meaning, $options: 'i' } }; // Query regex, case-insensitive
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchByMeaning; // Ekspor fungsi untuk penggunaan eksternal