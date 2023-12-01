"use server";
import { signIn } from "@/auth";
// import * as db from "@/database";
import { createJobAction } from "@/app/lib/handlers/handlers.msw";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "../../../mocks/msw/db";
// import { db } from "../../mocks/msw/db";

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

  try {
    const newJob = {
      title: validatedFields.data.title,
      company: db.company.findFirst({
        where: {
          id: {
            equals: validatedFields.data.companyId,
          },
        },
      }),
      applicationDate: new Date(validatedFields.data.applicationDate),
    };
    await createJobAction(newJob);
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

const UpdateJobSchema = FormSchema.omit({ id: true });
export const updateJob = async (id: string, formData: FormData) => {
  const job = UpdateJobSchema.parse({
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

  try {
    await db.job.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        ...job,
        applicationDate: new Date(job.applicationDate),
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

export const deleteJob = async (id: string) => {
  try {
    await db.job.delete({
      where: {
        id: {
          equals: id,
        },
      },
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
    return await db.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });
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
