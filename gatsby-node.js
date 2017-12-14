const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const getTemplate = (slug) => path.resolve(`./src/templates/${slug}.js`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const defaultTemplate = path.resolve(`./src/templates/page.js`)

      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const template = node.frontmatter.template
        const customTemplate = template && getTemplate(template)

        createPage({
          path: node.fields.slug,
          component: customTemplate || defaultTemplate,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          },
        })
      })
      resolve()
    })
  })
}
