import React from 'react'
import { Link } from 'gatsby'

const renderCategory = category =>
  category.slice(0, 1).toUpperCase() + category.slice(1)

const CategoryLink = ({ category }) => (
  <Link to={`/categories/${category}`}>{renderCategory(category)}</Link>
)

export default CategoryLink
