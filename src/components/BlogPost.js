import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'

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

  pre {
    max-width: 100%;
    overflow-x: auto;
    line-height: 100%;

    code {
      font-size: 75%;
    }
  }

  code {
    font-size: 85%;
  }
`

const ReadMoreLink = styled(Link)`
  color: inherit;
  font-style: italic;
  color: #888888;
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
          <p>
            {excerpt} <ReadMoreLink to={slug}>Continue reading…</ReadMoreLink>
          </p>
        </Content>
      ) : (
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </article>
  )
}

export default BlogPost
