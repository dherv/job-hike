// import * as db from "@/database";

import { unstable_noStore as noStore } from "next/cache";
import { db } from "../../mocks/msw/db";

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

export const fetchJobById = async (id: string) => {
  noStore();
  console.log(id);
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
