import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import 'raleway-webfont'
import 'typeface-libre-baskerville'
import '../colors.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { renderDate } from '../utils'
import LangLink from './LangLink'
import CategoryLink from './CategoryLink'
import { menuLinks } from '../settings'

const Container = styled.div`
  background-color: var(--backgroundColor);
`

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: var(--serifFont);
  letter-spacing: -0.2px;
  font-size: calc(18px + (24 - 20) * (100vw - 800px) / (800-400));
  color: var(--textColor);

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: var(--linkTextColor);
  }

  @media (min-width: 45rem) {
    font-size: 18px;
  }
`

const BlogHeader = styled.header`
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;

  border-bottom: 0.4rem solid var(--accentColor);

  h1 {
    font-family: var(--sansSerifFont);
    font-weight: 300;
    font-size: 1.5em;
    margin: 0;
    text-transform: uppercase;

    a {
      text-decoration: none;
    }
  }

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

const ArticleHeader = styled.header`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
`

const ArticleTitle = styled.header`
  background-color: var(--pageHeaderColor);
  min-height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    color: white;
    text-shadow: 0 0 5px black;
    font-size: 1.8em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    font-weight: 700;
  }

  @media (max-width: 45rem) {
    min-height: 0;
  }
`

const PageInfos = styled.div`
  font-family: var(--sansSerifFont);
  font-size: 0.9em;
  color: white;
  text-shadow: 0 0 5px black;
  padding-bottom: 2em;

  a {
    color: inherit;
    text-decoration: none;

    :hover,
    :active {
      text-decoration: underline;
    }
  }
`

const Menu = styled.nav`
  font-family: var(--sansSerifFont);
  flex-grow: 0;
  display: flex;
  align-items: center;
  margin-right: ${({ isHome }) => (isHome ? '0.5em' : '3em')};
  margin-left: 0.5rem;

  a {
    text-decoration: none;
    padding: 0.2em 0.5em 0.2em 0.5em;

    &[aria-current='page'],
    &.current {
      color: var(--accentColor);
    }

    @media (max-width: 45rem) {
      font-size: 0.8em;
      padding: 0em 0.5em 0.5em 0.5em;
    }
  }
`

const BlogTitle = styled.div`
  flex: 1;
  padding: 1rem;

  @media (max-width: 45rem) {
    padding-bottom: 0.4em;
  }
`

const PageTitle = styled.h2`
  font-family: var(--sansSerifFont);
  color: var(--titleTextColor);
  font-size: 2.2em;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--accentColor);
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;

  padding: 2em 0.5em 0.5em;

  @media (max-width: 45rem) {
    flex-direction: column;
    padding-top: 1em;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: calc(100% + 2em - 3em);

  @media (max-width: 45rem) {
    max-width: 100%;
  }
`

const ReadingTime = styled.span`
  white-space: nowrap;
`

const Layout = ({
  children,
  isHome,
  title,
  displayTitle,
  displayPageTitle,
  slug,
  url,
  description,
  lang,
  category,
  date,
  theme,
  setTheme,
  cover,
  readingTime
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
              <meta name="canonical" content={siteUrl + (url || slug || '')} />
              <style>
                {'body { background-color: var(--backgroundColor); }'}
              </style>
            </Helmet>
            <BlogHeader isHome={isHome}>
              <BlogTitle>
                <h1>
                  <Link to="/">{blogTitle}</Link>
                </h1>
              </BlogTitle>
              {menuLinks && (
                <Menu isHome={isHome}>
                  {menuLinks.map(({ url, label }) => (
                    <Link to={url} key={url}>
                      {label}
                    </Link>
                  ))}
                </Menu>
              )}
            </BlogHeader>
          </>
        )}
      </SiteMetadataQuery>

      {displayTitle && (
        <ArticleHeader backgroundImage={cover && cover.publicURL}>
          <ArticleTitle>
            <h1>{title}</h1>
            <PageInfos>
              {renderDate(date)} – <CategoryLink category={category} /> –{' '}
              <LangLink lang={lang} /> –{' '}
              <ReadingTime>{readingTime}</ReadingTime>
            </PageInfos>
          </ArticleTitle>
        </ArticleHeader>
      )}

      <Body>
        <Content>
          {displayPageTitle && <PageTitle>{title}</PageTitle>}
          {children}
        </Content>
        <Sidebar hidden={!isHome} />
      </Body>
      <Footer />
    </StyledLayout>
  </Container>
)

export default Layout
