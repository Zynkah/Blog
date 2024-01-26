import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { user } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const response = await db
          .select()
          .from(user)
          .where(eq(user.email, credentials?.email || ""));

        const users = response[0];

        const passwordCorrect = await compare(
          credentials?.password || "",
          users.password || ""
        );
        console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            id: users.id,
            email: users.email,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
