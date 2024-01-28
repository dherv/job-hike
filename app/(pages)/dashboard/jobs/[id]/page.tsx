import { fetchCompanies } from "@/app/api/companies/services";
import { fetchJobById } from "@/app/api/jobs/services";
import { PageLayout } from "@/app/ui/layout/page-layout";
import { JobEditForm } from "@/app/ui/pages/jobs/edit-form";
import { notFound } from "next/navigation";

// TODO: temporary page to replace
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
