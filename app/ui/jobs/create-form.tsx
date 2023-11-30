"use client";
import { createJob } from "@/app/lib/actions";
import { FC } from "react";
import { useFormState } from "react-dom";
import { Company } from "../../../database/custom/states/company";

export const JobCreateForm: FC<{ companies: Company[] }> = ({ companies }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createJob, initialState);

  return (
    <form action={dispatch}>
      <div>
        <label htmlFor="title">title</label>
        <input
          id="title"
          type="text"
          name={"title"}
          aria-describedby="title-error"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title &&
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div>
        <label htmlFor="applicationDate">applicationDate</label>
        <input id="applicationDate" type="date" name={"applicationDate"} />
      </div>
      <div>
        <label htmlFor="applicationMethod">applicationMethod</label>
        <select id="applicationMethod" name="applicationMethod">
          {["online", "email", "agent"].map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="applicationStatus">applicationStatus</label>
        <select id="applicationStatus" name="applicationStatus">
          {["in-progress", "pending", "rejected"].map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="companyId">company</label>
        <select id="companyId" name="companyId">
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contactInformation">contactInformation</label>
        <input
          id="contactInformation"
          type="email"
          name={"contactInformation"}
        />
      </div>
      <div>
        <label htmlFor="url">url</label>
        <input id="url" type="url" name={"url"} />
      </div>
      <div>
        <label htmlFor="source">source</label>
        <input id="source" type="text" name={"source"} />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <textarea name="description" id="description"></textarea>
      </div>
      <div>
        <label htmlFor="notes">notes</label>
        <textarea name="notes" id="notes"></textarea>
      </div>
      <button>submit</button>
    </form>
  );
};
