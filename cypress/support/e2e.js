// cypress/support/e2e.js

// custom commands
import './commands';

// global beforeEach (tüm testlerden önce)
beforeEach(() => {
  cy.log('Yeni bir test başlıyor 🚀');
});

// test sırasında beklenmedik hataları ignore et
Cypress.on('uncaught:exception', (err, runnable) => {
  // burada return false => Cypress testi fail etmez
  return false;
});
