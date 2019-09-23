const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-potato`,
      options: {
        postsPrefix: 'posts'
      }
    },
    `gatsby-plugin-typescript`
  ],
  siteMetadata: {
    title: '🥔 A Potato Blog',
    siteUrl: 'https://demo-gatsby-theme-potato.netlify.com',
    description:
      'This is the demo site for the Gatsby theme gatsby-theme-potato 🥔',
    lang: 'en'
  }
}
