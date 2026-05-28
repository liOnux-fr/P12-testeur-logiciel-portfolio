const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: "cypress-mochawesome-reporter",
  allowCypressEnv: false,

  e2e: {
    baseURL: "https://lionux-fr.github.io/P12-testeur-logiciel-portfolio/#",
    setupNodeEvents(on, config) {
      // Configuration des événements Node ici
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
