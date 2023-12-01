import { db } from "@/mocks/msw/db";
import { unstable_noStore as noStore } from "next/cache";

export const fetchJobs = async () => {
  noStore();
  console.log({ db });
  return await db.job.getAll();
};

export const createJobAction = async (job: any) => {
  noStore();
  return await db.job.create(job);
};
export const fetchJobById = async (id: string) => {
  noStore();
  return await db.job.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });
};

export const fetchCompanies = async () => {
  noStore();
  const companies = await db.company.getAll();
  return companies;
};
