import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Title = styled.h5`
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: none;

    :hover,
    :active {
      text-decoration: underline;
    }
  }
`

const Content = styled.p`
  border-left: 0.5em solid var(--commentBorderColor);
  padding: 0.5em;
  margin-top: 0.5em;
  white-space: pre-wrap;
`

const Comment = ({ comment }) => {
  const author = comment.url ? (
    <Link href={comment.url}>{comment.name}</Link>
  ) : (
    comment.name
  )
  const hash = `comment-${comment._id}`
  return (
    <div data-id={comment._id}>
      <Title>
        <a name={hash} />
        {author} –{' '}
        <Link to={`${comment.slug}#${hash}`}>
          {new Date(comment.date).toLocaleDateString()}
        </Link>
      </Title>
      <Content>{comment.message}</Content>
    </div>
  )
}

export default Comment
