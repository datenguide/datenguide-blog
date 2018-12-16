import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Hero from '../../components/Hero.js'
import Footer from '../../components/Footer'

export default ({ data, pageContext }) => {
  const { site } = data
  const { regionMeta, name, slug } = pageContext
  const credits = site.siteMetadata.dataCredits

  return (
    <Layout>
      <div className="region">
        <Header />
        <Hero title={name} intro={regionMeta.name} />
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $comparison: String!) {
    site {
      siteMetadata {
        dataCredits {
          publisher
          licenseTitle
          licenseUrl
        }
      }
    }

    regionDataLegacy: datenguideLegacy {
      region(id: $id) {
        ...PopulationDensity
        ...PopulationDistribution
      }
      comparison: region(id: $comparison) {
        ...PopulationDensity
      }
    }
  }
`
