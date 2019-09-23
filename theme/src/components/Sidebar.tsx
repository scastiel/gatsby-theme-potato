import React, { Component, ComponentType, FC } from 'react'
import styled from 'styled-components'
import { SidebarContainer } from './SidebarContainer'
import SidebarContent from './SidebarContent'

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
    box-shadow: 0 0 30px 0 ${({ theme }) => theme.textColor};
  }
`

const Hamburger = styled.div`
  position: relative;
  display: inline-block;
  width: 1.6rem;
  height: 1.3rem;
  border-top: 0.2rem solid ${({ theme }) => theme.accentColor};
  border-bottom: 0.2rem solid ${({ theme }) => theme.accentColor};

  &:before {
    content: '';
    position: absolute;
    top: 0.35rem;
    left: 0px;
    width: 100%;
    border-top: 0.2rem solid ${({ theme }) => theme.accentColor};
  }
`

export interface Props {
  widgets?: ComponentType[]
  hidden: boolean
}

export const Sidebar: FC<Props> = ({ widgets = [], hidden }) => {
  return (
    <>
      <Trigger display={hidden}>
        <input type="checkbox" id="nav-trigger" className="nav-trigger" />
        <label htmlFor="nav-trigger">
          <Hamburger />
        </label>
        <SidebarContainer hidden={hidden} className="sidebar">
          <SidebarContent />
        </SidebarContainer>
      </Trigger>
    </>
  )
}

export default Sidebar
