import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import RegionHeader from '../components/region/RegionHeader.js'
import RegionMeta from '../components/region/RegionMeta.js'
import Footer from '../components/Footer'

export default ({ data }) => {
  const { meta, datenguide, site, regionHeader } = data
  const { region, comparison } = datenguide
  const credits = site.siteMetadata.dataCredits

  return (
    <Layout>
      <div className="region">
        <Header />
        {region && <RegionHeader region={region} regionHeader={regionHeader} />}
        {region && (
          <RegionMeta
            region={region}
            meta={meta}
            credits={credits}
            comparison={comparison}
          />
        )}
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query RegionQuery($slug: String!, $id: String!, $comparison: String!) {
    meta: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        source_url
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

    datenguide {
      region(id: $id) {
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
        BEVSTD {
          GESM
          GESW
          GEST
        }
        ...PopulationOverTime
        ...PopulationDistribution
      }
      comparison: region(id: $comparison) {
        ...PopulationOverTime
      }
    }
    ...RegionHeader
  }
`
