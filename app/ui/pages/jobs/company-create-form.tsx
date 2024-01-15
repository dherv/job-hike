// Note: we removed 'use client' here since parent is already a client: see https://github.com/vercel/next.js/discussions/46795
import { FC, useEffect } from "react";
import { useFormState } from "react-dom";
import { createCompany } from "../../../api/companies/actions";
import { Errors, Input } from "../../form/input";
import { Button } from "./buttons";

export const CompanyForm: FC<{
  setCompanyId: (id?: string) => void;
  errors?: string[];
}> = ({ setCompanyId, errors }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createCompany, initialState);
  console.log({ state });

  // const handleSubmit = async (formData: FormData) => {
  //   console.log({ formData });
  //   const data = await dispatch(formData);
  //   console.log({ data });
  //   if (data?.id) {
  //     setCompanyId(data.id);
  //   }
  // };

  useEffect(() => {
    setCompanyId(state.data?.id);
  }, [state.data?.id, setCompanyId]);

  return (
    <form action={dispatch}>
      <div className="flex items-center gap-4 ">
        <Input label="company name" name="name" />
        <Input label="company url" name="url" />
        {/* <Select
              name="cityId"
              label="city"
              errors={state.errors?.cityId}
              options={cities.map((company) => ({
                key: company.name,
                value: company.id,
              }))}
            /> */}
        <Errors name="name" errors={state.errors?.name} />
        <Errors name="name" errors={errors} />
        <Button>create</Button>
      </div>
    </form>
  );
};
