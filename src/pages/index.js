import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPostExcerpt from '../components/BlogPostExcerpt'

const Index = ({ data: { allMarkdownRemark, allCommentsYaml } }) => {
  const edges = allMarkdownRemark ? allMarkdownRemark.edges : []
  const posts = edges.map(edge => edge.node)
  const commentCounts = (allCommentsYaml ? allCommentsYaml.edges : [])
    .map(edge => edge.node)
    .reduce(
      (counts, { slug }) => ({
        ...counts,
        [slug]: (counts[slug] || 0) + 1
      }),
      {}
    )
  return (
    <Layout isHome>
      {posts.map(post => (
        <BlogPostExcerpt
          key={post.id}
          post={post}
          commentsCount={commentCounts[post.fields.slug] || 0}
        />
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
    allCommentsYaml {
      edges {
        node {
          slug
        }
      }
    }
  }
`

export default Index
