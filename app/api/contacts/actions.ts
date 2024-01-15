"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateCompanySchema } from "../../lib/validations/companies";
import { companiesService } from "./services";

export type State = {
  errors?: {
    name?: string[];
    logo?: string[];
    cityId?: string[];
  };
  message?: string | null;
  data?: {
    id: string;
  };
};

export const createCompany = async (_prevState: State, formData: FormData) => {
  const validatedFields = CreateCompanySchema.safeParse({
    name: formData.get("name"),
    // logo: formData.get("logo"),
    // cityId: formData.get("cityId"),
    // contactId: formData.get("contactId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Company.",
    };
  }

  try {
    const company = await companiesService.createCompany(validatedFields.data);
    return {
      message: "Company Created.",
      data: {
        id: company.id,
      },
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Company.",
    };
  }

  revalidatePath("/dashboard/companies");
  redirect("/dashboard/companies");
};
