import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const BlogPostTemplate = ({
  data: { markdownRemark: post, allCommentsYaml }
}) => {
  const commentsEdges = allCommentsYaml ? allCommentsYaml.edges : []
  const comments = commentsEdges.map(edge => edge.node)
  return (
    <Layout
      title={post.frontmatter.title}
      slug={post.fields.slug}
      description={post.excerpt}
      lang={post.frontmatter.lang}
    >
      <BlogPost post={post} comments={comments} />
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
    allCommentsYaml(
      sort: { fields: [date], order: ASC }
      filter: { slug: { eq: $slug } }
    ) {
      edges {
        node {
          _id
          slug
          date
          name
          url
          message
        }
      }
    }
  }
`

export default BlogPostTemplate
