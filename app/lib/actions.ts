let createJob: typeof import("./actions/actions.prisma").createJob;
let updateJob: typeof import("./actions/actions.prisma").updateJob;
let deleteJob: typeof import("./actions/actions.prisma").deleteJob;
let authenticate: typeof import("./actions/actions.prisma").authenticate;

if (process.env.NEXT_PUBLIC_MOCK_API === "true") {
  createJob = require("./actions/actions.msw").createJob;
  updateJob = require("./actions/actions.msw").updateJob;
  deleteJob = require("./actions/actions.msw").deleteJob;
  authenticate = require("./actions/actions.msw").authenticate;
} else {
  createJob = require("./actions/actions.prisma").createJob;
  updateJob = require("./actions/actions.prisma").updateJob;
  deleteJob = require("./actions/actions.prisma").deleteJob;
  authenticate = require("./actions/actions.prisma").authenticate;
}

export { authenticate, createJob, deleteJob, updateJob };
