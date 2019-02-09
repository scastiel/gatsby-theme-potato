import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)``

const renderLang = lang => {
  switch (lang) {
    case 'fr':
      return 'Français'
    case 'en':
      return 'English'
    default:
      return lang.toUpperCase()
  }
}

const LangLink = ({ lang }) => (
  <StyledLink to={`/langs/${lang}`}>{renderLang(lang)}</StyledLink>
)

export default LangLink
