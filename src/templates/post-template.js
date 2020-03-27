import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const { isbn, author, title } = data.recipeItem

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const query = graphql`
  query($isbn: String!) {
    recipeItem: postsJson(isbn: { eq: $isbn }) {
      isbn
      author
      title
    }
  }
`

export default Post
