import logo from "@/app/lib/logos/logoipsum-241.svg";
import { JobWithCompany } from "@/app/lib/types";
import { Card } from "@/app/ui/components/card";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const City = ({ city }: { city: string }) => {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-secondary-200">
      <MapPinIcon className="w-4 h-4" />
      {city}
    </div>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 py-1 text-xs font-light text-secondary-400 bg-secondary-200 bg-opacity-10 rounded-full">
      {children}
    </div>
  );
};

const CardJobName = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-light text-md text-primary-400">{children}</div>;
};

const CardCompanyName = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-lg text-primary-900">{children}</div>;
};

const CardApplicationDate = ({ children }: { children: Date }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    children
  );

  return (
    <div className="text-xs text-primary-400 font-light">{formattedDate}</div>
  );
};

export const JobCard = ({ job }: { job: JobWithCompany }) => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            {job.company?.logo ? (
              <Image
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
                src={logo}
                alt={job.company?.name}
              />
            ) : null}
          </div>
          <div>
            <CardJobName>{job.title}</CardJobName>
            <div className="flex items-center gap-4">
              <CardCompanyName>{job.company?.name}</CardCompanyName>
              <City city={job.company.city.name} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CardApplicationDate>{job.applicationDate}</CardApplicationDate>
          <Pill>{job.applicationStatus}</Pill>
        </div>
      </div>
    </Card>
  );
};
