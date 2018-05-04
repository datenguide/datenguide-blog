import React from 'react'
import GatsbyLink from 'gatsby-link'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import RegionHeader from '../components/region/RegionHeader.js'
import RegionMeta from '../components/region/RegionMeta.js'
import Footer from '../components/Footer'
import theme from '../components/theme'

export default ({ data }) => {
  const { region } = data

  return (
    <div className="region">
      <Header />
      <RegionHeader region={region} />
      <RegionMeta region={region} />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query RegionQuery($slug: String!) {
    region(slug: { eq: $slug }) {
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
      }
      ...PopulationOverTime
    }
  }
`
