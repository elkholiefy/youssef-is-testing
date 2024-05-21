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
