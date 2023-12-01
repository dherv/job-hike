// import * as db from "@/database";

import { unstable_noStore as noStore } from "next/cache";
import { db } from "../../../database";

/** Custom mocks actions */
export const fetchJobs = async () => {
  noStore();
  return await db.jobs.get();
};

export const fetchJobById = async (id: string) => {
  noStore();
  console.log(id);
  return await db.jobs.getById(id);
};

export const fetchCompanies = async () => {
  noStore();
  return await db.companies.get();
};
