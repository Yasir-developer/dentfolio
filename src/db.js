import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log(uri, "uri");
const dbName = "dentfolio"; // Update with your database name
let cachedClient = null;

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
