import { connectToDatabase } from "../../db";

export default async function signup(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const { db } = await connectToDatabase();
  const users = db.collection("users");
  const existingUser = await users.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Create the new user in the database
  await users.insertOne({ email, password });
  console.log(users, "all users created");
  // Generate a token or session and return it as a response
  return res.status(201).json({ message: "User created" });
}
