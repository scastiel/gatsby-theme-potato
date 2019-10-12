import React from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'

const hiddenSidebarStyle = (theme: Theme) => `
  position: fixed;
  right: -17rem;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 17rem;
  background-color: ${theme.backgroundColor};
  border-left-style: none;

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.darkBackgroundColor};
  }
`

export const SidebarContainer = styled(({ theme, hidden, ...props }) => (
  <div {...props} />
))`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  border-left: 1px dotted
    ${({ theme }: { theme: Theme }) => theme.separatorColor};
  font-size: 0.8em;
  font-family: ${({ theme }: { theme: Theme }) => theme.sansSerifFont};
  flex-shrink: 0;
  margin-left: 3em;
  padding: 1em;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.darkBackgroundColor};
    border-left-color: ${({ theme }: { theme: Theme }) =>
      theme.darkSeparatorColor};
  }

  ${({ theme, hidden }) => hidden && hiddenSidebarStyle(theme)};

  @media (max-width: 45rem) {
    ${hiddenSidebarStyle};
  }
`
