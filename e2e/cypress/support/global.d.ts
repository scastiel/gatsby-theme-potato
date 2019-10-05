/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    toggleSidebar(): Chainable<Element>
    meta(name: string): Chainable<string>
    sidebar(): Chainable<Element> & { toggle(): Chainable<Element> }
    menu(): Chainable<Array<{ to: string; label: string; current: boolean }>>
    blogTitle(): Chainable<Element>
    pageTitle(): Chainable<Element>
    content(): Chainable<Element>
    footer(): Chainable<Element>
  }
}
