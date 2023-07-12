import { connectToDatabase } from "../../db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log(req.query, "req.query");
  const { userId } = req.query; // Assuming the ID is provided as a query parameter
  console.log(userId, "id-------");
  try {
    const { db } = await connectToDatabase();

    // Retrieve the user profile from the database
    const users = db.collection("users");
    const user = await users.findOne({ _id: new ObjectId(userId) });
    console.log(users, "user user");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user profile data
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error, "error ----");
    return res.status(500).json({ message: "Internal server error" });
  }
}
