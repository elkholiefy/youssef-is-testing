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
