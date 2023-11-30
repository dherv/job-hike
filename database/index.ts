import { db } from "../mocks/msw/db";

/** Custom mocks part */
// const companies = new CompanyState();
// const jobs = new JobState([], companies);
// export const users = new UserState();

// // Initialize your mock databases with some data if needed
// mockUsers.forEach((user) => users.create(user));
// mockJobs.forEach((job) => jobs.create(job));
// mockCompanies.forEach((company) => companies.create(company));

/** MSW mocks part */
// const dbInit = () => {
db.user.create();
const company = db.company.create();
db.job.create({ company });

//   console.log("init database done");
// };

// dbInit();

// export { companies, jobs };
export { db };
