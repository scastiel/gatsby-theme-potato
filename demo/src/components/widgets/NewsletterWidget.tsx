import { Widget } from 'gatsby-theme-potato'
import React, { FC } from 'react'
import { NewsletterSignUp } from '../NewsletterSignUp'

const NewsletterWidget: FC = () => {
  return (
    <Widget>
      <NewsletterSignUp />
    </Widget>
  )
}

export default NewsletterWidget
