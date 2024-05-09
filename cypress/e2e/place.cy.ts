/// <reference types="../support/commands.d.ts" />

describe('Place', () => {
  it('navigate to a place with "My place" marker', () => {
    const placeTitle = 'Campinas, São Paulo'
    const placeSlug = 'campinas-sao-paulo'

    cy.accessPlaceOnTheMap(placeTitle, placeSlug, 10, 200, 500)

    cy.contains('h1', placeTitle).should('be.visible')
    cy.get('img[alt="home icon"]').should('be.visible')
    cy.get(`img[alt="${placeTitle}"]`).should('have.length.at.least', 1)
  })

  it('navigate to a place with "Place visited" marker', () => {
    const placeTitle = 'Venezia, Italy'
    const placeSlug = 'venezia-italy'

    cy.accessPlaceOnTheMap(placeTitle, placeSlug, 1, 600, 0)

    cy.contains('h1', placeTitle).should('be.visible')
    cy.get('img[alt="travel icon"]').should('be.visible')
    cy.get(`img[alt="${placeTitle}"]`).should('have.length.at.least', 1)
  })

  it('navigate to a place with "Place to be visited" marker', () => {
    const placeTitle = 'Cairo, Egypt'
    const placeSlug = 'cairo-egypt'

    cy.accessPlaceOnTheMap(placeTitle, placeSlug)

    cy.contains('h1', placeTitle).should('be.visible')
    cy.get('img[alt="target icon"]').should('be.visible')
    cy.get(`img[alt="${placeTitle}"]`).should('have.length.at.least', 1)
  })

  it('close place page and navigate to home page', () => {
    cy.intercept('GET', `**/index**`).as('getMapPlaces')

    cy.accessPlaceOnTheMap()

    cy.get('a[href="/"]').should('be.visible').click()
    cy.wait('@getMapPlaces')

    cy.get('.leaflet-container').should('be.visible')
  })
})
