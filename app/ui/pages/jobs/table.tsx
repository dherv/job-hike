import { fetchJobs } from "@/app/api/jobs/services";
import { JobCard } from "./card";

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr className="border-b border-primary-100 my-2">{children}</tr>;
};

const TableHeaderCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <th className="text-primary-600 font-semibold text-left px-6 py-4 first:pl-0">
      {children}
    </th>
  );
};

const TableRowCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <th className="text-primary-900 font-normal text-left px-6 py-4 first:pl-0">
      {children}
    </th>
  );
};

export const Table = async () => {
  const jobs = await fetchJobs();

  console.log(jobs);
  const headers = [
    "title",
    "company",
    "application date",
    "application status",
    "description",
    "action",
  ];
  return (
    // <table className="table-auto rounded-md overflow-hidden border-collapse">
    //   <thead>
    //     <TableRow>
    //       {headers.map((header) => (
    //         <TableHeaderCell key={header}>{header}</TableHeaderCell>
    //       ))}
    //     </TableRow>
    //   </thead>
    //   <tbody>
    //     {jobs.map((job) => (
    //       <TableRow key={job.id}>
    //         <TableRowCell>{job.title}</TableRowCell>
    //         <TableRowCell>{job.company?.name}</TableRowCell>
    //         <TableRowCell>
    //           {new Date(job.applicationDate).toISOString()}
    //         </TableRowCell>
    //         <TableRowCell>{job.applicationStatus}</TableRowCell>
    //         <TableRowCell>{job.description}</TableRowCell>
    //         <TableRowCell>
    //           <div className="flex justify-end gap-3">
    //             <UpdateJobButton id={job.id} />
    //             <DeleteJobButton id={job.id} />
    //           </div>
    //         </TableRowCell>
    //       </TableRow>
    //     ))}
    //   </tbody>
    // </table>
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
};
