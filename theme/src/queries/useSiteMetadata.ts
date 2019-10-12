import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataQuery } from '../types/SiteMetadataQuery'

const query = graphql`
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
`

const useSiteMetadata = () => {
  const result = useStaticQuery<SiteMetadataQuery>(query)
  return result.site!.siteMetadata!
}

export default useSiteMetadata
