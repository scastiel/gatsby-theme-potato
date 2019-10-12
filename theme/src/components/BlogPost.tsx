import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'
import { PostQuery_markdownRemark } from '../types/PostQuery'
import PostFooter from './PostFooter'
import Separator from './Separator'

const Content = styled.div`
  line-height: 1.6em;

  pre[class*='language-'] {
    max-width: 100%;
    overflow-x: auto;
    line-height: 90%;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5em;

    code {
      font-size: 70%;
    }
  }

  code {
    font-size: 85%;
  }

  h2,
  h3,
  h4,
  h5 {
    font-family: ${({ theme }: { theme: Theme }) => theme.sansSerifFont};
  }

  h2 {
    margin-top: 2em;
  }

  blockquote {
    font-style: italic;
    line-height: 1.7em;
    font-size: 1.2em;
    color: ${({ theme }: { theme: Theme }) => theme.lightTextColor};

    @media (prefers-color-scheme: dark) {
      color: ${({ theme }: { theme: Theme }) => theme.darkLightTextColor};
    }
  }

  figcaption {
    text-align: center;
    font-size: 0.8em;
  }

  figure {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  figure.small-right {
    @media (min-width: 75rem) {
      margin-left: 0 !important;
      margin-right: -10em !important;
      float: right;

      .gatsby-resp-image-wrapper {
        width: 20em;
        margin-left: 3em !important;
        margin-right: 3em !important;
      }
    }
  }

  p code,
  li code,
  h2 code,
  h3 code {
    background-color: transparent !important;
    color: ${({ theme }: { theme: Theme }) => theme.textColor} !important;
    font-size: 0.95em !important;
    padding: 0 !important;
  }

  @media (max-width: 45rem) {
    .gatsby-highlight {
      margin-left: -0.5em;
      margin-right: -0.5em;
    }
  }

  hr {
    border-style: none;
    text-align: center;

    &:before {
      content: '* * *';
      color: ${({ theme }: { theme: Theme }) => theme.separatorColor};

      @media (prefers-color-scheme: dark) {
        color: ${({ theme }: { theme: Theme }) => theme.darkSeparatorColor};
      }
    }
  }

  .inset-right,
  .inset-right-image {
    width: 100%;
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 1.3em;

    &.inset-right-image {
      figure {
        margin: 0;
      }
    }

    &.inset-right {
      font-family: ${({ theme }: { theme: Theme }) => theme.sansSerifFont};
      font-size: 0.9em;
      line-height: 1.3em;
      background-color: ${({ theme }: { theme: Theme }) =>
        theme.lightAccentColor};

      p {
        margin: 0;
      }

      ul {
        margin: 0;
        padding-left: 1.5em;
      }

      h2 {
        margin-top: 0;
        text-align: left;
        font-size: 1.2em;
      }
    }

    @media (min-width: 45rem) {
      margin-left: 2em !important;
      float: right;
    }

    @media (min-width: 50rem) {
      margin-right: -2rem;
    }
    @media (min-width: 55rem) {
      margin-right: -5rem;
    }
    @media (min-width: 60rem) {
      margin-right: -8rem;
    }
  }
`

const PostFooterContainer = styled.div`
  font-family: ${({ theme }: { theme: Theme }) => theme.sansSerifFont};
`

export interface Props {
  post: PostQuery_markdownRemark
  siteUrl: string
}

const BlogPost: FC<Props> = ({ post, siteUrl }) => (
  <>
    <article>
      <Content dangerouslySetInnerHTML={{ __html: post.html! }} />
      <Separator />
      <PostFooterContainer>
        <PostFooter siteUrl={siteUrl} post={post} />
      </PostFooterContainer>
    </article>
  </>
)

export default BlogPost
