import { Prisma, prisma } from "@/app/lib/prisma";
import { CreateCompanyDto } from "../../lib/validations/contacts";

// TODO: MAKE IT USER RELATED
// TODO: FIND A WAY TO PASS THE USER ID
const tableName = "contacts";

// TODO: we can override the returned type. better than as alias later in queries.
export async function findAll(userEmail: string) {
  return await prisma.company.findMany({
    where: { user: { email: userEmail } },
    include: { jobs: true },
  });
}

export const findOneById = async (id: string) => {
  return await prisma.company.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
    include: {
      jobs: true,
    },
  });
};

export async function createOne(
  companyDto: CreateCompanyDto,
  userEmail: string
) {
  const { cityId, ...company } = companyDto;

  const { id: tempCityId } = (await prisma.city.findFirst({
    where: {
      name: {
        equals: "Auckland",
      },
    },
  })) || { id: "" };

  return await prisma.company.create({
    data: {
      ...company,
      user: {
        connect: {
          email: userEmail,
        },
      },
      city: {
        connect: {
          id: tempCityId,
        },
      },
      // contact:
      //   company.contactName && company.contactEmail
      //     ? {
      //         create: {
      //           name: company.contactName,
      //           email: company.contactEmail,
      //           phone: company.contactPhone,
      //           user: {
      //             connect: {
      //               email: userEmail,
      //             },
      //           },
      //         },
      //       }
      //     : undefined,
    },
  });
}

export async function updateOne(
  id: string,
  company: Prisma.CompanyUpdateInput
) {
  return await prisma.company.update({
    where: {
      id,
    },
    data: company,
  });
}

export async function deleteOne(id: string) {
  return await prisma.company.delete({
    where: {
      id,
    },
  });
}

export const companiesRepository = {
  findAll,
  createOne,
  updateOne,
  findOneById,
};
