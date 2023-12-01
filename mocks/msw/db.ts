import { faker } from "@faker-js/faker";
import {
  ENTITY_TYPE,
  PRIMARY_KEY,
  factory,
  nullable,
  oneOf,
  primaryKey,
} from "@mswjs/data";
import bcrypt from "bcrypt";

faker.seed(1234);

export const createDB = () => {
  const db = factory({
    // Create a "user" model,
    user: {
      // ...with these properties and value getters.
      id: primaryKey(faker.string.uuid),
      name: faker.person.firstName,
      email: () => "user@nextmail.com",
      password: () => bcrypt.hashSync("123456", 10),
    },
    job: {
      id: primaryKey(faker.string.uuid),
      title: faker.person.jobTitle,
      company: nullable(oneOf("company")),
      applicationDate: () => faker.date.future({ years: 1 }),
      applicationMethod: () =>
        faker.helpers.arrayElement(["online", "email", "agent"]),
      applicationStatus: () =>
        faker.helpers.arrayElement(["in-progress", "pending", "rejected"]),
      contactInformation: faker.internet.email,
      description: faker.lorem.paragraph,
      notes: faker.lorem.paragraph,
      url: faker.internet.url,
      source: faker.internet.url,
    },
    company: {
      id: primaryKey(faker.string.uuid),
      name: faker.company.name,
      website: faker.internet.url,
      // jobs: manyOf("job"),
    },
  });
  const company = db.company.create();
  console.log("HERE");
  db.job.create({ company });
  db.user.create();
  return db;
};

export type DB = typeof db;

/** Helper to get the schema of an model. */
export type Value<Key extends keyof DB> = Omit<
  ReturnType<DB[Key]["create"]>,
  typeof ENTITY_TYPE | typeof PRIMARY_KEY
>;

export type User = Value<"user">;
export type Job = Value<"job">;
export type Company = Value<"company">;

const globalForDb = globalThis as unknown as {
  db: any;
};

console.log("before", globalForDb.db);
export const db = globalForDb.db ?? createDB();

// const userHandlers = [
//   http.get("http://localhost:3000/api/users", (req, _res, _cxt) => {
//     // Construct a URL instance out of the intercepted request.
//     const url = new URL(req.url);

//     // Read the "id" URL query parameter using the "URLSearchParams" API.
//     // Given "/product?id=1", "productId" will equal "1".
//     const email = url.searchParams.get("email");
//     // Create a new entity for the "post" model.
//     const user = db.user.findFirst({
//       where: {
//         email: {
//           equals: email,
//         },
//       },
//     });

//     // Respond with a mocked response.
//     return HttpResponse.json({ user }, { status: 200 });
//   }),
// ];

// const handlers = [
//   ...userHandlers,
//   ...db.job.toHandlers("rest", "http://localhost:3000/api"),
//   ...db.company.toHandlers("rest", "http://localhost:3000/api"),
// ];
// console.log(handlers);

// // Establish requests interception.
// const server = setupServer(...handlers);
// server.listen();
// server.listHandlers();

if (process.env.NODE_ENV !== "production") globalForDb.db = db;
// console.log("after", globalForDb.db);
