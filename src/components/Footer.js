import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  margin: 0;
  color: var(--lightTextColor);
  font-size: 0.8em;
  margin-top: 5em;
  padding: 0.5em 0;
  border-top: 1px dotted var(--separatorColor);
  text-align: center;
  font-family: var(--sansSerifFont);

  a {
    color: inherit;
  }
`

const Footer = ({ theme, setTheme }) => (
  <FooterContainer>
    <div>
      All content here is under{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons
      </a>{' '}
      license.{' '}
      <a
        href="#"
        onClick={event => {
          event.preventDefault()
          setTheme(theme === 'dark' ? null : 'dark')
        }}
      >
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </a>
    </div>
  </FooterContainer>
)

export default Footer
