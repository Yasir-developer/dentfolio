import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
const uri =
  "mongodb+srv://alirf50:F4omy5EBHUIooNKM@cluster0.nlocabm.mongodb.net/?retryWrites=true&w=majority";
console.log(uri, "uri");
const dbName = "dentfolio"; // Update with your database name
let cachedClient = null;
global.mongo = global.mongo || {};

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);

  cachedClient = { client, db };
  return cachedClient;
}

export async function getMongoClient() {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(
      "mongodb+srv://alirf50:F4omy5EBHUIooNKM@cluster0.nlocabm.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("hello");
  }
  // It is okay to call connect() even if it is connected
  // using node-mongodb-native v4 (it will be no-op)
  // See: https://github.com/mongodb/node-mongodb-native/blob/4.0/docs/CHANGES_4.0.0.md
  await global.mongo.client.connect();
  return global.mongo.client;
}
