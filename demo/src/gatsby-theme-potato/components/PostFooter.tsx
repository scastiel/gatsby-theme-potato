import { PostTwitterCard } from 'gatsby-theme-potato'
import { Props } from 'gatsby-theme-potato/src/components/PostFooter'
import React, { FC } from 'react'

const PostFooter: FC<Props> = ({ post, siteUrl }) => (
  <>
    <p>
      Like this article or want to react?{' '}
      <a href={`https://twitter.com/search?q=${siteUrl}/${post.fields!.slug}`}>
        Discuss on Twitter
      </a>
      .
    </p>
    <p>
      This is the post footer, it will be displayed at the bottom of each post.
    </p>

    <PostTwitterCard user="@scastiel" post={post} siteUrl={siteUrl} />
  </>
)

export default PostFooter
