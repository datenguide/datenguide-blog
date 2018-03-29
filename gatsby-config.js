const autoprefixer = require('autoprefixer')
const path = require('path')
const glob = require('glob')

module.exports = {
  siteMetadata: {
    title: 'Datenguide'
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
      resolve: 'gatsby-source-datenguide',
      options: {
        queryUrl: 'https://api.datengui.de/?query=',
        query: `
          {
            regions {
              id
              name
              name_ext
              slug
              state {
                id
                name
                slug
              }
              geo {
                lat
                lon
                bbox
              }
              FLC006
              BEVSTD {
                GESM
                GESW
                GEST
              }
              BEVSTD {
                ALTX20 {
                  INSGESAMT {
                    GEST__years {
                      _1995
                      _1996
                      _2004
                      _2014
                      _2003
                      _1998
                      _1999
                      _2000
                      _2008
                      _2001
                      _2012
                      _2011
                      _2015
                      _2013
                      _2002
                      _2005
                      _1997
                      _2010
                      _2007
                      _2009
                      _2006
                    }
                  }
                }
              }
            }
          }
        `
      }
    }
  ]
}
