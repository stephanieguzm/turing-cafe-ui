describe('The user sees the reservations home view', () => {
  beforeEach( () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: 'reservations.json'
    }).as('reservations')
    cy.visit('http://localhost:3000/')
  })
  
  it('should show the application title, a form, and existing reservations', () => {
    cy
      .get('.app-title').contains('Turing Cafe Reservations')
      .get('form')
      .get('.resy-card').its('length').should('eq', 3)
  })

  it('should show the user a reservation form with fields to add a name, date, time, number of guests, and reservation button', () => {
    cy
      .get('[placeholder="Name"]')
      .get('[placeholder="Date (mm/dd)"]')
      .get('[placeholder="Time"]')
      .get('[placeholder="Number of guests"]')
      .get('.resy-form > button')
  })

  it(`should allow the user to submit a reservation and then show the user's new reservation below the form`, () => {
    cy
      .get('input[name="name"]').type('Stephanie').should('have value', 'Stephanie')

      .get('.resy-form > button').submit()
  })

})