// Note: we removed 'use client' here since parent is already a client: see https://github.com/vercel/next.js/discussions/46795
import { FC, useEffect } from "react";
import { useFormState } from "react-dom";
import { Errors, Input } from "../../form/input";
import { Button } from "./buttons";

export const ContactForm: FC<{
  setContactId: (id?: string) => void;
  errors?: string[];
}> = ({ setContactId, errors }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createContact, initialState);

  useEffect(() => {
    if (state.data?.id) {
      setContactId(state.data.id);
    } else {
      setContactId();
    }
  }, [state.data?.id, setContactId]);

  return (
    <form action={dispatch}>
      <div className="flex items-center gap-4 ">
        <Input label="company name" name="name" />
        <Input label="company url" name="url" />
        <Errors name="name" errors={state.errors?.name} />
        <Errors name="name" errors={errors} />
        <Button>create</Button>
      </div>
    </form>
  );
};
