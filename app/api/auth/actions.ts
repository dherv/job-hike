"use server";

import { auth } from "../../../auth";
import { prisma } from "../../lib/prisma";

export async function getUser(email: string) {
  try {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getSessionUser() {
  try {
    const session = await auth();
    if (!session?.user?.email) return null;
    // return session.user;
    return await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
