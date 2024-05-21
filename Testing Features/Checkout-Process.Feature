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