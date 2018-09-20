import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

const renderDate = date => new Date(date).toDateString()

const renderPost = post => {
  const {
    id,
    frontmatter: { title, date },
    excerpt,
    fields: { slug }
  } = post
  return (
    <section key={id}>
      <h3>
        <Link to={slug}>
          {title} <small>({renderDate(date)})</small>
        </Link>
      </h3>
      <div>{excerpt}</div>
    </section>
  )
}

const Index = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges.map(edge => edge.node)
  return <Layout>{posts.map(renderPost)}</Layout>
}

export const query = graphql`
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
`

export default Index
