import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPostExcerpt from '../components/BlogPostExcerpt'

const Index = ({ data: { allMarkdownRemark } }) => {
  const edges = allMarkdownRemark ? allMarkdownRemark.edges : []
  const posts = edges.map(edge => edge.node)
  return (
    <Layout isHome>
      {posts.map(post => (
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            lang
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Index
