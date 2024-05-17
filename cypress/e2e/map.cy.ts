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

  it('validate map legend links', () => {
    cy.validateMapLegendLink(
      'maps-and-location icons',
      'https://www.flaticon.com/free-icons/maps-and-location'
    )

    cy.validateMapLegendLink(
      'airplane icons',
      'https://www.flaticon.com/free-icons/airplane'
    )

    cy.validateMapLegendLink(
      'goal icons',
      'https://www.flaticon.com/free-icons/goal'
    )

    cy.validateMapLegendLink(
      'juicy_fish icons',
      'https://www.flaticon.com/authors/juicy-fish'
    )

    cy.validateMapLegendLink('flaticon', 'https://www.flaticon.com/')
  })
})
