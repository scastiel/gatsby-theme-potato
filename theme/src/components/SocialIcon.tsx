import React, { FC } from 'react'
import styled from 'styled-components'

const getStyledIcon = (comp: any) => styled(comp)`
  display: inline-block;
  margin: 0 0.2em;
  width: 1em;
  fill: ${({ theme }) => theme.lightTextColor};

  :hover {
    opacity: 1;
    transition: 0.5s;
  }
`

export interface Props {
  type: 'github' | 'twitter' | 'mastodon'
  url: string
}

export const SocialIcon: FC<Props> = ({ type, url }) => {
  const BaseIcon =
    type === 'github'
      ? require('../../assets/svg/github.svg')
      : type === 'twitter'
      ? require('../../assets/svg/twitter.svg')
      : type === 'mastodon'
      ? require('../../assets/svg/mastodon.svg')
      : null
  const Icon = getStyledIcon(BaseIcon)
  return (
    <a href={url}>
      <Icon />
    </a>
  )
}
