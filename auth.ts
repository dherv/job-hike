// import type { User } from "@/app/lib/definitions";
// import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "./app/lib/actions/actions.prisma";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        console.log({ parsedCredentials });
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          console.log({ user });
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log({ passwordsMatch });
          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
