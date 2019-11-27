describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Contains a table with past and upcoming studies', () => {
    cy.visit ('/');
    cy.get('[data-cy=studiesTableCy]').should('contain', 'Upcoming Studies');
    cy.get('[data-cy=studiesTableCy]').should('contain', 'Past Studies');
  });
});
