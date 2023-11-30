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

export const db = factory({
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

export type DB = typeof db;

/** Helper to get the schema of an model. */
export type Value<Key extends keyof DB> = Omit<
  ReturnType<DB[Key]["create"]>,
  typeof ENTITY_TYPE | typeof PRIMARY_KEY
>;

export type User = Value<"user">;
export type Job = Value<"job">;
export type Company = Value<"company">;
