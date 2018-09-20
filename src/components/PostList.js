import React from 'react'
import BlogPost from './BlogPost'

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} isExcerpt />
      ))}
    </div>
  )
}

export default PostList
