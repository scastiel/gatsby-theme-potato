import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import github from '../icons/github.svg'
import twitter from '../icons/twitter.svg'
import mastodon from '../icons/mastodon.svg'

const FooterContainer = styled.div`
  margin: 0;
  color: var(--lightTextColor);
  font-size: 0.8em;
  margin-top: 5em;
  padding: 0.5em 0;
  border-top: 1px dotted var(--separatorColor);
  text-align: center;

  a {
    color: inherit;
  }
`

const SocialIconsContainer = styled.div`
  font-size: 2em;
`

const SocialIcon = styled.img`
  display: inline-block;
  margin: 0 0.2em;
  width: 1em;
  opacity: 0.4;

  :hover {
    opacity: 1;
    transition: 0.5s;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <a href="https://twitter.com/scastiel">
          <SocialIcon src={twitter} />
        </a>{' '}
        <a href="https://github.com/scastiel">
          <SocialIcon src={github} />
        </a>{' '}
        <a href="https://mamot.fr/@scastiel">
          <SocialIcon src={mastodon} />
        </a>
      </SocialIconsContainer>
      <div>
        All content here is under{' '}
        <Link to="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          Creative Commons
        </Link>{' '}
        license.
      </div>
    </FooterContainer>
  )
}

export default Footer
