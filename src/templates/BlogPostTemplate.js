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
      category={post.frontmatter.category}
      date={post.frontmatter.date}
      displayTitle={true}
      cover={post.frontmatter.cover}
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
        category
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPostTemplate
