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
        queryUrl: 'https://api.datengui.de/?',
        query: `
          {
            regions(valid: true) {
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
                bbox
              }
              FLC006
              BEVSTD {
                GESM
                GESW
                GEST
                ALTX20 {
                  INSGESAMT {
                    GEST__years {
                      _1995
                      _1996
                      _1997
                      _1998
                      _1999
                      _2000
                      _2001
                      _2002
                      _2003
                      _2004
                      _2005
                      _2006
                      _2007
                      _2008
                      _2009
                      _2010
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                }
                ALTX21 {
                  ALT000B03 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT003B06 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT006B10 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT010B15 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT015B18 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT018B20 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT020B25 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT025B30 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT030B35 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT035B40 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT040B45 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT045B50 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT050B55 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT055B60 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT060B65 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT065B70 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT070B75 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT075B80 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT080B85 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT085B90 {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
                    }
                  }
                  ALT090UM {
                    GEST__years {
                      _2011
                      _2012
                      _2013
                      _2014
                      _2015
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
