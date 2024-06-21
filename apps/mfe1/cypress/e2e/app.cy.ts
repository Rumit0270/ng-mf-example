import { getGreeting } from '../support/app.po';

describe('mfe1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4201');
  });

  it('should display welcome message', () => {
    getGreeting().contains(/Welcome!!/);
  });

  it('should navigate to todos page', () => {
    cy.contains('View Todos').click();

    cy.url().should('include', '/todos');
  });

  it('should fetch todos while navigating to /todos', () => {
    cy.intercept('GET', '/todos').as('fetchTodos');

    cy.contains('View Todos').click();

    cy.wait('@fetchTodos').its('response.statusCode').should('eq', 200);
  });

  it('should render fetched todos while navigating to /todos', () => {
    cy.intercept('GET', '/todos', { fixture: 'todos.json' }).as('fetchTodos');

    cy.contains('View Todos').click();

    cy.wait('@fetchTodos');

    cy.get('li').should('have.length', 2);
  });
});
