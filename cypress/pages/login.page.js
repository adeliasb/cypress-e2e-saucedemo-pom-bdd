export class LoginPage {
  visit() {
    cy.visit("/"); // abre a página inicial
  }

  fillCredencials(username, password) {
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.visit;
    this.fillCredencials(username, password);
    this.submit();
  }
}
