import LoginPage from './pages/LoginPage';


describe('Login Tests', () => {
  let cases;

  before(() => {
    cy.fixture('login-cases').then((data) => {
      cases = data;
    });
  });

  beforeEach(() => {
    LoginPage.visit();
  });

  cases?.forEach((row) => {
    it(`Case: ${row.name}`, () => {
      cy.login(row.username, row.password);

      switch (row.expected) {
        case 'success':
          cy.url().should('include', '/inventory.html');
          LoginPage.inventory().should('be.visible');
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
