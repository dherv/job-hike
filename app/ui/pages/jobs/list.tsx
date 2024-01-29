import { fetchJobs } from "@/app/api/jobs/services";
import { JobCard } from "./card";

export const JobList = async () => {
  const jobs = await fetchJobs();
  return (
    <ul className="flex flex-col gap-6">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
};
