describe("Dynamic Card Creation", () => {
	beforeEach(() => {
	  cy.visit("/");
	});
  
	it("should create skill cards from JSON data", () => {
	  // Vérifier que les cartes sont bien créées
	  cy.get("#skills .container .card.skillsText").should("be.visible").and("have.length.greaterThan", 0);
	  cy.get("#skills .container .card.skillsText").first().should("contain", "HTML"); // première compétence
	});
  
	it("should create portfolio cards from JSON data", () => {
		// Vérifier que les cartes sont bien créées
	  cy.get("#portfolio .container .card.portfolioContent").should("be.visible").and("have.length.greaterThan", 0);
	  cy.get("#portfolio .container .card.portfolioContent").first().should("contain", "Kasa");
	});
  });