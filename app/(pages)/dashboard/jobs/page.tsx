import { Suspense } from "react";
import { PageLayout } from "../../../ui/layout/page-layout";
import { CreateJobButton } from "../../../ui/pages/jobs/buttons";
import { Table } from "../../../ui/pages/jobs/table";

export default async function Page() {
  return (
    <PageLayout title="Jobs" button={<CreateJobButton />}>
      <Suspense fallback={<div>jobs loading</div>}>
        <Table />
      </Suspense>
    </PageLayout>
  );
}
