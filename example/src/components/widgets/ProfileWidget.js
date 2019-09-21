import React from "react"
import { Widget, Avatar, SocialIcons, SocialIcon } from "gatsby-theme-potato"
import avatar from "../../../content/assets/avatar.png"

const ProfileWidget = () => {
  return (
    <Widget>
      <Avatar src={avatar} />
      <p>
        French web developper, passionate about JavaScript (especially React),
        expatriated in Montréal. Very enthousiast about blockchain and
        cryptocurrencies.
      </p>
      <SocialIcons>
        <SocialIcon type="twitter" url="https://twitter.com/scastiel" />
        <SocialIcon type="github" url="https://github.com/scastiel" />
      </SocialIcons>
    </Widget>
  )
}

export default ProfileWidget
