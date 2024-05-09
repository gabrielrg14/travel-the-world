/// <reference types="../support/commands.d.ts" />

describe('Page', () => {
  it('navigate to the about page from the home page', () => {
    cy.intercept('GET', `**/about**`).as('getPage')

    cy.visit('/')

    cy.get('a[href="/about"]').should('be.visible').click()
    cy.wait('@getPage')

    cy.contains('h1', 'About').should('be.visible')
    cy.get('p').should('have.length.at.least', 1)
  })

  it('close about page and navigate to home page', () => {
    cy.intercept('GET', `**/index**`).as('getMapPlaces')

    cy.visit('/about')

    cy.get('a[href="/"]').should('be.visible').click()
    cy.wait('@getMapPlaces')

    cy.get('.leaflet-container').should('be.visible')
  })
})
