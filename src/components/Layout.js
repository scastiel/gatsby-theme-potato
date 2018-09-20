import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'

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

const BlogHeader = styled.header`
  margin-top: ${props => (props.isHome ? '3rem' : '1rem')};
  padding-bottom: 1em;
  border-bottom: ${props => (props.isHome ? '0' : '1px dotted #d3d3d3')};

  h1 {
    font-size: ${props => (props.isHome ? '60px' : '40px')};
    margin: 0;
  }

  .description {
    color: #888888;
    font-size: 21px;
    font-style: italic;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Layout = ({ children, isHome }) => (
  <StyledLayout>
    <SiteMetadataQuery>
      {({ title, description }) => (
        <BlogHeader isHome={isHome}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          {isHome && (
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </BlogHeader>
      )}
    </SiteMetadataQuery>
    {children}
  </StyledLayout>
)

export default Layout
