import { connectToDatabase } from "../../db";

//Complete list

// export default async function handler(req, res) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const { db } = await connectToDatabase();

//     // Retrieve all forms from the database
//     const forms = await db.collection("forms").find({}).toArray();

//     return res.status(200).json({ forms });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }

//list filter by id

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { doctorId } = req.query;

  try {
    const { db } = await connectToDatabase();

    // Retrieve forms based on doctorId
    const forms = await db.collection("forms").find({ doctorId }).toArray();

    return res.status(200).json({ forms });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
