const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      recipes: allPostsJson {
        edges {
          node {
            isbn
          }
        }
      }
    }
  `)

  data.recipes.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${node.isbn}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        isbn: node.isbn,
      },
    })
  })
}
