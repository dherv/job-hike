let fetchJobs: typeof import("./handlers/handlers.prisma").fetchJobs;
let fetchJobById: typeof import("./handlers/handlers.prisma").fetchJobById;
let fetchCompanies: typeof import("./handlers/handlers.prisma").fetchCompanies;

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "custom") {
  fetchJobs = require("./handlers/handlers.custom").fetchJobs;
  fetchJobById = require("./handlers/handlers.custom").fetchJobById;
  fetchCompanies = require("./handlers/handlers.custom").fetchCompanies;
}
if (process.env.NEXT_PUBLIC_MOCK_TYPE === "msw") {
  fetchJobs = require("./handlers/handlers.msw").fetchJobs;
  fetchJobById = require("./handlers/handlers.msw").fetchJobById;
  fetchCompanies = require("./handlers/handlers.msw").fetchCompanies;
}
if (process.env.NEXT_PUBLIC_MOCK_TYPE === "msw-rest") {
  fetchJobs = require("./handlers/handlers.msw-rest").fetchJobs;
  fetchJobById = require("./handlers/handlers.msw-rest").fetchJobById;
  fetchCompanies = require("./handlers/handlers.msw-rest").fetchCompanies;
}

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "prisma") {
  fetchJobs = require("./handlers/handlers.prisma").fetchJobs;
  fetchJobById = require("./handlers/handlers.prisma").fetchJobById;
  fetchCompanies = require("./handlers/handlers.prisma").fetchCompanies;
}
if (process.env.NEXT_PUBLIC_MOCK_TYPE === "json-server") {
  fetchJobs = require("./handlers/handlers.json-server").fetchJobs;
  fetchJobById = require("./handlers/handlers.json-server").fetchJobById;
  fetchCompanies = require("./handlers/handlers.json-server").fetchCompanies;
}

export { fetchCompanies, fetchJobById, fetchJobs };
