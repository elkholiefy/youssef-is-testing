describe("User Registration", () => {
  it("should successfully register with valid details", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Name"]').type("Youssef as Tester");
    cy.get('input[name="Email"]').type("youssefastester@gmail.com");
    cy.contains("Signup").click();
    cy.url().should("include", "/signup");
    cy.get('input[name="Password"]').type("123456789");
    // Fill in other fields (Date of Birth, gender, newsletter, etc.)
    cy.get('input[name="First name"]').type("Youssef");
    cy.get('input[name="last name"]').type("as tester");
    cy.get('input[name="Address"]').type("NA");
    cy.get('input[name="Country"]').type("India");
    // Fill in other address fields
    cy.contains("Create Account").click();
    cy.contains("ACCOUNT CREATED!").should("be.visible");
    cy.contains("Continue").should("be.visible");
  });

  it("should show an error message for registration with an already used email", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Email"]').type("youssefastester@gmail.com");
    cy.contains("Signup").click();
    cy.contains("Email Address already exist!").should("be.visible");
  });
});
