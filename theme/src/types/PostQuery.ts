/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  siteUrl: string | null;
}

export interface PostQuery_site {
  __typename: "Site";
  siteMetadata: PostQuery_site_siteMetadata | null;
}

export interface PostQuery_markdownRemark_frontmatter_cover {
  __typename: "File";
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
}

export interface PostQuery_markdownRemark_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: Date | null;
  lang: string | null;
  category: string | null;
  cover: PostQuery_markdownRemark_frontmatter_cover | null;
}

export interface PostQuery_markdownRemark_fields_readingTime {
  __typename: "MarkdownRemarkFieldsReadingTime";
  text: string | null;
}

export interface PostQuery_markdownRemark_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
  readingTime: PostQuery_markdownRemark_fields_readingTime | null;
}

export interface PostQuery_markdownRemark {
  __typename: "MarkdownRemark";
  html: string | null;
  excerpt: string | null;
  frontmatter: PostQuery_markdownRemark_frontmatter | null;
  fields: PostQuery_markdownRemark_fields | null;
}

export interface PostQuery {
  site: PostQuery_site | null;
  markdownRemark: PostQuery_markdownRemark | null;
}

export interface PostQueryVariables {
  slug: string;
}
