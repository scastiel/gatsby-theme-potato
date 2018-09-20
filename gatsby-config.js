module.exports = {
  siteMetadata: {
    title: 'My blog',
    description:
      'Donec vehicula eu <strong>arcu quis</strong> aliquet. Nunc interdum ornare scelerisque. Nam efficitur purus sit amet ipsum egestas, sit amet lacinia neque fringilla. Sed finibus ultricies arcu quis sagittis.'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
