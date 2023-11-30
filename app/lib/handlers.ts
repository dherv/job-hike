let fetchJobs: typeof import("./handlers/handlers.prisma").fetchJobs;
let fetchJobById: typeof import("./handlers/handlers.prisma").fetchJobById;
let fetchCompanies: typeof import("./handlers/handlers.prisma").fetchCompanies;

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "msw") {
  fetchJobs = require("./handlers/handlers.msw").fetchJobs;
  fetchJobById = require("./handlers/handlers.msw").fetchJobById;
  fetchCompanies = require("./handlers/handlers.msw").fetchCompanies;
}
if (process.env.NEXT_PUBLIC_MOCK_TYPE === "prisma") {
  fetchJobs = require("./handlers/handlers.prisma").fetchJobs;
  fetchJobById = require("./handlers/handlers.prisma").fetchJobById;
  fetchCompanies = require("./handlers/handlers.prisma").fetchCompanies;
}
if (process.env.NEXT_PUBLIC_MOCK_TYPE === "json-server") {
  fetchJobs = require("./handlers/handlers.json_server").fetchJobs;
  fetchJobById = require("./handlers/handlers.json_server").fetchJobById;
  fetchCompanies = require("./handlers/handlers.json_server").fetchCompanies;
}

export { fetchCompanies, fetchJobById, fetchJobs };
