"use client";
import { createJob } from "@/app/api/jobs/actions";
import { Company } from "@prisma/client";
import { FC, useState } from "react";
import { useFormState } from "react-dom";
import { Input, TextArea } from "../../form/input";
import { Button } from "./buttons";
import { CompanyForm } from "./company-create-form";

export const JobCreateForm: FC<{ companies: Company[] }> = ({ companies }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createJob, initialState);
  const [companyId, setCompanyId] = useState<string | undefined>();

  const handleSubmit = (formData: FormData) => {
    if (companyId) {
      formData.append("companyId", companyId);
    }
    dispatch(formData);
  };

  console.log(state.errors);

  return (
    <>
      <form
        id="job-create-form"
        action={handleSubmit}
        className="flex flex-col gap-4 max-w-xl">
        <Input label="title" name="title" errors={state.errors?.title} />
        <div className="flex items-center gap-4 ">
          <Input
            label="salary from"
            name="salaryFrom"
            errors={state.errors?.salaryFrom}
          />
          <Input label="~" name="salaryTo" errors={state.errors?.salaryTo} />
        </div>

        {/* <Input
        label="application date"
        name="applicationDate"
        errors={state.errors?.applicationDate}
        type="date"
      /> */}
        {/* <Select
        name="applicationMethod"
        label="application method"
        errors={state.errors?.applicationMethod}
        options={["online", "email", "agent"].map((method) => ({
          key: method,
          value: method,
        }))}
      /> */}
        {/* <Select
        name="applicationStatus"
        label="application status"
        errors={state.errors?.applicationStatus}
        options={["in-progress", "pending", "rejected"].map((status) => ({
          key: status,
          value: status,
        }))}
      /> */}
        {/* <Select
        name="companyId"
        label="company"
        errors={state.errors?.companyId}
        options={companies.map((company) => ({
          key: company.name,
          value: company.id,
        }))}
      /> */}

        {/* <Input
        label="contact information"
        name="contactInformation"
        type="email"
      /> */}
        <Input label="url" name="url" type="url" />
        <Input label="source" name="source" />
        <div className="col-span-2">
          <TextArea label="description" name="description" />
        </div>
        <div className="col-span-2">
          <TextArea label="notes" name="notes" />
        </div>
      </form>
      <CompanyForm
        setCompanyId={setCompanyId}
        errors={state.errors?.companyId}
      />
      <ContactForm
        setCompanyId={setCompanyId}
        errors={state.errors?.companyId}
      />

      <div className="col-span-2">
        <Button type="submit" form="job-create-form">
          submit
        </Button>
      </div>
    </>
  );
};
