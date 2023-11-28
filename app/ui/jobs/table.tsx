import { fetchJobs } from "../../lib/data";
import { DeleteJobButton, UpdateJobButton } from "./buttons";

export const Table = async () => {
  const jobs = await fetchJobs();
  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>company</th>
          <th>application date</th>
          <th>application status</th>
          <th>description</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id}>
            <td>{job.title}</td>
            <td>{job.company?.name}</td>
            <td>{job.applicationDate.toISOString()}</td>
            <td>{job.applicationStatus}</td>
            <td>{job.description}</td>
            <td>
              <div className="flex justify-end gap-3">
                <UpdateJobButton id={job.id} />
                <DeleteJobButton id={job.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
