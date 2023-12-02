"use server";
import { auth, signIn } from "@/auth";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string({}),
  title: z.string().trim().min(1, { message: "please add a title" }),
  companyId: z.string({
    invalid_type_error: "please select a company",
  }),
  applicationDate: z
    .string()
    .trim()
    .min(1, { message: "please enter an application date" }),
  applicationMethod: z.enum(["online", "email", "agent"], {
    required_error: "please select an application",
  }),
  applicationStatus: z.enum(["in-progress", "pending", "rejected"], {
    required_error: "please select an application status",
  }),
  contactInformation: z.string().email({ message: "Invalid email address" }),
  description: z.string().optional(),
  notes: z.string().optional(),
  url: z.string().optional(),
  source: z.string().optional(),
});

export type State = {
  errors?: {
    title?: string[];
    companyId?: string[];
    applicationDate?: string[];
    applicationMethod?: string[];
    applicationStatus?: string[];
    contactInformation?: string[];
  };
  message?: string | null;
};

const CreateJobSchema = FormSchema.omit({ id: true });
export type ZJobSchema = z.infer<typeof FormSchema>;

export const createJob = async (_prevState: State, formData: FormData) => {
  // validate the content
  const validatedFields = CreateJobSchema.safeParse({
    title: formData.get("title"),
    companyId: formData.get("companyId"),
    applicationDate: formData.get("applicationDate"),
    applicationMethod: formData.get("applicationMethod"),
    contactInformation: formData.get("contactInformation"),
    notes: formData.get("notes"),
    url: formData.get("url"),
    source: formData.get("source"),
    description: formData.get("description"),
    applicationStatus: formData.get("applicationStatus"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // const { companyId, applicationDate, ...data } = validatedFields.data;
  try {
    const session = await auth();
    if (!session?.user?.email) {
      throw new Error("No user email found");
    }

    await fetch("http://localhost:3004/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

const UpdateJobSchema = FormSchema.omit({ id: true });
export const updateJob = async (
  id: string,
  _prevState: State,
  formData: FormData
) => {
  console.log(formData.get("applicationDate"));
  const validatedFields = UpdateJobSchema.safeParse({
    title: formData.get("title"),
    companyId: formData.get("companyId"),
    applicationDate: formData.get("applicationDate"),
    applicationMethod: formData.get("applicationMethod"),
    contactInformation: formData.get("contactInformation"),
    notes: formData.get("notes"),
    url: formData.get("url"),
    source: formData.get("source"),
    description: formData.get("description"),
    applicationStatus: formData.get("applicationStatus"),
  });

  if (!validatedFields.success) {
    console.log(
      { validatedFields },
      validatedFields.error.flatten().fieldErrors
    );
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  try {
    console.log(
      "update body",
      JSON.stringify({
        ...validatedFields.data,
        applicationDate: new Date(validatedFields.data.applicationDate),
      })
    );
    console.log({ id });
    await fetch(`http://localhost:3004/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...validatedFields.data,
        applicationDate: new Date(validatedFields.data.applicationDate),
      }),
    });
  } catch (error) {
    console.log({ error });
    return {
      message: "Database Error: Failed to Update Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

export const deleteJob = async (id: string) => {
  try {
    await fetch(`http://localhost:3004/jobs/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  // no need to redirect since we are on same page
  // redirect("/dashboard/jobs");
};

export async function getUser(email: string) {
  try {
    await fetch(`http://localhost:3004/users?email=${email}`);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
