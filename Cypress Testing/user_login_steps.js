// User Login
describe("User Login", () => {
  it("should successfully log in with valid credentials", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Email"]').type("youssefastester@gmail.com");
    cy.get('input[name="Password"]').type("123456789");
    cy.contains("Login").click();
    cy.contains("Logged in as Youssef as Tester").should("be.visible");
  });

  it("should show an error message for login attempt with incorrect password", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Email"]').type("youssefastester@gmail.com");
    cy.get('input[name="Password"]').type("WrongPassword");
    cy.contains("Login").click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});

// User Registration Form Validation
describe("User Registration Form Validation", () => {
  it("should display an error message for an invalid email format", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Name"]').type("Youssef as tester");
    cy.get('input[name="Email"]').type("tester.test.com");
    cy.contains("Signup").click();
    cy.contains("Please enter a valid email address").should("be.visible");
  });
});
