import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFound = () => {
  return (
    <Layout title="Start here" displayPageTitle>
      <p>
        Want to know <Link to="/about">more about me and this blog</Link>?
      </p>
      <p>
        <em>This page is still is construction</em> 😉
      </p>
    </Layout>
  )
}

export default NotFound
