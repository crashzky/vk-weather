describe('Home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');

		cy.get('.actionCard').last().get('button').click();

		cy.get('#name').type('Name');
		cy.get('#lat').type('1');
		cy.get('#lon').type('2');

		cy.get('.ant-modal-footer > .ant-btn-primary').click();
	});

	it('Add new geoposition', () => {
		cy.get('.actionCard > p').first().should('have.text', 'Name');
	});

	it('Remove geoposition', () => {
		cy.get('.actionCard:first button:nth-child(2)').click();
		cy.get('.ant-modal-footer > .ant-btn-primary').last().click();

		cy.get('.actionCard').should('have.length', 1);
	});

	it('Edit geoposition', () => {
		cy.get('.actionCard:first button:first').click();
		cy.get(':nth-child(7) .ant-modal-root #name').type(' 2');
		cy.get('.ant-modal-footer > .ant-btn-primary').last().click();

		cy.get('.actionCard > p').first().should('have.text', 'Name 2');
	});

	it('View geoposition', () => {
		cy.get('.actionCard:first button:last').click();

		cy.url().should('eq', 'http://localhost:3000/0');
	});
});
