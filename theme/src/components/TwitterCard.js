import React from 'react'
import { Helmet } from 'react-helmet'

const TwitterCard = ({ user, url, title, description, type, image }) => {
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
