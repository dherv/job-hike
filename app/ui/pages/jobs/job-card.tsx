"use client";
import { JobWithCompany } from "@/app/lib/types";
import { Card } from "@/app/ui/components/card";
import { useRouter } from "next/navigation";
import { CityName } from "../../components/city-name";
import { Pill } from "../../components/pill";
import { CompanyLogo } from "../companies/company-logo";
import { CompanyName } from "../companies/company-name";

const CardJobName = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-light text-md text-primary-400">{children}</div>;
};

const CardJobApplication = ({
  application,
}: {
  application?: JobWithCompany["application"];
}) => {
  if (!application) return null;
  return (
    <div className="flex items-center gap-4">
      <CardApplicationDate>{application.date}</CardApplicationDate>
      <Pill>{application.status}</Pill>
    </div>
  );
};

const CardApplicationDate = ({ children }: { children: Date }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  if (!children) return null;
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    children
  );
  return (
    <div className="text-xs text-primary-400 font-light">{formattedDate}</div>
  );
};

export const JobCard = ({ job }: { job: JobWithCompany }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/dashboard/jobs/${job.id}`);
  };
  return (
    <Card onClick={handleClick}>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <CompanyLogo logo={job.company?.logo} alt={job.company?.name} />
          </div>
          <div>
            <CardJobName>{job.title}</CardJobName>
            <div className="flex items-center gap-4">
              <CompanyName>{job.company?.name}</CompanyName>
              <CityName city={job.company.city.name} />
            </div>
          </div>
        </div>
        <CardJobApplication application={job.application} />
      </div>
    </Card>
  );
};
