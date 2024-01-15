import { z } from "zod";

export const FormSchema = z.object({
  id: z.string({}),
  title: z.string().trim().min(1, { message: "please add a title" }),
  salaryFrom: z.coerce.number().positive().lte(10000000).optional(),
  salaryTo: z.coerce.number().positive().lte(10000000).optional(),
  companyId: z.string({
    invalid_type_error: "please select a company",
  }),
  // applicationDate: z
  //   .string()
  //   .trim()
  //   .min(1, { message: "please enter an application date" }),
  // applicationMethod: z.enum(["online", "email", "agent"], {
  //   required_error: "please select an application",
  // }),
  // applicationStatus: z.enum(["in-progress", "pending", "rejected"], {
  //   required_error: "please select an application status",
  // }),
  // contactInformation: z.string().email({ message: "Invalid email address" }),
  description: z.string().optional(),
  notes: z.string().optional(),
  url: z.string().optional(),
  source: z.string().optional(),
});

const salaryRangeValidator = (data: any) => {
  if (data.salaryFrom && data.salaryTo) {
    return data.salaryFrom < data.salaryTo;
  }
  return true;
};

export const CreateJobSchema = FormSchema.omit({ id: true }).refine(
  salaryRangeValidator
);
export const UpdateJobSchema = FormSchema.omit({ id: true }).refine(
  salaryRangeValidator
);

export type JobDto = z.infer<typeof FormSchema>;
export type CreateJobDto = z.infer<typeof CreateJobSchema>;
export type UdpateJobDto = z.infer<typeof UpdateJobSchema>;
