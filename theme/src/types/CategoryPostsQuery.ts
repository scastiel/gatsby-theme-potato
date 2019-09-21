/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryPostsQuery
// ====================================================

export interface CategoryPostsQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: Date | null;
  lang: string | null;
  category: string | null;
}

export interface CategoryPostsQuery_allMarkdownRemark_edges_node_fields_readingTime {
  __typename: "MarkdownRemarkFieldsReadingTime";
  text: string | null;
}

export interface CategoryPostsQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
  readingTime: CategoryPostsQuery_allMarkdownRemark_edges_node_fields_readingTime | null;
}

export interface CategoryPostsQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  id: string;
  frontmatter: CategoryPostsQuery_allMarkdownRemark_edges_node_frontmatter | null;
  excerpt: string | null;
  fields: CategoryPostsQuery_allMarkdownRemark_edges_node_fields | null;
}

export interface CategoryPostsQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: CategoryPostsQuery_allMarkdownRemark_edges_node;
}

export interface CategoryPostsQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  totalCount: number;
  edges: CategoryPostsQuery_allMarkdownRemark_edges[];
}

export interface CategoryPostsQuery {
  allMarkdownRemark: CategoryPostsQuery_allMarkdownRemark;
}

export interface CategoryPostsQueryVariables {
  category: string;
}
