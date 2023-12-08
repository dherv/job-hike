import { z } from "zod";

export const FormSchema = z.object({
  id: z.string({}),
  name: z.string().trim().min(1, { message: "please add a name" }),
  contactId: z
    .string({
      invalid_type_error: "please select a company",
    })
    .optional(),
  address: z.string().trim().min(1, { message: "please enter an address" }),
  cityId: z.string().trim().min(1, { message: "please select a city" }),
  logo: z.string().optional(),
  website: z.string().optional(),
  careerPage: z.string().optional(),
  source: z.string().optional(),
});
export const CreateCompanySchema = FormSchema.omit({ id: true });
export const UpdateCompanySchema = FormSchema.omit({ id: true });
export type CompanyDto = z.infer<typeof FormSchema>;
export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
export type UdpateCompanyDto = z.infer<typeof UpdateCompanySchema>;
