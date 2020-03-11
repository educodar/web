import "@testing-library/cypress/add-commands"

Cypress.Commands.add("openCodeOfConductLink", () => {
  cy.findByText("Código de Conduta").click()
})

Cypress.Commands.add("shouldBeCodeOfConductPage", () => {
  cy.url().should("contain", "/codigo-de-conduta")
  cy.contains("Código de Conduta do Educodar")
})
