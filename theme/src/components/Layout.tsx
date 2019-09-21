import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import SiteMetadataQuery from '../queries/SiteMetadataQuery'
import settings from '../settings'
import { renderDate } from '../utils'
import CategoryLink from './CategoryLink'
import Footer from './Footer'
import LangLink from './LangLink'
import Sidebar from './sidebar/Sidebar'

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`

const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: ${({ theme }) => theme.serifFont};
  letter-spacing: -0.2px;
  font-size: calc(18px + (24 - 20) * (100vw - 800px) / (800-400));
  color: ${({ theme }) => theme.textColor};

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: ${({ theme }) => theme.linkTextColor};
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

  border-bottom: 0.4rem solid ${({ theme }) => theme.accentColor};

  h1 {
    font-family: ${({ theme }) => theme.sansSerifFont};
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
    color: ${({ theme }) => theme.accentColor};
  }

  a {
    color: inherit;
  }

  @media (max-width: 45rem) {
    flex-direction: column;
  }
`

const ArticleHeader = styled(({ backgroundImage, ...props }) => (
  <header {...props} />
))`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
`

const ArticleTitle = styled.header`
  background-color: ${({ theme }) => theme.pageHeaderColor};
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
  font-family: ${({ theme }) => theme.sansSerifFont};
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

const Menu = styled(({ isHome, ...props }) => <nav {...props} />)`
  font-family: ${({ theme }) => theme.sansSerifFont};
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
      color: ${({ theme }) => theme.accentColor};
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
  font-family: ${({ theme }) => theme.sansSerifFont};
  color: ${({ theme }) => theme.titleTextColor};
  font-size: 2.2em;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accentColor};
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

export interface Props {
  isHome?: boolean
  title?: string
  displayTitle?: boolean
  displayPageTitle?: boolean
  slug?: string
  url?: string
  description?: string
  lang?: string
  category?: string
  date?: Date
  coverUrl?: string
  readingTime?: string
}

export const Layout: FC<Props> = ({
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
  coverUrl,
  readingTime
}) => (
  <ThemeProvider theme={settings.theme}>
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
                <html lang={lang || siteLang!} />
                <meta charSet="utf-8" />
                <title>
                  {title ? `${title} | ` : ''}
                  {blogTitle}
                </title>
                <meta
                  name="description"
                  content={description || siteDescription!}
                />
                <meta
                  name="canonical"
                  content={siteUrl + (url || slug || '')}
                />
                <style>{'body { padding: 0; margin: 0 }'}</style>
              </Helmet>
              <BlogHeader>
                <BlogTitle>
                  <h1>
                    <Link to="/">{blogTitle}</Link>
                  </h1>
                </BlogTitle>
                {settings.menuLinks && (
                  <Menu isHome={isHome}>
                    {settings.menuLinks.map(({ url: linkUrl, label }) => (
                      <Link to={linkUrl} key={linkUrl}>
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
          <ArticleHeader backgroundImage={coverUrl}>
            <ArticleTitle>
              <h1>{title}</h1>
              <PageInfos>
                {renderDate(date!)} – <CategoryLink category={category!} /> –{' '}
                <LangLink lang={lang!} /> –{' '}
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
  </ThemeProvider>
)
