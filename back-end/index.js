// app.js
import searchByKeyword from './db/searchByKeyword.js';
import searchByWordClass from './db/searchByWordClass.js';
import searchByMeaning from './db/searchByMeaning.js';
import searchByUsageExample from './db/searchByUsageExample.js';
import searchByFrequency from './db/searchByFrequency.js';
import searchBySemanticField from './db/searchBySemanticField.js';
main()
async function main() {
  try {
    // Contoh penggunaan setiap fungsi
    const keywordResults = await searchByKeyword('kontol');
    console.log('Hasil pencarian kata kunci:', keywordResults);
/*
    const wordClassResults = await searchByWordClass('verba');
    console.log('Hasil pencarian kelas kata:', wordClassResults);

    const meaningResults = await searchByMeaning('cairan');
    console.log('Hasil pencarian makna:', meaningResults);

    const usageResults = await searchByUsageExample();
    console.log('Hasil pencarian contoh penggunaan:', usageResults);

    const frequencyResults = await searchByFrequency(10, 100);
    console.log('Hasil pencarian frekuensi:', frequencyResults);

    const semanticResults = await searchBySemanticField('kedokteran');
    console.log('Hasil pencarian bidang semantik:', semanticResults);
    */
  } catch (error) {
    console.error('Error:', error); // Tangani error jika terjadi
  }
}

// Jalankan fungsi utama