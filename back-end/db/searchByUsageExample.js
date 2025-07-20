// searchByUsageExample.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen yang memiliki contoh penggunaan pada field 'contoh'.
 * @returns {Promise<Array>} Array dokumen yang memiliki contoh penggunaan
 */
async function searchByUsageExample() {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { contoh: { $exists: true, $ne: null } }; // Query untuk field 'contoh' yang ada
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchByUsageExample; // Ekspor fungsi untuk penggunaan eksternal