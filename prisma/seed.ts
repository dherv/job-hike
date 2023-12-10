import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "user@nextmail.com",
      password: bcrypt.hashSync("123456", 10),
      avatar: "https://i.pravatar.cc/300",
    },
  });

  const city = await prisma.city.create({
    data: {
      name: "Auckland",
      state: "Auckland",
      country: "New Zealand",
      latitude: -36.848461,
      longitude: 174.763336,
    },
  });

  const company = await prisma.company.create({
    data: {
      name: "NextMail",
      address: "123 Main Street",
      website: "https://example.com",
      logo: "https://example.com/logo.png",
      user: {
        connect: {
          email: user.email,
        },
      },
      city: {
        connect: {
          id: city.id,
        },
      },
    },
  });

  await prisma.job.create({
    data: {
      title: "Frontend Developer",
      description:
        "Join our team to work on innovative and user-friendly web applications.",
      applicationDate: new Date("2023-02-10"),
      applicationMethod: "online",
      contactInformation: "Amy Johnson, Lead Developer",
      applicationStatus: "pending",
      notes: "Prepare for technical assessment during the interview.",
      url: "https://example.com/job3",
      source: "Company Website",
      user: {
        connect: {
          email: user.email,
        },
      },
      company: {
        connect: {
          id: company.id,
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
