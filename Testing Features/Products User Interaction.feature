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
