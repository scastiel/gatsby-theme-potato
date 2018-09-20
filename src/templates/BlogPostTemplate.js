import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

const renderDate = date => new Date(date).toDateString()

const BlogPost = ({ data: { markdownRemark: post } }) => {
  const {
    frontmatter: { title, date },
    fields: { slug },
    html
  } = post
  return (
    <Layout isPost>
      <h2>
        <Link to={slug}>
          {title} <small>({renderDate(date)})</small>
        </Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPost
