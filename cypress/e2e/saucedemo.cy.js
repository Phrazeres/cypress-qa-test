describe('SauceDemo E2E Tests', () => {

  beforeEach(() => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')

  })


  it('should login successfully with valid credentials', () => {

    cy.get('.inventory_list').should('be.visible')

  })


  it('should add a product to the cart', () => {

    cy.get('.inventory_item_name')
      .first()
      .invoke('text')
      .then((productName) => {

        cy.get('.inventory_item')
          .first()
          .find('button')
          .contains('Add to cart')
          .click()

        cy.get('.shopping_cart_badge')
          .should('have.text', '1')

        cy.get('.shopping_cart_link').click()

        cy.contains(productName).should('exist')

      })

  })


  it('should complete checkout successfully', () => {

    cy.get('.inventory_item')
      .first()
      .find('button')
      .contains('Add to cart')
      .click()

    cy.get('.shopping_cart_link').click()

    cy.get('#checkout').click()

    cy.get('#first-name').type('Pedro')
    cy.get('#last-name').type('Tester')
    cy.get('#postal-code').type('12345')

    cy.get('#continue').click()

    cy.get('#finish').click()

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order')

  })

})