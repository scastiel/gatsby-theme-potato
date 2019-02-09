import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import LangLink from './LangLink'
import { renderDate } from '../utils'

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
`

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted var(--separatorColor);
  margin-top: 5em;
`

const CommentsNote = styled.p`
  font-style: italic;

  a {
    color: var(--linkTextColor);
  }
`

const BlogPost = ({ post, comments, isExcerpt }) => {
  const {
    frontmatter: { title, date, lang },
    fields: { slug },
    html
  } = post
  return (
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
      <CommentsNote>
        Comments are currently disabled due to a lot of spam.
        <br />
        You can{' '}
        <a
          href={`https://twitter.com/search?f=tweets&q=blog.castiel.me${slug}`}
        >
          discuss about this post on Twitter
        </a>
        .
      </CommentsNote>
    </article>
  )
}

export default BlogPost
