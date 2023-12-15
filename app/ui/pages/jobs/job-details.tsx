import { JobWithCompany } from "../../../lib/types";

const JobDetail = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-8">
      <span className="inline-block text-primary-400 font-light max-w-8">
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
};

export const JobDetails = ({ job }: { job: JobWithCompany }) => {
  return (
    <div className="flex flex-col gap-4">
      <JobDetail label="salary from">{job.salaryFrom}</JobDetail>
      <JobDetail label="salary to">{job.salaryTo}</JobDetail>
      <JobDetail label="application date">
        {job.application?.date.toLocaleDateString()}
      </JobDetail>
      <JobDetail label="application method">
        {job.application?.method}
      </JobDetail>
      <JobDetail label="contact name">{job.contact?.name}</JobDetail>
      <JobDetail label="contact email">{job.contact?.email}</JobDetail>
      <JobDetail label="contact phone">{job.contact?.phone ?? "-"}</JobDetail>
      <JobDetail label="description">{job.description}</JobDetail>
      <JobDetail label="notes">{job.notes}</JobDetail>
      <JobDetail label="source">{job.source}</JobDetail>
    </div>
  );
};
