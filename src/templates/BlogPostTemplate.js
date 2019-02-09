import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const BlogPostTemplate = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout
      title={post.frontmatter.title}
      slug={post.fields.slug}
      description={post.excerpt}
      lang={post.frontmatter.lang}
    >
      <BlogPost post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
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
