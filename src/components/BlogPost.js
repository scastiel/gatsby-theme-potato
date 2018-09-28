import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import LangLink from './LangLink'
import CommentForm from './CommentForm'
import Comment from './Comment'
import CommentsCount from './CommentsCount'

const renderDate = date => new Date(date).toDateString()

const Title = styled.h2`
  font-family: 'PT Sans', sans-serif;
  color: var(--titleTextColor);
  font-size: 2.2em;
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
  color: var(--lightTextColor);
  margin-top: 1rem;

  a {
    color: inherit;
    text-decoration: none;

    :hover,
    :active {
      text-decoration: underline;
    }
  }
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
    color: var(--linkTextColor);
  }
`

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted var(--separatorColor);
`

const BlogPost = ({ post, comments, isExcerpt }) => {
  const {
    frontmatter: { title, date, lang },
    fields: { slug },
    html
  } = post
  return (
    <article>
      <header>
        <Title>
          <Link to={slug}>{title}</Link>
        </Title>
        <Infos>
          {renderDate(date)} – <LangLink lang={lang} /> –{' '}
          <Link to={`${slug}#comments`}>
            <CommentsCount count={comments.length} />
          </Link>
        </Infos>
      </header>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <Separator />
      <h3>
        <a name="comments" />
        Comments
      </h3>
      {comments.length === 0 && <p>No comment yet.</p>}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <Separator />
      <h3>Leave a comment</h3>
      <CommentForm slug={slug} />
    </article>
  )
}

export default BlogPost
