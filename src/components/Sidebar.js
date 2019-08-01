import React, { Component } from 'react'
import styled from 'styled-components'
import bookImage from '../../assets/livre.png'
import avatar from '../../assets/me_new.png'
import GithubIcon from '../../assets/svg/github.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'
import NewsletterSignUp from './NewsletterSignup'

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px dotted var(--separatorColor);
  font-size: 0.8em;
  font-family: var(--sansSerifFont);
  flex-shrink: 0;
  margin-left: 3em;
  padding: 1em;
  text-align: center;

  @media (max-width: 50rem) {
    width: auto;
    margin-left: 0;
    margin-top: 3em;
    border-left-width: 0;
    border-top: 1px dotted var(--separatorColor);
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

const Widget = styled.div`
  margin-top: 2rem;
  width: 15rem;

  a {
    color: inherit;
  }

  @media (max-width: 50rem) {
    min-width: 15em;
  }
`

const SocialIcons = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const Avatar = styled.img`
  --size: 5em;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: var(--accentColor);
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

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <Widget>
          <Avatar src={avatar} />
          <p>
            French web developper, passionate about JavaScript (especially
            React), expatriated in Montréal. Very enthousiast about blockchain
            and cryptocurrencies.
          </p>
          <SocialIcons>
            <a href="https://twitter.com/scastiel">
              <StyledTwitterIcon />
            </a>
            <a href="https://github.com/scastiel">
              <StyledGithubIcon />
            </a>
          </SocialIcons>
        </Widget>

        <Widget>
          <NewsletterSignUp />
        </Widget>

        <Widget>
          <a href="https://www.masterreact.io/livre">
            <img
              src={bookImage}
              alt="Des applications modernes avec React (French)"
              style={{ maxWidth: '100%' }}
            />
            My book about React (French)
          </a>
        </Widget>
      </SidebarContainer>
    )
  }
}

export default Sidebar
