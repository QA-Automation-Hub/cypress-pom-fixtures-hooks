import LoginPage from '../e2e/pages/LoginPage';

Cypress.Commands.add('login', (username = '', password = '') => {
  // Username
  LoginPage.username().clear();
  if (username !== '') {
    LoginPage.username().type(username);
  }

  // Password
  LoginPage.password().clear();
  if (password !== '') {
    LoginPage.password().type(password);
  }

  // Login butonu
  LoginPage.submit().click();
});
