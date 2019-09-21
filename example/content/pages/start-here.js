import React from "react"
import { Layout } from "gatsby-theme-potato"
import { Link } from "gatsby"

const StartHere = () => {
  return (
    <Layout url="/start-here" title="Start here" displayPageTitle>
      <p>
        Want to know <Link to="/about">more about me and this blog</Link>?
      </p>
      <p>
        <em>This page is still is construction</em> 😉
      </p>
    </Layout>
  )
}

export default StartHere
