let fetchJobs: typeof import("./handlers/handlers.prisma").fetchJobs;
let fetchJobById: typeof import("./handlers/handlers.prisma").fetchJobById;
let fetchCompanies: typeof import("./handlers/handlers.prisma").fetchCompanies;

if (process.env.NEXT_PUBLIC_MOCK_API === "true") {
  fetchJobs = require("./handlers/handlers.msw").fetchJobs;
  fetchJobById = require("./handlers/handlers.msw").fetchJobById;
  fetchCompanies = require("./handlers/handlers.msw").fetchCompanies;
} else {
  fetchJobs = require("./handlers/handlers.prisma").fetchJobs;
  fetchJobById = require("./handlers/handlers.prisma").fetchJobById;
  fetchCompanies = require("./handlers/handlers.prisma").fetchCompanies;
}

export { fetchCompanies, fetchJobById, fetchJobs };
