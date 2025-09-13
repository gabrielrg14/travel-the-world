/// <reference types="../support/commands.d.ts" />

describe('Error', () => {
  it('redirects to home page when accessing 404 page', () => {
    cy.visit('/not-found', { failOnStatusCode: false })

    cy.contains('h1', '404 Error').should('be.visible')

    cy.closePage()
  })
})
