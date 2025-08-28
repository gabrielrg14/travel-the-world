Cypress.Commands.add('validateMapLegendLink', (title: string, href: string) => {
  cy.get(`a[title="${title}"]`)
    .should('be.visible')
    .and('have.attr', 'href', href)
})

Cypress.Commands.add(
  'accessPlaceOnTheMap',
  (
    title = 'Salvador, Bahia',
    slug = 'salvador-bahia',
    zoomClicks = 0,
    x = 0,
    y = 0
  ) => {
    cy.intercept('GET', `**/place/${slug}**`).as('getPlace')

    cy.visit('/')

    let clicks = 0
    while (clicks < zoomClicks) {
      clicks++
      cy.get('.leaflet-container').dblclick(x, y)
    }

    cy.get(`img[title="${title}"]`).should('be.visible').click()
    cy.wait('@getPlace')
  }
)

Cypress.Commands.add(
  'validatePlacePage',
  (title: string, markerAlt: string) => {
    cy.contains('h1', title).should('be.visible')
    cy.get(`img[alt="${markerAlt}"]`).should('be.visible')
    cy.get(`img[data-testid="${title}"]`).should('have.length.at.least', 1)
  }
)

Cypress.Commands.add('closePage', () => {
  cy.intercept('GET', `**/index**`).as('getMapPlaces')

  cy.get('a[href="/"]').should('be.visible').click()
  cy.wait('@getMapPlaces')

  cy.get('.leaflet-container').should('be.visible')
})
