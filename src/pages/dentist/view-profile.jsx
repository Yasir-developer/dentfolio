import DentistTabs from "@/components/DentistTabs/DentistTabs";
import DoctorBasicDetail from "@/components/DoctorBasicDetail/DoctorBasicDetail";
import PreviousCases from "@/components/PreviousCases/PreviousCases";
import TreatmentProvide from "@/components/TreatmentProvide/TreatmentProvide";
import ViewProfilePage from "@/page-components/ViewProfilePage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../config";
// import { connectToDatabase } from "../../db";
// import { ObjectId } from "mongodb";
// import { getSession } from "../../../api-lib/middlewares/session";
// import { getSession } from "next-auth/client";
// import { getSession, useSession } from "next-auth/react";

const viewprofile = ({ data }) => {
  return (
    <div className="dentistBodyStyles">
      <DentistTabs>
        {/* <EditCasePage /> */}
        {/* <h1>Edit case</h1> */}

        <ViewProfilePage />
      </DentistTabs>
    </div>
  );
};

// export async function getServerSideProps(ctx) {
//   const { userID } = ctx.query;
//   console.log(userID, "-----");
//   // const { req } = context;
//   // console.log(req, "reqqqq");
//   // // Retrieve the token from the request cookie
//   // const token = req.cookies.token;

//   // }

//   // try {
//   //   const { db } = await connectToDatabase();

//   //   const users = db.collection("users");
//   //   console.log(users, "userssss");
//   //   const user = await users.findOne({ userID });
//   //   console.log(user, "user====");
//   //   if (user !== null) {
//   //     user._id = user._id.toString();
//   //     // console.log(userId, "userId");
//   //   }

//   //   // const userId = user._id.toString();
//   //   // Use the retrieved userId for further data fetching or processing

//   //   return { props: { user } };
//   // } catch (error) {
//   //   // Handle any errors that occur during data fetching or processing
//   //   return {
//   //     props: {
//   //       error: "An error occurred",
//   //     },
//   //   };
//   // }
// }

export default viewprofile;
