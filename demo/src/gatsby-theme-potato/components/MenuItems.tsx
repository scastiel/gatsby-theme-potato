import { Link } from 'gatsby'
import React, { FC } from 'react'

const MenuItems: FC = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/categories/great">Great posts</Link>
    <Link to="/categories/awesome">Awesome posts</Link>
    <Link to="/about">About</Link>
  </>
)

export default MenuItems
