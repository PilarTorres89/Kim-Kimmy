# Kim & Kimmy Automation Framework

This repository contains automated test cases for Kim & Kimmy e-Commerce webpage using Cypress as framework.

## Getting Started

Make sure to have node installed
Cross verify the Node.js installation by running the command:

```
node –version
```

To verify the npm version run the following command:

```
npm –version
```

## Download the repository


then execute the command:

```bash
## Install the dependencies
npm install
```

This will install all the required dependences for the proyect to function properly.

## Cypress

It supports different types of testing like:

- End to End Testing
- Unit Testing
- Integration Testing
- API Testing

To execute Cypress type

```
npm run cy:open
```

This will get the Cypress UI opened. Pick E2E Testing and choose a browser (Chrome or Electron were mainly used for this framework)
The spec files containing the tests are placed within the cypress/e2e folder:

![Alt text](https://drive.google.com/uc?id=1Ek-_j7UR9sqSWIm_vRMPqn7QsChyjuBp)

## POM Structure

We use Page Object Model as structure for this project, since there are several elements that are recursively used within tests, hence we create the objects and classes to make them available for reusability.

For example, the Product Details Page exists the "Add Diaper" button, an element that will be constantly used, hence it is elegible for a new method:

```sh
  static addWipe() {
    cy.get(this.addWipeBtn).click({ force: true });
  }
```

So each time we need to click that button, the created method can be called as addWipe();

## Official Documentation for installing Cypress

For this particular project, [cloning the repository and setting everything up on this step](#download-the-repository) will install everything you need to execute Cypress.
But in case you want to start from scratch, you can
[follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

|     |     |     |     |     |     |     |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |

### Versions

|         |         |
| :-----: | :-----: |
| Node.js | 12.16.2 |
|   Npm   | 6.14.4  |
| Cypress | 10.7.10 |
