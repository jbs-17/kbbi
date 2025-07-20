// searchByWordClass.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen berdasarkan kelas kata pada field 'kelas'.
 * @param {string} wordClass - Kelas kata (contoh: 'verba', 'nomina')
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan kelas kata
 */
async function searchByWordClass(wordClass) {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { kelas: wordClass }; // Query untuk mencocokkan kelas kata
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchByWordClass; // Ekspor fungsi untuk penggunaan eksternal