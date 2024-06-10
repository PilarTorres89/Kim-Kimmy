import BasePage from '../BasePage';

export default class ProductDetailsPage extends BasePage {
  static addToCart = "#ProductSubmitButton-template--16849441226915__main"
  static addVariant = "#variant-radios-template--16849441226915__main > fieldset > label:nth-child(3)"


  static selectVariants() {
    cy.get(this.addVariant).click()
  }

  static addCart () {
    cy.get(this.addToCart).click()
  }
}
