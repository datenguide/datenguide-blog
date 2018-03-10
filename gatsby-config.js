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
    'gatsby-transformer-remark'
  ]
}
