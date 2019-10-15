import React, { FC } from 'react'
import { ThemeName, ThemeProvider } from 'use-theme'

// tslint:disable-next-line: strict-type-predicates
const defaultTheme = (typeof window !== 'undefined'
  ? (window as any).__theme
  : undefined) as (ThemeName | undefined)

const RootLayout: FC = ({ children }) => {
  return <ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
}

export default RootLayout
