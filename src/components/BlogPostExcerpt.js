import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import LangLink from './LangLink'
import { renderDate } from '../utils'

const Title = styled.h2`
  font-family: var(--sansSerifFont);
  color: var(--titleTextColor);
  font-size: 1.5rem;
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
  font-size: 0.8em;
  color: var(--lightTextColor);
  margin-top: 0.5rem;

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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`

const ReadMoreLink = styled(Link)`
  font-style: italic;
  color: var(--linkTextColor);
`

const BlogPostExcerpt = ({ post }) => {
  const {
    frontmatter: { title, date, lang },
    fields: { slug },
    excerpt
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
      <Content>
        <p>
          {excerpt} <ReadMoreLink to={slug}>Continue reading…</ReadMoreLink>
        </p>
      </Content>
    </article>
  )
}

export default BlogPostExcerpt
