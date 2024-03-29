import { auth } from "@/auth";
import { unstable_noStore as noStore } from "next/cache";
import { CreateJobDto, UdpateJobDto } from "../../lib/validations/jobs";
import { jobsRepository } from "./repository";

// TODO: fetchJobs is not really a service. It's more of an action/route handler.
export const fetchJobs = async () => {
  noStore();
  try {
    const session = await auth();

    if (!session?.user?.email) {
      throw new Error("No user found");
    }
    return await jobsRepository.findAll(session?.user?.email);
  } catch (error) {
    console.log(error);
    throw new Error("INTERNAL SERVER ERROR");
  }
};

export const createJob = async (job: CreateJobDto, userEmail: string) => {
  noStore();
  try {
    const { companyId, ...formattedJob } = job;
    return await jobsRepository.createOne(
      {
        ...formattedJob,
        applicationDate: new Date(job.applicationDate).toISOString(),
      },
      userEmail,
      companyId
    );
  } catch (error) {
    console.log(error);
    throw new Error("INTERNAL SERVER ERROR");
  }
};

export const updateJob = async (id: string, job: UdpateJobDto) => {
  noStore();
  try {
    return await jobsRepository.updateOne(id, {
      ...job,
      applicationDate: new Date(job.applicationDate).toISOString(),
    });
  } catch (error) {
    console.log(error);
    throw new Error("INTERNAL SERVER ERROR");
  }
};

export const fetchJobById = async (id: string) => {
  noStore();
  try {
    return await jobsRepository.findOneById(id);
  } catch (error) {
    console.log(error);
    throw new Error("INTERNAL SERVER ERROR");
  }
};

export const jobsService = {
  fetchJobs,
  createJob,
  updateJob,
  fetchJobById,
};
