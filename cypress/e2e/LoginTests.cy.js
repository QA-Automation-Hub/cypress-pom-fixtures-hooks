import LoginPage from './pages/LoginPage';

// Fixture'i senkron yükle (require ile)
const cases = require('../fixtures/users.json');

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  cases.forEach((row) => {
    it(`Case: ${row.name}`, () => {
      cy.login(row.username, row.password);

      switch (row.expected) {
        case 'success':
         cy.url().should('include', '/inventory.html');
         LoginPage.inventory().should('be.visible', { timeout: 10000 });
          break;

        case 'locked':
          LoginPage.error().should('contain.text', 'locked out');
          break;

        case 'username_required':
          LoginPage.error().should('contain.text', 'Username is required');
          break;

        case 'password_required':
          LoginPage.error().should('contain.text', 'Password is required');
          break;

        default:
          LoginPage.error().should('contain.text', 'Username and password do not match');
      }
    });
  });
});
