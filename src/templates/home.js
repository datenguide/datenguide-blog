import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark
  const regions = data.allRegion

  return (
    <div>
      <Header />

      <Hero regions={regions} tagline={page.frontmatter.intro} />

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
    </div>
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
