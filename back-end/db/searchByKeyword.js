// searchByKeyword.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen berdasarkan kata kunci pada field 'key'.
 * @param {string} keyword - Kata kunci yang ingin dicari
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan kata kunci
 */
async function searchByKeyword(keyword) {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { key: { $regex: keyword, $options: 'i' } }; // Query regex, case-insensitive
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchByKeyword; // Ekspor fungsi untuk penggunaan eksternal