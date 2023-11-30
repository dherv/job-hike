import { v4 as uuidv4 } from "uuid";

export type Company = {
  id: string;
  name: string;
  website: string;
};

// type CompanySchema = Omit<Company, "id">;

export class CompanyState {
  state: Company[];
  constructor(initialState = []) {
    this.state = initialState;
  }
  get() {
    return Promise.resolve(this.state);
  }
  getById(id: string) {
    return Promise.resolve(this.state.find((Company) => Company.id === id));
  }
  create(company: Company) {
    // to bypasse the init state we pass the id
    const id = company.id ? company.id : uuidv4();
    const newCompany = { ...company, id };
    this.state = [...this.state, newCompany];
    return Promise.resolve();
  }
  update(id: string, updatedCompany: Company) {
    this.state = this.state.map((Company) => {
      if (Company.id === id) {
        return updatedCompany;
      }
      return Company;
    });
    return Promise.resolve();
  }
  delete(id: string) {
    this.state = this.state.filter((Company) => Company.id === id);
    return Promise.resolve();
  }
}
