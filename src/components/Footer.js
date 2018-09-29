import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../../assets/github.svg'
import TwitterIcon from '../../assets/twitter.svg'
import MastodonIcon from '../../assets/mastodon.svg'

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

const SocialIcon = comp => styled(comp)`
  display: inline-block;
  margin: 0 0.2em;
  width: 1em;
  fill: var(--lightTextColor);

  :hover {
    opacity: 1;
    transition: 0.5s;
  }
`
const StyledGithubIcon = SocialIcon(GithubIcon)
const StyledTwitterIcon = SocialIcon(TwitterIcon)
const StyledMastodonIcon = SocialIcon(MastodonIcon)

const Footer = ({ theme, setTheme }) => (
  <FooterContainer>
    <SocialIconsContainer>
      <a href="https://twitter.com/scastiel">
        <StyledTwitterIcon />
      </a>
      <a href="https://github.com/scastiel">
        <StyledGithubIcon />
      </a>
      <a href="https://mamot.fr/@scastiel">
        <StyledMastodonIcon />
      </a>
    </SocialIconsContainer>
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
