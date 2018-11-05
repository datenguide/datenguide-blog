import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <Header />

      <Grid>
        <GridCell span="8">
          <h3>{page.frontmatter.title}</h3>
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
  query DefaultPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
