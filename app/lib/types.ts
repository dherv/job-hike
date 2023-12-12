import { Prisma } from "@prisma/client";

export type JobWithCompany = Prisma.JobGetPayload<{
  include: {
    application: true;
    contact: true;
    company: {
      include: {
        city: true;
        // contact: true;
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
