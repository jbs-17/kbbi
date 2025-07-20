import { connect } from './create-connection.js';


async function pelafalan(pelafalan) {
  try {
    const { client, kamus } = await connect();
    const query = { "key": { $regex: pelafalan } };
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
  pelafalan
}