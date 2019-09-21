import React from 'react'
import styled from 'styled-components'
import settings from '../settings'

const FooterContainer = styled.div`
  margin: 0;
  color: ${({ theme }) => theme.lightTextColor};
  font-size: 0.8em;
  margin-top: 5em;
  padding: 0.5em 0;
  border-top: 1px dotted ${({ theme }) => theme.separatorColor};
  text-align: center;
  font-family: ${({ theme }) => theme.sansSerifFont};

  a {
    color: inherit;
  }
`

export default () =>
  settings.Footer && (
    <FooterContainer>
      <settings.Footer />
    </FooterContainer>
  )
