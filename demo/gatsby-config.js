const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-potato`,
      options: {}
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sébastien Castiel',
        short_name: 'S. Castiel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#66aacc',
        display: 'minimal-ui',
        icon: path.resolve('content/assets/logo.png')
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {
    title: '🥔 A Potato Blog',
    siteUrl: 'https://example.com',
    description:
      'This is the demo site for the Gatsby theme gatsby-theme-potato 🥔',
    lang: 'en'
  }
}
