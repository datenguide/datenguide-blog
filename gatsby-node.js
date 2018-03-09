const path = require(`path`)
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
}
`

const regionsQuery = `
{
  allRegion {
    edges {
      node {
        slug
      }
    }
  }
}`

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
          }
        })
      })
      resolve()
    })
  })

  const regionsGenerator = new Promise((resolve, reject) => {
    graphql(regionsQuery).then(result => {
      result.data.allRegion.edges.map(({ node }) => {
        if (node.slug) {
          createPage({
            path: node.slug,
            component: getTemplate('region'),
            context: {
              slug: node.slug
            }
          })
        }
      })
      resolve()
    })
  })

  return Promise.all([regionsGenerator, staticPagesGenerator])
}

const sassOptions = {
  includePaths: ['node_modules', 'node_modules/@material/*']
    .map(d => path.join(__dirname, d))
    .map(g => glob.sync(g))
    .reduce((a, c) => a.concat(c), [])
}

const sassLoader = `sass?${JSON.stringify(sassOptions)}`

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.loader('sass', {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        // loaders: ['style', 'css', 'postcss', 'sass'],

        loaders: [
          'style-loader',
          'css-loader',
          sassLoader
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     includePaths: ['node_modules', 'node_modules/@material/*']
          //       .map(d => path.join(__dirname, d))
          //       .map(g => glob.sync(g))
          //       .reduce((a, c) => a.concat(c), [])
          //   }
          // }
        ]
      })

      break

    case 'build-css':
      config.loader('sass', {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css?minimize', 'postcss', 'sass'])
      })

      break

    case 'build-html':
      config.loader('sass', {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: 'null'
      })

      break

    case 'build-javascript':
      config.loader('sass', {
        test: /\.(sass|scss)$/,
        exclude: /\.module\.(sass|scss)$/,
        loader: 'null'
      })

      break
  }

  return config
}
