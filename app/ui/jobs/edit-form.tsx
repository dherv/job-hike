import { updateJob } from "@/app/lib/actions";
import { Company } from "@/database/states/company";
import { Job } from "@/database/states/job";
import { FC } from "react";

export const JobEditForm: FC<{
  id: string;
  job: Job;
  companies: Company[];
}> = ({ id, job, companies }) => {
  const updateJobAction = updateJob.bind(null, id);

  return (
    <form action={updateJobAction}>
      <div>
        <label htmlFor="title">title</label>
        <input id="title" type="text" name={"title"} defaultValue={job.title} />
      </div>
      <div>
        <label htmlFor="applicationDate">applicationDate</label>
        <input
          id="applicationDate"
          type="date"
          name={"applicationDate"}
          defaultValue={job.applicationDate.toISOString().split("T")[0]}
        />
      </div>
      <div>
        <label htmlFor="applicationMethod">applicationMethod</label>
        <select
          id="applicationMethod"
          name="applicationMethod"
          defaultValue={job.applicationMethod}>
          {["online", "email", "agent"].map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="applicationStatus">applicationStatus</label>
        <select
          id="applicationStatus"
          name="applicationStatus"
          defaultValue={job.applicationStatus}>
          {["in-progress", "pending", "rejected"].map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="companyId">company</label>
        <select id="companyId" name="companyId" defaultValue={job.companyId}>
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
          defaultValue={job.contactInformation}
        />
      </div>
      <div>
        <label htmlFor="url">url</label>
        <input id="url" type="url" name={"url"} defaultValue={job.url} />
      </div>
      <div>
        <label htmlFor="source">source</label>
        <input
          id="source"
          type="text"
          name={"source"}
          defaultValue={job.source}
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          id="description"
          defaultValue={job.description}></textarea>
      </div>
      <div>
        <label htmlFor="notes">notes</label>
        <textarea name="notes" id="notes" defaultValue={job.notes}></textarea>
      </div>
      <button>submit</button>
    </form>
  );
};
