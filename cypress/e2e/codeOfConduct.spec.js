/// <reference types="cypress" />

describe("Code of conduct", () => {
  it("should be accessed from the home page", () => {
    cy.visit("/")
    cy.openCodeOfConductLink()
    cy.shouldBeCodeOfConductPage()
  })
  it("should be accessed from FAQ page", () => {
    cy.visit("/tire-suas-duvidas")
    cy.openCodeOfConductLink()
    cy.shouldBeCodeOfConductPage()
  })
})
