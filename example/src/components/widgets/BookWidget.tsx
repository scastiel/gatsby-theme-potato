import { Widget } from 'gatsby-theme-potato'
import React, { FC } from 'react'

const BookWidget: FC = () => {
  return (
    <Widget>
      <a href="https://www.masterreact.io/livre">
        <img
          src={require('../../../content/assets/book.png')}
          alt="Des applications modernes avec React (French)"
          style={{ maxWidth: '100%' }}
        />{' '}
        My book about React (French)
      </a>
    </Widget>
  )
}

export default BookWidget
