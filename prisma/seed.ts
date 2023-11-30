import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "user@nextmail.com" },
    update: {},
    create: {
      name: "Admin",
      email: "user@nextmail.com",
      password: bcrypt.hashSync("123456", 10),
      jobs: {
        create: {
          title: "Frontend Developer",
          description:
            "Join our team to work on innovative and user-friendly web applications.",
          applicationDate: new Date("2023-02-10"),
          applicationMethod: "online",
          contactInformation: "Amy Johnson, Lead Developer",
          applicationStatus: "in-progress",
          notes: "Prepare for technical assessment during the interview.",
          url: "https://example.com/job3",
          source: "Company Website",
          company: {
            create: {
              name: "Web Tech Solutions",
              website: "https://webtechsolutions.example.com",
            },
          },
        },
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
