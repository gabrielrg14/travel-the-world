/// <reference types="../support/commands.d.ts" />

describe('Map', () => {
  beforeEach(() => cy.visit('/'))

  it('zoom in and out of the map', () => {
    cy.get('img[title="Athens, Greece"]').as('testPlace')

    cy.get(`@testPlace`).should('be.visible')
    cy.get('a[title="Zoom in"]').should('be.visible').click()

    cy.get(`@testPlace`).should('not.be.visible')
    cy.get('a[title="Zoom out"][aria-disabled="false"]')
      .should('be.visible')
      .click()

    cy.get(`@testPlace`).should('be.visible')
  })

  it('check map legend links', () => {
    cy.get('a[title="maps-and-location icons"]')
      .should('be.visible')
      .and(
        'have.attr',
        'href',
        'https://www.flaticon.com/free-icons/maps-and-location'
      )

    cy.get('a[title="airplane icons"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://www.flaticon.com/free-icons/airplane')

    cy.get('a[title="goal icons"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://www.flaticon.com/free-icons/goal')

    cy.get('a[title="juicy_fish icons"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://www.flaticon.com/authors/juicy-fish')

    cy.get('a[title="flaticon"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://www.flaticon.com/')
  })
})
