const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
    baseUrl: 'https://kim-and-kimmy-stg.myshopify.com/'
    },
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
    projectId: 'ds6q8s',
});

