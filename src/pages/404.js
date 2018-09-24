import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <p>The page you requested does not exist…</p>
      <p>
        Maybe you want to go to the <Link to="/">home page</Link>?
      </p>
    </Layout>
  )
}

export default NotFound
