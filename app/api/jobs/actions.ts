"use server";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import { CreateJobSchema, UpdateJobSchema } from "../../lib/validations/jobs";
import { jobsService } from "./services";

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

  const { companyId, applicationDate, ...data } = validatedFields.data;
  try {
    const session = await auth();
    if (!session?.user?.email) {
      throw new Error("No user email found");
    }

    await jobsService.createJob(
      {
        ...data,
        companyId: companyId,
        applicationDate: new Date(applicationDate).toISOString(),
      },
      session.user.email
    );

    console.log("created job");
  } catch (error) {
    console.log({ error });
    return {
      message: "Database Error: Failed to Create Job.",
    };
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

export const updateJob = async (
  id: string,
  _prevState: State,
  formData: FormData
) => {
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
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Job.",
    };
  }

  try {
    await jobsService.updateJob(id, validatedFields.data);
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
    await prisma.job.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Job.",
    };
  }

  // no need to redirect since we are on same page
  revalidatePath("/dashboard/jobs");
};
