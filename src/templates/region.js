import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import RegionHeader from '../components/region/RegionHeader.js'
import RegionMeta from '../components/region/RegionMeta.js'
import Footer from '../components/Footer'

export default ({ data }) => {
  const { meta, region, site, comparison } = data
  const credits = site.siteMetadata.dataCredits

  return (
    <Layout>
      <div className="region">
        <Header />
        {region && <RegionHeader region={region} />}
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
  query RegionQuery($slug: String!, $comparison: String!) {
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
      BEVSTD {
        GESM
        GESW
        GEST
      }
      ...PopulationOverTime
      ...PopulationDistribution
    }

    comparison: region(slug: { eq: $comparison }) {
      ...PopulationOverTime
    }
  }
`
