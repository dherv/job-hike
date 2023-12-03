import { Prisma } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "../../lib/prisma";

export const fetchJobs = async () => {
  noStore();
  return await prisma.job.findMany({ include: { company: true } });
};

export const createJobAction = async (job: any) => {
  noStore();
  return await prisma.job.create(job);
};

export const fetchJobById = async (id: string) => {
  noStore();
  return await prisma.job.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
    include: {
      company: true,
    },
  });
};

export type JobWithCompany = Prisma.PromiseReturnType<typeof fetchJobById>;
