import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroSearch from '../components/HeroSearch'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'
import RegionTeaser from '../components/region/RegionTeaser.js'

export default ({ data }) => {
  const { page } = data
  const { regions } = data.datenguide

  return (
    <Layout>
      <Header />

      <HeroSearch regions={regions} title={page.frontmatter.intro} />

      <RegionTeaser />

      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </GridCell>
      </Grid>

      <Grid>
        <GridCell span="6">
          <Funders />
        </GridCell>
      </Grid>

      <Newsletter />

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
    datenguide {
      regions {
        ...RegionsFragment
      }
    }
  }
`
