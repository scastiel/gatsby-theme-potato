require('babel-polyfill')

module.exports = {
  siteMetadata: {
    title: 'Sébastien Castiel',
    siteUrl: 'https://blog.castiel.me',
    description:
      'I’m Sébastien Castiel, and I write about web development and some other stuff.',
    lang: 'en'
  },
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'comments',
        path: `${__dirname}/src/comments/`
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
        short_name: 'S. Castiel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui'
        // icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://scastiel.hostiso.cloud/piwik/',
        siteUrl: 'https://blog.castiel.me'
      }
    }
  ]
}
