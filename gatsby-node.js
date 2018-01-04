const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const staticPagesQuery = `
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
}`

const districtsQuery = `
{
  allDistrict {
    edges {
      node {
        id
        munis
        name
      }
    }
  }
}`

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

  const staticPagesGenerator = new Promise((resolve, reject) => {
    graphql(staticPagesQuery).then(result => {
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

  const districtsGenerator = new Promise((resolve, reject) => {
    graphql(districtsQuery).then(result => {

      result.data.allDistrict.edges.map(({ node }) => {
        createPage({
          path: node.id,
          component: getTemplate('district'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.id
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([districtsGenerator, staticPagesGenerator])
}
