import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { user } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        
        console.log({ credentials });
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
