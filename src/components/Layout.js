import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import '../style.css'

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
    font-size: 21px;
    font-style: italic;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  a {
    color: inherit;
  }
`

const Layout = ({ children, isHome, title }) => (
  <StyledLayout>
    <SiteMetadataQuery>
      {({ title: blogTitle, description }) => (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {title ? `${title} | ` : ''}
              {blogTitle}
            </title>
            <meta name="description" value={description} />
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <BlogHeader isHome={isHome}>
            <h1>
              <Link to="/">{blogTitle}</Link>
            </h1>
            {isHome && (
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </BlogHeader>
        </>
      )}
    </SiteMetadataQuery>
    {children}
  </StyledLayout>
)

export default Layout
