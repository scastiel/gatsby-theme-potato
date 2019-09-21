import React, { FC } from 'react'
import styled from 'styled-components'
import { NewsletterSignUp } from './NewsletterSignUp'

const ArticleFooter = styled.p`
  font-family: ${({ theme })=> theme.sansSerifFont};
`

const NewsletterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

export interface Props {
  post: any
}

export const PostFooter: FC<Props> = ({ post }) => {
  const {
    frontmatter: { title },
    fields: { slug }
  } = post
  const url = `https://blog.castiel.me${slug}`
  return (
    <>
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
    </>
  )
}
