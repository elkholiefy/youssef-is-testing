// Form Validation for Required Fields
describe("Checkout Process Validation", () => {
    context("Form Validation for Required Fields", () => {
      it("should display an error message when attempting to proceed without entering a required field", () => {
        cy.visit("https://www.automationexercise.com/checkout");
        cy.contains("Place Order").click(); 
        cy.contains("Name is required").should("be.visible"); 
      });
    });
  
    it("should process the order successfully when all required fields are filled correctly", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="Name"]').type("Youssef Hassan Elkholiefy");
      cy.get('input[name="CreditCard"]').type("1234567890123456");
      cy.get('input[name="CVV"]').type("452");
      cy.get('input[name="ExpiryDate"]').type("12/25");
      cy.contains("Place Order").click();
      cy.contains("Order processed successfully").should("be.visible"); 
    });
  
    it("should display an error message for an invalid credit card number", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="CreditCard"]').type("1231231212413"); 
      cy.contains("Place Order").click();
      cy.contains("Invalid Credit Card Number").should("be.visible"); 
    });
  
    it("should display an error message for an expired credit card", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="ExpiryDate"]').type("01/20");
      cy.contains("Place Order").click();
      cy.contains("Credit Card has expired").should("be.visible");
    });
  
    it("should display an error message for an incorrect CVV code", () => {
      cy.visit("https://www.automationexercise.com/checkout");
      cy.get('input[name="CVV"]').type("999");
      cy.contains("Place Order").click();
      cy.contains("Incorrect CVV Code").should("be.visible"); 
    });
  });
  
