import weather from '../fixtures/weather.json';

describe('Home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000', {
			onBeforeLoad(win) {
				cy.stub(win, 'open');
			},			
		});

		cy.get('.actionCard').last().get('button').click();

		cy.get('#name').type('Name');
		cy.get('#lat').type('1');
		cy.get('#lon').type('2');

		cy.get('.ant-modal-footer > .ant-btn-primary').click();

		cy.get('.actionCard:first button:last').click();

		cy.intercept('/api/weather*', (req) => {
			req.reply(200, weather);
		});

		cy.intercept('/api/weather/1', (req) => {
			req.reply(404);
		});
	});

	it('Test if incorrect positionId', () => {
		cy.visit('http://localhost:3000/1');

		cy.url().should('eq', 'http://localhost:3000/404');
	});

	it('Test values if correct positionId', () => {
		cy.get('.weatherValueCard:first > p:nth-child(2)').should('have.text', '+25');
		cy.get('.weatherValueCard:nth-child(2) > p:nth-child(2)').should('have.text', '+26');
		cy.get('.weatherValueCard:nth-child(3) > p:nth-child(2)').should('have.text', '759');
		cy.get('.weatherValueCard:nth-child(4) > p:nth-child(2)').should('have.text', '82');
		cy.get('.weatherValueCard:nth-child(5) > p:nth-child(2)').should('have.text', '5.3');
		cy.get('.weatherValueCard:nth-child(5) > p:nth-child(3)').should('have.text', 'Ю');
	});

	it('Test select new position navigation', () => {
		cy.wait(1000);
		cy.get('section .actionCard:first button:first').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});

	it('Test open on yandex maps navigation', () => {
		cy.wait(1000);
		cy.get('section .actionCard:last button:first').click();
		cy.window().its('open').should('be.called');
	});

	it('Test select forecast', () => {
		cy.get('.weatherFutureCard:nth-child(3)').click();

		cy.get('.weatherFutureSection > h2:first').should('have.text', '12 июля 2023');

		cy.get('.weatherFutureSection .weatherValueCard:first > p:nth-child(2)').should('have.text', '+26');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(2) > p:nth-child(2)').should('have.text', '+27');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(3) > p:nth-child(2)').should('have.text', '+27');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(4) > p:nth-child(2)').should('have.text', '+30');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(5) > p:nth-child(2)').should('have.text', '756');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(6) > p:nth-child(2)').should('have.text', '5.6');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(6) > p:nth-child(3)').should('have.text', 'Ю');
		cy.get('.weatherFutureSection .weatherValueCard:nth-child(7) > p:nth-child(2)').should('have.text', '75');
	});
});
