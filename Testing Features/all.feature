Feature: User Registration

  Scenario: Successful registration with valid details
    Given I visit "https://www.automationexercise.com/"
    When I click on "Signup / Login" button
    And I fill in the "Name" field with "Youssef as Tester"
    And I fill in the "Email" field with "youssefastester@gmail.com"
    And I click on "Signup" button
    Then I should be redirected to the "Signup" page
    And I fill in the "Password" field with "123456789"
    And I select "Date of Birth"
    And I choose "Mr" as gender
    And I check "Sign up for our newsletter!"
    And I check "Receive special offers from our partners!"
    And I fill in the "First name" field with "Youssef"
    And I fill in the "last name" field with "as tester"
    And I fill in the "Address * (Street address, P.O. Box, Company name, etc.)" field with "NA"
    And I fill in the "Country *" field with "India"
    And I fill in the "State *", "City *", "Zipcode *", and "Mobile number" field with "NA", "NA", "12345", and "0115678824"
    And I click on "Create Account" button
    Then I should see "ACCOUNT CREATED!" and a "Continue" button

  Scenario: Registration attempt with an already used email
    Given I visit "https://www.automationexercise.com/"
    When I click on "Signup / Login" button
    And I fill in the "Email" field with "youssefastester@gmail.com"
    And I click on "Signup" button
    Then I should see an error message "Email Address already exist!"
    
Feature: User Login

  Scenario: Successful login with valid credentials
    Given I visit "https://www.automationexercise.com/"
    When I click on "Signup / Login" button
    And I fill in the "Email" field with "youssefastester@gmail.com"
    And I fill in the "Password" field with "123456789"
    And I click on "Login" button
    Then I should see "Logged in as Youssef as Tester" on the top
    
  Scenario: Login attempt with incorrect password
    Given I visit "https://www.automationexercise.com/"
    When I click on "Signup / Login" button
    And I fill in the "Email" field with "youssefastester@gmail.com"
    And I fill in the "Password" field with "WrongPassword"
    And I click on "Login" button
    Then I should see an error message "Your email or password is incorrect!"

Feature: User Registration Form Validation

  Scenario: Attempt to register with an invalid email format
    Given I visit "https://www.automationexercise.com/"
    When I click on "Signup / Login" button
    And I fill in the "Name" field with "Youssef as tester"
    And I fill in the "Email" field with "tester.test.com"
    And I click on "Signup" button
    Then I should see an error message "Please enter a valid email address"
    
    Feature: User Interaction with Product Selection

  Scenario: Adding a product to the cart
    Given I visit "https://www.automationexercise.com/"
    And I navigate to "Products" section
    When I click on a product image
    And I click on "Add to cart"
    Then I should see a confirmation message "Product successfully added to your shopping cart"
    
  Scenario: Attempt to checkout with an empty cart
    Given I visit "https://www.automationexercise.com/"
And I navigate to "Cart" section
    Then I should see an error message "Cart is empty! Click here to buy products."

Feature: Products Page Functionality

  Scenario: Viewing a list of products
    Given I visit the "Products" page
    Then I should see a list of products displayed

  Scenario: Product details are correctly displayed
    Given I am on the "Products" page
    When I click on a product
    Then I should see the product's image, name, price, and description

  Scenario: Filtering products by category
    Given I am on the "Products" page
    When I select a specific category from the category list
    Then I should see only products from that category

  Scenario: Adding a product to the cart
    Given I am on the "Products" page
    When I click on "Add to cart" for a product
    Then the product should be added to the cart
    And I should see a confirmation message "Added! Your product has been added to cart."

  Scenario: Searching for a product
    Given I am on the "Products" page
    When I use the search function to find a product I fill in "Men Tshirt"
    Then I should see results relevant to my search query

  Scenario: Product images are displayed correctly
    Given I am on the "Products" page
    When I view a product
    Then the product's image should be clear and accurate

  Scenario: Product descriptions are accurate
    Given I am on the "Products" page
    When I view a product
    Then the description should match the product
    
Scenario: Prices are correctly displayed
    Given I am on the "Products" page
    When I view a product
    Then the price displayed should be correct
    Feature: Error Handling on Contact Us Form

  Scenario: Sending a message without filling the contact form
    Given I visit "https://www.automationexercise.com/"
    And I navigate to "Contact Us" section
    When I click on "Send" button without filling any fields
    Then I should see error messages for each required field

  Scenario: Sending a message with an invalid email
    Given I visit "https://www.automationexercise.com/"
    And I navigate to "Contact Us" section
    When I fill in the "Email" field with "tester.test.com"
    And I fill in the "Message" field with "This is a test message."
    And I click on "Send" button
    Then I should see an error message "Please enter a valid email address"
    
    Feature: Checkout Process Validation

  Scenario Outline: Form Validation for Required Fields
    Given the user is on the Checkout page
    When the user attempts to proceed without entering "<Field>"
    Then an error message "<Error>" should be displayed
    Examples:
      | Field         | Error                       |
      | Name on Card  | "Name is required"          |
      | Credit Card   | "Credit Card is required"   |
      | CVV "ex.311"  | "Please fill out this field"|
      | Expiry Date   | "Expiry Date is required"   |

  Scenario: Successful Checkout
    Given the user has filled all the required fields correctly
    When the user clicks on the 'Place Order' button
    Then the order should be processed successfully
    And a confirmation message should be displayed

  Scenario: Invalid Credit Card Number
    Given the user is on the Checkout page
    When the user enters an invalid credit card number
    Then an error message "Invalid Credit Card Number" should be displayed

  Scenario: Expired Credit Card
    Given the user is on the Checkout page
    When the user enters an expired credit card
    Then an error message "Credit Card has expired" should be displayed

  Scenario: Incorrect CVV Code
    Given the user is on the Checkout page
    When the user enters an incorrect CVV code
    Then an error message "Incorrect CVV Code" should be displayed
