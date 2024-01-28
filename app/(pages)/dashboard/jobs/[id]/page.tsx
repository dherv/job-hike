import { fetchCompanies } from "@/app/api/companies/services";
import { fetchJobById } from "@/app/api/jobs/services";
import { PageLayout } from "@/app/ui/layout/page-layout";
import { DeleteJobButton } from "@/app/ui/pages/jobs/buttons";
import { JobEditForm } from "@/app/ui/pages/jobs/edit-form";
import { notFound } from "next/navigation";

// TODO: replace temporary page - add new view page
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
        <PageLayout title={job.title} headerButton={<DeleteJobButton id={id} />}>
            <JobEditForm companies={companies} id={id} job={job} />
        </PageLayout>
    );
}
