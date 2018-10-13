import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import 'typeface-pt-sans'
import 'typeface-pt-serif'
import Bio from './Bio'
import '../colors.css'
import Footer from './Footer'
import withTheme from './ThemeUser'
import Sidebar from './Sidebar'

const Container = styled.div`
  background-color: var(--backgroundColor);
`

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
  font-family: var(--serifFont);
  font-size: calc(20px + (24 - 20) * (100vw - 800px) / (800-400));
  color: var(--textColor);

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
  border-bottom: ${props =>
    props.isHome ? '0' : '1px dotted var(--separatorColor)'};

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

const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 55em) {
    flex-direction: column;
  }
`

const Content = styled.div`
  max-width: calc(100% - 15em + 2em - 3em);

  @media (max-width: 55em) {
    max-width: 100%;
  }
`

const Layout = ({
  children,
  isHome,
  title,
  displayTitle,
  slug,
  description,
  lang,
  theme,
  setTheme
}) => (
  <Container>
    <StyledLayout>
      <SiteMetadataQuery>
        {({
          title: blogTitle,
          description: siteDescription,
          lang: siteLang,
          siteUrl
        }) => (
          <>
            <Helmet>
              <html lang={lang || siteLang} className={theme} />
              <meta charSet="utf-8" />
              <title>
                {title ? `${title} | ` : ''}
                {blogTitle}
              </title>
              <meta
                name="description"
                content={description || siteDescription}
              />
              <meta name="canonical" content={siteUrl + (slug || '')} />
              <style>
                {'body { background-color: var(--backgroundColor); }'}
              </style>
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
      <Body>
        <Content>{children}</Content>
        <Sidebar />
      </Body>
      <Footer theme={theme} setTheme={setTheme} />
    </StyledLayout>
  </Container>
)

export default withTheme(Layout)
