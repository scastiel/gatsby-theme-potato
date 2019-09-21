import React from "react"
import { Widget, Avatar } from "gatsby-theme-potato"
import bookImage from "../../../content/assets/book.png"

const BookWidget = () => {
  return (
    <Widget>
      <a href="https://www.masterreact.io/livre">
        <img
          src={bookImage}
          alt="Des applications modernes avec React (French)"
          style={{ maxWidth: "100%" }}
        />
        My book about React (French)
      </a>
    </Widget>
  )
}

export default BookWidget
