import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import { Helmet } from 'react-helmet'
import NewsletterSignUp from './NewsletterSignup'

const Content = styled.div`
  line-height: 1.6rem;

  pre {
    max-width: 100%;
    overflow-x: auto;
    line-height: 100%;

    code {
      font-size: 75%;
    }
  }

  code {
    font-size: 85%;
  }

  h2,
  h3,
  h4,
  h5 {
    font-family: var(--sansSerifFont);
  }

  blockquote {
    font-style: italic;
  }

  figcaption {
    text-align: center;
    font-size: 0.8em;
  }

  figure {
    margin-top: 2em;
    margin-bottom: 2em;
  }
`

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted var(--separatorColor);
  margin-top: 5em;
`

const NewsletterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

const ArticleFooter = styled.p`
  font-family: var(--sansSerifFont);
`

const BlogPost = ({ post, comments, isExcerpt }) => {
  const {
    frontmatter: { title, cover },
    fields: { slug },
    html,
    excerpt
  } = post
  const url = `https://blog.castiel.me${slug}`
  return (
    <>
      <Helmet>
        <meta
          name="twitter:card"
          content={cover ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:site" content="@scastiel" />
        <meta name="twitter:creator" content="@scastiel" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={
            cover
              ? `https://blog.castiel.me${cover.publicURL}`
              : `https://blog.castiel.me${withPrefix(
                  '/twitter-card-small.png'
                )}`
          }
        />
      </Helmet>
      <article>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <Separator />
        <ArticleFooter>
          Like this article or want to react?{' '}
          <a href={`https://twitter.com/search?q=${url}`}>Discuss on Twitter</a>{' '}
          or{' '}
          <a
            href={`mailto:Sébastien Castiel <sebastien@castiel.me>?subject=About your post “${title}”`}
          >
            send me an email
          </a>
          .
        </ArticleFooter>
        <NewsletterBox>
          <NewsletterSignUp />
        </NewsletterBox>
      </article>
    </>
  )
}

export default BlogPost
