import { MongoClient } from 'mongodb';
import fs from 'fs/promises';
import path from 'path';

// Konfigurasi database
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'kbbi';
const backupPath = path.join(import.meta.dirname);

async function backupDatabase() {
  let client;

  try {
    // Buat direktori backup jika belum ada
    await fs.mkdir(backupPath, { recursive: true });

    // Koneksi ke database
    client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    const db = client.db(dbName);

    // Dapatkan daftar koleksi
    const collections = await db.listCollections().toArray();

    // Backup setiap koleksi
    for (const collection of collections) {
      const collectionName = collection.name;
      const data = await db.collection(collectionName).find().toArray();

      if (data.length === 0) {
        console.log(`Koleksi ${collectionName} kosong, dilewati.`);
        continue;
      }

      // Simpan data dalam format JSON
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(path.join(backupPath, `${collectionName}.json`), jsonData);

      console.log(`Backup koleksi ${collectionName} berhasil!`);
    }
  } catch (err) {
    console.error('Error saat backup database:', err);
  } finally {
    // Pastikan koneksi ditutup
    if (client) {
      await client.close();
    }
  }
}

// Jalankan fungsi backup
backupDatabase();
