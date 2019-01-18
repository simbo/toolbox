context('Assertions', () => {

  beforeEach(() => {
    cy.visit('/toolbox/#/');
  });

  describe('App', () => {

    it('should have the title "Toolbox"', () => {
      cy.title().should('eq', 'Toolbox');
    });

  });

});
