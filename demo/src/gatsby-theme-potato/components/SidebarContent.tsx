import {
  Avatar,
  NewsletterSignUp,
  SocialIcon,
  SocialIconsContainer,
  Widget
} from 'gatsby-theme-potato'
import React, { FC } from 'react'

const NewsletterWidget: FC = () => {
  return (
    <Widget>
      <NewsletterSignUp formUrl="https://example.com" antispamFieldName="" />
    </Widget>
  )
}

const ProfileWidget: FC = () => {
  return (
    <Widget>
      <Avatar src={require('../../../content/assets/avatar.png')} />
      <p>
        This is the example blog for{' '}
        <a href="https://github.com/scastiel/gatsby-theme-potato">
          gatsby-theme-potato
        </a>
        . You can also check my{' '}
        <a href="https://blog.castiel.me">personal blog</a> to see more concrete
        example.
      </p>
      <p>
        This is a sidebar widget. You can use it to present yourself for
        example.
      </p>
      <SocialIconsContainer>
        <SocialIcon type="twitter" url="https://twitter.com/scastiel" />
        <SocialIcon type="github" url="https://github.com/scastiel" />
      </SocialIconsContainer>
    </Widget>
  )
}

const SidebarContent: FC = () => (
  <>
    <ProfileWidget />
    <NewsletterWidget />
  </>
)

export default SidebarContent
