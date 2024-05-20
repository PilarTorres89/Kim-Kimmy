import BasePage from '../BasePage';

export default class NavBar extends BasePage {
  static menu = 'header > nav > ul';
  static optionMenuCat1 = 'Shop Diapers';


  //static clickMenu() {
  //  cy.get(this.menu).click();
  //}

  static clickMenuCategory(cat) {
    cy.get(this.menu).contains(this.optionMenuCat1).click();
  }

  static clickMenuSubCategory(subCat) {
    cy.get(this.optionMenuSubCat).contains(subCat).click();
  }
}
document.querySelector("#HeaderMenu-shop-diapers")