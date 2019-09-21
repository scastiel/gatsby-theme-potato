import {
  Avatar,
  SocialIcon,
  SocialIconsContainer,
  Widget
} from 'gatsby-theme-potato'
import React, { FC } from 'react'

const ProfileWidget: FC = () => {
  return (
    <Widget>
      <Avatar src={require('../../../content/assets/avatar.png')} />
      <p>
        French web developper, passionate about JavaScript (especially React),
        expatriated in Montréal. Very enthousiast about blockchain and
        cryptocurrencies.
      </p>
      <SocialIconsContainer>
        <SocialIcon type="twitter" url="https://twitter.com/scastiel" />
        <SocialIcon type="github" url="https://github.com/scastiel" />
      </SocialIconsContainer>
    </Widget>
  )
}

export default ProfileWidget
