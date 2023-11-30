describe("template spec", () => {
  it("login", () => {
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
  });

  // it("visits the create job page", () => {
  //   cy.get("a").contains("jobs").click();
  //   cy.get("a").contains("add").click();
  // });

  // it("should fill the form", () => {
  //   cy.get(`input[name="title"]`).type("test");
  //   cy.get(`input[name="applicationDate"]`).click();
  //   cy.contains("20").click();

  //   cy.get(`input[name="contactInformation"]`).type("example@gmail.com");
  //   cy.get(`input[name="url"]`).type("http://url.com");

  //   cy.get("button").contains("submit").click();
  // });
});
