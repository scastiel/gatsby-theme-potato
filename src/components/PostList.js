import React from 'react'
import BlogPost from './BlogPost'
import PostsQuery from '../queries/PostsQuery'

const PostList = ({ posts }) => {
  return (
    <PostsQuery>
      {posts =>
        posts.map(post => <BlogPost key={post.id} post={post} isExcerpt />)
      }
    </PostsQuery>
  )
}

export default PostList
