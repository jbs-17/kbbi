// searchBySemanticField.js
import connectToDb from './dbConnection.js'; // Impor fungsi koneksi database

/**
 * Mencari dokumen berdasarkan bidang semantik pada field 'bidang'.
 * @param {string} field - Bidang semantik (contoh: 'kedokteran')
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan bidang semantik
 */
async function searchBySemanticField(field) {
  const db = await connectToDb(); // Dapatkan koneksi ke database
  const collection = db.collection('kamus'); // Akses koleksi 'kamus'
  const query = { bidang: field }; // Query untuk mencocokkan bidang semantik
  const result = await collection.find(query).toArray(); // Eksekusi query dan ubah ke array
  return result;
}

export default searchBySemanticField; // Ekspor fungsi untuk penggunaan eksternal