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
  // Data
const sets = require("../fixtures/KidsSets.json");

beforeEach(() => {
  cy.visit("https://kim-and-kimmy-stg.myshopify.com/");
    BasePage.pause(50000);
    Modal.closeModal();
});