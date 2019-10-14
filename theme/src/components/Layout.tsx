import React, { FC, ReactNode, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from 'use-theme'
import useSiteMetadata from '../queries/useSiteMetadata'
import themes, { Theme } from '../theme'
import BlogHeader from './BlogHeader'
import Footer from './Footer'
import Sidebar from './Sidebar'

const StyledLayout = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  font-family: ${({ theme }) => theme.serifFont};
  letter-spacing: -0.2px;
  font-size: calc(18px + (24 - 20) * (100vw - 800px) / (800-400));
  color: ${({ theme }) => theme.textColor};

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.darkTextColor};
  }

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: ${({ theme }) => theme.linkTextColor};

    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.darkLinkTextColor};
    }
  }

  input {
    padding: 0.5em;
    width: 100%;
    font-size: 1em;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.separatorColor};
    color: ${({ theme }: { theme: Theme }) => theme.textColor};
    background-color: ${({ theme }: { theme: Theme }) => theme.backgroundColor};

    &:focus {
      outline: none;
      border-color: ${({ theme }: { theme: Theme }) => theme.accentColor};
    }
  }

  button {
    background-color: ${({ theme }: { theme: Theme }) => theme.accentColor};
    padding: 0.5em 1em;
    margin-top: 0.5em;
    font-size: 1em;
    border-width: 0;
  }

  @media (min-width: 45rem) {
    font-size: 18px;
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

const Content = styled.article`
  width: 100%;
  max-width: calc(100% + 2em - 3em);

  h1 {
    font-family: ${({ theme }) => theme.sansSerifFont};
    color: ${({ theme }) => theme.titleTextColor};
    font-size: 2.2em;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 0;

    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.darkTitleTextColor};
    }
  }

  @media (max-width: 45rem) {
    max-width: 100%;
  }
`

const FooterContainer = styled.footer`
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.lightTextColor};
  font-size: 0.8em;
  margin-top: 5em;
  padding: 0.5em 0;
  border-top: 1px dotted ${({ theme }) => theme.separatorColor};
  text-align: center;
  font-family: ${({ theme }) => theme.sansSerifFont};

  a {
    color: inherit;
  }
`

export interface Props {
  displaySidebar?: boolean
  title?: string
  url: string
  description?: string
  lang?: string
  header?: ReactNode
}

const Layout: FC<Props> = ({
  children,
  displaySidebar,
  title,
  url,
  description,
  lang,
  header
}) => {
  const {
    title: blogTitle,
    description: siteDescription,
    lang: siteLang,
    siteUrl
  } = useSiteMetadata()
  const [theme, setTheme] = useTheme()
  return (
    <SCThemeProvider theme={themes[theme]}>
      <StyledLayout>
        <Helmet>
          <html lang={lang || siteLang!} />
          <meta charSet="utf-8" />
          <title>
            {title ? `${title} | ` : ''}
            {blogTitle}
          </title>
          <meta name="description" content={description || siteDescription!} />
          <meta name="canonical" content={siteUrl + (url || '')} />
          <style>{`
            body {
              padding: 0;
              margin: 0;
              background-color: ${themes[theme].backgroundColor};
            }
          `}</style>
        </Helmet>
        <BlogHeader
          blogTitle={blogTitle!}
          displaySidebar={Boolean(displaySidebar)}
        ></BlogHeader>

        {header}

        <Body>
          <Content>{children}</Content>
          <Sidebar hidden={!displaySidebar} />
        </Body>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </StyledLayout>
    </SCThemeProvider>
  )
}

const ThemedLayout: FC<Props> = props => (
  <ThemeProvider>
    <Layout {...props} />
  </ThemeProvider>
)
export { ThemedLayout as Layout }
