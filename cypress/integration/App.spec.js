describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Contains a table with past and upcoming studies', () => {
    cy.visit ('/');
    cy.get('[data-cy=studiesTableCy]').should('contain', 'Upcoming Studies');
    cy.get('[data-cy=studiesTableCy]').should('contain', 'Past Studies');
    cy.get('[data-cy=studiesTableCy]').should('contain', "001"); // example of upcoming study
  });

  it ('Clicking on past studies should show past studies only', () => {
    cy.visit ('/');

    cy.get('[data-cy=button]').click({ multiple: true });
    cy.get('[data-cy=studiesTableCy]').should('contain', "002"); // example of past study
  })

});
