import mockCompanies from "../mocks/custom/companies";
import mockJobs from "../mocks/custom/jobs";
import { mockUsers } from "../mocks/custom/users";
import { CompanyState } from "./custom/states/company";
import { JobState } from "./custom/states/job";
import { UserState } from "./custom/states/users";

/** Custom mocks part */
const companies = new CompanyState();
const jobs = new JobState([], companies);
export const users = new UserState();

// Initialize your mock databases with some data if needed
mockUsers.forEach((user) => users.create(user));
mockJobs.forEach((job) => jobs.create(job));
mockCompanies.forEach((company) => companies.create(company));

const globalForDb = globalThis as unknown as {
  db: any;
};

console.log("before", globalForDb.db);
export const db: {
  companies: typeof companies;
  jobs: typeof jobs;
  users: typeof users;
} = globalForDb.db ?? { companies, jobs, users };

// if (process.env.NODE_ENV !== "production") globalForDb.db = db;
globalForDb.db = db;
console.log("after", globalForDb.db);
