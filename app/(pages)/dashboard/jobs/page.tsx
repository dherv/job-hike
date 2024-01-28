import { Suspense } from "react";
import { PageLayout } from "@/app/ui/layout/page-layout";
import { CreateJobButton } from "@/app/ui/pages/jobs/buttons";
import { JobList } from "@/app/ui/pages/jobs/list";

export default async function Page() {
  return (
    <PageLayout title="Jobs" headerButton={<CreateJobButton />}>
      <Suspense fallback={<div>jobs loading</div>}>
        <JobList />
      </Suspense>
    </PageLayout>
  );
}
