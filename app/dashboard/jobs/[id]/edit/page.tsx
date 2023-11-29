import { fetchCompanies, fetchJobById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { JobEditForm } from "../../../../ui/jobs/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [job, companies] = await Promise.all([
    fetchJobById(id),
    fetchCompanies(),
  ]);

  if (!job) {
    return notFound();
  }

  console.log({ job });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <JobEditForm companies={companies} id={id} job={job} />
    </main>
  );
}
