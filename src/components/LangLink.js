import React from 'react'
import { Link } from 'gatsby'

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
  <Link to={`/langs/${lang}`}>{renderLang(lang)}</Link>
)

export default LangLink
