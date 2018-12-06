const browserslist = require('browserslist')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Datenguide',
    siteUrl: 'https://datengui.de',
    defaultImage: '/images/social_meta.png',
    twitterAccount: '@datenguide',
    description:
      'Der Datenguide hilft dir dabei, dich im Dschungel der Statistiken zurecht zu finden.',
    dataCredits: {
      publisher: 'Quelle: Statistische Ämter des Bundes und der Länder',
      licenseTitle: 'Datenlizenz Deutschland Namensnennung 2.0',
      licenseUrl: 'https://www.govdata.de/dl-de/by-2-0'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
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
        url: 'https://api.genesapi.org/'
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
