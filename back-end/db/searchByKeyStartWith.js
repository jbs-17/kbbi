// searchByKeyStartWith.js
import connectToDb from './dbConnection.js';

/**
 * Mencari dokumen berdasarkan kata kunci pada field 'key' yang diawali dengan string tertentu.
 * @param {string} keyword - Kata kunci yang ingin dicari
 * @returns {Promise<Array>} Array dokumen yang sesuai dengan kata kunci
 */
async function searchByKeyStartWith(keyword) {
  const db = await connectToDb();
  const collection = db.collection('kamus');
  const query = { key: { $regex: `^${keyword}`, $options: 'i' } };
  const result = await collection.find(query).toArray();
  return result;
}

export default searchByKeyStartWith;