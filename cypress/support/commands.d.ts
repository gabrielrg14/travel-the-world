/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Validates a link from map legend.
     *
     * @param title string - The title of the link you want to validate
     * @param href string - The href of the link you want to validate
     *
     * @example cy.validateMapLegendLink('flaticon', 'https://www.flaticon.com/') // Validates that the link is visible and has the correct href
     */
    validateMapLegendLink(
      title: string,
      href: string
    ): Cypress.Chainable<JQuery<HTMLAnchorElement>>

    /**
     * Performs the action of zooming on the map through double clicks, considering the number of clicks provided in the provided x and y positions
     *
     * @param title string - The title of the place to be accessed
     * @param slug string - The slug of the place to be accessed
     * @param zoomClicks number - The number of double clicks to be performed on the map
     * @param x number - The x position at which double clicks will be performed
     * @param y number - The y position at which double clicks will be performed
     *
     * @example cy.accessPlaceOnTheMap('Campinas, São Paulo', 'campinas-sao-paulo', 9, 200, 500) // Perform 9 double clicks on the x, y position provided to access the place 'Campinas, São Paulo'
     * @example cy.accessPlaceOnTheMap('Cairo, Egypt', 'cairo-egypt') // No double clicking to access the place Cairo, Egypt
     * @example cy.accessPlaceOnTheMap() // Accesses the default location 'Salvador, Bahia'
     */
    accessPlaceOnTheMap(
      title?: string,
      slug?: string,
      zoomClicks?: number,
      x?: number,
      y?: number
    ): Cypress.Chainable<JQuery<HTMLImageElement>>

    /**
     * Validates that the place page was displayed correctly.
     *
     * @param title string - The title of the place you want to validate
     * @param markerAlt string - The alt of the marker you want to validate
     *
     * @example cy.validatePlacePage('Venice, Italy', 'travel icon') // Validates that the place page has the title, marker and at least one image
     */
    validatePlacePage(
      title: string,
      markerAlt: string
    ): Cypress.Chainable<undefined>

    /**
     * Close the page.
     *
     * @example cy.closePage() // Close the page using the X on the screen
     */
    closePage(): void | Cypress.Chainable<null>
  }
}
