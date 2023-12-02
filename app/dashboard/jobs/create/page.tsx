import { fetchCompanies } from "../../../lib/handlers";
import { JobCreateForm } from "../../../ui/jobs/create-form";
import { PageLayout } from "../../../ui/layout/page-layout";

export default async function Page() {
  const companies = await fetchCompanies();
  return (
    <PageLayout title="Create Job">
      <JobCreateForm companies={companies} />
    </PageLayout>
  );
}
