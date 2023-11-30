# Creation process

## system design (spend time on this - list data and ui components)
- data shape and relations
- ui components

## init project

[nextjs installation](https://nextjs.org/docs/getting-started/installation)
`npx create-next-app@latest`

### folders and files
- app/lib
  - app/lib/database
    - app/lib/database/tables/[data].ts or app/lib/database/states/[data].ts
    - app/lib/database/index.ts
- app/lib/data.ts
- app/ui

## 1. create mock database

`app/lib/database/[data].ts`: create one class for each piece of data

```ts
import { v4 as uuidv4 } from "uuid";

type Company = {
  id: string;
  name: string;
};

type CompanySchema = Omit<Company, "id">;

export class CompanyState {
  state: Company[];
  constructor(initialState = []) {
    this.state = initialState;
  }
  get() {
    return this.state;
  }
  getById(id: string) {
    return this.state.filter((Company) => Company.id === id);
  }
  create(company: CompanySchema) {
    const id = uuidv4();
    const newCompany = { ...company, id };
    this.state = [...this.state, newCompany];
  }
  update(id: string, updatedCompany: Company) {
    this.state = this.state.map((Company) => {
      if (Company.id === id) {
        return updatedCompany;
      }
      return Company;
    });
  }
  delete(id: string) {
    this.state = this.state.filter((Company) => Company.id === id);
  }
}
```

`app/lib/database/index.ts`: create the mock database
```ts
import { CompanyState } from "./company";
import { JobState } from "./job";

const jobs = new JobState();
const companies = new CompanyState();

// Initialize your mock databases with some data if needed
jobs.create({ title: "Software Engineer" });
companies.create({ name: "Example Corp" });

console.log("init database done");

export { companies, jobs };

```


Add instrumentationHook to next.config.js
and load initdb in there
## 2. create data handlers

`app/lib/data.ts`: create one handler for each piece of data 

```ts

```

## 3. setup frontend and create pages

### build all necessary ui components (buttons, forms, lists, tables, search, filters, pagination, ...)
### build all necessary extra pages (notfound, error)
### some pages can be done later
### add fonts if needed but create next app should have added them already
### remove global styles for dark mode
### add heroicons

- start by adding dashboard if needed 
- add layout dashboard (will contain the sidenav)
- add navigation between pages

- add loading dashboard
- add list page
- add create page
- add edit page

## 4. create ui components

- buttons with links: create/edit/delete
- nav sidebar
- list or table component
- search
- filters
- pagination

## 5. connect with data

Create actions
Add validation with zod



## 6. optimize
- streaming
- dynamic
- caching
- lazy loading

## 7. error handling

## final. Add readme
- why mockdata / sqlite / @mswjs/data ... 
- why tailwind
- why nextjs

## Add auth 
## Add tests
## sqlite version 
## @mswjs/data version
## comparison 
- for example, sqlite is more appropriate to give a real feeling and work on streaming.

### custom mocks
Pros:
- flexible
- easy to create
- good when no big relations
Cons:
- time to create
- need to add promises manually
- building mock data might take time
- complex to get relations between data
- type mismatch between state and actions
- if auth, need to seed users and add relation to jobs and companies...

## @mswjs/data
Pros:
- easy to create
- easy to generate mocks with faker
Cons:
- issue generating the types [can be bypassed with proper Value type]
- issue with promise like bcrypt.hash [but can use hashSync]
- prisma format 
- hard to debug (issue with data not inserted)
- errors in nextjs13:
{
  companies: [
    {
      id: '8700c4e3-5b9e-41f5-91e6-a768cc5796d9',
      name: 'Schmitt, Bauch and Considine',
      website: 'https://rough-input.net',
      [Symbol(type)]: 'company',
      [Symbol(primaryKey)]: 'id'
    }
  ]
}
Warning: Only plain objects can be passed to Client Components from Server Components. Objects with symbol properties like type are not supported.
  [{id: ..., name: ..., website: ...}]

## json-server

Cons: 
- actual urls so cant be use at db layer

## sqlite
Pros: 
- easy setup and fast
- promise included
- close to actual db
- persistent 

Cons:
- need prisma
- does not support enums
- need to setup nextauth with adapter if using user table