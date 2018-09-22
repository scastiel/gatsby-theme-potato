import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import 'typeface-pt-sans'
import 'typeface-pt-serif'
import Bio from './Bio'

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
  font-family: 'PT Serif', serif;
  font-size: calc(20px + (24 - 20) * (100vw - 800px) / (800-400));
  color: #555;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  @media (min-width: 38em) {
    font-size: 20px;
  }
`

const BlogHeader = styled.header`
  margin-top: ${props => (props.isHome ? '3em' : '0.5em')};
  padding-bottom: 1em;
  border-bottom: ${props => (props.isHome ? '0' : '1px dotted #d3d3d3')};

  h1 {
    font-size: ${props => (props.isHome ? '2em' : '1.5em')};
    margin: 0;

    a {
      text-decoration: none;
    }
  }

  .description {
    color: #888888;
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  a {
    color: inherit;
  }
`

const Layout = ({ children, isHome, title, displayTitle, slug }) => (
  <StyledLayout>
    <SiteMetadataQuery>
      {({ title: blogTitle, description, url }) => (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {title ? `${title} | ` : ''}
              {blogTitle}
            </title>
            <meta name="description" value={description} />
            <meta name="canonical" value={url + (slug || '')} />
          </Helmet>
          <BlogHeader isHome={isHome}>
            <h1>
              <Link to="/">{blogTitle}</Link>
            </h1>
            {isHome && <Bio />}
          </BlogHeader>
        </>
      )}
    </SiteMetadataQuery>
    {displayTitle && <h1>{title}</h1>}
    {children}
  </StyledLayout>
)

export default Layout
