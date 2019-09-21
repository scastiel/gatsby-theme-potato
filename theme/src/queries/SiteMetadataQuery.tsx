import { graphql, StaticQuery } from 'gatsby'
import React, { FC, ReactNode } from 'react'
import { SiteMetadataQuery_site_siteMetadata } from '../types/SiteMetadataQuery'

interface Props {
  children: (siteMetadata: SiteMetadataQuery_site_siteMetadata) => ReactNode
}

const SiteMetadataQuery: FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
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
