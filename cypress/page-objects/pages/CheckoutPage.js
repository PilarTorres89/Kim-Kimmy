import BasePage from '../BasePage';

export default class CheckoutPage extends BasePage { 

static buttoncheckout = "#CartDrawer-Checkout";
static mail='ptorres+Cypress28701@eurekalabs.io';
static fisrtName='Cypress58701';
static lastName='Testing25929';
static nameStreet='abcdefghi';
static numberStreet='1500';
static city='abcdefg';
static phone='+97135133333';


static inputEmail() {
  cy.get('#email').type(this.mail);
}

static inputName(){
  cy.get('#TextField0').type(this.fisrtName);
  cy.get('#TextField1').type(this.lastName);
}

static inputStreet() {
  cy.get('#TextField2').type(this.nameStreet);
  cy.get('#TextField3').type(this.numberStreet);
}

static inputCity(){
  cy.get('#TextField7').type(this.city);
}

static inputArea(){
  cy.get('#TextField8').type('a');
  cy.get(':nth-child(3) > :nth-child(1) > ._1ip0g651 > ._1fragemo1._1fragem2s > ._5uqybw2 > :nth-child(1)').click();
}

static inputPhone() {
  cy.get('#TextField6').type(this.phone);
}

static selectEmirate(){
  cy.get('#Select2').select('Dubai');
}

static clickSubmit(label) {
  cy.get(submitBtn).contains(`${label}`).click({ force: true });
}

static selectCOD() {
  cy.get('#basic-paymentOnDelivery').click({ force: true });
}

static selectCC() {
  cy.get('#basic-creditCards').click({ force: true });
}
static inputCC(){
  cy.get('#number').click();
  cy.get('#number').type('4242424242424242');
}
  static clickbutton() {
    cy.get(this.buttoncheckout).click();
  }
  static clickcompleteorder(){
    cy.get('#checkout-pay-button').click();
  } 
 

  }  
  