import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'
import Menu from './Menu'

const StyledBlogHeader = styled.header`
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;

  border-bottom: 0.4rem solid
    var(--accentColor);

  em {
    font-style: normal;
    color: var(--accentColor);
  }

  a {
    color: inherit;
  }

  @media (max-width: 45rem) {
    flex-direction: column;
  }
`

const BlogTitle = styled.div`
  flex: 1;
  padding: 1rem;

  font-family: var(--sansSerifFont);
  font-weight: 300;
  font-size: 1.5em;
  margin: 0;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }

  @media (max-width: 45rem) {
    padding-bottom: 0.4em;
  }
`

export interface Props {
  blogTitle: string
  displaySidebar: boolean
}

const BlogHeader: FC<Props> = ({ blogTitle, displaySidebar }) => (
  <StyledBlogHeader>
    <BlogTitle className="site-title">
      <Link to="/">{blogTitle}</Link>
    </BlogTitle>
    <Menu displaySidebar={displaySidebar} />
  </StyledBlogHeader>
)

export default BlogHeader
