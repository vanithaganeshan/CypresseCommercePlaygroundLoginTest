const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false, // to avoid auto execution and memory wastage

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
