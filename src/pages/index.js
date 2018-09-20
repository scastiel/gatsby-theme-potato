import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Index = () => {
  return (
    <Layout isHome>
      <PostList />
    </Layout>
  )
}

export default Index
