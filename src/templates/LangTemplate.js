import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const getTitle = lang => {
  if (lang === 'en') {
    return 'Articles in English'
  }
  return 'Articles en français'
}

const LangTemplate = ({
  pageContext: { lang },
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges.map(edge => edge.node)
  return (
    <Layout title={getTitle(lang)} displayTitle>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} isExcerpt />
      ))}
    </Layout>
  )
}

export default LangTemplate

export const query = graphql`
  query($lang: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { lang: { eq: $lang } } }
    ) {
      totalCount
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
  }
`
