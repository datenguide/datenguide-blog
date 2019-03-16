import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Schedule from '../components/Schedule'
import Funders from '../components/Funders'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <Header />

      <Hero title={page.frontmatter.title} intro={page.frontmatter.intro} />

      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
          <Schedule dates={page.frontmatter.schedule} />
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
        date
        venue {
          name
          address
          url
        }
        schedule {
          date
          items {
            time
            name
            content
          }
        }
      }
    }
  }
`
