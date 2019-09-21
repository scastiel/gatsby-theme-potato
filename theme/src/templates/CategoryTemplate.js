import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPostExcerpt from '../components/BlogPostExcerpt'

const getTitle = category =>
  `Articles posted in ${category.slice(0, 1).toUpperCase() + category.slice(1)}`

const CategoryTemplate = ({
  pageContext: { category },
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges.map(edge => edge.node)
  return (
    <Layout title={getTitle(category)} displayPageTitle>
      {posts.map(post => (
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            lang
            category
          }
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
