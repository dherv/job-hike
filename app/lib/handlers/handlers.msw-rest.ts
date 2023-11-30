import { Prisma } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

export const fetchJobs = async () => {
  const res = await fetch("http://localhost:3000/api/jobs", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchJobById = async (id: string) => {
  noStore();

  const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchCompanies = async () => {
  noStore();

  const res = await fetch(`http://localhost:3000/api/companies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export type JobWithCompany = Prisma.PromiseReturnType<typeof fetchJobById>;
