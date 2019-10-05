// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('toggleSidebar', () => {
  cy.get('label[for="nav-trigger"]').click()
  return cy.sidebar()
})

Cypress.Commands.add('sidebar', () => {
  return cy.get('.sidebar')
})

Cypress.Commands.add('meta', name => {
  return cy
    .document()
    .get(`meta[name="${name}"], meta[property="${name}"]`)
    .then(elt => elt.attr('content'))
})

Cypress.Commands.add('menu', () =>
  cy.get('nav').then(nav =>
    nav
      .find('a')
      .map((_, a) => ({
        to: a.getAttribute('href'),
        label: a.innerHTML,
        current: a.getAttribute('aria-current') === 'page'
      }))
      .toArray()
  )
)

Cypress.Commands.add('blogTitle', () => cy.get('.site-title a'))
Cypress.Commands.add('content', () => cy.get('article'))
Cypress.Commands.add('pageTitle', () => cy.get('h1'))
Cypress.Commands.add('footer', () => cy.get('footer'))
