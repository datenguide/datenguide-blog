const path = require(`path`)
const glob = require('glob')
const fs = require('fs')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { cssModulesConfig } = require(`gatsby-1-config-css-modules`)

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
              slug: node.frontmatter.slug
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

const sassOptions = {
  includePaths: ['node_modules', 'node_modules/@material/*']
    .map(d => path.join(__dirname, d))
    .map(g => glob.sync(g))
    .reduce((a, c) => a.concat(c), [])
}

const sassFiles = /\.(sass|scss)$/
const sassModules = /\.module\.(sass|scss)$/
const sassLoader = `fast-sass-loader?${JSON.stringify(sassOptions)}`
const extractSass = new ExtractTextPlugin(`styles.css`, { allChunks: true })

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModules,
        loaders: ['style', 'css', sassLoader]
      })

      config.loader('sassModules', {
        test: sassModules,
        loaders: ['style', cssModulesConfig(stage), sassLoader]
      })
      return config
    }
    case 'build-css': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModules,
        loader: extractSass.extract(['css?minimize', sassLoader])
      })

      config.loader('sassModules', {
        test: sassModules,
        loader: extractSass.extract('style', [
          cssModulesConfig(stage),
          sassLoader
        ])
      })

      config.merge({ plugins: [extractSass] })

      return config
    }
    case 'develop-html':
    case 'build-html':
    case 'build-javascript': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModules,
        loader: 'null'
      })

      config.loader('sassModules', {
        test: sassModules,
        loader: extractSass.extract('style', [
          cssModulesConfig(stage),
          sassLoader
        ])
      })

      config.merge({ plugins: [extractSass] })

      return config
    }
    default: {
      return config
    }
  }
}
