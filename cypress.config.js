


const { defineConfig } = require("cypress");
///const { defineConfig } = require("mocha");
 
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
 
 
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    testIsolation: false,
    //baseUrl: 'https://bestinsurance.trumobile.dev/login',
    //supportFile: true, // should be tested w trg3 false tany w n un comment el handling exception gwa el script
 
  }
});




