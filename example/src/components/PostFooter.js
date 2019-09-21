import React from "react"
import styled from "styled-components"
import NewsletterSignUp from "./NewsletterSignup"

const ArticleFooter = styled.p`
  font-family: var(--sansSerifFont);
`

const NewsletterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

const PostFooter = ({ post }) => {
  const {
    frontmatter: { title },
    fields: { slug },
  } = post
  const url = `https://blog.castiel.me${slug}`
  return (
    <>
      <ArticleFooter>
        Like this article or want to react?{" "}
        <a href={`https://twitter.com/search?q=${url}`}>Discuss on Twitter</a>{" "}
        or{" "}
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

export default PostFooter
