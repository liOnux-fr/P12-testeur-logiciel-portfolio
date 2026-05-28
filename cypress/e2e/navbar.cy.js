describe("Mobile navbar collapse", () => {
	it("should collapse the navbar when clicking on a link", () => {
		cy.visit("/");
		cy.viewport("iphone-6");
		cy.get('.navbar-toggler').click();
		cy.get('#navbarSupportedContent').should('have.class', 'show').and('be.visible'); // Vérifie que le menu est ouvert
		cy.get('.nav-item a').first().click(); // Clique sur le premier lien
		// Attend que le menu ne soit plus en train de se replier (collapsing)
		// et que la classe "show" ait disparu (menu fermé)
		cy.get('#navbarSupportedContent').should('not.have.class', 'collapsing') // Fin de l'animation
		  .and('not.have.class', 'show') // Menu fermé
		  .and('not.be.visible'); // Masqué
	});
});