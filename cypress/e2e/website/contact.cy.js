describe('contact HIGO', () => {
  beforeEach(() => {
    // Visit menu contact
    cy.visit('https://higo.id/en/contact-us')
  })
  it('Negative test case for form', () => {

    // Get element form and input wrong value
    cy.get('[name="fullName"]').type('test-hasna')
    cy.get('[name="email"]').type('hasna.danisa')
    cy.get('[name="phoneNumber"]').type('test')
    cy.get('[name="companyName"]').type('testing')
    cy.get('[name="service"]').select(2)
    cy.get('[name="message"]').type('Testing')

    // Button submit disable
    cy.get('.gap-4 > .place-self-end')
    .should('be.disabled')

  })
  it('Positive test case for form', () => {

    // Get element form and input value
    cy.get('[name="fullName"]').type('hasna')
    cy.get('[name="email"]').type('hasna.danisa@gmail.com')
    cy.get('[name="phoneNumber"]').type('628970992641')
    cy.get('[name="companyName"]').type('testing')
    cy.get('[name="service"]').select(2)
    cy.get('[name="message"]').type('Testing')

    // Button submit
    cy.get('.gap-4 > .place-self-end').click()

    // Notification success
    cy.get('.border-green-200')
    .should('be.visible').and('contain', 'Your message is sent.')

  })
})