import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import LangLink from './LangLink'
import CommentForm from './CommentForm'
import Comment from './Comment'

const renderDate = date => new Date(date).toDateString()

const Title = styled.h2`
  font-family: 'PT Sans', sans-serif;
  color: #333333;
  font-size: ${({ isExcerpt }) => (isExcerpt ? '1.5rem' : '2.2em')};
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Infos = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 0.9em;
  color: #707070;
  margin-top: ${({ isExcerpt }) => (isExcerpt ? '0.5rem' : '1rem')};
`

const Content = styled.div`
  line-height: 1.7;

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

  h2,
  h3,
  h4,
  h5 {
    font-family: 'PT Sans', sans-serif;
  }

  a {
    color: #000;
  }
`

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted #d3d3d3;
`

const ReadMoreLink = styled(Link)`
  color: inherit;
  font-style: italic;
  color: #888888;
`

const BlogPost = ({ post, comments, isExcerpt }) => {
  const {
    frontmatter: { title, date, lang },
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
        <Infos isExcerpt={isExcerpt}>
          {renderDate(date)} – <LangLink lang={lang} />
        </Infos>
      </header>
      {isExcerpt ? (
        <Content>
          <p>
            {excerpt} <ReadMoreLink to={slug}>Continue reading…</ReadMoreLink>
          </p>
        </Content>
      ) : (
        <>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <Separator />
          <h3>Comments</h3>
          {comments.length === 0 && <p>No comment yet.</p>}
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
          <Separator />
          <h3>Leave a comment</h3>
          <CommentForm slug={post.fields.slug} />
        </>
      )}
    </article>
  )
}

export default BlogPost
