"use server";

import { prisma } from "../../lib/prisma";

export async function getUser(email: string) {
  try {
    return await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
