// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />



import { mount } from 'cypress/react'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}


describe('Приложение TODO', () => {
  beforeEach(()  => {
    cy.visit('http://localhost:3000/')

  })

it('Дело успешно создается', () => {
  cy.get('input').type('Новое дело').type('{enter}');
  cy.get('div').should('contain.text', 'Новое дело');
})

})