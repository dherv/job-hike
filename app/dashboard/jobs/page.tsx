import { Suspense } from "react";
import { CreateJobButton } from "../../ui/jobs/buttons";
import { Table } from "../../ui/jobs/table";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>my jobs</h1>
      <Suspense fallback={<div>jobs loading</div>}>
        <Table />
      </Suspense>
      <CreateJobButton />
    </main>
  );
}
