import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Layout } from '../components/Layout'

const NotFound: FC = () => {
  return (
    <Layout title="Page not found" displayPageTitle>
      <p>The page you requested does not exist…</p>
      <p>
        Maybe you want to go to the <Link to="/">home page</Link>?
      </p>
    </Layout>
  )
}

export default NotFound
