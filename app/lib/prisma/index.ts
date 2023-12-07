import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();
export { Prisma };
// export const createContext = async (context) => {
//   const session = await auth();
//   return {
//     ...context,
//     prisma,
//     userId: session?.user?.email ?? null,
//   };
// };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
