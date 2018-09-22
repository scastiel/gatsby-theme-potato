import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 90%;

  :hover,
  :active {
    text-decoration: underline;
  }
`

const LangLink = ({ lang }) => (
  <StyledLink to={`/langs/${lang}`}>{lang.toUpperCase()}</StyledLink>
)

export default LangLink
