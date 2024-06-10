/// <reference types="cypress" />
  
  // Hide fetch/XHR requests
  const app = window.top;
  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
  }
  // Imports
import BasePage from "../page-objects/BasePage";
import Modal from "../page-objects/comoponents/modal";
import NavBar from "../page-objects/comoponents/navbar";
import CartPage from "../page-objects/pages/CartPage";
import CheckoutPage from "../page-objects/pages/CheckoutPage";
import ProductDetailsPage from "../page-objects/pages/ProductDetailsPage";
import ProductsList from "../page-objects/pages/ProductsList";

// Data
const sets = require('../cypress/fixtures/user.json');

beforeEach(() => {
  cy.visit("https://kim-and-kimmy-stg.myshopify.com/");
    BasePage.pause(2000);
    Modal.closeModal();
});

it("select shop diapers", () => {
  NavBar.clickMenuCategory();
  ProductsList.selectProduct();
  ProductDetailsPage.selectVariants();
  ProductDetailsPage.addCart();
  CheckoutPage.clickbutton();
  CheckoutPage.inputEmail();
  CheckoutPage.inputName();
  CheckoutPage.inputStreet();
  CheckoutPage.inputCity();
  CheckoutPage.selectEmirate();
  CheckoutPage.inputPhone();
  CheckoutPage.inputArea();
  CheckoutPage.selectCOD();
  CheckoutPage.clickcompleteorder();
});