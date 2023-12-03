import { fetchCompanies } from "@/app/api/companies/services";
import { PageLayout } from "@/app/ui/layout/page-layout";
import { JobCreateForm } from "@/app/ui/pages/jobs/create-form";

export default async function Page() {
  const companies = await fetchCompanies();
  return (
    <PageLayout title="Create Job">
      <JobCreateForm companies={companies} />
    </PageLayout>
  );
}
