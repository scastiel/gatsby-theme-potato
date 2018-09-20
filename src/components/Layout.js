import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children, isPost }) => (
  <div>
    <h1 style={{ fontSize: isPost ? '120%' : undefined }}>
      <Link to="/">My blog</Link>
    </h1>
    {children}
  </div>
)

export default Layout
