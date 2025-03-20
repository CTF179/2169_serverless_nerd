it("Duck Duck Go search", () => {
    cy.visit("https://duckduckgo.com");

    cy.get('#searchbox_input').type("Automation Testing Guide");

    cy.get('.searchbox_searchButton__LxebD').click();

    cy.get(':nth-child(1) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').should('contain', 'Automation');
})