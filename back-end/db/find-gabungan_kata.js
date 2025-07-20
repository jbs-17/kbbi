import { connect } from './create-connection.js';


async function gabunganKata(gabunganKata) {
  try {
    const { client, kamus } = await connect();
    const query = { "key": { $regex: gabunganKata } };
    const result = await kamus.find(query).toArray();
    client.close();
    return {
      status: true,
      result
    }
  } catch (error) {
    return { status: false, result: null, error }
  }
}

export {
  gabunganKata
}