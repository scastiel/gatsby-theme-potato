import { graphql } from 'gatsby'
import React, { FC } from 'react'
import BlogPostExcerpt from '../components/BlogPostExcerpt'
import { Layout } from '../components/Layout'
import { LangPostsQuery } from '../types/LangPostsQuery'

const getTitle = (lang: string) => {
  if (lang === 'en') {
    return 'Articles in English'
  }
  return 'Articles en français'
}

export interface Props {
  pageContext: { lang: string }
  data: LangPostsQuery
}

const LangTemplate: FC<Props> = ({
  pageContext: { lang },
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges.map(edge => edge.node)
  return (
    <Layout title={getTitle(lang)} displayPageTitle>
      {posts.map(post => (
        <BlogPostExcerpt key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default LangTemplate

export const query = graphql`
  query LangPostsQuery($lang: String!) {
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
