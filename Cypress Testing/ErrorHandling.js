describe("Error Handling on Contact Us Form", () => {
    it("should display error messages for each required field when sending a message without filling the contact form", () => {
      cy.visit("https://www.automationexercise.com/");
      cy.contains("Contact Us").click();
      cy.contains("Send").click();
      cy.contains("Please fill in all required fields").should("be.visible");
    });
  
    it("should display an error message for an invalid email when sending a message", () => {
      cy.visit("https://www.automationexercise.com/");
      cy.contains("Contact Us").click();
      cy.get('input[name="Email"]').type("tester.test.com");
      cy.get('textarea[name="Message"]').type("This is a test message.");
      cy.contains("Send").click();
      cy.contains("Please enter a valid email address").should("be.visible");
    });
  });

  