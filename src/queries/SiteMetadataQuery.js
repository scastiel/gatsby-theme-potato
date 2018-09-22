import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SiteMetadataQuery = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            lang
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => children(siteMetadata)}
  />
)

export default SiteMetadataQuery
