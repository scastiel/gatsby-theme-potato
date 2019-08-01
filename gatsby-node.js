const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
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
        path: slug,
        component: path.resolve('./src/templates/BlogPostTemplate.js'),
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
      component: path.resolve('./src/templates/LangTemplate.js'),
      context: { lang }
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/categories/${category}`,
      component: path.resolve('./src/templates/CategoryTemplate.js'),
      context: { category }
    })
  })
}
