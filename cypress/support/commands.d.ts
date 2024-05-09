/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Clicks in the zoom button defined, the number of times defined
     *
     * @param placeTitle string - The title of the place
     * @param placeSlug string - The slug of the place
     * @param zoomClicks number - The number of clicks in the map to zoom
     * @param x number - Client x
     * @param y number - Client y
     *
     * @example cy.zoomAndDragOnTheMap('Campinas, São Paulo', 'campinas-sao-paulo', 9, 200, 500) // Double clicks 9 times in the position specified
     * @example cy.zoomAndDragOnTheMap('Cairo, Egypt', 'cairo-egypt') // Clicks on place especified without zoom clicks
     * @example cy.zoomAndDragOnTheMap() // Clicks on anywhere place
     */
    accessPlaceOnTheMap(
      placeTitle?: string,
      placeSlug?: string,
      zoomClicks?: number,
      x?: number,
      y?: number
    ): void | Cypress.Chainable<null>
  }
}
