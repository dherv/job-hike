import { fetchCompanies, fetchJobById } from "@/app/lib/handlers";
import { JobEditForm } from "@/app/ui/jobs/edit-form";
import { notFound } from "next/navigation";
import { PageLayout } from "../../../../ui/layout/page-layout";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [job, companies] = await Promise.all([
    fetchJobById(id),
    fetchCompanies(),
  ]);

  if (!job) {
    return notFound();
  }

  return (
    <PageLayout title="edit job">
      <JobEditForm companies={companies} id={id} job={job} />
    </PageLayout>
  );
}
