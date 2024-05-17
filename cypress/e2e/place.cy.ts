/// <reference types="../support/commands.d.ts" />

describe('Place', () => {
  it('navigate to a place with "My place" marker', () => {
    const placeTitle = 'Campinas, São Paulo'
    cy.accessPlaceOnTheMap(placeTitle, 'campinas-sao-paulo', 10, 200, 500)
    cy.validatePlacePage(placeTitle, 'home icon')
  })

  it('navigate to a place with "Place visited" marker', () => {
    const placeTitle = 'Venezia, Italy'
    cy.accessPlaceOnTheMap(placeTitle, 'venezia-italy', 1, 600, 0)
    cy.validatePlacePage(placeTitle, 'travel icon')
  })

  it('navigate to a place with "Place to be visited" marker', () => {
    const placeTitle = 'Cairo, Egypt'
    cy.accessPlaceOnTheMap(placeTitle, 'cairo-egypt')
    cy.validatePlacePage(placeTitle, 'target icon')
  })

  it('close the place page', () => {
    cy.accessPlaceOnTheMap()
    cy.closePage()
  })
})
