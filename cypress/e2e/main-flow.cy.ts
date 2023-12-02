describe("main flow spec", () => {
  it("login - create - edit - delete", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("input[name='email']").type("user@nextmail.com");
    cy.get("input[name='password']").type("123456");
    cy.get("button").click();
    cy.get("a").contains("jobs").click();
    cy.get("a").contains("add").click();
    cy.get(`input[name="title"]`).type("test job");
    cy.get(`input[name="applicationDate"]`).type("2023-12-01");

    cy.get(`input[name="contactInformation"]`).type("example@gmail.com");
    cy.get(`input[name="url"]`).type("http://url.com");

    cy.get("button").contains("submit").click();

    cy.url().should("eq", "http://localhost:3000/dashboard/jobs");
    cy.contains("test job").should("exist");

    // edit
    cy.get('[data-cy="update-job-button"]').last().click();
    cy.get(`input[name="title"]`)
      .should("have.value", "test job")
      .clear()
      .type("edited job");
    cy.get("button").contains("submit").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/jobs");
    cy.contains("edited job").should("exist");

    cy.get('[data-cy="delete-job-button"]').last().click();
    cy.url().should("eq", "http://localhost:3000/dashboard/jobs");
    cy.contains("edited job").should("not.exist");

    cy.get('[data-test-id="sign-out"]').click();
    cy.url().should("contains", "http://localhost:3000/login");
  });
});
