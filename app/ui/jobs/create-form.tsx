"use client";
import { createJob } from "@/app/lib/actions";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Company } from "../../../database/custom/states/company";
import { Input, Select, TextArea } from "../form/input";
import { Button } from "./buttons";

export const JobCreateForm: FC<{ companies: Company[] }> = ({ companies }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createJob, initialState);

  return (
    <form action={dispatch} className="grid grid-cols-3 gap-6 ">
      <Input label="title" name="title" errors={state.errors?.title} />
      <Input
        label="application date"
        name="applicationDate"
        errors={state.errors?.applicationDate}
        type="date"
      />
      <Select
        name="applicationMethod"
        label="application method"
        errors={state.errors?.applicationMethod}
        options={["online", "email", "agent"].map((method) => ({
          key: method,
          value: method,
        }))}
      />
      <Select
        name="applicationStatus"
        label="application status"
        errors={state.errors?.applicationStatus}
        options={["in-progress", "pending", "rejected"].map((status) => ({
          key: status,
          value: status,
        }))}
      />
      <Select
        name="company"
        label="application status"
        errors={state.errors?.companyId}
        options={companies.map((company) => ({
          key: company.name,
          value: company.id,
        }))}
      />

      <Input
        label="contact information"
        name="contactInformation"
        type="email"
      />
      <Input label="url" name="url" type="url" />
      <Input label="source" name="source" />
      <div className="col-span-2">
        <TextArea label="description" name="description" />
      </div>
      <div className="col-span-2">
        <TextArea label="notes" name="notes" />
      </div>
      <div className="col-span-2">
        <Button>submit</Button>
      </div>
    </form>
  );
};
