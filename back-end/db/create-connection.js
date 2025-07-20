import { MongoClient } from "mongodb";

const uri = "mongodb://localhost";
const client = new MongoClient(uri);

async function connect() {
  try {
    const database = client.db("kbbi");
    const kamus = database.collection("kamus");

    return {
      kamus,
      client,
    }

  } catch (error) {
    await client.close();
    return error;
  }
}

export {
  connect
}