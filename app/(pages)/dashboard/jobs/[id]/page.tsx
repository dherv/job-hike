import { fetchCompanies } from "@/app/api/companies/services";
import { fetchJobById } from "@/app/api/jobs/services";
import { PageLayout } from "@/app/ui/layout/page-layout";
import { JobTitle } from "@/app/ui/pages/jobs/job-title";
import { notFound } from "next/navigation";
import { Pill } from "../../../../ui/components/pill";
import { CompanyHeader } from "../../../../ui/pages/companies/company-header";
import { JobActionButtons } from "../../../../ui/pages/jobs/job-action-buttons";
import { JobDetails } from "../../../../ui/pages/jobs/job-details";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [job, companies] = await Promise.all([
    fetchJobById(id),
    fetchCompanies(),
  ]);

  if (!job) {
    return notFound();
  }

  // TODO: extract the page layout if repeated on each page
  return (
    <PageLayout title="jobs">
      <div className="flex items-center  justify-between">
        <div className="flex items-center gap-4">
          <JobTitle>{job.title}</JobTitle>
          {job.application?.status ? (
            <Pill>{job.application?.status}</Pill>
          ) : null}
        </div>
        <JobActionButtons id={job.id} />
      </div>
      <CompanyHeader company={job.company} />
      <JobDetails job={job} />
    </PageLayout>
  );
}
