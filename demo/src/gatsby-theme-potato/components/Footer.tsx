import React, { FC, useCallback } from 'react'

const ChangeThemeButton: FC<{ newTheme: 'light' | 'dark' | null }> = ({
  newTheme,
  children
}) => {
  const changeTheme = useCallback(() => {
    ;(window as any).__theme = newTheme
  }, [])
  return (
    <button className="link" onClick={changeTheme}>
      {children}
    </button>
  )
}

const Footer: FC = () => {
  return (
    <>
      This is the footer, it’s displayed at the bottom of every page. Theme:{' '}
      <ChangeThemeButton newTheme="light">Light</ChangeThemeButton>{' '}
      <ChangeThemeButton newTheme="dark">Dark</ChangeThemeButton>{' '}
      <ChangeThemeButton newTheme={null}>Auto</ChangeThemeButton>
    </>
  )
}

export default Footer
