"use client"
import logo from "@/app/lib/logos/logoipsum-241.svg";
import { JobWithCompany } from "@/app/lib/types";
import { Card } from "@/app/ui/components/card";
import Image from "next/image";
import { CardApplicationDate } from "./card-application-date";
import { CardCompanyName } from "./card-company-name";
import { Pill } from "@/app/ui/components/pill";
import { City } from "@/app/ui/components/city";
import { CardJobName } from "./card-job-name";
import { useRouter } from "next/navigation";

export const JobCard = ({ job }: { job: JobWithCompany }) => {
  const router = useRouter()

  const handleClick = () => router.push(`jobs/${job.id}`)

  return (
    <div className="hover:cursor-pointer" onClick={handleClick}>
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
    </div>
  );
};
