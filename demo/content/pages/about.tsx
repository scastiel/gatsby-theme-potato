import { Layout } from 'gatsby-theme-potato'
import React, { FC } from 'react'

const About: FC<{ uri: string }> = ({ uri }) => {
  return (
    <Layout url={uri} title="About this blog" displayPageTitle>
      <p>
        This is the demo site for the Gatsby theme{' '}
        <strong>gatsby-theme-potato</strong> 🥔
      </p>
    </Layout>
  )
}

export default About
