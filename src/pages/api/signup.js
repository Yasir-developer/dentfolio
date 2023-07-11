// import { connectToDatabase } from "../../db";

// export default async function signup(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   const { db } = await connectToDatabase();
//   const users = db.collection("users");
//   const existingUser = await users.findOne({ email });

//   if (existingUser) {
//     return res.status(409).json({ message: "User already exists" });
//   }

//   // Create the new user in the database
//   await users.insertOne({ email, password });
//   console.log(users, "all users created");
//   // Generate a token or session and return it as a response
//   return res.status(201).json({ message: "User created" });
// }

import { connectToDatabase } from "../../db";
import { hashPassword } from "../../utils/passwordUtils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    email,
    password,
    firstName,
    lastName,
    displayName,
    gdcNo,
    buildingName,
    streetName,
    city,
    postCode,
  } = req.body;
  const errors = [];
  if (!email) {
    errors.push("Email is Required");
  }

  if (!password) {
    errors.push("Password is Required");
  }
  if (!firstName) {
    errors.push("First Name is Required");
  }
  if (!lastName) {
    errors.push("Last Name is Required");
  }
  if (!displayName) {
    errors.push("Display Name is Required");
  }
  if (!gdcNo) {
    errors.push("GDC Number is Required");
  }
  if (!buildingName) {
    errors.push("Building Name/No is Required");
  }
  if (!streetName) {
    errors.push("street Name is Required");
  }

  if (!city) {
    errors.push("City is Required");
  }
  if (!postCode) {
    errors.push("PostCode is Required");
  }

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !displayName ||
    !gdcNo ||
    !buildingName ||
    !streetName ||
    !city ||
    !postCode
  ) {
    return res
      .status(400)
      .json({ message: "Missing required fields", errors: errors });
  }

  try {
    const { db } = await connectToDatabase();

    // Check if the user already exists
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the user
    const newUser = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      displayName,
      gdcNo,
      buildingName,
      streetName,
      city,
      postCode,
    };
    // console.log(users, "users");

    // console.log("here at try");
    // return;
    await users.insertOne(newUser, function (error, response) {
      if (error) {
        console.log("Error occurred while inserting");
        // return
      } else {
        console.log("inserted record", response.ops[0]);
        // return
      }
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ message: "Internal server error" });
  }
}
