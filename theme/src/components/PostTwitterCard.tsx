import { withPrefix } from 'gatsby'
import React, { FC } from 'react'
import { PostQuery_markdownRemark } from '../types/PostQuery'
import TwitterCard from './TwitterCard'

export interface Props {
  user: string
  post: PostQuery_markdownRemark
  siteUrl: string
  defaultImage?: string
}

export const PostTwitterCard: FC<Props> = ({
  user,
  post,
  siteUrl,
  defaultImage
}) => (
  <TwitterCard
    user={user}
    url={`${siteUrl}/${post.fields!.slug}`}
    title={post.frontmatter!.title!}
    description={post.excerpt!}
    type={post.frontmatter!.cover ? 'summary_large_image' : 'summary'}
    image={
      post.frontmatter!.cover
        ? `${siteUrl}/${post.frontmatter!.cover.publicURL}`
        : `${siteUrl}${withPrefix(defaultImage!)}`
    }
  />
)
