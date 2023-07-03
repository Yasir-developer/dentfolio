import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, query, doctorId } = req.body;

  if (!name || !query || !doctorId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const { db } = await connectToDatabase();

    // Save the patient's form data to the database
    await db.collection("forms").insertOne({ name, query, doctorId });

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
