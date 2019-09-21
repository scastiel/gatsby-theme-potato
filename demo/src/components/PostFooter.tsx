import React, { FC } from 'react'
import styled from 'styled-components'
import { NewsletterSignUp } from './NewsletterSignUp'

const NewsletterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

export interface Props {
  url: string
}

export const PostFooter: FC<Props> = ({ url }) => {
  return (
    <>
      <p>
        Like this article or want to react?{' '}
        <a href={`https://twitter.com/search?q=${url}`}>Discuss on Twitter</a>.
      </p>
      <p>
        This is the post footer, it will be displayed at the bottom of each
        post.
      </p>
      <NewsletterBox>
        <NewsletterSignUp />
      </NewsletterBox>
    </>
  )
}
