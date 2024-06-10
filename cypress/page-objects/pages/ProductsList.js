import BasePage from '../BasePage';

export default class ProductsList extends BasePage { 

  static selectProduct() {
        cy.get("#product-grid > li:nth-child(1)").click()
      }
}

