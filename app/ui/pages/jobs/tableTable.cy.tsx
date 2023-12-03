import mockJobs from "../../../../mocks/custom/jobs";
import { Table } from "./table";

describe("<Table />", () => {
  // FIXME: this work on server component however will fail if there is a nested server action like the DeleteJobButton
  it("renders", async () => {
    // see: https://on.cypress.io/mounting-react
    // cy.intercept("GET", "http://localhost:3004/jobs", mockJobs);
    cy.stub(window, "fetch").resolves({
      ok: true,
      json: () => mockJobs,
    });
    const component = await Table();
    cy.mount(component);
    cy.contains("Frontend/UI Designer").should("be.visible");
  });
});
