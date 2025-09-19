# Cypress POM Fixtures Hooks 🚀

This project contains **Login Tests** for [SauceDemo](https://www.saucedemo.com) using [Cypress](https://www.cypress.io).  
The tests are built with the **Page Object Model (POM)** pattern, **fixtures** for test data, and **custom commands** for reusability.  
Additionally, **Mochawesome** is used to generate detailed HTML reports.  

---

## 📦 Installation

Install the required dependencies:

```bash
npm install

npx cypress open

npx cypress run

npm run test:report

open cypress/reports/report.html

xdg-open cypress/reports/report.html

Start-Process "cypress\reports\report.html"

cypress/
  e2e/
    LoginTests.cy.js        # Test file
    pages/
      LoginPage.js          # Page Object Model
  fixtures/
    users.json              # Test data
  support/
    commands.js             # Custom commands
    e2e.js                  # Global hooks


---


