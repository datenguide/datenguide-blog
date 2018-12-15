import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer'

export default ({ data, pageContext }) => {
  const { site, page } = data
  const { regionMeta } = pageContext
  const credits = site.siteMetadata.dataCredits

  return (
    <Layout>
      <div className="region">
        <Header />
        <Hero title={regionMeta.name} intro={regionMeta.state.name} />
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query RegionTopicQuery($id: String!, $comparison: String!, $slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }

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
