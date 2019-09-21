import React, { Component } from 'react'
import styled from 'styled-components'
import GithubIcon from '../../assets/svg/github.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'
import MastodonIcon from '../../assets/svg/mastodon.svg'
import { widgets } from '../settings'

const hiddenSidebarStyle = `
  position: fixed;
  right: -17rem;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 17rem;
  background-color: var(--backgroundColor);
  border-left-style: none;
`

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

  ${({ hidden }) => hidden && hiddenSidebarStyle};

  @media (max-width: 45rem) {
    ${hiddenSidebarStyle};
  }
`

export const Widget = styled.div`
  margin-top: 2rem;
  width: 15rem;

  a {
    color: inherit;
  }

  @media (max-width: 45rem) {
    min-width: 15rem;
  }
`

export const SocialIcon = ({ type, url }) => {
  const BaseIcon =
    type === 'github'
      ? GithubIcon
      : type === 'twitter'
      ? TwitterIcon
      : type === 'mastodon'
      ? MastodonIcon
      : null
  const Icon = getStyledIcon(BaseIcon)
  return (
    <a href={url}>
      <Icon />
    </a>
  )
}

export const SocialIcons = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const Avatar = styled.img`
  --size: 5em;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: var(--accentColor);
`

const getStyledIcon = comp => styled(comp)`
  display: inline-block;
  margin: 0 0.2em;
  width: 1em;
  fill: var(--lightTextColor);

  :hover {
    opacity: 1;
    transition: 0.5s;
  }
`

const Trigger = styled(({ display, ...props }) => <div {...props} />)`
  .nav-trigger {
    position: fixed;
    top: 1.11rem;
    right: 1rem;
    visibility: hidden;
  }

  label[for='nav-trigger'] {
    display: ${props => (props.display ? 'block' : 'none')};
    position: fixed;
    top: 1.3rem;
    right: 1rem;
    z-index: 2;

    width: 1.8rem;
    height: 1.3rem;
    cursor: pointer;

    @media (max-width: 45rem) {
      display: block;
    }
  }

  .nav-trigger:checked + label {
    right: 14rem;
    transition: right 0.2s;
  }

  .sidebar {
    transition: left 0.2s;
  }

  .nav-trigger:checked ~ .sidebar {
    right: 0;
    transition: right 0.2s;
    box-shadow: 0 0 30px 0 var(--textColor);
  }
`

const Hamburger = styled.div`
  position: relative;
  display: inline-block;
  width: 1.6rem;
  height: 1.3rem;
  border-top: 0.2rem solid var(--accentColor);
  border-bottom: 0.2rem solid var(--accentColor);

  &:before {
    content: '';
    position: absolute;
    top: 0.35rem;
    left: 0px;
    width: 100%;
    border-top: 0.2rem solid var(--accentColor);
  }
`

class Sidebar extends Component {
  render() {
    const { hidden } = this.props
    return (
      <>
        <Trigger display={hidden}>
          <input type="checkbox" id="nav-trigger" className="nav-trigger" />
          <label htmlFor="nav-trigger">
            <Hamburger />
          </label>
          <SidebarContainer hidden={hidden} className="sidebar">
            {widgets.map((Widget, index) => (
              <Widget key={index} />
            ))}
          </SidebarContainer>
        </Trigger>
      </>
    )
  }
}

export default Sidebar
