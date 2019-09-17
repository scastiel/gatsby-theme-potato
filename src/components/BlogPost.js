import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import { Helmet } from 'react-helmet'
import NewsletterSignUp from './NewsletterSignup'

const Content = styled.div`
  line-height: 1.6em;

  pre[class*='language-'] {
    max-width: 100%;
    overflow-x: auto;
    line-height: 90%;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5em;

    code {
      font-size: 70%;
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

  h2 {
    margin-top: 2em;
  }

  blockquote {
    font-style: italic;
    line-height: 1.7em;
    font-size: 1.2em;
    color: var(--lightTextColor);
  }

  figcaption {
    text-align: center;
    font-size: 0.8em;
  }

  figure {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  figure.small-right {
    @media (min-width: 75rem) {
      margin-left: 0 !important;
      margin-right: -10em !important;
      float: right;

      .gatsby-resp-image-wrapper {
        width: 20em;
        margin-left: 3em !important;
        margin-right: 3em !important;
      }
    }
  }

  p code,
  li code,
  h2 code,
  h3 code {
    background-color: transparent !important;
    color: var(--textColor) !important;
    font-size: 0.95em !important;
    padding: 0 !important;
  }

  @media (max-width: 45rem) {
    .gatsby-highlight {
      margin-left: -0.5em;
      margin-right: -0.5em;
    }
  }

  hr {
    border-style: none;
    text-align: center;

    &:before {
      content: '* * *';
      color: var(--separatorColor);
    }
  }

  .inset-right {
    font-family: var(--sansSerifFont);
    font-size: 0.9em;
    line-height: 1.3em;
    padding: 1.3em;
    background-color: var(--lightAccentColor);
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;

    @media (min-width: 45rem) {
      margin-left: 2em !important;
      float: right;
    }

    @media (min-width: 50rem) {
      margin-right: -2rem;
    }
    @media (min-width: 55rem) {
      margin-right: -5rem;
    }
    @media (min-width: 60rem) {
      margin-right: -8rem;
    }

    p {
      margin: 0;
    }

    ul {
      margin: 0;
      padding-left: 1.5em;
    }

    h2 {
      margin-top: 0;
      text-align: left;
      font-size: 1.2em;
    }
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
          property="twitter:image"
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
