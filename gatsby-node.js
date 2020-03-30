const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      recipes: allDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.recipes.edges.forEach(({ node }) => {
    createPage({
      path: `recipes/${node.slug}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
