import { fetchCompanies, fetchJobById } from "@/app/lib/handlers";
import { JobEditForm } from "@/app/ui/jobs/edit-form";
import { notFound } from "next/navigation";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <JobEditForm companies={companies} id={id} job={job} />
    </main>
  );
}
