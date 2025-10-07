Cypress.Commands.add("login", (userAlias = "validUser") => {
  cy.fixture("user").then((user) => {
    const LoginPage = require("../pages/login.page").LoginPage;
    const loginPage = new LoginPage();
    loginPage.login(user[userAlias].username, user[userAlias].password);
  });
});
