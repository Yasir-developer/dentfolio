// import { connectToDatabase } from "../../db";
// import jwt from "jsonwebtoken";

// export default async function login(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   const { db } = await connectToDatabase();
//   const users = db.collection("users");
//   const user = await users.findOne({ email, password });

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
//   // Generate a unique token
//   const token = jwt.sign({ email: user.email }, "your-secret-key", {
//     expiresIn: "1h",
//   });

//   // Generate a token or session and return it as a response
//   return res.status(200).json({ token: token });
// }

//using nextAuth

import { connectToDatabase } from "../../db";
import { verifyPassword } from "../../utils/passwordUtils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const { db } = await connectToDatabase();

    // Retrieve the user from the database
    const users = db.collection("users");
    const user = await users.findOne({ email });

    if (!user || !(await verifyPassword(password, user.password))) {
      // Invalid credentials
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return the user data or any additional information you want
    return res.status(200).json({ user: { email: user.email } });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
