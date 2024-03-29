import { graphql } from 'gatsby'
import React, { FC } from 'react'
import BlogPost from '../components/BlogPost'
import BlogPostHeader from '../components/BlogPostHeader'
import { Layout } from '../components/Layout'
import { PostQuery } from '../types/PostQuery'

export interface Props {
  data: PostQuery
}

const BlogPostTemplate: FC<Props> = ({
  data: { site, markdownRemark: post }
}) => {
  return (
    <Layout
      title={post!.frontmatter!.title!}
      url={post!.fields!.slug!}
      description={post!.excerpt!}
      lang={post!.frontmatter!.lang!}
      header={<BlogPostHeader post={post!} />}
    >
      <BlogPost post={post!} siteUrl={site!.siteMetadata!.siteUrl!} />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
          # childImageSharp {
          #   sizes(maxWidth: 2000) {
          #     ...GatsbyImageSharpSizes
          #   }
          # }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`

export default BlogPostTemplate
