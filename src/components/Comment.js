import React from 'react'
import styled from 'styled-components'

const Title = styled.h5`
  margin-bottom: 0;

  a {
    color: #000000;
  }
`

const Content = styled.p`
  border-left: 0.5em solid #eeeeee;
  padding: 0.5em;
  margin-top: 0.5em;
  white-space: pre-wrap;
`

const Comment = ({ comment }) => {
  const author = comment.url ? (
    <a href={comment.url}>{comment.name}</a>
  ) : (
    comment.name
  )
  return (
    <div>
      <Title>
        {author} – {new Date(comment.date).toLocaleDateString()}
      </Title>
      <Content>{comment.message}</Content>
    </div>
  )
}

export default Comment
