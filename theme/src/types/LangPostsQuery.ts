/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LangPostsQuery
// ====================================================

export interface LangPostsQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: Date | null;
  lang: string | null;
  category: string | null;
}

export interface LangPostsQuery_allMarkdownRemark_edges_node_fields_readingTime {
  __typename: "MarkdownRemarkFieldsReadingTime";
  text: string | null;
}

export interface LangPostsQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
  readingTime: LangPostsQuery_allMarkdownRemark_edges_node_fields_readingTime | null;
}

export interface LangPostsQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  id: string;
  frontmatter: LangPostsQuery_allMarkdownRemark_edges_node_frontmatter | null;
  excerpt: string | null;
  fields: LangPostsQuery_allMarkdownRemark_edges_node_fields | null;
}

export interface LangPostsQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: LangPostsQuery_allMarkdownRemark_edges_node;
}

export interface LangPostsQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  totalCount: number;
  edges: LangPostsQuery_allMarkdownRemark_edges[];
}

export interface LangPostsQuery {
  allMarkdownRemark: LangPostsQuery_allMarkdownRemark;
}

export interface LangPostsQueryVariables {
  lang: string;
}
