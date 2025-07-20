// dbConnection.js
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // URL untuk koneksi ke MongoDB
const dbName = 'kbbi'; // Nama database yang digunakan

let db; // Variabel untuk menyimpan instance database

/**
 * Fungsi untuk menghubungkan ke database MongoDB.
 * Menggunakan singleton pattern agar hanya ada satu koneksi aktif.
 * @returns {Promise<Db>} Mengembalikan objek database MongoDB
 */
async function connectToDb() {
  if (db) return db; // Jika sudah terkoneksi, kembalikan instance yang ada
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
  return db;
}

export default connectToDb; // Ekspor fungsi untuk digunakan di file lain