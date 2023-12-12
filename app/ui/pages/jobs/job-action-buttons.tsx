import { DeleteJobButton, UpdateJobButton } from "./buttons";

export const JobActionButtons = ({ id }: { id: string }) => {
  return (
    <div className="flex items-center gap-2">
      <UpdateJobButton id={id} />
      <DeleteJobButton id={id} />
    </div>
  );
};
