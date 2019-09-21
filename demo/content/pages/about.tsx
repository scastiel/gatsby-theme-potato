import { Layout } from 'gatsby-theme-potato'
import React, { FC } from 'react'

const About: FC = () => {
  return (
    <Layout url="/about" title="About this blog" displayPageTitle>
      <p>
        This is the demo site for the Gatsby theme{' '}
        <strong>gatsby-theme-potato</strong> 🥔
      </p>
    </Layout>
  )
}

export default About
