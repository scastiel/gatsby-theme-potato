require('babel-polyfill')

module.exports = {
  siteMetadata: {
    title: 'Sébastien Castiel',
    siteUrl: 'https://blog.castiel.me',
    description:
      'I’m <a href="https://twitter.com/scastiel">Sébastien Castiel</a>, and I talk about web development and some other stuff.'
  },
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true
            }
          }
        ]
      }
    },
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sébastien Castiel',
        short_name: 'Sébastien Castiel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui'
        // icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
