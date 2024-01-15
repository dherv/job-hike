import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteJob } from "../../../api/jobs/actions";
import { ButtonType } from "../../../lib/types";
import { LinkButton } from "../../layout/link-button";

export const Button = ({
  children,
  type = "button",
  form,
  onClick,
}: {
  children: React.ReactNode;
  type?: ButtonType;
  form?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      form={form}
      className="flex w-fit bg-primary-900 text-white hover:bg-primary-700 py-2 px-6 rounded">
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
      className="rounded-md border border-primary-400 text-primary-400 p-2 hover:border-primary-600 hover:text-primary-600">
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
        className="rounded-md border border-primary-400 text-primary-400 p-2 hover:border-primary-600 hover:text-primary-600">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
};
