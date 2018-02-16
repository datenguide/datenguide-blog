const autoprefixer = require('autoprefixer')
const path = require('path')
const glob = require('glob')

module.exports = {
  siteMetadata: {
    title: 'Datenguide'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-datenguide',
      options: {
        queryUrl: 'http://127.0.0.1:5000/?query=',
        obtainQueryUrl: 'http://127.0.0.1:5000/query/'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node_modules', 'node_modules/@material/*']
          .map(d => path.join(__dirname, d))
          .map(g => glob.sync(g))
          .reduce((a, c) => a.concat(c), []),
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      }
    }
  ]
}
