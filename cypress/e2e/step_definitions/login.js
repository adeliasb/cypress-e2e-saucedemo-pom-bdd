import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const Dado = Given;
const Quando = When;
const Então = Then;

// Step para abrir página de login
Dado("que eu estou na página de login", () => {
  cy.visit("/"); // pode ser direto, ou usar loginPage.visit() se preferir
});

// Step para executar login
Quando("eu faço login com credenciais válidas", () => {
  cy.login("validUser"); // aqui reaproveita o comando
});

// Step para validar sucesso do login
Então("eu vejo a lista de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});
