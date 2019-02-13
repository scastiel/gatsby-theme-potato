import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import ReactDisqusComments from 'react-disqus-comments'
import LangLink from './LangLink'
import { renderDate } from '../utils'
import { Helmet } from 'react-helmet'

const Title = styled.h2`
  font-family: var(--sansSerifFont);
  color: var(--titleTextColor);
  font-size: 2.2em;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Infos = styled.div`
  font-family: var(--sansSerifFont);
  font-size: 0.9em;
  color: var(--lightTextColor);
  margin-top: 1rem;

  a {
    color: inherit;
    text-decoration: none;

    :hover,
    :active {
      text-decoration: underline;
    }
  }
`

const Content = styled.div`
  line-height: 1.7;

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

  a {
    color: var(--linkTextColor);
  }

  blockquote {
    font-style: italic;
  }

  figcaption {
    text-align: center;
    font-size: 0.8em;
  }
`

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted var(--separatorColor);
  margin-top: 5em;
`

const BlogPost = ({ post, comments, isExcerpt }) => {
  const {
    frontmatter: { title, date, lang },
    fields: { slug },
    html,
    excerpt
  } = post
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@scastiel" />
        <meta name="twitter:creator" content="@scastiel" />
        <meta property="og:url" content={`https://blog.castiel.me${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`https://blog.castiel.me${withPrefix(
            '/twitter-card-small.png'
          )}?${Math.random()}`}
        />
      </Helmet>
      <article>
        <header>
          <Title>
            <Link to={slug}>{title}</Link>
          </Title>
          <Infos>
            {renderDate(date)} – <LangLink lang={lang} />
          </Infos>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <Separator />
        <ReactDisqusComments
          shortname="sebastien-castiel"
          identifier={slug}
          url={`https://blog.castiel.me${slug}`}
        />
      </article>
    </>
  )
}

export default BlogPost
