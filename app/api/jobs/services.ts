import { unstable_noStore as noStore } from "next/cache";
import { CreateJobDto, UdpateJobDto } from "../../lib/validations/jobs";
import { jobsRepository } from "./repository";

export const fetchJobs = async (userEmail: string) => {
  noStore();
  try {
    return await jobsRepository.findAll(userEmail);
  } catch (error) {
    console.log(error);
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
  }
};

export const fetchJobById = async (id: string) => {
  noStore();
  try {
    return await jobsRepository.findOneById(id);
  } catch (error) {
    console.log(error);
  }
};

export const jobsService = {
  fetchJobs,
  createJob,
  updateJob,
  fetchJobById,
};
