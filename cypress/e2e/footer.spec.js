describe("Footer", () => {
  context("code of conduct link", () => {
    it("should open code of conduct page", () => {
      cy.visit("/")
      cy.findByText("Código de Conduta").click()
      cy.url().should("contain", "/codigo-de-conduta")
    })
  })
})
