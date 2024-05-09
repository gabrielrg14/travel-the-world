Cypress.Commands.add(
  'accessPlaceOnTheMap',
  (
    placeTitle = 'Salvador, Bahia',
    placeSlug = 'salvador-bahia',
    zoomClicks = 0,
    x = 0,
    y = 0
  ) => {
    cy.intercept('GET', `**/place/${placeSlug}**`).as('getPlace')

    cy.visit('/')

    let clicks = 0
    while (clicks < zoomClicks) {
      clicks++
      cy.get('.leaflet-container').dblclick(x, y)
    }

    cy.get(`img[title="${placeTitle}"]`).should('be.visible').click()
    cy.wait('@getPlace')
  }
)
