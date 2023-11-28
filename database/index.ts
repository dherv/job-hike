import mockCompanies from "../mocks/companies";
import mockJobs from "../mocks/jobs";
import { mockUsers } from "../mocks/users";
import { CompanyState } from "./states/company";
import { JobState } from "./states/job";
import { UserState } from "./states/users";

const companies = new CompanyState();
const jobs = new JobState([], companies);
export const users = new UserState();

// Initialize your mock databases with some data if needed
mockUsers.forEach((user) => users.create(user));
mockJobs.forEach((job) => jobs.create(job));
mockCompanies.forEach((company) => companies.create(company));

console.log("init database done");

export { companies, jobs };
