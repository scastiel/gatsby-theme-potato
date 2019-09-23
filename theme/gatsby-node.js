const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = (
  { node, getNode, actions: { createNodeField } },
  themeOptions = {}
) => {
  if (node.internal.type === 'MarkdownRemark') {
    const postPath = createFilePath({ node, getNode })
    const slug = themeOptions.postsPrefix
      ? path.join(themeOptions.postsPrefix, postPath)
      : postPath
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              lang
              category
            }
          }
        }
      }
    }
  `)

  const langs = []
  const categories = []

  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
        frontmatter: { lang, category }
      }
    }) => {
      createPage({
        path: `${slug}`,
        component: require.resolve('./src/templates/BlogPostTemplate.tsx'),
        context: { slug }
      })
      if (!langs.includes(lang)) {
        langs.push(lang)
      }
      if (!categories.includes(category)) {
        categories.push(category)
      }
    }
  )

  langs.forEach(lang => {
    createPage({
      path: `/langs/${lang}`,
      component: require.resolve('./src/templates/LangTemplate.tsx'),
      context: { lang }
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/categories/${category}`,
      component: require.resolve('./src/templates/CategoryTemplate.tsx'),
      context: { category }
    })
  })
}
