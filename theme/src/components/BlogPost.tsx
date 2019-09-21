import { withPrefix } from 'gatsby'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import React, { FC } from 'react'
import styled from 'styled-components'
import settings from '../settings'
import TwitterCard from './TwitterCard'

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
    font-family: ${({ theme }) => theme.sansSerifFont};
  }

  h2 {
    margin-top: 2em;
  }

  blockquote {
    font-style: italic;
    line-height: 1.7em;
    font-size: 1.2em;
    color: ${({ theme }) => theme.lightTextColor};
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
    color: ${({ theme }) => theme.textColor} !important;
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
      color: ${({ theme }) => theme.separatorColor};
    }
  }

  .inset-right {
    font-family: ${({ theme }) => theme.sansSerifFont};
    font-size: 0.9em;
    line-height: 1.3em;
    padding: 1.3em;
    background-color: ${({ theme }) => theme.lightAccentColor};
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
  border-bottom: 1px dotted ${({ theme }) => theme.separatorColor};
  margin-top: 5em;
`

const ArticleFooter = styled.div`
  font-family: ${({ theme }) => theme.sansSerifFont};
`

export interface Props {
  post: any
  siteUrl: string
}

const BlogPost: FC<Props> = ({ post, siteUrl }) => {
  const {
    frontmatter: { title, cover },
    fields: { slug },
    html,
    excerpt
  } = post
  const url = `${siteUrl}/posts${slug}`
  return (
    <>
      {settings.twitterCardInfo && (
        <TwitterCard
          user={settings.twitterCardInfo.user}
          url={url}
          title={title}
          description={excerpt}
          type={cover ? 'summary_large_image' : 'summary'}
          image={
            cover
              ? `${siteUrl}${cover.publicURL}`
              : `${siteUrl}${withPrefix(settings.twitterCardInfo.defaultImage)}`
          }
        />
      )}
      <article>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        {settings.PostFooter && (
          <>
            <Separator />
            <ArticleFooter>
              <settings.PostFooter url={url} post={post} />
            </ArticleFooter>
          </>
        )}
      </article>
    </>
  )
}

export default BlogPost
