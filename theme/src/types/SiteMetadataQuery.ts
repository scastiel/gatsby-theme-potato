/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadataQuery
// ====================================================

export interface SiteMetadataQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  siteUrl: string | null;
  lang: string | null;
}

export interface SiteMetadataQuery_site {
  __typename: "Site";
  siteMetadata: SiteMetadataQuery_site_siteMetadata | null;
}

export interface SiteMetadataQuery {
  site: SiteMetadataQuery_site | null;
}
