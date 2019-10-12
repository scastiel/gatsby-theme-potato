import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'
import { PostQuery_markdownRemark } from '../types/PostQuery'
import { renderDate } from '../utils'
import CategoryLink from './CategoryLink'
import LangLink from './LangLink'

const HeaderBanner = styled(({ backgroundImage, ...props }) => (
  <div {...props} />
))`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
`

const ArticleTitle = styled.header`
  background-color: ${({ theme }: { theme: Theme }) => theme.pageHeaderColor};
  min-height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }: { theme: Theme }) =>
      theme.darkPageHeaderColor};
  }

  & > * {
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    color: white;
    text-shadow: 0 0 5px black;
    font-size: 1.8em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    font-weight: 700;
  }

  @media (max-width: 45rem) {
    min-height: 0;
  }
`

const PageInfos = styled.div`
  font-family: ${({ theme }) => theme.sansSerifFont};
  font-size: 0.9em;
  color: white;
  text-shadow: 0 0 5px black;
  padding-bottom: 2em;

  a {
    color: inherit;
    text-decoration: none;

    :hover,
    :active {
      text-decoration: underline;
    }
  }
`

const ReadingTime = styled.span`
  white-space: nowrap;
`

export interface Props {
  post: PostQuery_markdownRemark
}

const BlogPostHeader: FC<Props> = ({ post }) => (
  <HeaderBanner
    backgroundImage={
      post.frontmatter!.cover! && post.frontmatter!.cover!.publicURL!
    }
  >
    <ArticleTitle>
      <h1>{post.frontmatter!.title!}</h1>
      <PageInfos>
        {renderDate(post.frontmatter!.date!)} –{' '}
        <CategoryLink category={post.frontmatter!.category!} /> –{' '}
        <LangLink lang={post.frontmatter!.lang!} /> –{' '}
        <ReadingTime>{post.fields!.readingTime!.text!}</ReadingTime>
      </PageInfos>
    </ArticleTitle>
  </HeaderBanner>
)

export default BlogPostHeader
