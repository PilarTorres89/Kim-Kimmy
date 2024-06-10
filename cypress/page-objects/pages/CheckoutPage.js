import BasePage from '../BasePage';

export default class CheckoutPage extends BasePage { 

static buttoncheckout = "#CartDrawer-Checkout"


  static clickbutton() {
    cy.get(this.buttoncheckout).click()
  }
}