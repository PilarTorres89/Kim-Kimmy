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
import ProductDetailsPage from "../page-objects/pages/ProductDetailsPage";
import ProductsList from "../page-objects/pages/ProductsList";

beforeEach(() => {
  cy.visit("https://kim-and-kimmy-stg.myshopify.com/");
    BasePage.pause(50000);
    Modal.closeModal();
});