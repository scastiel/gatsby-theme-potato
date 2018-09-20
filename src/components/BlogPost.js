import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const renderDate = date => new Date(date).toDateString()

const Title = styled.h2`
  color: #333333;
  font-size: ${({ isExcerpt }) => (isExcerpt ? '2em' : '3rem')};
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Infos = styled.div`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
`

const Content = styled.div`
  font-size: 21px;
  color: #333333;
  line-height: 150%;
`

const BlogPost = ({ post, isExcerpt }) => {
  const {
    frontmatter: { title, date },
    fields: { slug },
    html,
    excerpt
  } = post
  return (
    <article>
      <header>
        <Title isExcerpt={isExcerpt}>
          <Link to={slug}>{title}</Link>
        </Title>
        <Infos>{renderDate(date)}</Infos>
      </header>
      {isExcerpt ? (
        <Content>
          <p>{excerpt}</p>
        </Content>
      ) : (
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </article>
  )
}

export default BlogPost
