import { ZJobSchema } from "@/app/lib/actions/actions.prisma";
import { v4 as uuidv4 } from "uuid";
import { CompanyState } from "./company";

export type Job = Omit<ZJobSchema, "applicationDate"> & {
  // id: string;
  // title: string;
  company?: { id: string; name: string };
  // companyId?: string;
  // description: string;
  applicationDate: Date;
  // applicationMethod: string; // move to enum or add applicationAgency true/false
  // contactInformation: string;
  // applicationStatus: string;
  // notes?: string;
  // url: string;
  // source: string; // could be use to reference agency or me
  // resumeCVStatus: string;
  // coverLetterStatus: string;
  // interviewDetails?: {
  //   date: Date;
  //   time: string;
  //   location: string;
  // };
  // followUpActions: string;
  // salaryInformation: string;
  // skillsRequired: string[];
  // applicationMaterials: string[];
  // referenceNumber: string;
  // documents: {
  //   resume: string;
  //   coverLetter: string;
  //   additionalDocuments: string[];
  // };
  // feedback: string;
};

type JobSchema = Omit<Job, "id">;

export class JobState {
  state: Job[];
  companies: CompanyState;
  constructor(initialState = [], companies: CompanyState) {
    this.state = initialState;
    this.companies = companies;
  }
  async get(): Promise<Job[]> {
    return await Promise.all(
      this.state.map(async (job) => {
        const companies = await this.companies.get();
        const company = job.companyId
          ? await this.companies.getById(job.companyId)
          : undefined;

        const jobWithCompany = {
          ...job,
          company,
        };
        return jobWithCompany;
      })
    );
  }
  getById(id: string) {
    return Promise.resolve(this.state.find((job) => job.id === id));
  }
  create(job: JobSchema) {
    const id = uuidv4();
    const newJob = { ...job, id };
    this.state = [...this.state, newJob];
    // TODO: if company does not exist, create
    return Promise.resolve();
  }
  update(id: string, updatedJob: Job) {
    this.state = this.state.map((job) => {
      if (job.id === id) {
        return updatedJob;
      }
      return job;
    });
    return Promise.resolve();
  }
  delete(id: string) {
    this.state = this.state.filter((job) => job.id !== id);
    return Promise.resolve();
  }
}
