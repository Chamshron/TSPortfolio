describe('visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Contact me here').click()
    cy.url().should('include','/#contact')
    cy.contains("About").click()
    cy.url().should('include','/#about')
  })
})