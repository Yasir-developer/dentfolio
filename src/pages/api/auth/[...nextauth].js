import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../db";

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with Email')
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        const { db } = await connectToDatabase();
        const users = db.collection("users");
        const user = await users.findOne({ email });

        if (user && user.password === password) {
          // Authentication successful
          return Promise.resolve(user);
        }

        // Authentication failed
        return Promise.resolve(null);
      },
    }),
  ],
  database: process.env.MONGODB_URI,
});
