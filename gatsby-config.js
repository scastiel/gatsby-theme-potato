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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/
        }
      }
    },
    'gatsby-plugin-feed',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-reading-time',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sébastien Castiel',
        short_name: 'S. Castiel',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#8db0c3',
        display: 'minimal-ui',
        icon: 'assets/logo.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://scastiel.matomo.cloud/',
        siteUrl: 'https://blog.castiel.me',
        localScript: '//cdn.matomo.cloud/scastiel.matomo.cloud/matomo.js'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
