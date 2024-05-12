/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Performs the action of zooming on the map through double clicks, considering the number of clicks provided in the provided x and y positions
     *
     * @param placeTitle string - The title of the place to be accessed
     * @param placeSlug string - The slug of the place to be accessed
     * @param zoomClicks number - The number of double clicks to be performed on the map
     * @param x number - The x position at which double clicks will be performed
     * @param y number - The y position at which double clicks will be performed
     *
     * @example cy.accessPlaceOnTheMap('Campinas, São Paulo', 'campinas-sao-paulo', 9, 200, 500) // Perform 9 double clicks on the x, y position provided to access the place 'Campinas, São Paulo'
     * @example cy.accessPlaceOnTheMap('Cairo, Egypt', 'cairo-egypt') // No double clicking to access the place Cairo, Egypt
     * @example cy.accessPlaceOnTheMap() // Accesses the default location 'Salvador, Bahia'
     */
    accessPlaceOnTheMap(
      placeTitle?: string,
      placeSlug?: string,
      zoomClicks?: number,
      x?: number,
      y?: number
    ): Cypress.Chainable<JQuery<HTMLImageElement>>
  }
}
