import { Suspense } from "react";
import { PageLayout } from "../../../ui/layout/page-layout";
import { CreateJobButton } from "../../../ui/pages/jobs/buttons";
import { JobList } from "../../../ui/pages/jobs/job-list";

export default async function Page() {
  return (
    <PageLayout title="Jobs" button={<CreateJobButton />}>
      <Suspense fallback={<div>jobs loading</div>}>
        <JobList />
      </Suspense>
    </PageLayout>
  );
}
