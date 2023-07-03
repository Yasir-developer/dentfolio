import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://alirf50:jWpWJ2OrTByFkYxi@cluster0.zrilmyf.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB connection string
const dbName = "practice"; // Update with your database name
// mongodb+srv://alirf50:jWpWJ2OrTByFkYxi@cluster0.zrilmyf.mongodb.net/?retryWrites=true&w=majority
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
