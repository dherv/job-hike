import { Prisma, prisma } from "@/app/lib/prisma";
import { CreateJobDto } from "../../lib/validations/jobs";

// TODO: MAKE IT USER RELATED
// TODO: FIND A WAY TO PASS THE USER ID

// TODO: we can override the returned type. better than as alias later in queries.
export async function findAll(userEmail: string) {
  return await prisma.job.findMany({
    where: { user: { email: userEmail } },
    include: { company: { include: { city: true } } },
  });
}

export const findOneById = async (id: string) => {
  return await prisma.job.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
    include: {
      company: true,
    },
  });
};

export async function createOne(
  job: Omit<CreateJobDto, "companyId">,
  userEmail: string,
  companyId: string
) {
  return await prisma.job.create({
    data: {
      ...job,
      user: {
        connect: {
          email: userEmail,
        },
      },
      company: {
        connect: {
          id: companyId,
        },
      },
    },
  });
}

export async function updateOne(id: string, job: Prisma.JobUpdateInput) {
  return await prisma.job.update({
    where: {
      id,
    },
    data: job,
  });
}

export async function deleteOne(id: string) {
  return await prisma.job.delete({
    where: {
      id,
    },
  });
}

export const jobsRepository = {
  findAll,
  createOne,
  updateOne,
  findOneById,
};
