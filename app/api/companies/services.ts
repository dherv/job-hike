import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "../../lib/prisma";

export const fetchCompanies = async () => {
  noStore();
  const companies = await prisma.company.findMany();
  return companies;
};
