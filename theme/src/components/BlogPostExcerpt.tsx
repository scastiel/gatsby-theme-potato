import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'
import { AllPostsQuery_allMarkdownRemark_edges_node } from '../types/AllPostsQuery'
import { renderDate } from '../utils'
import CategoryLink from './CategoryLink'
import LangLink from './LangLink'

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

interface Props {
  post: AllPostsQuery_allMarkdownRemark_edges_node
}

const BlogPostExcerpt: FC<Props> = ({ post }) => {
  return (
    <Excerpt>
      <header>
        <Title>
          <Link to={post.fields!.slug!}>{post.frontmatter!.title}</Link>
        </Title>
        <Infos>
          Posted in <CategoryLink category={post.frontmatter!.category!} /> on{' '}
          {renderDate(post.frontmatter!.date!)} –{' '}
          <LangLink lang={post.frontmatter!.lang!} /> –{' '}
          <ReadingTime>{post.fields!.readingTime!.text}</ReadingTime>
        </Infos>
      </header>
      <Content>
        <p>
          {post.excerpt}{' '}
          <ReadMoreLink to={post.fields!.slug!}>Continue reading…</ReadMoreLink>
        </p>
      </Content>
    </Excerpt>
  )
}

export default BlogPostExcerpt
