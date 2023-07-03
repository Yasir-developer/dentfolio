import { connectToDatabase } from "../../db";
import jwt from "jsonwebtoken";

export default async function login(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const { db } = await connectToDatabase();
  const users = db.collection("users");
  const user = await users.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Generate a unique token
  const token = jwt.sign({ email: user.email }, "your-secret-key", {
    expiresIn: "1h",
  });

  // Generate a token or session and return it as a response
  return res.status(200).json({ token: token });
}
