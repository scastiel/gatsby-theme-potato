import React from "react"
import { Layout } from "gatsby-theme-potato"

const About = () => {
  return (
    <Layout url="/about" title="About me and this blog" displayPageTitle>
      <p>
        I’m Sébastien Castiel, a French developer expatriated in Montréal. I
        started this blog to publish technical articles, but then I noticed I
        missed writing other kind of articles as well. So don’t run if you don’t
        know what React is or even web development!
      </p>
      <p>
        <em>This page is still is construction</em> 😉
      </p>
    </Layout>
  )
}

export default About
