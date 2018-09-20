import React from 'react'
import Layout from '../components/Layout'
import PostListQuery from '../queries/PostListQuery'

const Index = () => {
  return (
    <Layout isHome>
      <PostListQuery />
    </Layout>
  )
}

export default Index
