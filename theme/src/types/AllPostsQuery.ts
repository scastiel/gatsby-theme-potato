/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPostsQuery
// ====================================================

export interface AllPostsQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: Date | null;
  lang: string | null;
  category: string | null;
}

export interface AllPostsQuery_allMarkdownRemark_edges_node_fields_readingTime {
  __typename: "MarkdownRemarkFieldsReadingTime";
  text: string | null;
}

export interface AllPostsQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
  readingTime: AllPostsQuery_allMarkdownRemark_edges_node_fields_readingTime | null;
}

export interface AllPostsQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  id: string;
  frontmatter: AllPostsQuery_allMarkdownRemark_edges_node_frontmatter | null;
  excerpt: string | null;
  fields: AllPostsQuery_allMarkdownRemark_edges_node_fields | null;
}

export interface AllPostsQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: AllPostsQuery_allMarkdownRemark_edges_node;
}

export interface AllPostsQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: AllPostsQuery_allMarkdownRemark_edges[];
}

export interface AllPostsQuery {
  allMarkdownRemark: AllPostsQuery_allMarkdownRemark;
}
