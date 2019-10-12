describe('Article', () => {
  before(() => {
    cy.visit('http://localhost:8000/posts/2019-08-17-hello-world/')
  })

  it('has the right headers', () => {
    cy.title().should('eq', 'Hello World! | 🥔 A Potato Blog')
    cy.meta('canonical').should(
      'eq',
      'https://demo-gatsby-theme-potato.netlify.com/posts/2019-08-17-hello-world/'
    )
    cy.meta('og:url').should(
      'eq',
      'https://demo-gatsby-theme-potato.netlify.com/posts/2019-08-17-hello-world/'
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
      { to: '/about', label: 'About', current: false }
    ])
  })

  it('displays the footer', () => {
    cy.footer().should('contain', 'This is the footer')
  })

  it('displays the page content', () => {
    cy.pageTitle().should('contain', 'Hello World!')
    cy.content().should('contain', 'Lorem ipsum dolor sit amet')
  })
})
