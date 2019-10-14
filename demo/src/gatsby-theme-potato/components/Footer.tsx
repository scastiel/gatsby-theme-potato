import { useTheme } from 'gatsby-theme-potato'
import React, { FC, useCallback } from 'react'
import styled from 'styled-components'

const ChangeThemeButton: FC = ({ children }) => {
  const [, setTheme] = useTheme()
  const changeTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])
  return (
    <button className="link" onClick={changeTheme}>
      {children}
    </button>
  )
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
