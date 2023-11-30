import { fetchCompanies } from "../../../lib/handlers";
import { JobCreateForm } from "../../../ui/jobs/create-form";

export default async function Page() {
  const companies = await fetchCompanies();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <JobCreateForm companies={companies} />
    </main>
  );
}
