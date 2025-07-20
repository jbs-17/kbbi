import { connect } from './create-connection.js';


async function cariKataDasar(kataDasar) {
  try {
    const {client, kamus} = await connect();
    const result = await kamus.findOne({ "kata_dasar": kataDasar });
    client.close();
    return {
      status: true,
      result
    }
  } catch (error) {
    return {status: false, result: null, error}
  }
}

