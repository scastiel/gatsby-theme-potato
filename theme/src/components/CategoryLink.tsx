import { Link } from 'gatsby'
import React, { FC } from 'react'

const renderCategory = (category: string) =>
  category.slice(0, 1).toUpperCase() + category.slice(1)

export interface Props {
  category?: string
}

const CategoryLink: FC<Props> = ({ category }) =>
  category ? (
    <Link to={`/categories/${category}`}>{renderCategory(category)}</Link>
  ) : null

export default CategoryLink
