import React, { FC } from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'

const StyledMenu = styled(({ displaySidebar, ...props }) => <nav {...props} />)`
  font-family: ${({ theme }) => theme.sansSerifFont};
  flex-grow: 0;
  display: flex;
  align-items: center;
  margin-right: ${({ displaySidebar }) => (displaySidebar ? '0.5em' : '3em')};
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

export interface Props {
  displaySidebar: boolean
}

const Menu: FC<Props> = ({ displaySidebar }) => (
  <StyledMenu displaySidebar={displaySidebar}>
    <MenuItems />
  </StyledMenu>
)

export default Menu
