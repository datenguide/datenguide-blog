import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import RegionHeader from '../components/region/RegionHeader.js'
import RegionMeta from '../components/region/RegionMeta.js'
import Footer from '../components/Footer'

export default ({ data }) => {
  const { site, regionHeader, regionMeta, regionData, regions } = data
  const credits = site.siteMetadata.dataCredits

  return (
    <Layout>
      <div className="region">
        <Header />
        <RegionHeader regions={regions} regionHeader={regionHeader} />
        <RegionMeta
          regionMeta={regionMeta}
          regionData={regionData}
          credits={credits}
        />
        <Footer />
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query RegionQuery($id: String!) {
//     page: markdownRemark(frontmatter: { id: { eq: $id } }) {
//       html
//       frontmatter {
//         title
//         intro
//       }
//     }

//     site {
//       siteMetadata {
//         dataCredits {
//           publisher
//           licenseTitle
//           licenseUrl
//         }
//       }
//     }
//     ...regionHeader
//     ...regionMeta
//   }
// `
