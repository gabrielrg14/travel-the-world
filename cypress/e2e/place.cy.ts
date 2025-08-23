/// <reference types="../support/commands.d.ts" />

describe('Place', () => {
  it('navigate to a place with "My place" marker', () => {
    const placeTitle = 'Campinas, São Paulo'
    cy.accessPlaceOnTheMap(placeTitle, 'campinas-sao-paulo', 10, 200, 500)
    cy.validatePlacePage(placeTitle, 'home marker')
  })

  it('navigate to a place with "Visited by car" marker', () => {
    const placeTitle = 'Ubatuba, São Paulo'
    cy.accessPlaceOnTheMap(placeTitle, 'ubatuba-sao-paulo', 5, 200, 500)
    cy.validatePlacePage(placeTitle, 'car marker')
  })

  it('navigate to a place with "Visited by airplane" marker', () => {
    const placeTitle = 'Venezia, Italy'
    cy.accessPlaceOnTheMap(placeTitle, 'venezia-italy', 1, 600, 0)
    cy.validatePlacePage(placeTitle, 'airplane marker')
  })

  it('navigate to a place with "To be visited" marker', () => {
    const placeTitle = 'Cairo, Egypt'
    cy.accessPlaceOnTheMap(placeTitle, 'cairo-egypt')
    cy.validatePlacePage(placeTitle, 'target marker')
  })

  it('close the place page', () => {
    cy.accessPlaceOnTheMap()
    cy.closePage()
  })
})
