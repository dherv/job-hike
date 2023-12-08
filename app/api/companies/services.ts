import { auth } from "@/auth";
import { unstable_noStore as noStore } from "next/cache";
import { companiesRepository } from "./repository";

export const fetchCompanies = async () => {
  noStore();
  try {
    const session = await auth();
    if (!session?.user?.email) {
      throw new Error("No user found");
    }
    await companiesRepository.findAll(session.user.email);
  } catch (error) {
    console.log(error);
  }
};
