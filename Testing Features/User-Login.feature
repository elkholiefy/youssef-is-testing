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