describe('Static page', () => {
  before(() => {
    cy.visit('http://localhost:8000/about')
  })

  it('has the right headers', () => {
    cy.title().should('eq', 'About this blog | 🥔 A Potato Blog')
    cy.meta('canonical').should(
      'eq',
      'https://demo-gatsby-theme-potato.netlify.com/about'
    )
  })

  it('displays the blog title', () => {
    cy.blogTitle()
      .should('contain.text', '🥔 A Potato Blog')
      .should('have.attr', 'href', '/')
  })

  it('displays the sidebar', () => {
    cy.sidebar()
      .should('be.hidden')
      .toggleSidebar()
      .should('be.visible')
      .should('contain', 'This is the example blog')
      .should('contain', 'This is a sidebar widget')
      .should('contain.html', '<a href="https://twitter.com/scastiel">')
      .should('contain.html', '<a href="https://github.com/scastiel">')
      .should('contain.html', '<form action="https://example.com"')
      .toggleSidebar()
      .should('be.hidden')
  })

  it('has the right items in the menu', () => {
    cy.menu().should('deep.equal', [
      { to: '/', label: 'Home', current: false },
      { to: '/categories/great', label: 'Great posts', current: false },
      { to: '/categories/awesome', label: 'Awesome posts', current: false },
      { to: '/about', label: 'About', current: true }
    ])
  })

  it('displays the footer', () => {
    cy.footer().should('contain', 'This is the footer')
  })

  it('displays the page content', () => {
    cy.pageTitle().should('contain', 'About this blog')
    cy.content().should('contain', 'This is the demo site')
  })
})
