/// <reference types="../support/commands.d.ts" />

describe('Page', () => {
  it('navigate to the about page', () => {
    cy.intercept('GET', `**/about**`).as('getPage')

    cy.visit('/')

    cy.get('a[href="/about"]').should('be.visible').click()
    cy.wait('@getPage')

    cy.contains('h1', 'About').should('be.visible')
    cy.get('p').should('have.length.at.least', 1)
  })

  it('close the about page', () => {
    cy.visit('/about')
    cy.closePage()
  })
})
