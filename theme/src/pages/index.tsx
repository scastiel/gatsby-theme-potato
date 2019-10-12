import { graphql } from 'gatsby'
import React, { FC } from 'react'
import BlogPostExcerpt from '../components/BlogPostExcerpt'
import { Layout } from '../components/Layout'
import { AllPostsQuery_allMarkdownRemark } from '../types/AllPostsQuery'

export interface Props {
  uri: string
  data: { allMarkdownRemark: AllPostsQuery_allMarkdownRemark }
}

const Index: FC<Props> = ({ uri, data: { allMarkdownRemark } }) => {
  const edges = allMarkdownRemark ? allMarkdownRemark.edges : []
  const posts = edges.map(edge => edge.node)
  return (
    <Layout url={uri} displaySidebar>
      {posts.map(post => (
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query AllPostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default Index
