import { Suspense } from "react";
import { CreateJobButton } from "../../ui/jobs/buttons";
import { Table } from "../../ui/jobs/table";
import { PageLayout } from "../../ui/layout/page-layout";

export default async function Page() {
  return (
    <PageLayout title="Jobs">
      <Suspense fallback={<div>jobs loading</div>}>
        <Table />
      </Suspense>
      <CreateJobButton />
    </PageLayout>
  );
}
