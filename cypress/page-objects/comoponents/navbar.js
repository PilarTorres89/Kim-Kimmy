import BasePage from '../BasePage';

export default class NavBar extends BasePage {
  static menu = 'header > nav > ul';
  static optionMenuCat1 = 'Shop Diapers';
  static optionMenuCat2 = 'Shop Pants';
  static optionMenuCat3 = 'Shop Wipes';

  //static clickMenu() {
  //  cy.get(this.menu).click();
  //}

  static clickMenuCategory(cat) {
    cy.get(this.menu).contains(this.optionMenuCat1).click();
  }

  static clickMenuCategory(cat) {
    cy.get(this.menu).contains(this.optionMenuCat2).click();
  }
  
  static clickMenuCategory(cat) {
    cy.get(this.menu).contains(this.optionMenuCat3).click();
  }

  static clickMenuSubCategory(subCat) {
    cy.get(this.optionMenuSubCat).contains(subCat).click();
  }
}
document.querySelector("#HeaderMenu-shop-diapers")