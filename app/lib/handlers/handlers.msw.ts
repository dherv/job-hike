// import * as db from "@/database";

import { db } from "@/mocks/msw/db";
import { unstable_noStore as noStore } from "next/cache";

/** Custom mocks actions */
// export const fetchJobs = async () => {
//   noStore();
//   return await db.jobs.get();
// };

// export const fetchJobById = async (id: string) => {
//   noStore();
//   console.log(id);
//   return await db.jobs.getById(id);
// };

// export const fetchCompanies = async () => {
//   noStore();
//   return await db.companies.get();
// };

/** MSW mocks actions */
export const fetchJobs = async () => {
  noStore();
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
