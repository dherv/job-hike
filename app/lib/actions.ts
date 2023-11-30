let createJob: typeof import("./actions/actions.prisma").createJob;
let updateJob: typeof import("./actions/actions.prisma").updateJob;
let deleteJob: typeof import("./actions/actions.prisma").deleteJob;
let authenticate: typeof import("./actions/actions.prisma").authenticate;

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "msw") {
  createJob = require("./actions/actions.msw").createJob;
  updateJob = require("./actions/actions.msw").updateJob;
  deleteJob = require("./actions/actions.msw").deleteJob;
  authenticate = require("./actions/actions.msw").authenticate;
}

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "msw-rest") {
  createJob = require("./actions/actions.msw-rest").createJob;
  updateJob = require("./actions/actions.msw-rest").updateJob;
  deleteJob = require("./actions/actions.msw-rest").deleteJob;
  authenticate = require("./actions/actions.msw-rest").authenticate;
}

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "prisma") {
  createJob = require("./actions/actions.prisma").createJob;
  updateJob = require("./actions/actions.prisma").updateJob;
  deleteJob = require("./actions/actions.prisma").deleteJob;
  authenticate = require("./actions/actions.prisma").authenticate;
}

if (process.env.NEXT_PUBLIC_MOCK_TYPE === "json-server") {
  createJob = require("./actions/actions.json_server").createJob;
  updateJob = require("./actions/actions.json_server").updateJob;
  deleteJob = require("./actions/actions.json_server").deleteJob;
  authenticate = require("./actions/actions.json_server").authenticate;
}

export { authenticate, createJob, deleteJob, updateJob };
