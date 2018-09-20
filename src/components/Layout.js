import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
  font-family: Georgia, serif;
  font-size: 16px;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

const BlogTitle = styled.h1`
  margin-top: ${props => (props.isHome ? '3rem' : '1rem')};
  margin-bottom: 1em;
  font-size: ${props => (props.isHome ? '60px' : '40px')};
  border-bottom: ${props => (props.isHome ? '0' : '1px dotted #d3d3d3')};

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Layout = ({ children, isHome }) => (
  <StyledLayout>
    <BlogTitle isHome={isHome}>
      <Link to="/">My blog</Link>
    </BlogTitle>
    {children}
  </StyledLayout>
)

export default Layout
