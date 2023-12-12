import { fetchJobs } from "@/app/api/jobs/services";
import { JobCard } from "./job-card";

export const JobList = async () => {
  const jobs = await fetchJobs();
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
};
