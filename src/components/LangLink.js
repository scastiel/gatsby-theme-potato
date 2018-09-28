import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)``

const LangLink = ({ lang }) => (
  <StyledLink to={`/langs/${lang}`}>{lang.toUpperCase()}</StyledLink>
)

export default LangLink
