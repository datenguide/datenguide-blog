const path = require(`path`)
const glob = require('glob')
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

const staticPagesQuery = `
{
  allMarkdownRemark(
    filter: { fields:  { slug: { regex: "/^(?!\/regions\/.).*$/"}}}
  ) {
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
`

const regionsQuery = `
{
  allMarkdownRemark(
    filter: { fields:  { slug: { regex: "/\/regions\/..*$/"}}}
  ) {
    edges {
      node {
        frontmatter {
          slug
          comparison
        }
      }
    }
  }
}
`

const fragmentTemplate = (output, fragment) => `
${output}\n
export const ${fragment.name} = graphql\`
${fragment.body}
\``

const getTemplate = slug => path.resolve(`./src/templates/${slug}.js`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const defaultTemplate = path.resolve(`./src/templates/page.js`)

  const staticPagesGenerator = new Promise((resolve, reject) => {
    graphql(staticPagesQuery).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const template = node.frontmatter.template
        const customTemplate = template && getTemplate(template)

        createPage({
          path: node.fields.slug,
          component: customTemplate || defaultTemplate,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })

  const regionsGenerator = new Promise((resolve, reject) => {
    graphql(regionsQuery).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.slug) {
          createPage({
            path: node.frontmatter.slug,
            component: getTemplate('region'),
            context: {
              slug: node.frontmatter.slug,
              comparison: node.frontmatter.comparison
            }
          })
        }
      })
      resolve()
    })
  })

  return Promise.all([regionsGenerator, staticPagesGenerator])
}

exports.onPreExtractQueries = () => {
  // Write fragments from *.graphql files to cache so they can be processed by relay
  const fragmentPath = `${__dirname}/.cache/fragments/external-component-fragments.js`
  const queryFragments = glob
    .sync('./src/components/**/*.graphql')
    .map(filename => ({
      name: path.basename(filename, '.graphql'),
      body: fs.readFileSync(filename, 'utf8')
    }))
    .reduce(fragmentTemplate, '/* generated from gatsby-node.js */')

  fs.writeFileSync(fragmentPath, queryFragments)
}
