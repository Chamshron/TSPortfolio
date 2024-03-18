describe('can visit website', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Can use header links to navigate', () => {
  it('can use the different header links to navigate portfolio webpage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("About").click()
    cy.url().should('include','/#about')
    cy.contains("Projects").click()
    cy.url().should('include','/#project')
    cy.contains("Skills").click()
    cy.url().should('include','/#skills')
    cy.contains("Experience").click()
    cy.url().should('include','/#experience')
    cy.contains("Contact").click()
    cy.url().should('include','/#contact')
    cy.contains("Home").click()
    cy.url().should('include','/#home')
  })
})

describe('can use contact me here button to naviate to contact section', () => {
  it('can use the contact me here button to redirect to contact section', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Contact me here').click()
    cy.url().should('include','/#contact')
  })
})