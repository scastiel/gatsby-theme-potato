import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const BlogPostTemplate = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout title={post.frontmatter.title}>
      <BlogPost post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        lang
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPostTemplate
