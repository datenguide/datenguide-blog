const browserslist = require('browserslist')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Datenguide',
    dataCredits: {
      publisher: 'Quelle: Statistische Ämter des Bundes und der Länder',
      licenseTitle: 'Datenlizenz Deutschland Namensnennung 2.0',
      licenseUrl: 'https://www.govdata.de/dl-de/by-2-0'
    }
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Datenguide',
        fieldName: 'datenguide',
        url: 'https://api.datengui.de'
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./node_modules'],
        postCssPlugins: [autoprefixer({ browsers: browserslist() })]
      }
    }
  ]
}
