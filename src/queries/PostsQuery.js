import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const PostsQuery = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              excerpt
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
      const posts = edges.map(edge => edge.node)
      return children(posts)
    }}
  />
)

export default PostsQuery
