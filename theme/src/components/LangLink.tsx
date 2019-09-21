import { Link } from 'gatsby'
import React, { FC } from 'react'

const renderLang = (lang: string) => {
  switch (lang) {
    case 'fr':
      return 'Français'
    case 'en':
      return 'English'
    default:
      return lang.toUpperCase()
  }
}

export interface Props {
  lang: string
}

const LangLink: FC<Props> = ({ lang }) => (
  <Link to={`/langs/${lang}`}>{renderLang(lang)}</Link>
)

export default LangLink
