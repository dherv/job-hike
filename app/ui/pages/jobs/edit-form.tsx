"use client";
import { updateJob } from "@/app/api/jobs/actions";
import { Input, Select, TextArea } from "@/app/ui/form/input";
import { Company } from "@prisma/client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { JobWithCompany } from "../../../lib/types";
import { Button } from "./buttons";

export const JobEditForm: FC<{
  id: string;
  job: JobWithCompany;
  companies: Company[];
}> = ({ id, job, companies }) => {
  const updateJobAction = updateJob.bind(null, id);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(updateJobAction, initialState);

  const applicationDate = job.application?.date
    ? new Date(job.application?.date).toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
  return (
    <form action={dispatch} className="grid grid-cols-3 gap-6 ">
      <Input
        label="title"
        name="title"
        errors={state.errors?.title}
        defaultValue={job.title}
      />
      {/* <Input
        label="application date"
        name="applicationDate"
        errors={state.errors?.applicationDate}
        type="date"
        defaultValue={applicationDate}
      />
      <Select
        name="applicationMethod"
        label="application method"
        errors={state.errors?.applicationMethod}
        options={["online", "email", "agent"].map((method) => ({
          key: method,
          value: method,
        }))}
        defaultValue={job.application?.method ?? ""}
      />
      <Select
        name="applicationStatus"
        label="application status"
        errors={state.errors?.applicationStatus}
        options={["in-progress", "pending", "rejected"].map((status) => ({
          key: status,
          value: status,
        }))}
        defaultValue={job.application?.status ?? ""}
      /> */}
      <Select
        name="companyId"
        label="company"
        errors={state.errors?.companyId}
        options={companies.map((company) => ({
          key: company.name,
          value: company.id,
        }))}
        defaultValue={job.companyId}
      />

      <Input
        label="contact information"
        name="contactInformation"
        type="email"
        defaultValue={job.contact?.name ?? ``}
      />
      <Input label="url" name="url" type="url" defaultValue={job.url ?? ``} />
      <Input label="source" name="source" defaultValue={job.source ?? ``} />
      <div className="col-span-2">
        <TextArea
          label="description"
          name="description"
          defaultValue={job.description ?? ``}
        />
      </div>
      <div className="col-span-2">
        <TextArea label="notes" name="notes" defaultValue={job.notes ?? ``} />
      </div>
      <div className="col-span-2">
        <Button>submit</Button>
      </div>
    </form>
  );
};
