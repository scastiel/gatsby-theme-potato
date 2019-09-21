import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

export interface Props {
  user: string
  url: string
  title: string
  description: string
  type: string
  image: string
}

const TwitterCard: FC<Props> = ({
  user,
  url,
  title,
  description,
  type,
  image
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content={type} />
      <meta name="twitter:site" content={user} />
      <meta name="twitter:creator" content={user} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}

export default TwitterCard
