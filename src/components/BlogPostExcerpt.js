import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import LangLink from './LangLink'
import { renderDate } from '../utils'
import CategoryLink from './CategoryLink'

const Excerpt = styled.article`
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-family: var(--sansSerifFont);
  color: var(--titleTextColor);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--accentColor);
  }
`

const Infos = styled.div`
  font-family: var(--sansSerifFont);
  font-size: 0.8em;
  color: var(--lightTextColor);
  margin-top: 0.5rem;

  a {
    color: inherit;
  }
`

const Content = styled.div`
  line-height: 1.4;
`

const ReadMoreLink = styled(Link)`
  font-style: italic;
  color: var(--linkTextColor);
`

const ReadingTime = styled.span`
  white-space: nowrap;
`

const BlogPostExcerpt = ({ post }) => {
  const {
    frontmatter: { title, date, lang, category },
    fields: {
      slug,
      readingTime: { text }
    },
    excerpt
  } = post
  return (
    <Excerpt>
      <header>
        <Title>
          <Link to={slug}>{title}</Link>
        </Title>
        <Infos>
          Posted in <CategoryLink category={category} /> on {renderDate(date)} –{' '}
          <LangLink lang={lang} /> – <ReadingTime>{text}</ReadingTime>
        </Infos>
      </header>
      <Content>
        <p>
          {excerpt} <ReadMoreLink to={slug}>Continue reading…</ReadMoreLink>
        </p>
      </Content>
    </Excerpt>
  )
}

export default BlogPostExcerpt
