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
