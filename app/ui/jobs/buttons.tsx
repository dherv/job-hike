import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteJob } from "../../lib/actions";

export const CreateJobButton = () => {
  return (
    <Link href={"/dashboard/jobs/create"}>
      <span>add</span>
      <PlusIcon />
    </Link>
  );
};

export const UpdateJobButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/dashboard/jobs/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
};

export const DeleteJobButton = ({ id }: { id: string }) => {
  const deleteJobWithId = deleteJob.bind(null, id);
  return (
    <form action={deleteJobWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
};
