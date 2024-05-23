describe("User Registration", () => {
  it("should successfully register with valid details", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Signup / Login").click();
    cy.get('input[name="Name"]').type("Youssef as Tester");
    cy.get('input[name="Email"]').type("youssefastester@gmail.com");
    cy.contains("Signup").click();
    cy.url().should("include", "/signup");
    cy.get('input[name="Password"]').type("123456789");
    cy.get('input[name="First name"]').type("Youssef");
    cy.get('input[name="last name"]').type("as tester");
    cy.get('input[name="Address"]').type("NA");
    cy.get('input[name="Country"]').type("India");
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

// Test suite for Products Page Functionality
describe('Products Page Functionality', () => {
  it('Viewing a list of products', () => {
    cy.visit('https://www.automationexercise.com/products');
    cy.get('.product').should('have.length.at.least', 1);
  });

  // Test case for product details being correctly displayed
  it('Product details are correctly displayed', () => {
    cy.get('.product').first().click();
    cy.get('.product-detail').should('be.visible');
    cy.get('.product-detail img').should('be.visible');
    cy.get('.product-detail .name').should('not.be.empty');
    cy.get('.product-detail .price').should('not.be.empty');
    cy.get('.product-detail .description').should('not.be.empty');
  });

  // Test case for filtering products by category
  it('Filtering products by category', () => {
    cy.get('.category-list').contains('Category Name').click();
    cy.get('.product').each(($el) => {
      expect($el).to.have.attr('data-category', 'Category Name');
    });
  });

  // Test case for adding a product to the cart
  it('Adding a product to the cart', () => {
    cy.get('.add-to-cart').first().click();
    cy.get('.cart-message').should('contain', 'Added! Your product has been added to cart.');
  });

  // Test case for searching for a product
  it('Searching for a product', () => {
    cy.get('.search-box').type('Men Tshirt');
    cy.get('.search-button').click();
    cy.get('.product').should('contain', 'Men Tshirt');
  });

  // Test case for product images being displayed correctly
  it('Product images are displayed correctly', () => {
    cy.get('.product img').each(($img) => {
      cy.wrap($img).should('be.visible').and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    });
  });

  // Test case for product descriptions being accurate
  it('Product descriptions are accurate', () => {
    cy.get('.product').first().click();
    cy.get('.product-description').should('match', 'expected description regex or text');
  });

  // Test case for prices being correctly displayed
  it('Prices are correctly displayed', () => {
    cy.get('.product').first().click();
    cy.get('.product-price').should('match', 'expected price regex or text');
  });
});

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
