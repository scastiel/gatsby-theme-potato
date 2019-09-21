import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import { AllPostsQuery_allMarkdownRemark_edges_node } from '../types/AllPostsQuery'
import { renderDate } from '../utils'
import CategoryLink from './CategoryLink'
import LangLink from './LangLink'

const Excerpt = styled.article`
  margin-bottom: 3rem;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.sansSerifFont};
  color: ${({ theme }) => theme.titleTextColor};
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accentColor};
  }
`

const Infos = styled.div`
  font-family: ${({ theme }) => theme.sansSerifFont};
  font-size: 0.8em;
  color: ${({ theme }) => theme.lightTextColor};
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
  color: ${({ theme }) => theme.linkTextColor};
`

const ReadingTime = styled.span`
  white-space: nowrap;
`

interface Props {
  post: AllPostsQuery_allMarkdownRemark_edges_node
}

const BlogPostExcerpt: FC<Props> = ({ post }) => {
  const url = `/posts${post.fields!.slug!}`
  return (
    <Excerpt>
      <header>
        <Title>
          <Link to={url}>{post.frontmatter!.title}</Link>
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
          {post.excerpt} <ReadMoreLink to={url}>Continue reading…</ReadMoreLink>
        </p>
      </Content>
    </Excerpt>
  )
}

export default BlogPostExcerpt
