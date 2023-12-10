import { Prisma } from "@prisma/client";

export type JobWithCompany = Prisma.JobGetPayload<{
  include: {
    company: {
      include: {
        city: true;
      };
    };
  };
}>;

export enum ApplicationStatus {
  NotApplied = "not applied",
  Pending = "pending",
  Rejected = "rejected",
  Offer = "offer",
  Accepted = "accepted",
}
