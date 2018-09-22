import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledDiv = styled.div`
  color: #888888;
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

const Bio = () => (
  <StyledDiv>
    I write in <Link to="/langs/en">English</Link> and{' '}
    <Link to="/langs/fr">French</Link> about web development and some other
    stuff.
  </StyledDiv>
)

export default Bio
