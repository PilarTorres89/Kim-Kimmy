import BasePage from "../BasePage";

export default class Modal extends BasePage {
  static closeModal() {
    cy.get('#redirectForm-container > div.links-container > a:nth-child(1)').click();
    BasePage.pause(2000)
   
  }
}


