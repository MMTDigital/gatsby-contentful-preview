const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors)
      Promise.reject(result.errors)
    }

    const pages = result.data.allContentfulPage.edges

    pages.forEach((page) => {
      const { slug } = page.node

      createPage({
        path: `/${slug}/`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: slug
        },
      })
    })
  })
}
