import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteJob } from "../../lib/actions/actions.json-server";
import { LinkButton } from "../layout/link-button";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex w-fit bg-primary-900 text-white hover:bg-primary-700 py-2 px-6 rounded">
      {children}
    </button>
  );
};
export const CreateJobButton = () => {
  return (
    <LinkButton href={"/dashboard/jobs/create"}>
      <span>add</span>
      <PlusIcon className="w-5" />
    </LinkButton>
  );
};

export const UpdateJobButton = ({ id }: { id: string }) => {
  return (
    <Link
      data-cy="update-job-button"
      href={`/dashboard/jobs/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-4" />
    </Link>
  );
};

export const DeleteJobButton = ({ id }: { id: string }) => {
  const deleteJobWithId = deleteJob.bind(null, id);
  return (
    <form action={deleteJobWithId}>
      <button
        data-cy="delete-job-button"
        className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
};
