import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PostList from '../components/PostList'

const PostListQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
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
      return <PostList posts={posts} />
    }}
  />
)

export default PostListQuery
