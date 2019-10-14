import { useTheme } from 'gatsby-theme-potato'
import React, { FC, useCallback } from 'react'
import styled from 'styled-components'

const LinkButton = styled.button`
  color: inherit;
  border-style: none;
  background-color: transparent !important;
  font-size: inherit;
  text-decoration: underline !important;
  cursor: pointer;
  padding: 0 !important;
`

const ChangeThemeButton: FC = ({ children }) => {
  const [, setTheme] = useTheme()
  const changeTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])
  return <LinkButton onClick={changeTheme}>{children}</LinkButton>
}

const Footer: FC = () => {
  const [theme] = useTheme()
  return (
    <>
      This is the footer, it’s displayed at the bottom of every page. Theme:{' '}
      {theme} <ChangeThemeButton>(change)</ChangeThemeButton>
    </>
  )
}

export default Footer
