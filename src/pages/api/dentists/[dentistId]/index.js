// // import { getStudentById } from "@/api-lib/db";
// // import { auths, database, validateBody } from "@/api-lib/middlewares";
// import db from "../../../../db";
// // import { ncOpts } from "../../../../../api-lib/nc";

// import nc from "next-connect";
// import { getDentistById } from "../../../../../api-lib/db/dentist";

// // const handler = nc(ncOpts);

// // handler.use(db);

// // handler.get(async (req, res) => {
// //   console.log(res, "res");

// // });

// // try {
// // const { db } = await connectToDatabase();

// // Retrieve the user profile from the database
// // const users = db.collection('users');
// // const user = await users.findOne({ _id: userId });
// export default async function handler(req, res) {
//   const dentist = await getDentistById(db, req.query.dentistId);
//   res.json({ dentist });
// }
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     // Return the user profile data
// //     return res.status(200).json({ user });
// //   } catch (error) {
// //     return res.status(500).json({ message: 'Internal server error' });
// //   }
// // }
// // export default handler;

import { connectToDatabase } from "../../../../db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  //   if (req.method !== "GET") {
  //     return res.status(405).json({ message: "Method not allowed" });
  //   }
  console.log(req.query, "req.query");
  if (req.method === "GET") {
    const { dentistId } = req.query; // Assuming the ID is provided as a query parameter
    console.log(dentistId, "id-------");
    try {
      const { db } = await connectToDatabase();

      // Retrieve the user profile from the database
      const users = db.collection("users");
      const user = await users.findOne({ _id: new ObjectId(dentistId) });
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
  } else if (req.method === "PUT") {
    const { dentistId } = req.query; // Assuming the ID is provided as a query parameter
    const {
      firstName,
      lastName,
      displayName,
      gdcNo,
      buildingName,
      streetName,
      city,
      postCode,
      bio,
      courtesyTitle,
      profile_photo,
      treatment_type,
      previous_case,
    } = req.body;
    try {
      const { db } = await connectToDatabase();

      // Update the user profile in the database
      const users = db.collection("users");
      const updatedUser = await users.findOneAndUpdate(
        { _id: new ObjectId(dentistId) },
        {
          $set: {
            firstName,
            lastName,
            displayName,
            gdcNo,
            buildingName,
            streetName,
            city,
            postCode,
            bio: bio ? bio : "",
            courtesyTitle: courtesyTitle ? courtesyTitle : "",
            profile_photo: profile_photo ? profile_photo : "",
            treatment_type: treatment_type ? treatment_type : [],
            previous_case: previous_case ? previous_case : [],
          },
        },
        { returnOriginal: false }
      );

      if (!updatedUser.value) {
        return res.status(404).json({ message: "User not found" });
      }

      // Return the updated user profile
      return res
        .status(200)
        .json({ message: "Updated Sucessfully", user: updatedUser.value });
    } catch (error) {
      console.log(error, "edit error ----");

      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

// export default async function editProfile(req, res) {
// if (req.method !== 'PUT') {
//   return res.status(405).json({ message: 'Method not allowed' });
// }

//   }
