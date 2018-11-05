import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroSearch from '../components/HeroSearch'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'
import RegionTeaser from '../components/region/RegionTeaser.js'

export default ({ data }) => {
  const page = data.markdownRemark
  const regions = data.allRegion

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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
    allRegion {
      ...RegionsFragment
    }
  }
`
