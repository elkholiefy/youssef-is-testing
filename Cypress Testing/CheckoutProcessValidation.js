// Form Validation for Required Fields
describe("Checkout Process Validation", () => {
    context("Form Validation for Required Fields", () => {
      it("should display an error message when attempting to proceed without entering a required field", () => {
        cy.visit("https://www.automationexercise.com/checkout");
        cy.contains("Place Order").click(); // Click on the 'Place Order' button without filling in required fields
        cy.contains("Name is required").should("be.visible"); // Verify the corresponding error message
      });
    });
  
    it("should process the order successfully when all required fields are filled correctly", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      // Fill in all required fields correctly (e.g., Name on Card, Credit Card, CVV, Expiry Date)
      cy.get('input[name="Name"]').type("Youssef Hassan Elkholiefy");
      cy.get('input[name="CreditCard"]').type("1234567890123456");
      cy.get('input[name="CVV"]').type("452");
      cy.get('input[name="ExpiryDate"]').type("12/25");
      cy.contains("Place Order").click(); // Click on the 'Place Order' button
      cy.contains("Order processed successfully").should("be.visible"); // Verify successful order processing and confirmation message
    });
  
    it("should display an error message for an invalid credit card number", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="CreditCard"]').type("1231231212413"); // Enter an invalid credit card number
      cy.contains("Place Order").click();
      cy.contains("Invalid Credit Card Number").should("be.visible"); // Verify the "Invalid Credit Card Number" error message
    });
  
    it("should display an error message for an expired credit card", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="ExpiryDate"]').type("01/20"); // Enter an expired credit card
      cy.contains("Place Order").click();
      cy.contains("Credit Card has expired").should("be.visible"); // Verify the "Credit Card has expired" error message
    });
  
    it("should display an error message for an incorrect CVV code", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="CVV"]').type("999"); // Enter an incorrect CVV code
      cy.contains("Place Order").click();
      cy.contains("Incorrect CVV Code").should("be.visible"); // Verify the "Incorrect CVV Code" error message
    });
  });
  