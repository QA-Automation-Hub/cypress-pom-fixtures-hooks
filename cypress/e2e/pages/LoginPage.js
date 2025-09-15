class LoginPage{
  get url(){
    return 'https://www.saucedemo.com';
  }
  get usernameInput(){ return '[data-test="username"]';}
  get passwordInput(){ return '[data-test="password"]';}
  get loginButton(){ return '[data-test="login-button"]';}
  get inventoryList(){ return '[data-test="inventory_list"]';}

visit(){
  cy.visit(this.url);
}

username(){
  return cy.get(this.usernameInput); 
}
password(){return cy.get(this.passwordInput); }
submit(){return cy.get(this.loginButton); }
error(){return cy.get(this.errorBox); }
inventory(){return cy.get(this.inventoryList); }

typeUsername(value){
  this.username().clear().type(value);
}

typePassword(value){
  this.password().clear().type(value);
}

clickLogin(){
  this.submit().click();
}
// Formu temizle 
clearForm(){
  this.username().clear();
  this.password().clear();
}
}
export default new LoginPage();